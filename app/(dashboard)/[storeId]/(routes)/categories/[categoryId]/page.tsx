import prismaDb from "@/lib/prismaDb";
import CategoryForm from "./components/category-form";

interface CategoryPageProps {
  params: {
    categoryId: string;
    storeId: string;
  };
}

const CategoryPage = async ({ params }: CategoryPageProps) => {
  const { categoryId, storeId } = params;

  const category = await prismaDb.category.findUnique({
    where: {
      id: categoryId,
    },
  });

  const billboards = await prismaDb.billboard.findMany({
    where: {
      storeId,
    },
  });

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm billboards={billboards} initialData={category} />
      </div>
    </div>
  );
};

export default CategoryPage;

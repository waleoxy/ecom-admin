import prismaDb from "@/lib/prismaDb";
import BillboardForm from "./components/product-form";
import ProductForm from "./components/product-form";

interface ProductPageProps {
  params: {
    productId: string;
    storeId: string;
  };
}

const ProductPage = async ({ params }: ProductPageProps) => {
  const { productId, storeId } = params;

  const product = await prismaDb.product.findFirst({
    where: {
      id: productId,
    },
    include: {
      images: true,
    },
  });

  const categories = await prismaDb.category.findMany({
    where: {
      storeId,
    },
  });

  const sizes = await prismaDb.size.findMany({
    where: {
      storeId,
    },
  });

  const colors = await prismaDb.color.findMany({
    where: {
      storeId,
    },
  });

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ProductForm
          categories={categories}
          colors={colors}
          sizes={sizes}
          initialData={product}
        />
      </div>
    </div>
  );
};

export default ProductPage;

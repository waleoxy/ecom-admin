import prismaDb from "@/lib/prismaDb";
import SizeForm from "./components/size-form";

interface SizePageProps {
  params: {
    sizeId: string;
  };
}

const SizePage = async ({ params }: SizePageProps) => {
  const { sizeId } = params;

  const size = await prismaDb.size.findFirst({
    where: {
      id: sizeId,
    },
  });

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizeForm initialData={size} />
      </div>
    </div>
  );
};

export default SizePage;

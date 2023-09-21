import prismaDb from "@/lib/prismaDb";
import BillboardForm from "./components/billboard-form";

interface BillboardPageProps {
  params: {
    billboardId: string;
  };
}

const BillboardPage = async ({ params }: BillboardPageProps) => {
  const { billboardId } = params;

  const billboard = await prismaDb.billboard.findFirst({
    where: {
      id: billboardId,
    },
  });

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;

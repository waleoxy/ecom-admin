import prismaDb from "@/lib/prismaDb";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const { storeId } = params;

  const store = await prismaDb.store.findFirst({
    where: {
      id: storeId,
    },
  });

  return <div>Active store: {store?.name}</div>;
};

export default DashboardPage;

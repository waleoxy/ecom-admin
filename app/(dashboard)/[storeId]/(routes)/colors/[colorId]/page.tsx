import prismaDb from "@/lib/prismaDb";
import ColorForm from "./components/color-form";

interface ColorPageProps {
  params: {
    colorId: string;
  };
}

const ColorPage = async ({ params }: ColorPageProps) => {
  const { colorId } = params;

  const color = await prismaDb.color.findFirst({
    where: {
      id: colorId,
    },
  });

  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorForm initialData={color} />
      </div>
    </div>
  );
};

export default ColorPage;

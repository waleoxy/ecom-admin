import prismaDb from "@/lib/prismaDb";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { storeId: string } }
) => {
  try {
    const { userId } = auth();
    const body = await req.json();

    const { name } = body;

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!name) {
      return new NextResponse("Name is required", { status: 400 });
    }

    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const store = await prismaDb.store.updateMany({
      where: {
        id: params.storeId,
        userId,
      },
      data: {
        name,
      },
    });

    return NextResponse.json(store);
  } catch (error) {
    console.log("store-patch", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { storeId: string } }
) => {
  try {
    const { userId } = auth();

    if (!userId) {
      return new NextResponse("Unauthenticated", { status: 401 });
    }

    if (!params.storeId) {
      return new NextResponse("Store id is required", { status: 400 });
    }

    const store = await prismaDb.store.deleteMany({
      where: {
        id: params.storeId,
        userId,
      },
    });

    return new NextResponse(`Store ${userId} deleted`, { status: 201 });
  } catch (error) {
    console.log("store-delete", error);
    return new NextResponse("Internal server error", { status: 500 });
  }
};

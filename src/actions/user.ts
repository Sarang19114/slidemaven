"use server";
import { client } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";

export const onAuthenticateUser = async () => {
  try {
    const user = await currentUser();
    if (!user) {
      console.error("🔴 No user found in Clerk.");
      return { status: 403 };
    }

    const userEmail = user.emailAddresses?.[0]?.emailAddress;
    if (!userEmail) {
      console.error("🔴 No email found for user.");
      return { status: 400 };
    }

    const userExist = await client.user.findUnique({
      where: {
        clerkId: user.id,
      },
      include: {
        PurchasedProjects: {
          select: {
            id: true,
          },
        },
      },
    });

    if (userExist) {
      return { status: 200, user: userExist };
    }

    // Create new user if not found
    const newUser = await client.user.create({
      data: {
        clerkId: user.id,
        email: userEmail,
        name: `${user.firstName ?? ""} ${user.lastName ?? ""}`.trim(),
        profileImage: user.imageUrl ?? "",
      },
    });

    if (newUser) {
      return { status: 201, user: newUser };
    }

    return { status: 400 };
  } catch (error) {
    console.error("🔴 Prisma Error:", error);
    return { status: 500 };
  }
};

"use server";
import { client } from "@/lib/prisma";
import { onAuthenticateUser } from "./user";

export const getAllProjects = async () => {
  try {
    const checkUser = await onAuthenticateUser();
    
    if (checkUser.status >= 400 || !checkUser.user) {
      return { status: 403, error: "User not authenticated" };
    }

    const projects = await client.project.findMany({
      where: {
        userId: checkUser.user.id,
        isDeleted: false,
      },
      orderBy: {
        updatedAt: "desc",
      },
    });

    return { status: 200, data: projects }; 
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error : any) {
    console.error("🔴 ERROR in getAllProjects:", error.message || error);
    return { status: 500, error: "Internal server error" };
  }
};

export const getRecentProjects = async () => {
  try {
    const checkUser = await onAuthenticateUser();

    if (checkUser.status !== 200 || !checkUser.user) {
      return { status: 403, error: "User not authenticated" };
    }

    const projects = await client.project.findMany({
      where: {
        userId: checkUser.user.id,
        isDeleted: false,
      },

      orderBy: {
        updatedAt: "desc",
      },
      take: 5,
    });

    if (projects.length === 0) {
      return { status: 404, error: "No recent prompts found" };
    }

    return { status: 200, data: projects };
  } catch (error) {
    console.error("🔴 ERROR", error);
    return { status: 500, error: "Internal server error" };
  }
};
"use server";
import { client } from "@/lib/prisma";
import { onAuthenticateUser } from "./user";
import { JsonValue } from "@prisma/client/runtime/library";


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

export const deleteProject = async (projectId: string) => {
  try {
    const checkUser = await onAuthenticateUser();

    if (checkUser.status !== 200 || !checkUser.user) {
      return { status: 403, error: "User not authenticated" };
    }
    const project = await prisma?.project.findUnique({
      where: { id: projectId },
    });

    if (!project) {
      return { status: 404, error: "Project not found" };
    }
    await prisma?.project.delete({
      where: { id: projectId },
    });

    return { status: 200, message: "Project deleted successfully" };
  } catch (error) {
    console.error("Error deleting project:", error);
    return { status: 500, error: "Internal server error" };
  }
};

export const getProjectById = async (projectId: string) => {
  try {
    const checkUser = await onAuthenticateUser();
    if(checkUser.status !== 200 || !checkUser.user) {
      return { status: 403, error: "User not authenticated" };
    }
    const project = await client.project.findFirst({
      where: {
        id: projectId,
      }
  });
  if(!project) {
    return { status: 404, error: "Project not found" };
  }
  return { status: 200, data: project };
  } catch (error) {
    console.error("🔴 ERROR:", error);
    return { status: 500, error: "Internal server error" };
}
}

export const updateSlides = async (projectId: string, slides : JsonValue) => {
  try {
    if(!projectId || !slides) {
      return { status: 400, error: "Invalid request" };
    }
    const checkUser = await onAuthenticateUser();
    if(checkUser.status !== 200 || !checkUser.user) {
      return { status: 403, error: "User not authenticated" };
    }

    const updateProject = await client.project.update({
      where: {
        id: projectId,
      },
      data: {
        slides,
      },
    });

    if (!updateProject) {
      return { status: 400, error: "Failed to update project" };
    } 
    return { status: 200, message: "Project updated successfully" };
  } catch (error) {
    console.error("🔴 ERROR:", error);
    return { status: 500, error: "Internal server error" };

  }
}

export const updateTheme = async (projectId: string, slides: JsonValue) => {
  try {
    if(!projectId || !slides) {
      return { status: 400, error: "Invalid request" };
    }
    const checkUser = await onAuthenticateUser();
    if(checkUser.status !== 200 || !checkUser.user) {
      return { status: 403, error: "User not authenticated" };
    }

    const updateProject = await client.project.update({
      where: {
        id: projectId,
      },
      data: {
        themeName: theme,
      },
    });

    if (!updateProject) {
      return { status: 400, error: "Failed to update project" };
    }

    return { status: 200, message: "Project updated successfully" };
  } catch (error) { 
    console.error("🔴 ERROR:", error);
    return { status: 500, error: "Internal server error" };
  }
}

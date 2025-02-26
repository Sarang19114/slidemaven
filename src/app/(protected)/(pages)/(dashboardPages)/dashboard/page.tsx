"use client";

import React, { useEffect, useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { getAllProjects } from "@/actions/projects"; 

// Define the project type
interface Project {
  title: string;
  description: string;
  link: string;
  img: string;
}

const Page = () => {
  const [projects, setProjects] = useState<Project[]>([]); 

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await getAllProjects();

        if (response.status === 200 && response.data) {
          setProjects(
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            response.data.map((project: any) => ({
              title: project.title,
              description: "A project created using our AI-powered system.",
              link: `/project/${project.id}`,
              img: project.thumbnail || "https://assets.aceternity.com/manu.png",
            }))
          );
        } else {
          console.error("Failed to fetch projects:", response.error || "Unknown error");
        }
      } catch (error) {
        console.error("Error fetching projects:", error);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen w-full overflow-y-auto px-4 py-6">
      <h1 className="text-3xl font-mono font-semibold text-left mb-4">
        Your Projects 🗿
      </h1>
      <p className="text-lg text-left font-mono">
        Manage and access all your work in one place.
      </p>
      <div className="w-full overflow-auto">
        {projects.length > 0 ? (
          <HoverEffect items={projects} />
        ) : (
          <p className="text-center text-gray-500">No projects found.</p>
        )}
      </div>
    </div>
  );
};

export default Page;

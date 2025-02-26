"use client";

import React, { useEffect, useState } from "react";
import { HoverEffect } from "@/components/ui/card-hover-effect";
import { getRecentProjects } from "@/actions/projects";

// Define the project type
interface Project {
  title: string;
  description: string;
  link: string;
  img: string;
}

const Recent = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchProjects() {
      try {
        const response = await getRecentProjects();

        if (response.status === 200 && response.data) {
          setProjects(
            response.data.map((project) => ({
              title: project.title,
              description: "Recently updated project.",
              link: `/project/${project.id}`,
              img: project.thumbnail || "https://assets.aceternity.com/manu.png",
            }))
          );
        } else {
          setError(response.error || "Failed to fetch recent projects.");
        }
      } catch (error) {
        setError("Error fetching recent projects.");
        console.error("🔴 ERROR:", error);
      } finally {
        setLoading(false);
      }
    }

    fetchProjects();
  }, []);

  return (
    <div className="min-h-screen w-full overflow-y-auto px-4 py-6">
      <h1 className="text-3xl font-mono font-semibold text-left mb-4">
        Recent Projects 🕵️
      </h1>
      <p className="text-lg text-left font-mono">
        Find your most recently updated work here.
      </p>

      <div className="w-full overflow-auto">
        {loading ? (
          <p className="text-center text-gray-500">Loading...</p>
        ) : error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : projects.length > 0 ? (
          <HoverEffect items={projects} />
        ) : (
          <p className="text-center text-gray-500">No recent projects found.</p>
        )}
      </div>
    </div>
  );
};

export default Recent;

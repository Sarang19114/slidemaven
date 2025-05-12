"use client";

import { User } from "@prisma/client";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import React from "react";

const NewProjectButton = ({ user }: { user: User }) => {
  const router = useRouter();
  const isDisabled = !user.subscription;

  return (
    <button
      className={`relative inline-flex h-12 w-auto overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-all ${
        isDisabled ? "cursor-not-allowed opacity-50" : "hover:scale-105"
      }`}
      disabled={isDisabled}
      onClick={() => !isDisabled && router.push("/create-page")}
    >
      {/* Animated Border */}
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />

      {/* Button Content */}
      <span
        className={`relative inline-flex h-full w-full items-center gap-2 rounded-full px-6 py-2 text-lg font-semibold shadow-md backdrop-blur-3xl transition ${
          isDisabled
            ? "bg-gray-500 text-gray-300"
            : "bg-slate-950 text-white hover:shadow-lg"
        }`}
      >
        <Plus className="h-5 w-5" />
        New Project
      </span>
    </button>
  );
};

export default NewProjectButton;

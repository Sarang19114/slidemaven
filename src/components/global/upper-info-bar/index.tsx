"use client";

import { User } from "@prisma/client";
import React from "react";
import SearchBar from "./upper-info-searchbar";
import ThemeSwitcher from "@/components/global/mode-toggle";
import NewProjectButton from "./new-project-button";
import UploadButton from "./upload-button"; // Import UploadButton

type Props = {
  user: User;
};

const UpperInfoBar = ({ user }: Props) => {
  return (
    <header className="sticky top-0 z-[10] flex shrink-0 flex-wrap items-center gap-2 bg-background p-4 justify-between">
      <div className="w-full max-w-[95%] flex items-center justify-between gap-4 flex-wrap">
        <SearchBar />
        <div className="flex flex-wrap gap-20 items-center justify-end">
          <NewProjectButton user={user} />
          <UploadButton />
          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
};

export default UpperInfoBar;

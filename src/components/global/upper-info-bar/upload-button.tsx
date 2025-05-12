"use client";

import { Button } from "@/components/ui/button";
import { Upload } from "lucide-react";

const UploadButton = () => {
  const handleUpload = () => {
    alert("Upload feature coming soon!");
  };

  return (
    <Button
      className="bg-primary-80 rounded-lg hover:bg-primary-90 text-primary font-semibold flex items-center gap-2"
      onClick={handleUpload}
    >
      <Upload className="h-4 w-4" />
      <span>Upload</span>
    </Button>
  );
};

export default UploadButton;

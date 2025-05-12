import React from "react";
import { LoaderPinwheel, } from "lucide-react";

const NotFound = () => {
  return (
    <div className="flex flex-col min-h-[70vh] w-full justify-center items-center gap-4">
      <LoaderPinwheel className="w-24 h-24 text-primary animate-pulse" />
      <div className="flex flex-col items-center justify-center text-center">
        <p className="text-3xl font-semibold text-primary">
          Nothing to see here
        </p>
      </div>
    </div>
  );
};

export default NotFound;
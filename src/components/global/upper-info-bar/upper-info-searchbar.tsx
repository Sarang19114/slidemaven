import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import React from "react";

const SearchBar = () => {
  return (
    <div className="relative flex items-center w-full max-w-lg rounded-full border border-gray-700 bg-white/5 backdrop-blur-lg shadow-xl transition-all duration-300 hover:shadow-2xl focus-within:ring-2 focus-within:ring-yellow-400">
      {/* Search Button */}
      <Button
        type="submit"
        size="sm"
        variant="ghost"
        className="absolute left-4 h-full bg-transparent hover:bg-transparent"
      >
        <Search className="h-5 w-5 text-gray-400 transition-all duration-300 group-hover:scale-110 group-hover:text-yellow-400" />
        <span className="sr-only">Search</span>
      </Button>

      {/* Input Field */}
      <Input
        type="text"
        placeholder="Search here..."
        className="w-full py-3 pl-12 pr-5 text-white placeholder-gray-400 bg-transparent border-none outline-none focus:ring-0"
      />
    </div>
  );
};

export default SearchBar;

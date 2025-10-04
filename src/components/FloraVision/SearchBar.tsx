import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <div className="relative w-full max-w-lg mx-auto pointer-events-auto">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
      <Input
        type="search"
        placeholder="Pesquisar local ou coordenadas..."
        className="w-full pl-10 pr-4 py-2 rounded-full shadow-lg bg-white/80 backdrop-blur-sm focus:bg-white"
      />
    </div>
  );
};

export default SearchBar;
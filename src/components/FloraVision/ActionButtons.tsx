import { Button } from "@/components/ui/button";
import { Layers, Target } from "lucide-react";

const ActionButtons = () => {
  return (
    <div className="absolute bottom-40 md:bottom-32 right-4 z-20 flex flex-col gap-3 pointer-events-auto">
      <Button variant="secondary" size="icon" className="rounded-full shadow-lg h-12 w-12">
        <Target className="h-6 w-6" />
      </Button>
      <Button variant="secondary" size="icon" className="rounded-full shadow-lg h-12 w-12">
        <Layers className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ActionButtons;
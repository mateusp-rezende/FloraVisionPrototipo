import { Button } from "@/components/ui/button";
import { Layers, Target } from "lucide-react";
import { toast } from "sonner";

interface ActionButtonsProps {
  onRecenter: () => void;
}

const ActionButtons = ({ onRecenter }: ActionButtonsProps) => {
  const handleLayersClick = () => {
    toast.info("A funcionalidade de camadas do mapa será implementada em breve!");
  };

  return (
    <div className="absolute bottom-40 md:bottom-32 right-4 z-20 flex flex-col gap-3 pointer-events-auto">
      <Button 
        variant="secondary" 
        size="icon" 
        className="rounded-full shadow-lg h-12 w-12 bg-white/80 backdrop-blur-sm hover:bg-white/90"
        onClick={onRecenter}
        aria-label="Recentralizar mapa"
      >
        <Target className="h-6 w-6" />
      </Button>
      <Button 
        variant="secondary" 
        size="icon" 
        className="rounded-full shadow-lg h-12 w-12 bg-white/80 backdrop-blur-sm hover:bg-white/90"
        onClick={handleLayersClick}
        aria-label="Ver camadas do mapa"
      >
        <Layers className="h-6 w-6" />
      </Button>
    </div>
  );
};

export default ActionButtons;
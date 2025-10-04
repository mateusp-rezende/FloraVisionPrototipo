import { Drawer, DrawerContent, DrawerHeader, DrawerTitle, DrawerTrigger } from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { ChevronUp } from "lucide-react";
import PlantingWindowWidget from "./widgets/PlantingWindowWidget";
import PrecipitationWidget from "./widgets/PrecipitationWidget";
import BioindicatorWidget from "./widgets/BioindicatorWidget";
import SolarIncidenceWidget from "./widgets/SolarIncidenceWidget";
import AirQualityWidget from "./widgets/AirQualityWidget";

interface InfoPanelProps {
  data: any;
}

const InfoPanel = ({ data }: InfoPanelProps) => {
  const probabilityColor = {
    "ALTA": "bg-green-500 hover:bg-green-600",
    "MÉDIA": "bg-yellow-500 hover:bg-yellow-600",
    "BAIXA": "bg-red-500 hover:bg-red-600",
  }[data.plantingProbability];

  return (
    <Drawer>
      <DrawerTrigger asChild>
        <div className={cn(
          "absolute bottom-0 left-0 right-0 z-30 p-4 text-white text-center rounded-t-2xl cursor-pointer transition-colors pointer-events-auto",
          probabilityColor
        )}>
          <div className="flex flex-col items-center">
            <ChevronUp className="h-5 w-5 mb-1" />
            <h3 className="font-bold text-lg">Probabilidade de Plantio: {data.plantingProbability}</h3>
          </div>
        </div>
      </DrawerTrigger>
      <DrawerContent className="bg-gray-100/90 backdrop-blur-sm max-h-[70vh]">
        <div className="mx-auto w-full max-w-2xl">
          <DrawerHeader>
            <DrawerTitle className="text-2xl font-bold text-center">{data.locationName}</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pb-0 overflow-y-auto">
            <div className="flex flex-col gap-4">
              <PlantingWindowWidget data={data.plantingWindow} />
              <PrecipitationWidget data={data.precipitation} />
              <BioindicatorWidget data={data.bioindicator} />
              <SolarIncidenceWidget data={data.solarIncidence} />
              <AirQualityWidget data={data.airQuality} />
            </div>
          </div>
        </div>
      </DrawerContent>
    </Drawer>
  );
};

export default InfoPanel;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Sun } from "lucide-react";

const SolarIncidenceWidget = ({ data }: { data: { classification: string, hours: string } }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Incidência Solar e Luminosidade</CardTitle>
        <Sun className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{data.classification}</div>
        <p className="text-xs text-muted-foreground mt-2">
          Previsão de {data.hours}
        </p>
      </CardContent>
    </Card>
  );
};

export default SolarIncidenceWidget;
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarCheck } from "lucide-react";

const PlantingWindowWidget = ({ data }: { data: { recommendation: string, analysis: string } }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Análise da Janela de Plantio</CardTitle>
        <CalendarCheck className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-green-600">{data.recommendation}</div>
        <p className="text-xs text-muted-foreground mt-2">
          {data.analysis}
        </p>
      </CardContent>
    </Card>
  );
};

export default PlantingWindowWidget;
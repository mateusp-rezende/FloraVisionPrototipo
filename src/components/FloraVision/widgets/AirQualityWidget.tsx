import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Wind } from "lucide-react";

const AirQualityWidget = ({ data }: { data: { classification: string, details: string } }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Qualidade do Ar</CardTitle>
        <Wind className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{data.classification}</div>
        <p className="text-xs text-muted-foreground mt-2">
          {data.details}
        </p>
      </CardContent>
    </Card>
  );
};

export default AirQualityWidget;
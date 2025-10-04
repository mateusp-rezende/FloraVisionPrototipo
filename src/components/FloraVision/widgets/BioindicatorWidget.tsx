import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flower2 } from "lucide-react";

const BioindicatorWidget = ({ data }: { data: { status: string, interpretation: string } }) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Bioindicador (Floração Nativa)</CardTitle>
        <Flower2 className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold text-orange-500">{data.status}</div>
        <p className="text-xs text-muted-foreground mt-2">
          {data.interpretation}
        </p>
      </CardContent>
    </Card>
  );
};

export default BioindicatorWidget;
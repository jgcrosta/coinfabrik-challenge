import { ParallelCoordinatesChart } from "~/components/chart/paralell-coordinates-chart";
import { TreeMapChart } from "~/components/chart/tree-map-chart";
import { BarChart, ChartData } from "./bar-chart";
import { RankingData } from "~/utils/unified-ranking";
import { PieChart } from "./pie-chart";

export const ChartComponent = (props: {
  processedData: ChartData[];
  limit: number;
  findDataFromSymbol: (arg0: string) => void;
  chartType: string;
  isRankChecked: boolean;
  unifiedData: RankingData[];
  source: string;
}) => {
  if (props.source === "Unified Ranking") {
    return (
      <PieChart
        data={props.unifiedData.slice(0, props.limit)}
        onDataClick={(dataSymbol) => props.findDataFromSymbol(dataSymbol)}
      />
    );
  }
  switch (props.chartType) {
    case "Bar":
      return (
        <BarChart
          preProcessedData={props.processedData.slice(0, props.limit)}
          onDataClick={(dataSymbol) => props.findDataFromSymbol(dataSymbol)}
        />
      );
    case "Parallel Coordinates":
      return (
        <ParallelCoordinatesChart
          data={props.processedData.slice(0, props.limit)}
        />
      );
    case "Tree Map":
      return (
        <TreeMapChart
          preProcessedData={props.processedData.slice(0, props.limit)}
          onDataClick={(dataSymbol) => props.findDataFromSymbol(dataSymbol)}
          dataKey={props.isRankChecked ? "Volume [24H]" : "Market Cap."}
        />
      );
    default:
      return <div>Invalid path</div>;
  }
};

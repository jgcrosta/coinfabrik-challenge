import { ResponsiveTreeMap } from "@nivo/treemap";
import { type ChartData } from "./bar-chart";
import { getDigits } from "~/utils/utils";

interface TreeMapData {
  id: string;
  value: number;
}

export const TreeMapChart = (props: {
  preProcessedData: ChartData[];
  onDataClick: (arg0: string) => void;
  dataKey: keyof ChartData;
}) => {
  // If dataKey is "Market Cap.", then use the Market Cap. value. If dataKey is "Volume [24H]", then use the Volume [24H] value.
  const data: TreeMapData[] = props.preProcessedData.map((d) => ({
    id: d.symbol,
    value: parseInt(d[props.dataKey].toString()),
  }));
  return (
    <ResponsiveTreeMap
      data={{ id: props.dataKey, children: data }}
      identity="id"
      value="value"
      valueFormat={(v: number) => getDigits(v)}
      labelSkipSize={12}
      labelTextColor={{
        from: "color",
        modifiers: [["darker", 1.2]],
      }}
      parentLabelPosition="left"
      parentLabelTextColor={{
        from: "color",
        modifiers: [["darker", 2]],
      }}
      borderColor={{
        from: "color",
        modifiers: [["darker", 0.1]],
      }}
      onClick={(node) => {
        if (node.id !== "root") {
          props.onDataClick(node.id);
        }
      }}
      margin={{ top: 25, right: 50, bottom: 50, left: 50 }}
      tooltip={({ node }) => (
        <div
          style={{
            background: "white",
            color: "black",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "0 0 10px rgba(0,0,0,0.2)",
          }}
        >
          <div style={{ fontWeight: "bold", marginBottom: "5px" }}>
            {node.id} 🚀
          </div>
        </div>
      )}
    />
  );
};

import { type BarTooltipProps, ResponsiveBar } from "@nivo/bar";
import { getDigits } from "~/utils/utils";

export interface ChartData {
  symbol: string;
  name: string;
  "Market Cap.": number;
  "Volume [24H]": number;
}

interface MyComponentProps {
  margin: {
    right: number;
  };
}

const ChartDataArrayToBarDatumArray = (data: ChartData[]) => {
  return data.map((d) => ({
    symbol: d.symbol,
    "Market Cap.": d["Market Cap."],
    "Volume [24H]": d["Volume [24H]"],
  }));
};

export const BarChart = (props: {
  preProcessedData: ChartData[];
  onDataClick: (arg0: string) => void;
}) => {
  const data = props.preProcessedData;
  return (
    <ResponsiveBar
      data={ChartDataArrayToBarDatumArray(data)}
      keys={["Market Cap.", "Volume [24H]"]}
      indexBy="symbol"
      onClick={(index) => props.onDataClick(index.indexValue.toString())}
      margin={{ top: 25, right: 200, bottom: 50, left: 200 }}
      padding={0.3}
      colors={{ scheme: "nivo" }}
      axisBottom={{
        tickRotation: -90,
      }}
      labelSkipWidth={12}
      labelSkipHeight={12}
      groupMode="grouped"
      labelTextColor={{ from: "color", modifiers: [["darker", 1.6]] }}
      animate={true}
      legends={[
        {
          dataFrom: "keys",
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateX: 160,
          translateY: 0,
          itemsSpacing: 2,
          itemWidth: 100,
          itemHeight: 20,
          itemDirection: "left-to-right",
          itemOpacity: 0.85,
          symbolSize: 20,
          effects: [{ on: "hover", style: { itemOpacity: 1 } }],
        },
      ]}
      enableLabel={false}
      axisLeft={{
        tickSize: 5,
        tickPadding: 5,
        format: (value: number) => `${value / 1_000_000_000} B`,
      }}
      axisRight={{
        tickSize: 5,
        tickPadding: 5,
        format: (value: number) => `${value / 1_000_000_000} B`,
      }}
      tooltip={(
        props: BarTooltipProps<{
          symbol: string;
          "Market Cap.": number;
          "Volume [24H]": number;
        }>
      ) => (
        <div
          style={{
            background: "rgba(0, 0, 0, 0.8)",
            color: "#fff",
            padding: "0.5rem",
            borderRadius: "0.25rem",
          }}
        >
          <div
            style={{
              fontSize: "1rem",
              fontWeight: "bold",
              marginBottom: "0.25rem",
            }}
          >
            {props.data.symbol} 🚀
          </div>
          <div style={{ fontSize: "0.8rem" }}>
            💰 Market Cap: {getDigits(props.data["Market Cap."])}
          </div>
          <div style={{ fontSize: "0.8rem" }}>
            📈 Volume 24h: {getDigits(props.data["Volume [24H]"])}
          </div>
        </div>
      )}
      layers={[
        "grid",
        "axes",
        "bars",
        "markers",
        "legends",
        (props: MyComponentProps) => (
          <g transform={`translate(${props.margin.right - 60}, 0)`}>
            {" "}
            <ResponsiveBar
              data={ChartDataArrayToBarDatumArray(data)}
              keys={["volume_24h"]}
              indexBy="name"
              margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
              padding={0.3}
              colors={{ scheme: "nivo" }}
              // yAxisId="right"
              enableLabel={false}
              axisLeft={null}
              axisBottom={null}
              legends={[]}
            />
          </g>
        ),
      ]}
    />
  );
};

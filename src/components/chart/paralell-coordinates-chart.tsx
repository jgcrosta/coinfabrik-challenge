// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import { ResponsiveParallelCoordinates } from "@nivo/parallel-coordinates";
import { type ChartData } from "./bar-chart";
import { getDigits } from "~/utils/utils";

type ParallelCoordinatesData = {
  "Market Cap.": number;
  "Volume [24H]": number;
};

export const ParallelCoordinatesChart = (props: { data: ChartData[] }) => {
  const data: ParallelCoordinatesData[] = props.data.map((d) => ({
    "Market Cap.": d["Market Cap."],
    "Volume [24H]": d["Volume [24H]"],
  }));

  return (
    <ResponsiveParallelCoordinates
      data={data}
      variables={[
        {
          key: "Market Cap.",
          type: "linear",
          min: 0,
          max: 1_000_000_000_000,
          tickValues: 5,
          tickFormat: (v: number) => getDigits(v),
          ticksPosition: "before",
          legend: "Market Cap.",
          legendPosition: "middle",
          legendOffset: -70,
        },
        {
          key: "Volume [24H]",
          type: "linear",
          min: 0,
          max: 1_000_000_000_00,
          tickValues: 5,
          tickFormat: (v: number) => getDigits(v),
          ticksPosition: "before",
          legend: "Volume [24H]",
          legendPosition: "middle",
          legendOffset: 20,
        },
      ]}
      margin={{ top: 50, right: 50, bottom: 50, left: 100 }}
      strokeWidth={2}
      colors={{ scheme: "category10" }}
      lineOpacity={1}
      axesPlan="foreground"
      axisTicksPosition="after"
    />
  );
};

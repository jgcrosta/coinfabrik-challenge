import { SelectChartDropDown } from "~/components/select-components/select-chart";
import { SelectLimitDropDown } from "~/components/select-components/select-limit";
import { SelectSourceDropDown } from "~/components/select-components/select-source";

export const SelectComponent = (props: {
  chartType: string;
  setChartType: (arg0: string) => void;
  limit: number;
  setLimit: (arg0: number) => void;
  isRankChecked: boolean;
  setIsRankChecked: (arg0: boolean) => void;
  source: string;
  setSource: (arg0: string) => void;
}) => {
  return (
    <>
      {/* Select Chart DropDown */}
      <div className="flex items-center justify-center">
        <span className="mr-2">Chart type:</span>
        <SelectChartDropDown
          chartType={props.chartType}
          setChartType={(newChartType) => props.setChartType(newChartType)}
          disabled={props.source === "Unified Ranking" ? true : false}
        />
      </div>
      {/* Select Limit DropDown */}
      <div className="flex items-center justify-center">
        <span className="mr-2">Request limit:</span>
        <SelectLimitDropDown
          limit={props.limit}
          setLimit={(newLimit) => props.setLimit(newLimit)}
        />
      </div>
      {/* Select Rank Toggle */}
      <div className="flex items-center justify-center">
        <span className="mr-2">Market Cap.</span>
        <input
          id="my-toggle"
          type="checkbox"
          className="toggle bg-opacity-100"
          disabled={
            props.source === "Unified Ranking" ||
            props.chartType === "Parallel Coordinates"
              ? true
              : false
          }
          checked={props.isRankChecked}
          onChange={() => props.setIsRankChecked(!props.isRankChecked)}
        />
        <span className="ml-4 mr-4">Volume [24H]</span>
      </div>
      {/* Select Source DropDown */}
      <div className="flex items-center justify-center">
        <span className="mr-2">Source:</span>
        <SelectSourceDropDown
          source={props.source}
          setSource={(newSource) => props.setSource(newSource)}
        />
      </div>
    </>
  );
};

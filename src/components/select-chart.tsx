export const SelectChartDropDown = (props: {
  chartType: string;
  setChartType: (arg0: string) => void;
}) => {
  function handleChartChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const netChartType = event.target.value.toString();
    props.setChartType(netChartType);
  }
  return (
    <select
      id="selectBox"
      className="select-bordered select max-w-xs"
      onChange={handleChartChange}
    >
      <option disabled selected>
        {props.chartType}
      </option>
      <option>Bar</option>
      <option>Parallel Coordinates</option>
      <option>Tree Map</option>
    </select>
  );
};

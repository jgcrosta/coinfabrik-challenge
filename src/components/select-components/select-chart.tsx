export const SelectChartDropDown = (props: {
  chartType: string;
  setChartType: (arg0: string) => void;
  disabled: boolean;
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
      disabled={props.disabled}
    >
      <option selected>Bar</option>
      <option >Parallel Coordinates</option>
      <option>Tree Map</option>
    </select>
  );
};

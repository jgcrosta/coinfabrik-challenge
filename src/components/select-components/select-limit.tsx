export const SelectLimitDropDown = (props: {
  limit: number;
  setLimit: (arg0: number) => void;
}) => {
  function handleLimitChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const newLimit = parseInt(event.target.value);
    props.setLimit(newLimit);
  }
  return (
    <select
      id="selectBox"
      className="select-bordered select max-w-xs"
      onChange={handleLimitChange}
    >
      <option selected>10</option>
      <option>50</option>
      <option>100</option>
      <option>300</option>
    </select>
  );
};

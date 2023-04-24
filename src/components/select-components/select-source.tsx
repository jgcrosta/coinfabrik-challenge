export const SelectSourceDropDown = (props: {
  source: string;
  setSource: (arg0: string) => void;
}) => {
  return (
    <select
      id="selectBox"
      className="select-bordered select max-w-xs"
      onChange={(event) => props.setSource(event.target.value)}
    >
      <option selected>CoinMarketCap</option>
      <option>CoinGecko</option>
      <option>Unified Ranking</option>
    </select>
  );
};

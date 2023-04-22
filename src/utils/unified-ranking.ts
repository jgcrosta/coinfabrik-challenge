import { Data } from "~/interfaces/interfaces";

export interface RankingData {
  symbol: string;
  name: string;
  "Market Cap.": number;
  "Volume [24H]": number;
  newRank: number;
}
// Construct a unified ranking from the data of CoinGecko and CoinMarketCap
export const getUnifiedRankingData = (cgData: Data[], cmcData: Data[]) => {
  // Sum the market cap of cgData
  const cgMarketCapSum = cgData.reduce((acc, curr) => acc + curr.market_cap, 0);
  const cmcMarketCapSum = cgData.reduce(
    (acc, curr) => acc + curr.market_cap,
    0
  );
  const cgTotalVolumeSum = cgData.reduce(
    (acc, curr) => acc + curr.total_volume,
    0
  );
  const cmcTotalVolumeSum = cgData.reduce(
    (acc, curr) => acc + curr.total_volume,
    0
  );

  // Calculate the percentage of each coin's market cap
  const cgDataWithPercentage = cgData.map((coin) => {
    const newRank =
      (100 *
        (coin.market_cap / cgMarketCapSum +
          coin.total_volume / cgTotalVolumeSum)) /
      2;
    return { ...coin, newRank };
  });

  const cmcDataWithPercentage = cmcData.map((coin) => {
    const newRank =
      (100 *
        (coin.market_cap / cmcMarketCapSum +
          coin.total_volume / cmcTotalVolumeSum)) /
      2;
    return { ...coin, newRank };
  });

  // Eliminate the coins that are not in both data
  const mergedData = cgDataWithPercentage.filter((coin) => {
    return cmcDataWithPercentage.find((cmcCoin) => {
      return cmcCoin.symbol === coin.symbol;
    });
  });

  // Merge the data of CoinGecko and CoinMarketCap
  mergedData.forEach((coin) => {
    const cmcCoin = cmcDataWithPercentage.find(
      (cmcCoin) => cmcCoin.symbol === coin.symbol
    );
    if (cmcCoin) {
      coin.newRank = (coin.newRank + cmcCoin.newRank) / 2;
    }
  });

  // Convert the data to the format of the ranking table
  const rankingData = mergedData.map<RankingData>((coin) => {
    return {
      symbol: coin.symbol,
      name: coin.name,
      "Market Cap.": coin.market_cap,
      "Volume [24H]": coin.total_volume,
      newRank: coin.newRank,
    };
  });

  // Sort the data by the new rank
  rankingData.sort((a, b) => b.newRank - a.newRank);

  return rankingData;
};

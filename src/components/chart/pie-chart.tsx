import { PieTooltipProps, ResponsivePie } from "@nivo/pie";
import { ZodString } from "zod";
import { RankingData } from "~/utils/unified-ranking";
import { getDigits } from "~/utils/utils";

interface PieChartData {
  id: string;
  value: number;
  name: string;
  "Market Cap.": number;
  "Volume [24H]": number;
}

const RankingDataArrayToPieChartDataArray = (
  rankingDataArray: RankingData[]
): PieChartData[] => {
  return rankingDataArray.map((data) => {
    return {
      id: data.symbol,
      value: data.newRank,
      name: data.name,
      "Market Cap.": data["Market Cap."],
      "Volume [24H]": data["Volume [24H]"],
    };
  });
};

export const PieChart = (props: {
  data: RankingData[];
  onDataClick: (arg0: string) => void;
}) => {
  return (
    <>
      <ResponsivePie
        data={RankingDataArrayToPieChartDataArray(props.data)}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        innerRadius={0.5}
        onClick={(index) => props.onDataClick(index.id.toString())}
        padAngle={0.7}
        valueFormat={(v: number) => v.toFixed(0) + "%"}
        cornerRadius={3}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor="#333333"
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
        tooltip={(props: PieTooltipProps<PieChartData>) => (
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
              {props.datum.id} 🚀
            </div>
          </div>
        )}
      />
      <div className="absolute right-8 mb-10 flex w-80 flex-wrap text-justify">
        📈 El ranking unificador es una clasificación de criptomonedas que
        combina información de dos fuentes de datos, CoinGecko y CoinMarketCap.
        Esta clasificación se utiliza para determinar la posición relativa de
        cada criptomoneda en términos de capitalización de mercado y volumen de
        transacciones en ambas fuentes de datos. <br />
        <br />
        🔍La fórmula utilizada para calcular el puntaje de cada criptomoneda es la
        siguiente: <br />
        <br />
        💹 (% de market cap de CoinGecko + % de market cap de CoinMarketCap + %
        de volumen 24h de CoinGecko + % de volumen 24h de CoinMarketCap) / 4
      </div>
    </>
  );
};

import axios from "axios";
import { z } from "zod";
import {
  type LatestResponse,
  type LatestCMCResponse,
} from "~/interfaces/interfaces";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const coinMarketCapRouter = createTRPCRouter({
  latest: publicProcedure
    .input(
      z.object({
        start: z.number().default(1),
        limit: z.number().min(1).max(5000),
        convert: z.string().optional().default("USD"),
        sort: z.enum(["market_cap", "volume_24h", "percent_change_24h"]),
        cryptocurrency_type: z.enum(["all", "coins", "tokens"]).default("all"),
      })
    )
    .query(async ({ input }) => {
      const headers = {
        Accepts: "application/json",
        "X-CMC_PRO_API_KEY": process.env.COINMARKETCAP_API_KEY,
      };

      const params = {
        start: input.start,
        limit: input.limit,
        convert: input.convert,
        sort: input.sort,
        cryptocurrency_type: input.cryptocurrency_type,
      };

      const endpoint =
        "https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest";

      const response = await axios.get<LatestCMCResponse>(endpoint, {
        headers,
        params,
      });

      const parsedResponse = convertLatestCMCResponseToLatestResponse(
        response.data
      );

      return parsedResponse.data;
    }),
});

function convertLatestCMCResponseToLatestResponse(
  latestCMCResponse: LatestCMCResponse
): LatestResponse {
  return {
    data: latestCMCResponse.data.map((cmcData) => ({
      name: cmcData.name,
      symbol: cmcData.symbol,
      market_cap: cmcData.quote.USD?.market_cap || 0,
      total_volume: cmcData.quote.USD?.volume_24h || 0,
    })),
  };
}

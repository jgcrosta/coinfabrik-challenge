import axios from "axios";
import { z } from "zod";
import { Data, type LatestResponse } from "~/interfaces/interfaces";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const coinGeckoRouter = createTRPCRouter({
  latest: publicProcedure
    .input(
      z.object({
        limit: z.number().min(1).max(5000),
      })
    )
    .query(async ({ input }) => {
      const params = {
        vs_currency: "usd",
        order: "market_cap_desc",
        per_page: input.limit,
      };

      const endpoint = "https://api.coingecko.com/api/v3/coins/markets";

      const response = await axios.get<Data[]>(endpoint, {
        params,
      });

      return response.data;
    }),
});

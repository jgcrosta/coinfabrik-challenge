import { createTRPCRouter } from "~/server/api/trpc";
import { coinMarketCapRouter } from "~/server/api/routers/coinmarketcap";
import { coinGeckoRouter } from "./routers/coingecko";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  coinMarketCap: coinMarketCapRouter,
  coinGecko: coinGeckoRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;

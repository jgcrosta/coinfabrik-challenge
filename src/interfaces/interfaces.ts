export interface Quote {
  market_cap: number;
  volume_24h: number;
}

export interface CMCData {
  name: string;
  symbol: string;
  quote: { [index: string]: Quote };
}

export interface Data {
  name: string;
  symbol: string;
  market_cap: number;
  total_volume: number;
}

export interface LatestCMCResponse {
  data: CMCData[];
}

export interface LatestResponse {
  data: Data[];
}

'use client'
import { AnimatedModal } from "@/app/components/ui/animated-modal";
import { Spotlight } from "@/app/components/ui/Spotlight";
import { useStore } from "@/app/stores/useStore";
import { formatNumber } from "@/app/utils/formatNumber";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

interface VolumeData {
  [currency: string]: number;
}

interface CoinMarketData {
  total_volume: VolumeData;
  high_24h: VolumeData;
  low_24h: VolumeData;
}

interface MarketData {
  current_price: VolumeData;
  total_volume: VolumeData;
  ath: VolumeData;
  market_cap: VolumeData;
  high_24h: VolumeData;
}

interface CoinImage {
  thumb: string;
  small: string;
  large: string;
}

interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: CoinImage;
  market_cap_rank: number;
  market_data: MarketData;
}

const CoinDetail = () => {
  const { coinId } = useParams();
  const { currency } = useStore();
  const [coinData, setCoinData] = useState<Coin | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchCoinData = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${coinId}`
      );
      const data = await response.json();
      setCoinData(data);
    } catch (err) {
      setError("Failed to fetch coin data.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (coinId) {
      fetchCoinData();
    }
  }, [coinId, currency]);

  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight
          className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen"
          fill="white"
        />
        <Spotlight
          className="top-10 left-full h-[80vw] w-[50vw]"
          fill="purple"
        />
        <Spotlight className="top-28 left-80 h-[80vw] w-[50vw]" fill="white" />
      </div>
      <div className="text-white container mx-auto px-4">
        {loading && <p className="text-center text-lg">Loading...</p>}
        {error && <p className="text-center text-red-500">{error}</p>}
        {coinData && !loading && !error && (
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src={coinData.image.large}
                alt={coinData.name}
                className="w-16 h-16"
              />
              <div>
                <h1 className="text-3xl font-bold">{coinData.name}</h1>
                <p className="text-lg text-gray-400">{coinData.symbol}</p>
              </div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
              <h2 className="text-xl font-semibold">Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                <div>
                  <p className="font-medium">Current Price:</p>
                  <p>${formatNumber(coinData.market_data.current_price[currency])}</p>
                </div>
                <div>
                  <p className="font-medium">Market Cap:</p>
                  <p>${formatNumber(coinData.market_data.market_cap[currency])}</p>
                </div>
                <div>
                  <p className="font-medium">All Time High:</p>
                  <p>${formatNumber(coinData.market_data.ath[currency])}</p>
                </div>
                <div>
                  <p className="font-medium">Market Cap Rank:</p>
                  <p>{formatNumber(coinData.market_cap_rank)}</p>
                </div>
                <div>
                  <p className="font-medium">Total Volume:</p>
                  <p>${formatNumber(coinData.market_data.total_volume[currency])}</p>
                </div>
                <div>
                  <p className="font-medium">High 24 h:</p>
                  <p>${formatNumber(coinData.market_data.high_24h[currency])}</p>
                </div>
                <AnimatedModal />
                
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoinDetail;

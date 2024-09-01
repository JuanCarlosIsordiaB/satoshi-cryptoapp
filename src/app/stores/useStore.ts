import { create } from 'zustand';
import { useStore as useZustandStore } from 'zustand';

interface Coin {
  id: string;
  symbol: string;
  name: string;
  image: string;
  current_price: number;
  market_cap: number;
  market_cap_rank: number;
  fully_diluted_valuation: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap_change_24h: number;
  market_cap_change_percentage_24h: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  ath: number;
  ath_change_percentage: number;
  ath_date: string;
  atl: number;
  atl_change_percentage: number;
  atl_date: string;
  roi: any;
  last_updated: string;
}

interface State {
  currency: string;
  coins: Coin[];
  setCurrency: (newCurrency: string) => void;
  setCoins: (newCoins: Coin[]) => void;
  getAllCoins: () => void;
}

const store = create<State>((set) => ({
  currency: 'usd',
  coins: [],
  setCurrency: (newCurrency: string) => {
    set({ currency: newCurrency });
    // Call getAllCoins when currency changes
    store.getState().getAllCoins();
  },
  setCoins: (newCoins: Coin[]) => set({ coins: newCoins }),
  getAllCoins: async () => {
    const { currency } = store.getState();
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        'x-cg-demo-api-key': String(process.env.NEXT_PUBLIC_COINGECKO_API_KEY),
      },
    };

    try {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}`,
        options
      );
      const data = await response.json();
      console.log(data);
      set({ coins: Array.isArray(data) ? data : [] });
    } catch (err) {
      console.error(err);
      set({ coins: [] });
    }
  },
}));

export const useStore = () => useZustandStore(store);

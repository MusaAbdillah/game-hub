import { Platform } from "../hooks/useGames";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: Platform; }[];
  metacritic: number;
  rating_top: number;
  slug: string;
  description: string;
  description_raw: string;
}

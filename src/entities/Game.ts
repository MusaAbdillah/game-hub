import { Platform } from "../hooks/useGames";
import  Genre  from "./Genre";
import  Publisher  from "./Publisher";

export default interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: { platform: Platform}[];
  parent_platforms: { platform: Platform}[];
  genres: { genre: Genre}[];
  metacritic: number;
  rating_top: number;
  slug: string;
  description: string;
  description_raw: string;
  publishers: {publisher: Publisher}[];
}

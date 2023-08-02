import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/apiClient";
import useData from "./useData";
import { Genre } from "./useGenre";
import { GameQuery } from "../App";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}
export interface Game {
  id: number;
  name: string;
  background_image: string;
  platforms: {platform: Platform}[] 
  metacritic: number;
}

const useGame = (gameQuery: GameQuery) => useData<Game>(
  "/games", 
  {
    params: 
      {
        genres: gameQuery.Genre?.id, platforms: gameQuery.Platform?.id
      }
  }, [gameQuery]);

export default useGame;

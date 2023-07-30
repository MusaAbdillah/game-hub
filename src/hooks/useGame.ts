import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/apiClient";
import useData from "./useData";
import { Genre } from "./useGenre";

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

const useGame = (selectedGenre: Genre | null) => useData<Game>("/games", {params: {genres: selectedGenre?.id}}, [selectedGenre?.id]);

export default useGame;

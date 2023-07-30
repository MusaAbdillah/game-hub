import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/apiClient";
import useData from "./useData";

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

const useGame = () => useData<Game>("/games");

export default useGame;

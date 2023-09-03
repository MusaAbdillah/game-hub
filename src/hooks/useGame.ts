import React, { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/apiClient";
import useData, { FetchResponse } from "./useData";
import { Genre } from "./useGenre";
import { GameQuery } from "../App";
import { Query, useQuery } from "@tanstack/react-query";

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
  rating_top: number;
}


// without react query
// const useGame = (gameQuery: GameQuery) => useData<Game>(
//   "/games", 
//   {
//     params: 
//       {
//         genres: gameQuery.Genre?.id, platforms: gameQuery.Platform?.id, ordering: gameQuery.Ordering, search: gameQuery.SearchText
//       }
//   }, [gameQuery]);

// with React Query

const useGame = (gameQuery: GameQuery) => useQuery<FetchResponse<Game>, Error>({
  queryKey:["games", gameQuery],
  queryFn:  () => 
    apiClient
      .get<FetchResponse<Game>>("/games", 
          {     
            params: {
              genres: gameQuery.Genre?.id, 
              parent_platforms: gameQuery.Platform?.id, 
              ordering: gameQuery.Ordering, 
              search: gameQuery.SearchText
            }
          }
      )
      .then(res => res.data)
})

export default useGame;

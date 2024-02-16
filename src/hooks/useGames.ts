import React, { useEffect, useState } from "react";
import apiClient, { CanceledError } from "../services/apiClient";
import useData, { FetchResponse } from "./useData";
import  Genre  from "../entities/Genre";
import { GameQuery } from "../App";
import { Query, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import useGameQueryStore from "../store";
import Game  from "../entities/Game";

export interface Platform {
  id: number;
  name: string;
  slug: string;
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

const useGames = () => {
  const gameQuery = useGameQueryStore(s => s.gameQuery)

  // evertime gameQuery changes it will trigger a new request
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey:["games", gameQuery],
    queryFn:  ({pageParam = 1}) => 
      apiClient
        .get<FetchResponse<Game>>("/games", 
            {     
              params: {
                genres: gameQuery.GenreId, 
                parent_platforms: gameQuery.PlatformId, 
                ordering: gameQuery.Ordering, 
                search: gameQuery.SearchText,
                page: pageParam
              }
            }
        )
        .then(res => res.data),
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.next ? allPages.length + 1 : undefined;
    },
  })
}

export default useGames;

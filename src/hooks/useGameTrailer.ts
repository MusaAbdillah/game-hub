import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import apiClient from "../services/apiClient";
import GameTrailer from "../entities/GameTrailer";


const useGameTrailer = (slug: string) => useQuery({

    queryKey: ["game_trailer", slug],
    queryFn: () =>
        apiClient
        .get<GameTrailer>("/games/"+ slug +"/movies")
        .then(res => res.data),
    staleTime: ms('24h')  , //24h
});


export default useGameTrailer;
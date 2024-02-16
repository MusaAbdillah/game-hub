import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import apiClient from "../services/apiClient";
import  Game  from "../entities/Game";


const useGame = (slug: string) => useQuery({

    queryKey: ["game", slug],
    queryFn: () =>
        apiClient
        .get<Game>("/games/"+ slug)
        .then(res => res.data),
    staleTime: ms('24h')  , //24h
});


export default useGame;
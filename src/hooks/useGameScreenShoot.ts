import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import apiClient from "../services/apiClient";
import { FetchResponse } from "./useData";
import { GameScreenShoot } from "../entities/GameScreenShoot";


const useGameScreenShoot = (slug: string) => useQuery({

    queryKey: ["game_screen_shoot", slug],
    queryFn: () =>
        apiClient
        .get<FetchResponse<GameScreenShoot>>("/games/"+ slug +"/screenshots")
        .then(res => res.data),
    staleTime: ms('24h')  , //24h
});


export default useGameScreenShoot;
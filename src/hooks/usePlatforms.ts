import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/apiClient";
import { platforms } from "../data/platforms";
import ms from 'ms';


interface Platform {
    id: number;
    name: string;
    slug: string;
}

// const usePlatforms = () => useData<Platform>("/platforms/lists/parents") //without react query

const usePlatforms = () => useQuery({
    queryKey: ["platforms"],
    queryFn: () => 
        apiClient
            .get<FetchResponse<Platform>>("/platforms/lists/parents")
            .then(res => res.data),
    staleTime: ms('24h')  , //24h
    initialData: {count: platforms.length, next: "", results: platforms} 
    
}); //with react query

export default usePlatforms;
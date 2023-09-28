import { useQuery } from "@tanstack/react-query";
import useData, { FetchResponse } from "./useData";
import apiClient from "../services/apiClient";
import { platforms } from "../data/platforms";

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
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: {count: platforms.length, next: "", results: platforms} 
    
}); //with react query

export default usePlatforms;
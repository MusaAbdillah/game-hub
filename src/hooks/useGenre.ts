import { useQuery } from "@tanstack/react-query";
import { genres } from "../data/genres";
import apiClient from "../services/apiClient";
import { FetchResponse } from "./useData";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// dynamic, data come from server
// const useGenre = () => useData<Genre>("/genres");

// static, data not come from server
// const useGenre = () => ({data: genres, isLoading: false, error: null}); //without react query

const useGenre = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => 
        apiClient
            .get<FetchResponse<Genre>>("/genres")
            .then(res => res.data),
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: {count: genres.length, results: genres}, // mocking backend response 
}); //with react query

export default useGenre;
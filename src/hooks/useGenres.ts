import { useQuery } from "@tanstack/react-query";
import { genres } from "../data/genres";
import apiClient from "../services/apiClient";
import { FetchResponse } from "./useData";
import ms from 'ms';
import { Genre } from "../entities/Genre";

// dynamic, data come from server
// const useGenres = () => useData<Genre>("/genres");

// static, data not come from server
// const useGenres = () => ({data: genres, isLoading: false, error: null}); //without react query

const useGenres = () => useQuery({
    queryKey: ["genres"],
    queryFn: () => 
        apiClient
            .get<FetchResponse<Genre>>("/genres")
            .then(res => res.data),
    staleTime: ms('24h')  , //24h
    initialData: {count: genres.length, next: "", results: genres}, // mocking backend response 
}); //with react query

export default useGenres;
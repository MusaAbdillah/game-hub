import { genres } from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// dynamic, data come from server
// const useGenre = () => useData<Genre>("/genres");

// static, data not come from server
const useGenre = () => ({data: genres, isLoading: false, error: null});

export default useGenre;
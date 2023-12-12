import { create } from "zustand";

export interface GameQuery {
    GenreId?: number;
    PlatformId?: number;
    Ordering?: string;
    SearchText?: string;
  }

interface GameQueryStore {
    gameQuery: GameQuery;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSortOrder: (sortOrder: string) => void;
    setSearchText: (searchText: string) => void;
}


const useGameQueryStore = create<GameQueryStore>((set) => ({
    gameQuery: {},
    setSearchText: (searchText) => set((store) => ({ gameQuery: { ...store.gameQuery, searchText }})),
    setGenreId: (genreId) => set((store)  => ({ gameQuery: { ...store.gameQuery, genreId}})),
    setPlatformId: (platformId) => set((store)  => ({ gameQuery: { ...store.gameQuery, platformId}})),
    setSortOrder: (sortOrder) => set((store)  => ({ gameQuery: { ...store.gameQuery, sortOrder}}))
}))


export default useGameQueryStore
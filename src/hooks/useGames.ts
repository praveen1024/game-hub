import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import { GameQuery } from "../App";
import apiClient from "../services/api-client";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
    id: number;
    name: string;
    slug: string;
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number;
    rating_top: number
}

const useGames = (
    gameQuery: GameQuery
) =>
    useData<Game>('/games', {
        params: {
            genres: gameQuery.genre?.id,
            platforms: gameQuery.platform?.id,
            ordering: gameQuery.sortOrder,
            search: gameQuery.searchText
        }
    },
        [gameQuery]);


// const useGames = (selectedGenre: Genre | null, selectedPlatform: Platform | null) =>
//     useData<Game>('/games', {
//         params: {
//             genres: selectedGenre?.id,
//             platforms: selectedPlatform?.id
//         }
//     },
//         [selectedGenre?.id, selectedPlatform?.id]);

// interface FetchGamesResponse {
//     count: number;
//     results: Game[]
// }

// const useGames = () => {
//     const [games, setGames] = useState<Game[]>([]);
//     const [error, serError] = useState('');
//     const [isLoading, setLoading] = useState(false);

//     useEffect(() => {
//         const controller = new AbortController();

//         setLoading(true);

//         apiClient.get<FetchGamesResponse>('/games', { signal: controller.signal })
//             .then((res) => {
//                 setGames(res.data.results)
//                 setLoading(false)
//             })
//             .catch(err => {
//                 if (err instanceof CanceledError) return;
//                 serError(err.message)
//                 setLoading(false)
//             });
//         return () => controller.abort();
//     }, [])

//     return { games, error, isLoading };
// }

export default useGames;
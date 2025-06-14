import { CanceledError } from "axios";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import useData from "./useData";
import genres from '../Data/genres'

export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

// const useGenres = () => useData<Genre>('/genres')

const useGenres = () => ({ data: genres, isLoading: false, error: null })

// interface FetchGenresResponse {
//     count: number;
//     results: Genre[]
// }

// const useGenres = () => {
//     const [genres, setGenres] = useState<Genre[]>([]);
//     const [error, serError] = useState('');
//     const [isLoading, setLoading] = useState(false);

//     useEffect(() => {
//         const controller = new AbortController();

//         setLoading(true);

//         apiClient.get<FetchGenresResponse>('/genres', { signal: controller.signal })
//             .then((res) => {
//                 setGenres(res.data.results)
//                 setLoading(false)
//             })
//             .catch(err => {
//                 if (err instanceof CanceledError) return;
//                 serError(err.message)
//                 setLoading(false)
//             });
//         return () => controller.abort();
//     }, [])

//     return { genres, error, isLoading };
// };

export default useGenres;
import genresService, { FetchResponse } from "../services/genres-service";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}
import apiClient from "../services/api-client";
import { useQuery } from "@tanstack/react-query";

const useGenres = () => {
  return useQuery({
    queryKey: ["GetGenres"],
    queryFn: async () => {
      const response = await apiClient.get<FetchResponse<Genre>>("/genres");
      return response.data;
    },
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
  });
};
export default useGenres;

import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { getFiltersbyCategory } from "../services/filters.service";
import { FilterProps } from "../types/FiltersPlp.type";

export const useGetFilters = (optionIDfilter: string): UseQueryResult<FilterProps[], Error> => {
    return useQuery<FilterProps[], Error>({
      queryKey: ["filters"],
      queryFn: () => getFiltersbyCategory(optionIDfilter),
    });
  };
  
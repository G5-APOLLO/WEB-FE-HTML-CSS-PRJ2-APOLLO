import { fetcher } from "./api";
import { FilterProps } from "../types/FiltersPlp.type";

export const getFiltersbyCategory = async (optionIDfilter: string): Promise<FilterProps[]> => {
    const endpoint = `/filters?optionIDfilter=${optionIDfilter}`;
    return fetcher(endpoint);  
}
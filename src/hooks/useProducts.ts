import { useQuery } from '@tanstack/react-query';
import { productService } from '../services/productService';
import type { Item } from '../types/types';

export const useProducts = () => {

    return useQuery<Item[]>({
        queryKey: ['items'],
        queryFn: productService.getAllProducts
    })
};

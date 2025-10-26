import { useQuery } from '@tanstack/react-query';
import { productService } from '../services/productService';
import type { Item } from '../types/types';

export const useProducts = () => {
    return useQuery<Item[]>({
        queryKey: ['items'],
        queryFn: productService.getAllProducts
    })
};

export const useCategories = () => {
    return useQuery<string[]>({
        queryKey: ['categories'],
        queryFn: productService.getAllCategories
    });
};

export const useCategory = (category: string) => {
    return useQuery<Item[]>({
        queryKey: ['category', category],
        queryFn: () => productService.getProductsByCategory(category),
        enabled: !!category
    });
};

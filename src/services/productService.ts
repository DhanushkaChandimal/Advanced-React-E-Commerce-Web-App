import axios from 'axios';
import type { Item } from '../types/types';

const API_BASE_URL = 'https://fakestoreapi.com';

export const productService = {
    getAllProducts: async (): Promise<Item[]> => {
        const response = await axios.get<Item[]>(`${API_BASE_URL}/products`);
        return response.data;
    },
};
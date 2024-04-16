import type { ISearch } from "@/interfaces/ISearch";
import axios from "axios";

const BASE_URL = 'https://localhost:7003/api'

export default class SearchService {
    async search(dataSearch: ISearch): Promise<void> {
        try
        {
            const response = await axios.get(`${BASE_URL}/test/search`, { params: dataSearch });
            return response.data;
        }
        catch
        {
            throw new Error('Error en la busqueda');
        }
    }
}
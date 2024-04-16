import type { ICardTest } from "@/interfaces/ICardTest";
import axios from "axios";
import { ref, type Ref } from "vue";

const BASE_URL = 'https://localhost:7003/api'

export default class SearchService {
    private count: Ref<number>;
    private tests: Ref<ICardTest[]>;

    constructor() {
        this.count = ref(0);
        this.tests = ref([]);
    }

    getCount(): Ref<number> {
        return this.count;
    }
    getTests(): Ref<ICardTest[]> {
        return this.tests;
    }

    async search(dataSearch: string) {
        try {
            const response = await axios.get(BASE_URL + '/test/search?pageNumber=' + dataSearch);
            console.log(response.data.data);
            this.count.value = response.data.data.count;
            this.tests.value = response.data.data.result;
            console.log(response.data.data.result)
        }
        catch {
            throw new Error('Error en la busqueda');
        }
    }
}
import type { INewTest } from "@/interfaces/INewTest";
import axios from "axios";

const BASE_URL = 'https://localhost:7003/api'

export default class TestService {

  static async create(newTest: INewTest):Promise<number> {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post(`${BASE_URL}/test`, newTest, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data.data.id
    } catch (error) {
      console.error('Error al crear el test:', error);
      throw error
    }
  }
}

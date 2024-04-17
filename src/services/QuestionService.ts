import type { ICheckQuestion } from "@/interfaces/ICheckQuestion";
import type { IResultCheck } from "@/interfaces/IResultCheck";
import axios from "axios";

const BASE_URL = 'https://localhost:7003/api'

export default class QuestionService {

  static async check(check: ICheckQuestion):Promise<IResultCheck> {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post(`${BASE_URL}/question/check`, check, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data.data
    } catch (error) {
      console.error('Error al crear el test:', error);
      throw error
    }
  }
}

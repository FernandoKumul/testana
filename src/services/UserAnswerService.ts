import type { INewUserAnswer } from "@/interfaces/INewUserAnswer";
import axios from "axios";

const BASE_URL = 'https://localhost:7003/api'

export default class UserAnswerService {

  static async create(newAnswer: INewUserAnswer):Promise<number> {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post(`${BASE_URL}/user-answer`, newAnswer, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data.data.id
    } catch (error) {
      console.error('Error al crear la respuesta del usuario:', error);
      throw error
    }
  }
}

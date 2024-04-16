import type { INewTest } from "@/interfaces/INewTest";
import type { IUpdateTest } from "@/interfaces/IUpdateTest";
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

  static async update(updateTest: IUpdateTest) {
    try {
      const token = localStorage.getItem('token')
      await axios.put(`${BASE_URL}/test/questions-answers/${updateTest.id}`, updateTest, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
    } catch (error) {
      console.error('Error al actualizar el test:', error);
      throw error
    }
  }

  static async GetById(testId: number) {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get(`${BASE_URL}/test/questions-answers/${testId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data.data
    } catch (error) {
      console.error('Error al obtener el test:', error);
      throw error
    }
  }

  static async GetPreviewById(testId: number) {
    try {
      const token = localStorage.getItem('token')
      const response = await axios.get(`${BASE_URL}/test/preview/${testId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      return response.data.data
    } catch (error) {
      console.error('Error al obtener el test:', error);
      throw error
    }
  }
}

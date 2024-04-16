import axios from "axios";

const BASE_URL = 'https://localhost:7003/api'

export default class UploadService {

  static async submitImage(Image: FormData):Promise<string> {
    try {
      const response = await axios.post(`${BASE_URL}/upload/image`, Image, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      return response.data.data.url
    } catch (error) {
      console.error('Error al subir el archivo:', error);
      throw error
    }
  }
}

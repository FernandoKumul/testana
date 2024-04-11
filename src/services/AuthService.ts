import type { IUser } from "@/interfaces/IUser";
import type { IUserLogin } from "@/interfaces/IUserLogin";
import type { IUserRegister } from "@/interfaces/IUserRegister";
import axios from "axios";
import { ref, type Ref } from "vue";

const BASE_URL = 'https://localhost:7003/api'

export default class UserService {

  public user: Ref<IUser | null>

  constructor() {
    this.user = ref(null)
  }

  async register(dataUser: IUserRegister): Promise<void> {
    try {
      await axios.post(`${BASE_URL}/auth/register`, dataUser)
    } catch (error) {
      console.log(error)
      throw error
    }
  }

  async login(dataLogin: IUserLogin): Promise<void> {
    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, dataLogin)
      const token = response.data.data.token
      localStorage.setItem('token', token)
    } catch (error) {
      console.log(error)
      throw error
    }
  }
}
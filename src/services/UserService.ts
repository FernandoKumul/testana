import { IUserRegister } from './../interfaces/IUserRegister';
import type { IUser } from "@/interfaces/IUser";
import axios, { AxiosError } from "axios";
import { ref, type Ref } from "vue";

const BASE_URL = 'https://localhost:7003/api/'

export default class UserService {
  private users: Ref<IUser[]>
  private user: Ref<IUser>

  constructor() {
    this.users = ref([])
    this.user = ref({}) as Ref<IUser>
  }

  getusers(): Ref<IUser[]> {
    return this.users
  }

  getuser(): Ref<IUser> {
    return this.user
  }

  async register(dataUser: IUserRegister): Promise<void> {
    try {
      await axios.post(`${BASE_URL}/register`, dataUser)
    } catch (e) {
      const error = e as AxiosError
      console.log(error)
      throw new Error(`${error.message} - ${JSON.stringify(error.response?.data)}`)
    }
  }

  async login(dataLogin: { email: string, password: string }): Promise<void> {
    try {
      await axios.post(`${BASE_URL}/login`, dataLogin)
    } catch (e) {
      const error = e as AxiosError
      console.log(error)
      throw new Error(`${error.message} - ${JSON.stringify(error.response?.data)}`)
    }
  }
}
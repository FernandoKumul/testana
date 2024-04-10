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

  async getAll(): Promise<void> {
    try {
      const res = await axios.get(`${BASE_URL}/users`)
      this.users.value = res.data
    } catch (e) {
      const error = e as AxiosError
      console.log(error)
      throw new Error(`${error.message} - ${JSON.stringify(error.response?.data)}`)
    }

    // try {
    //   const res = await fetch(BASE_URL + '/users')
    //   const data = await res.json()
    //   if (!res.ok) {
    //     throw new Error("Status code error: " + res.status + " - " + JSON.stringify(data))
    //   }

    //   this.users.value = data
    // } catch (error) {
    //   console.log(error)
    // }
  }

  async getByEmail(email: string): Promise<void> {
    try {
      const res = await axios.get(`${BASE_URL}/user?email=${email}`)
      this.user.value = res.data
    } catch (e) {
      const error = e as AxiosError
      console.log(error)
      throw new Error(`${error.message} - ${JSON.stringify(error.response?.data)}`)
    }
    // try {
    //   const res = await fetch(BASE_URL + '/user?email=' + email)
    //   const data = await res.json()

    //   if (!res.ok) {
    //     throw new Error("Status code error: " + res.status + " - " + JSON.stringify(data))
    //   }

    //   this.user.value = data
    // } catch (error) {
    //   console.log(error)
    //   throw error
    // }
  }

  async register(dataUser: IUser): Promise<void> {
    try {
      await axios.post(`${BASE_URL}/register`, dataUser)
    } catch (e) {
      const error = e as AxiosError
      console.log(error)
      throw new Error(`${error.message} - ${JSON.stringify(error.response?.data)}`)
    }

    // try {
    //   const res = await fetch(`${BASE_URL}/register`, {
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     method: 'POST',
    //     body: JSON.stringify(dataUser)
    //   })

    //   if (!res.ok) {
    //     const data = await res.json()
    //     throw new Error("Status code error: " + res.status + " - " + JSON.stringify(data))
    //   }

    // } catch (error) {
    //   console.log(error)
    //   throw error
    // }
  }

  async login(dataLogin: { email: string, password: string }): Promise<void> {
    try {
      await axios.post(`${BASE_URL}/login`, dataLogin)
    } catch (e) {
      const error = e as AxiosError
      console.log(error)
      throw new Error(`${error.message} - ${JSON.stringify(error.response?.data)}`)
    }

    // try {
    //   const res = await fetch(`${BASE_URL}/login`, {
    //     headers: {
    //       'Accept': 'application/json',
    //       'Content-Type': 'application/json'
    //     },
    //     method: 'POST',
    //     body: JSON.stringify(dataLogin)
    //   })

    //   if (!res.ok) {
    //     const data = await res.json()
    //     throw new Error("Status code error: " + res.status + " - " + JSON.stringify(data))
    //   }

    // } catch (error) {
    //   console.log(error)
    //   throw error
    // }

  }
}
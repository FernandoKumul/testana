export interface ITestPreview {
  id: number
  title: string
  description: string
  color: string
  visibility: string
  image: string
  random: boolean
  duration: number
  createdDate: string
  likes: number
  evaluateByQuestion: boolean
  dislikes: number
  user: User
}

export interface User {
  id: number
  name: string
  email: string
}
import type { INewQuestion } from "./INewTest"

export interface IUpdateTest {
  id: number
  userId: number
  title: string
  description: string
  color: 'green' | 'blue' | 'purple' | 'orange' | 'yellow' | 'red'
  visibility: 'public' | 'private' | 'unlisted'
  image: string | null
  status: boolean
  random: boolean
  duration: number | null
  evaluateByQuestion: boolean
  tags: string
  questions: INewQuestion[]
  dislikes: number
  likes: number
  // collaborators: []

}
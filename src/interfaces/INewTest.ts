export interface INewTest {
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
}

//Agregar colaboradores, id, dislikes, likes

export interface INewQuestion {
  id?: number
  temId: number
  testId?: number | null
  questionTypeId: number
  description: string
  image: string | null
  order: number
  points: number
  duration: number | null
  answers: INewAnswer[]
  caseSensitivity?: boolean
}

export interface INewAnswer {
  id?: number
  questionId?: number
  temId: number
  text: string
  correct: boolean
}

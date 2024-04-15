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

export interface INewQuestion {
  temId: number
  QuestionTypeId: number
  description: string
  image: string | null
  order: number
  points: number
  duration: number | null
  answers: INewAnswer[]
  CaseSensitivity?: boolean
}

export interface INewAnswer {
  temId: number
  text: string
  correct: boolean
}

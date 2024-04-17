export interface ITestReplyOne {
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
  questions: Question[]
}

interface Question {
  id: number
  testId: number
  questionTypeId: number
  description: string
  image: any
  order: number
  caseSensitivity?: boolean
  points: number
  duration: any
  answers: Answer[]
}

interface Answer {
  id: number
  questionId: number
  text?: string
}

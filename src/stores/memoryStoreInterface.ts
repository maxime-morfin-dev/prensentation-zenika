import type { ResUseStopwatch } from 'vue-timer-hook'

interface State {
  cards: CardInterface[] | any[]
  pairChoice: PairChoiceInterface[] | any[]
  winArray: WinArrayInterface[] | any[]
  isWinner: boolean
  informations: InformationInterface[] | any[]
  actualInformation: InformationInterface | null
  isTimerRunning: boolean
  wrongPairs: number
  totalTimer: ResUseStopwatch | null
}
interface PairChoiceInterface {
  id: number
  value: string
  show: boolean
  informationId: number
}
interface WinArrayInterface {
  id: number
  value: string
  show: boolean
}
interface CardInterface {
  id: number
  value: string
  show: boolean
  informationId: number
  source: string
  alt: string
}

interface InformationInterface {
  id: number
  icone: string
  value: string
  show: boolean
}

export type { State, PairChoiceInterface, WinArrayInterface, CardInterface, InformationInterface }

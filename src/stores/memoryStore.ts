import { defineStore } from 'pinia'

interface State {
  cards: CardInterface[] | any[]
  pairChoice: PairChoiceInterface[] | any[]
  winArray: WinArrayInterface[] | any[]
  isWinner: boolean
  informations: InformationInterface[] | any[]
  actualInformation: InformationInterface | null
  isTimerRunning: boolean
  wrongPairs: number
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
}

interface InformationInterface {
  id: number
  icone: string
  value: string
  show: boolean
}

export const useMemoryStore = defineStore('memory', {
  //state
  state: (): State => ({
    cards: [
      { id: 0, value: '🧑‍🚒', show: false, informationId: 0 },
      { id: 1, value: '🧑‍🚒', show: false, informationId: 0 },
      { id: 2, value: '🇷🇪', show: false, informationId: 1 },
      { id: 3, value: '🇷🇪', show: false, informationId: 1 },
      { id: 4, value: '🛣️', show: false, informationId: 2 },
      { id: 5, value: '🛣️', show: false, informationId: 2 },
      { id: 6, value: '♥️', show: false, informationId: 3 },
      { id: 7, value: '♥️', show: false, informationId: 3 },
      { id: 8, value: '👴🏻', show: false, informationId: 4 },
      { id: 9, value: '👴🏻', show: false, informationId: 4 },
      { id: 10, value: '🤓', show: false, informationId: 5 },
      { id: 11, value: '🤓', show: false, informationId: 5 },
      { id: 12, value: '🧗‍♂️', show: false, informationId: 6 },
      { id: 13, value: '🧗‍♂️', show: false, informationId: 6 },
      { id: 14, value: '🎸', show: false, informationId: 7 },
      { id: 15, value: '🎸', show: false, informationId: 7 }
    ],
    pairChoice: [],
    winArray: [],
    isWinner: false,
    informations: [
      {
        id: 0,
        icone: '🧑‍🚒',
        key: 'pompier',
        value:
          "J'ai été pompier volontaire pendant 8 ans au CIS de Meyrargues dans le sud de la France.",
        show: false
      },
      {
        id: 1,
        icone: '🇷🇪',
        key: 'reunion',
        value:
          "J'ai vécu toute mon enfance a l'île de la Réunion. J'ai quitter l'île pour mes études et je ne suis toujours pas retourner depuis. J'en garde mes meilleurs souvenir et mes meilleurs amis",
        show: false
      },
      {
        id: 2,
        icone: '🛣️',
        key: 'roadtrip',
        value:
          "J'ai eu l'occasion de faire un roadtrip de 6 mois en 2022 en Caravane. C'était une experience incroyable avec des hauts et des bas, et pleins de rencontre et de souvenir géniaux",
        show: false
      },
      {
        id: 3,
        icone: '♥️',
        key: 'love',
        value:
          "Je suis pacsé avec Sandra , un caractère bien trempé et toujours prête pour l'aventure ! Fun fact : elle a vécu à la Réunion aussi ! On vie ensemble avec notre petit chat Gaia !",
        show: false
      },
      {
        id: 4,
        icone: '👴🏻',
        key: 'carsat',
        value:
          "J'ai passé une grosse partie de ma carrière de développeur a la Carsat a Marseille. Ce fut une bonne experience mais je me sentais un peu bloqué en terme de progression c'est en partie pour ça que je suis partie. J'y est tout de même rencontré des très bons amis !",
        show: false
      },
      {
        id: 5,
        icone: '🤓',
        key: 'geek',
        value:
          "J'ai été pendant très longtemps (toujours un peu quand j'ai le temps), un joueur world of warcraft, j'ai arrêter quand le jeux a commencé a s'éloigner un peu trop pour moi de la version vanilla ... ",
        show: false
      },
      {
        id: 6,
        icone: '🧗‍♂️',
        key: 'sport',
        value:
          "J'adore le sport de manière générale, j'aime essayer différent sport en ce moment je fais de l'escalade et de l'aviron en mer. J'ai également fait durant mes années pompier beaucoup de 'street workout' (musculation au poid du corp)",
        show: false
      },
      {
        id: 7,
        icone: '🎸',
        key: 'musique',
        value:
          "Metallica, Metallica, Metallica , Metallica ... what else ?  En vrai j'aime surtout le rock / metal j'aime la musique de manière général : electro chill , slam, rap fr (le tranquille pas le enerver) et la vieille musique française",
        show: false
      }
    ],
    actualInformation: null,
    isTimerRunning: true,
    wrongPairs: 0
  }),
  //getters
  //actions
  actions: {
    toggleCardShow(id: number | undefined) {
      !this.isTimerRunning && (this.isTimerRunning = true)
      if (this.cards.find((card: CardInterface) => card.id == id).show) {
        return
      }
      const card = this.cards.find((card: CardInterface) => card.id == id)
      if (card && !this.winArray.includes(card)) {
        card.show = !card.show
        this.checkFunction(card)
      }
    },
    checkFunction(card: { id: number; value: string; show: boolean; informationId: number }) {
      if (this.pairChoice.length == 0) {
        //If array empty add first choice
        this.pairChoice.push(card)
      } else {
        if (this.pairChoice.length == 2) {
          this.pairChoice.forEach((pair) => {
            this.cards.find((card: CardInterface) => card.id == pair.id).show = false
          })
          this.pairChoice = [card]
          this.wrongPairs++
        } else {
          if (this.pairChoice[0].value == card.value) {
            this.winArray.push(this.pairChoice[0], this.pairChoice[1])
            this.actualInformation = this.informations.find(
              (info) => info.id === this.pairChoice[0].informationId
            )
            this.pairChoice = []
            this.isTimerRunning = false
            if (this.winArray.length == 16) {
              this.isWinner = true
            }
          } else {
            this.pairChoice.push(card)
          }
        }
      }
    },
    toggleTimerRunning() {
      this.isTimerRunning = false
    },
    resetWinArray() {
      this.winArray = []
      this.pairChoice = []
      this.cards.forEach((card) => {
        card.show = false
      })
      this.wrongPairs = 0
    }
  }
})

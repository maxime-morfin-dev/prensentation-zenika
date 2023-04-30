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
  source: string
  alt: string
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
      {
        id: 0,
        value: '🧑‍🚒',
        show: false,
        informationId: 0,
        source: '/images/pompier.svg',
        alt: "image d'un pompier"
      },
      {
        id: 1,
        value: '🧑‍🚒',
        show: false,
        informationId: 0,
        source: '/images/pompier.svg',
        alt: "image d'un pompier"
      },
      {
        id: 2,
        value: '🇷🇪',
        show: false,
        informationId: 1,
        source: '/images/run.svg',
        alt: 'image de la reunion'
      },
      {
        id: 3,
        value: '🇷🇪',
        show: false,
        informationId: 1,
        source: '/images/run.svg',
        alt: 'image de la reunion'
      },
      {
        id: 4,
        value: '🛣️',
        show: false,
        informationId: 2,
        source: '/images/roadtrip.svg',
        alt: 'image de caravane'
      },
      {
        id: 5,
        value: '🛣️',
        show: false,
        informationId: 2,
        source: '/images/roadtrip.svg',
        alt: 'image de caravane'
      },
      {
        id: 6,
        value: '♥️',
        show: false,
        informationId: 3,
        source: '/images/amour.svg',
        alt: 'image de coeur'
      },
      {
        id: 7,
        value: '♥️',
        show: false,
        informationId: 3,
        source: '/images/amour.svg',
        alt: 'image de coeur'
      },
      {
        id: 8,
        value: '👴🏻',
        show: false,
        informationId: 4,
        source: '/images/carsat.svg',
        alt: "image d'un batiment representant la carsat"
      },
      {
        id: 9,
        value: '👴🏻',
        show: false,
        informationId: 4,
        source: '/images/carsat.svg',
        alt: "image d'un batiment representant la carsat"
      },
      {
        id: 10,
        value: '🤓',
        show: false,
        informationId: 5,
        source: '/images/jeux.svg'
      },
      {
        id: 11,
        value: '🤓',
        show: false,
        informationId: 5,
        source: '/images/jeux.svg'
      },
      {
        id: 12,
        value: '🧗‍♂️',
        show: false,
        informationId: 6,
        source: '/images/sport.svg',
        alt: "image de chaussons d'escalade"
      },
      {
        id: 13,
        value: '🧗‍♂️',
        show: false,
        informationId: 6,
        source: '/images/sport.svg',
        alt: "image de chaussons d'escalade"
      },
      {
        id: 14,
        value: '🎸',
        show: false,
        informationId: 7,
        source: '/images/musique.svg',
        alt: 'image de guitare'
      },
      {
        id: 15,
        value: '🎸',
        show: false,
        informationId: 7,
        source: '/images/musique.svg',
        alt: 'image de guitare'
      }
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
          "J'ai été pompier volontaire pendant 8 ans au Centre d'Incendie et de Secours de Meyrargues, dans le sud de la France. En rejoignant les pompiers à l'âge de 19 ans, une partie de mon éducation s'est faite là-bas. J'ai appris de nombreux principes et valeurs qui sont encore ancrés en moi aujourd'hui.",
        show: false
      },
      {
        id: 1,
        icone: '🇷🇪',
        key: 'reunion',
        value:
          "J'ai passé toute mon adolescence à l'île de la Réunion. J'ai quitté l'île pour poursuivre mes études et je n'y suis toujours pas retourné depuis. Mes meilleurs souvenirs proviennent de mon temps passé là-bas ainsi que mes meilleurs amis.",
        show: false
      },
      {
        id: 2,
        icone: '🛣️',
        key: 'roadtrip',
        value:
          "En 2022, j'ai eu l'opportunité de partir en roadtrip pendant six mois en caravane. Cette expérience a été incroyable, avec ses hauts et ses bas, ainsi que de nombreuses rencontres et souvenirs géniaux. Suite à ce roadtrip, ma compagne, mon chat et moi avons décidé de nous installer à Brest.",
        show: false
      },
      {
        id: 3,
        icone: '♥️',
        key: 'love',
        value:
          "Je suis pacsé avec Sandra, une femme au caractère bien trempé et toujours prête pour l'aventure ! Elle est ostéopathe et illustratrice (c'est elle qui a réalisé les icônes que vous pouvez voir). Elle me pousse constamment hors de ma zone de confort, ce qui est génial. Petit fait amusant : elle a également vécu à la Réunion ! Nous vivons ensemble avec notre petit chat Gaia !",
        show: false
      },
      {
        id: 4,
        icone: '👴🏻',
        key: 'carsat',
        value:
          "J'ai consacré une grande partie de ma carrière de développeur à la Carsat à Marseille. Bien que ce fût une bonne expérience, j'avais le sentiment d'être bloqué en termes de progression, c'est donc en partie pour cette raison que j'ai décidé de partir. Néanmoins, j'y ai rencontré de très bons amis et acquis une bonne méthode de travail ! Auparavant, j'ai pu être freelance, responsable de salle dans un restaurant, étudiant entre autres.",
        show: false
      },
      {
        id: 5,
        icone: '🤓',
        key: 'geek',
        value:
          "Pendant très longtemps (et encore un peu aujourd'hui quand j'ai le temps), j'ai été un joueur de World of Warcraft. J'ai finalement arrêté de jouer lorsque le jeu a commencé à s'éloigner un peu trop de la version vanilla pour moi. Depuis quelques années, je me suis tourné vers les jeux de société et la Switch pour assouvir ma passion des jeux (de rôle principalement).",
        show: false
      },
      {
        id: 6,
        icone: '🧗‍♂️',
        key: 'sport',
        value:
          "J'adore le sport de manière générale et j'aime essayer différents sports. En ce moment, je pratique l'escalade et l'aviron en mer. Pendant plusieurs années, j'ai également pratiqué beaucoup de street workout, (muscu avec le poids du corps) et de course à pied .",
        show: false
      },
      {
        id: 7,
        icone: '🎸',
        key: 'musique',
        value:
          "Metallica, Metallica, Metallica, Metallica... Que demander de plus ? En réalité, j'apprécie surtout le rock/metal, mais j'aime la musique en général, que ce soit l'électro chill, le slam, le rap français (plutôt tranquille que énervé) et même la vieille musique française. (Qui est chaud pour un blind test ?)",
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

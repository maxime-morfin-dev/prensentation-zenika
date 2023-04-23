import { defineStore } from 'pinia'
interface State {
   cards: CardInterface[] | any[],
   pairChoice: PairChoiceInterface[] | any[],
   winArray: WinArrayInterface[] | any[]
}
interface PairChoiceInterface {
   id: number,
   value: string,
   show: boolean
}
interface WinArrayInterface {
   id: number,
   value: string,
   show: boolean
}
interface CardInterface {
   id: number,
   value: string,
   show: boolean
}
export const useMemoryStore = defineStore('memory', {
  //state
  state: () : State => ({
    cards: [
      { id: 0, value: '🚀', show: false },
      { id: 1, value: '🚀', show: false },
      { id: 2, value: '🚤', show: false },
      { id: 3, value: '🚤', show: false },
      { id: 4, value: '🚁', show: false },
      { id: 5, value: '🚁', show: false }
    ],
    pairChoice: [],
    winArray: [],
  }),
  //getters
  //actions
  actions : {
      toggleCardShow(id: number | undefined){
         console.log('id', id);
         
         if(this.cards.find((card:CardInterface) => card.id == id).show){
            return
         }
         const card = this.cards.find((card: CardInterface) => card.id == id)
         if(card &&  !this.winArray.includes(card)) {
            console.log(card);
            card.show = !card.show
            console.log(card);
            this.checkFunction(card)
         }
      },
      checkFunction(card:{id: number, value: string, show: boolean}){
         if(this.pairChoice.length == 0){
            //If array empty add first choice
            this.pairChoice.push(card)
         }else{
            if(this.pairChoice.length == 2){
               this.pairChoice.forEach(pair => {
                  this.cards.find((card:CardInterface) => card.id == pair.id).show = false
               });
               this.pairChoice = [card]
            }else{
               if(this.pairChoice[0].value == card.value){
                  this.winArray.push(...arguments, this.pairChoice[0], this.pairChoice[1])
                  this.pairChoice= []
               }else{
                  this.pairChoice.push(card)
               }
            }
         }
      }
  }
})

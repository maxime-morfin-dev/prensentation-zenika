import { defineStore } from 'pinia'

export const useMemoryStore = defineStore('memory', {
  //state
  state: () => ({
    cards: [
      { id: 0, value: '🚀', show: false },
      { id: 1, value: '🚀', show: false },
      { id: 2, value: '🚤', show: false },
      { id: 3, value: '🚤', show: false },
      { id: 4, value: '🚁', show: false },
      { id: 5, value: '🚁', show: false }
    ]
  }),
  //getters
  //actions
  actions : {
      toggleCardShow(id: number | undefined){
         console.log("toggle");
         
         const card = this.cards.find((card) => card.id == id)
         if(card) {
            card.show = !card.show
         }
      }
  }
})

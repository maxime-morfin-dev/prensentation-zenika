import { defineStore } from "pinia";

export const useInformationStore = defineStore('informations', {
   //state
   state : () => ({
      informations: [
         {id: 0, key:'fusée', value:"C'est une fusée", show: false},
         {id: 1, key:'bateau', value:"C'est un bateau", show: false},
         {id: 2, key:'hélicopter', value:"C'est un hélicopter", show: false},
      ]
   }),
   //getter
   //actions
   actions : {
      toggleShowInformation(id: Number | undefined){
         console.log('je passe bien ici, voici l id ', id);
         
         const information = this.informations.find(information => information.id == id)
         if(information){
            information.show = !information.show
         }
      }
   }
})
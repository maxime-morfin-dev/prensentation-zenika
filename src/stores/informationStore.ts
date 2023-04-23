import { defineStore } from "pinia";

export const useInformationStore = defineStore('informations', {
   //state
   state : () => ({
      informations: [
         {id: 0, icone:'🧑‍🚒', key:'pompier', value:"J'ai été pompier volontaire pendant 8 ans au CIS de Meyrargues dans le sud de la France.", show: false},
         {id: 1, icone:'🇷🇪', key:'reunion', value:"J'ai vécu toute mon enfance a l'île de la Réunion. J'ai quitter l'île pour mes études et je ne suis toujours pas retourner depuis. J'en garde mes meilleurs souvenir et mes meilleurs amis", show: false},
         {id: 2, icone:'🛣️', key:'roadtrip', value:"J'ai eu l'occasion de faire un roadtrip de 6 mois en 2022 en Caravane. C'était une experience incroyable avec des hauts et des bas, et pleins de rencontre et de souvenir géniaux", show: false},
         {id: 3, icone:'♥️', key:'love', value:"Je suis pacsé avec Sandra , un caractère bien trempé et toujours prête pour l'aventure ! Fun fact : elle a vécu à la Réunion aussi ! On vie ensemble avec notre petit chat Gaia !", show: false},
         {id: 4, icone:'👴🏻', key:'carsat', value:"J'ai passé une grosse partie de ma carrière de développeur a la Carsat a Marseille. Ce fut une bonne experience mais je me sentais un peu bloqué en terme de progression c'est en partie pour ça que je suis partie. J'y est tout de même rencontré des très bons amis !", show: false},
         {id: 5, icone:'🤓', key:'geek', value:"J'ai été pendant très longtemps (toujours un peu quand j'ai le temps), un joueur world of warcraft, j'ai arrêter quand le jeux a commencé a s'éloigner un peu trop pour moi de la version vanilla ... ", show: false},
         {id: 6, icone:'🧗‍♂️', key:'sport', value:"J'adore le sport de manière générale, j'aime essayer différent sport en ce moment je fais de l'escalade et de l'aviron en mer. J'ai également fait durant mes années pompier beaucoup de 'street workout' (musculation au poid du corp)", show: false},
         {id: 7, icone:'🎸', key:'musique', value:"Metallica, Metallica, Metallica , Metallica ... what else ?  En vrai j'aime surtout le rock / metal j'aime la musique de manière général : electro chill , slam, rap fr (le tranquille pas le enerver) et la vieille musique française", show: false},
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
import { defineStore } from 'pinia'
// import cards from '../card'

export const useCardStore = defineStore('card', {
  state: () => {
    return {
      card: {},
      cards: [],
      lucky: []
    }
  },
  actions: {
    getCards(cards){
      this.cards = [...cards]
      console.log(this.cards)
    },
    randomCard(cards) {
      let i = 0
      while(i< 3){
        let n = Math.floor(Math.random() * cards.length)
        if (!sameNum(n)){
          this.lucky = [...this.lucky, n]
          i += 1
        }
      }
      
    },
    // sameNum(n, lucky) {
    //   for( let i = 0; i < lucky.length; i += 1){
    //     if(n === lucky[i]){
    //       return true
    //     }
       
    //   }
    //   return false
    //    // return lotto.find((e) => (e === n)); // 없으면  undefined로 falsy가 출력됨!!
    // }

  }
})

function sameNum(n) {
  for( let i = 0; i < this.lucky.length; i += 1){
    if(n === this.lucky[i]){
      return true
    }
   
  }
  return false
   // return lotto.find((e) => (e === n)); // 없으면  undefined로 falsy가 출력됨!!
}

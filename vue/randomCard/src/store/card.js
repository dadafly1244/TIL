import { defineStore } from 'pinia'
import cardsData from '../cards.js'

export const useCardStore = defineStore('card', {
  state: () => {
    return {
      card: {},
      cards: [],
      lucky: []
    }
  },
  actions: {
    getCards(){
      this.cards = cardsData
      console.log('getCards',this.cards)
    },
    randomCard() {
      console.log(this.cards.length)
      let n = Math.floor(Math.random() * this.cards.length)
      console.log(n)
      console.log('this.lucky.length',this.lucky.length)
      try {
        if (!sameNum(n, this.lucky)  ){
          if(this.lucky.length < 3) {
            this.lucky = [...this.lucky, n]
            this.card = this.cards[n]
          }else {
            throw `이미 3명의 추첨을 완료했습니다. 당청자는 ${this.cards[this.lucky[0]].name}, ${this.cards[this.lucky[1]].name}, ${this.cards[this.lucky[2]].name} 입니다.`
          }
        }else {
          throw '같은 사람이 추첨되었어요!! 다시 추첨해주세요!'
        }
      }catch (e) {
        alert(e)
      }
      
    }, 
    resetLucky() {
      this.lucky = []
      this.card = []
      alert('추첨된 사람을 모두 삭제했습니다.')
    }

  }
})

function sameNum(n, array) {
  for( let i = 0; i < array.length; i += 1){
    if(n === array[i]){
      return true
    }
   
  }
  return false
   // return lotto.find((e) => (e === n)); // 없으면  undefined로 falsy가 출력됨!!
}

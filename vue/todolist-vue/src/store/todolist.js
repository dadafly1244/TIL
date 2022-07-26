import axios from 'axios'
import { defineStore } from 'pinia'
const API_URL = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/todos'
const API_KEY = 'FcKdtJs202204'
const USER_NAME = 'KDT2_YangDayoung'


export const useTodolistStore = defineStore('workspace',{
  state() {
    return {

    }
  },
  getters: {
    
  },
  actions: {

  }
})

async function request(options) {
  const {url = API_URL, method = '', data = {} } = options
  const res = await axios({
    method,
    url,
    headers: {
      'content-type': 'application/json',
      apikey: API_KEY,
      username: USER_NAME
    },
    data
  })
  return res
}

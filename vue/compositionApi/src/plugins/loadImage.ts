import { App } from 'vue'

export const loadImage = (src: string) => { //이름ㅇ르 가지는 내보내기로 컴포지션 api에서 가지고 올 수 있도록 하기!
  return new Promise(resolve => {
    const img = document.createElement('img')
    img.src = src
    img.addEventListener('load', () => {
      resolve(true)
    })
  })
}


export default {
  install(app: App) {
    app.config.globalProperties.$loadImage = loadImage
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $loadImage: (src: string) => Promise<undefined>
  }
}

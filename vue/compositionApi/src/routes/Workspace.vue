<template>
  <section :key="currentWorkspaceId">
    <div class="inner">
      <TheLoader
        :loading="loading"
        :size="30"
        :width="4"
        class="loader" />
      <div
        class="poster"
        @click="triggerInput">
        <img
          v-if="workspaceStore.workspace.poster"
          :src="workspaceStore.workspace.poster"
          alt="Poster" />
        <input
          ref="inputPoster"
          type="file"
          @change="selectPoster" />
        <div
          v-if="workspaceStore.workspace.poster"
          class="delete-poster"
          @click.stop="deletePoster">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </div>
      <h1
        ref="title"
        class="title"
        placeholder="제목 없음"
        contenteditable
        @keydown.prevent.enter="enterHandler"
        @blur="onInput('title')">
        {{ workspaceStore.workspace.title }}
      </h1>
      <p
        ref="content"
        class="content"
        placeholder="내용을 입력하세요!"
        contenteditable
        @blur="onInput('content')"
        v-html="workspaceStore.workspace.content"></p>
    </div>
  </section>
</template>
<!-- 플러그인을 등록함 tem안에서는 그냥 다 쓸 수 있음! -->

<script setup lang="ts">

import { ref, Ref ,computed, watch} from 'vue' //반응성을 만드는 ref , 계산된 데이터를 만드는 computed //Ref라는 type
import { useRoute } from 'vue-router'
import { loadImage } from '~/plugins/loadImage'
import { useWorkspaceStore } from '~/store/workspace'
//컴포지션 api에서는 this 키워드 않씀!!

const route = useRoute()
const workspaceStore = useWorkspaceStore()
const loading = ref(true)
const inputPoster: Ref<HTMLInputElement | null> = ref(null)  //ref함수가 호출되고 반환되는 것은 null이라는 value로 가지고 있는 Ref객체 
const content: Ref<HTMLParagraphElement | null> = ref(null)
const title: Ref<HTMLHeadingElement | null> = ref(null)
const currentWorkspaceId = computed(() => {
  return route.params.id as string
})

// watch(감시할반응형데이터, 콜백) 
watch(route, async() => {
  loading.value = true //composition api 스크립트 코드에서는 반응형 구조를 가질 수있는 참조 객체에서 실제 반응형 값은 value라는 속성을 가지고 있따!! tem에서는 쓸 필요 없ㅇㅁ
  await workspaceStore.readWorkspace(currentWorkspaceId.value)
  loading.value = false

}) 

;(async function () {
  await workspaceStore.readWorkspace(currentWorkspaceId.value)
  loading.value = false
})() //await를 쓸 수 있는 영역을 만들기 위해서 함수로 묶고 즉시 실행 함수로 묶어라!

function triggerInput() {
  (inputPoster.value as HTMLInputElement).dispatchEvent(new MouseEvent('click'))
}

function  enterHandler(event: KeyboardEvent) {
  if (event.isComposing) return // 한글 중복 입력에 대한 버그 방지
  (content.value as HTMLParagraphElement).focus()
}

async function onInput(type: 'title' | 'content') {
  const titleEl = title.value as HTMLHeadingElement
  const contentEl = content.value as HTMLParagraphElement
  const t = titleEl.textContent as string
  const c = contentEl.innerHTML

  if (!t.trim()) {
    titleEl.innerHTML = ''
  }
  if (!(contentEl.textContent as string).trim()) {
    contentEl.innerHTML = ''
  }
  // 변경된 데이터가 없으면, 서버로 요청하지 않음!
  if (type === 'title' && t === workspaceStore.workspace.title) return
  if (type === 'content' && c === workspaceStore.workspace.content) return

  await workspaceStore.updateWorkspace({
    id: currentWorkspaceId.value,
    title: t,
    content: c
  })
  workspaceStore.findWorkspacePath(currentWorkspaceId.value)
}

function selectPoster(event: Event) {
  const files = (event.target as HTMLInputElement).files as FileList

  for (let i = 0; i < files.length; i += 1) {
    const file = files[i]
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.addEventListener('load', async e => {
      loading.value = true
      await workspaceStore.updateWorkspace({
        id: currentWorkspaceId.value,
        poster: (e.target as FileReader).result as string // base64
      })
      // 워크스페이스의 이미지(poster)를 브라우저에서 로드할 때까지 더 기다림!
      // poster는 null일 수 있음!
      if (typeof workspaceStore.workspace.poster === 'string') {
        await loadImage(workspaceStore.workspace.poster)
      }
      loading.value = false
    })
  }
}

 async function deletePoster() {
  await workspaceStore.updateWorkspace({
    id: currentWorkspaceId.value,
    poster: '-1'
  })
  // 포스터를 정상적으로 삭제한 후,
  // input[type="file"] 요소가 가진 기존 파일 값을 초기화!
  if (workspaceStore.workspace.poster === null) {
    (inputPoster.value as HTMLInputElement).value = ''
  }
}
</script>

<style scoped lang="scss">
section {
  padding: 100px 0 150px;
  .inner {
    max-width: 800px;
    margin: 0 auto;
    padding: 0 20px;
    position: relative;
    .loader {
      position: absolute;
      top: -50px;
    }
    .poster {
      min-height: 30px;
      max-height: 300px;
      margin-bottom: 30px;
      border-radius: 8px;
      background-color: $color-background;
      background-size: cover;
      cursor: pointer;
      overflow: hidden;
      display: flex;
      align-items: center;
      position: relative;
      &:hover {
        background-color: $color-background--hover1;
      }
      img {
        width: 100%;
      }
      input[type="file"] {
        display: none;
      }
      .delete-poster {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        background-color: #FFF;
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        bottom: 20px;
        right: 20px;
        z-index: 1;
        opacity: .3;
        transition: .2s;
        &:hover {
          opacity: 1;
          transform: scale(1.2);
        }
      }
    }
    [contenteditable] {
      outline: none;
      cursor: text;
      position: relative;
      &.title {
        font-size: 42px;
        line-height: 1.3;
        font-weight: 700;
        margin-bottom: 20px;
      }
      &.content {
        font-size: 16px;
        line-height: 1.8;
      }
      // placeholder
      &:empty::before {
        content: attr(placeholder);
        color: rgba($color-font, .3);
      }
      // focus & hover effect
      &::after {
        content: "";
        width: 4px;
        height: 100%;
        position: absolute;
        top: 0;
        left: -20px;   
      }
      &:hover::after {
        background-color: $color-border;
      }
      &:focus::after {
        background-color: $color-highlight;
      }
    }
  }
}
</style>

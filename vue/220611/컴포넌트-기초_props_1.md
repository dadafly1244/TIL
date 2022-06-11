## 컴포넌트_ 기초 

### props

#### 예시 1 
부모 - 자식 간 데이터 통신! 

app.vue

```vue
<template>
  <MyBtn />
  <MyBtn color="red" />
  <MyBtn />
  <MyBtn />
</template>
<script>
import MyBtn from'~/components/MyBtn.vue'
export default{
  components: {
    MyBtn
  }
}
</script>


```

components/MyBtn.vue
```vue
<template>
  <div 
    :style="{backgroundColor: color}"
    class="btn">
    Apple
  </div>
</template>

<!-- 부모 자식간 데이터 통신 -->

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'gray'
    }
  }
}

</script>



<style scoped>
  .btn{
    display:inline-block;
    margin:4px;
    padding:6px 12px;
    border-radius:4px;
    background-color:gray;
    color:white;
    cursor:pointer;
  }
</style>



```


* * * *


#### 예시 2

app.vue
```vue
<template>
  <MyBtn />
  <MyBtn :color="color" />
  <MyBtn />
  <MyBtn />
</template>
<script>
import MyBtn from'~/components/MyBtn.vue'
export default{
  components: {
    MyBtn
  }, 
  data() {
    return {
      color: '#000'
    }
  }
}
</script>

```

components/MyBut.vue
```vue
<template>
  <div 
    :style="{backgroundColor: color}"
    class="btn">
    Apple
  </div>
</template>

<!-- 부모 자식간 데이터 통신 -->

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'gray'
    }
  }
}

</script>



<style scoped>
  .btn{
    display:inline-block;
    margin:4px;
    padding:6px 12px;
    border-radius:4px;
    background-color:gray;
    color:white;
    cursor:pointer;
  }
</style>


```


#### 예제 3 

```vue 
<template>
  <MyBtn />
  <MyBtn :color="color" />
  <MyBtn
    large
    color="orange" />
  <MyBtn />
</template>
<script>
import MyBtn from'~/components/MyBtn.vue'
export default{
  components: {
    MyBtn
  }, 
  data() {
    return {
      color: '#000'
    }
  }
}
</script>



```

components/MyBut.vue

```vue
<template>
  <div 
    :class="{ large }"
    :style="{ backgroundColor: color }"
    class="btn">
    Apple
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'gray'
    },
    large: {
      type: Boolean,
      default: false
    }

  }
}

</script>



<style scoped lang = "scss">
  .btn{
    display:inline-block;
    margin:4px;
    padding:6px 12px;
    border-radius:4px;
    background-color:gray;
    color:white;
    cursor:pointer;
    &.large {
    font-size: 40px;
    padding: 10px, 20px;
  } 
  }
</style>


```


#### 예제 4

컴포넌트를 열리고 닫히는 태그로 만들면 그 중간에 값을 받아서 slot이라는 부분에서 표시해줄 수 있다. 

app.vue
```vue 
<template>
  <MyBtn>Banana</MyBtn>
  <MyBtn :color="color">
    Apple
  </MyBtn>
  <MyBtn
    large
    color="orange">
    Banana
  </MyBtn>
  <MyBtn>Cherry</MyBtn>
</template> 
<script>
import MyBtn from'~/components/MyBtn.vue'
export default{
  components: {
    MyBtn
  }, 
  data() {
    return {
      color: '#000'
    }
  }
}
</script>
```

components/MyBut.vue
```vue

<template>
  <div 
    :class="{ large }"
    :style="{ backgroundColor: color }"
    class="btn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'gray'
    },
    large: {
      type: Boolean,
      default: false
    }
  }
}

</script>


<style scoped lang = "scss">
  .btn{
    display:inline-block;
    margin:4px;
    padding:6px 12px;
    border-radius:4px;
    background-color:gray;
    color:white;
    cursor:pointer;
    &.large {
    font-size: 40px;
    padding: 10px, 20px;
  } 
  }
</style>


```


#### 예제 5 
slot의 기능!!
단순히 text만 받는 것이 아니라 컴포넌트 태그가 열리고 닫히는 것 사이에 있는 모든 내용을 슬롯이라는 태그 부분으로 대체 해서 넣어 주는 개념!! 
app.vue
```vue
<template>
  <MyBtn>Banana</MyBtn>
  <MyBtn :color="color">
    <span style="color: red;">Apple</span>
  </MyBtn>
  <MyBtn
    large
    color="orange">
    Banana
  </MyBtn>
  <MyBtn>Cherry</MyBtn>
</template> 
<script>
import MyBtn from'~/components/MyBtn.vue'
export default{
  components: {
    MyBtn
  }, 
  data() {
    return {
      color: '#000'
    }
  }
}
</script>

```


components/MyBut.vue
``` vue
<template>
  <div 
    :class="{ large }"
    :style="{ backgroundColor: color }"
    class="btn">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: 'gray'
    },
    large: {
      type: Boolean,
      default: false
    }
  }
}

</script>


<style scoped lang = "scss">
  .btn{
    display:inline-block;
    margin:4px;
    padding:6px 12px;
    border-radius:4px;
    background-color:gray;
    color:white;
    cursor:pointer;
    &.large {
      font-size: 40px;
      padding: 10px, 20px;
    } 
  }
</style>


```
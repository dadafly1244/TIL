<template>
  <h1>About!</h1>
  <RouterLink to="/about/name">
    name~
  </RouterLink>
  <RouterView />


  <input
    type="file"
    @change="selectFile" />
</template>

<script>

export default {
 
  methods: {
    selectFile(event) {
      console.log(event)
      const reader = new FileReader()
      for (const file of event.target.files) {
        console.log(file)
        reader.readAsDataURL(file)
        reader.addEventListener('load', e => {
          console.log(e.target.result) //base64
        })
      }
    }
  }

}
//eslint-disable-next-line
</script>



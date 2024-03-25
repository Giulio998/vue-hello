const { createApp, ref } = Vue

  createApp({
    data() {
      const message = ref('Hello vue!')
      return {
        message
      }
    }
  }).mount('#app')
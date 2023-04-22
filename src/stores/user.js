import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', () => {
  const user = ref('')

  const getUser = computed(() => user.value)

  function setUser (value) {
    user.value = value
  }

  return {
    getUser,
    setUser
  }
})

<script setup>

import { useRouter } from 'vue-router'
import { useUserStore } from '@/stores/user'

const router = useRouter()
const usersStore = useUserStore()

function login () {
  usersStore.setUser('user@site.com')
  router.push(import.meta.env.VITE_ROUTE_DEFAULT_PATH)
}

</script>

<template>
  <div class="flex flex-col justify-center items-center min-h-screen">
    <button
      class="uppercase px-4 py-2 rounded-md bg-cyan-700 text-lg text-white"
      @click="login()"
    >
      Login
    </button>
  </div>
</template>

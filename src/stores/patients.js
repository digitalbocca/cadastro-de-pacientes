import { computed, ref } from 'vue'
import { defineStore } from 'pinia'

export const usePatientsStore = defineStore('patients', () => {
  const patients = ref([])
  const loading = ref(true)

  const getPatients = computed(() => patients.value)
  const isLoading = computed(() => loading.value)

  function setPatients (value) {
    patients.value = value
  }

  function setLoading (value) {
    loading.value = value
  }

  return {
    getPatients,
    setPatients,
    isLoading,
    setLoading
  }
})

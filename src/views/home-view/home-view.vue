<script setup>

import axios from 'axios'
import { onMounted } from 'vue'

import { usePatientsStore } from '@/stores/patients'

import ContentLayout from '@/components/content-layout'

const patientsStore = usePatientsStore()

const params = {
  results: 300,
  nat: 'br',
  seed: 'pacientes-app'
}

const tableCols = [
  'Foto',
  'Nome',
  'Nome da Mãe',
  'Nascimento',
  'CPF',
  'CNS',
  'Endereço'
]

const URI = import.meta.env.VITE_API_URL

const fetchPatientsData = async () => {
  try {
    patientsStore.setLoading(true)

    const { results } = (await axios.get(URI, { params })).data

    patientsStore.setPatients(results)
    patientsStore.setLoading(false)
  } catch (e) {
    console.error(e)
  }
}

onMounted(() => {
  fetchPatientsData()
})

</script>

<template>
  <KeepAlive>
    <ContentLayout>
      <template #title>
        Cadastro de Pacientes
      </template>
      <template #content>
        <table class="mt-8">
          <thead>
            <tr
              class="border-cyan-100 border-2"
            >
              <th
                class="py-4 px-8 bg-cyan-50"
                v-for="(label, id) in tableCols"
                :key="id"
              >
                {{ label }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr
              class="border-cyan-100 border-2 text-sm"
              v-for="(patient, id) in patientsStore.getPatients"
              :key="id"
            >
              <td>
                <div class="flex justify-center">
                  <img
                    class="rounded-full"
                    :src="patient.picture.thumbnail"
                    alt=""
                  >
                </div>
              </td>
              <td>
                {{ patient.name.first }} {{ patient.name.last }}
              </td>
              <td>
                Não informado
              </td>
              <td>
                {{ patient.dob.date }}
              </td>
              <td>
                {{ patient.id.value }}
              </td>
              <td>
                CNS
              </td>
              <td>
                {{ patient.location.street.name }} - {{ patient.location.street.number }}
              </td>
            </tr>
          </tbody>
        </table>
      </template>
    </ContentLayout>
  </KeepAlive>
</template>

<style lang="sass" scoped>

tr:hover
  @apply cursor-pointer bg-cyan-50

td
  @apply py-4 px-2 text-center

</style>

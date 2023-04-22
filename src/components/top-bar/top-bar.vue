<script setup>

</script>

<template>
  <div class="top-bar">
    <div class="top-bar__brand">
      <img
        class="w-12"
        src="@/img/logo-paciente.svg"
        alt=""
      >
      <h1 class="text-4xl">
        Pacientes
      </h1>
    </div>
    <div class="top-bar__actions">
      <button class="">
        + Novo
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>

.top-bar {
  @apply flex justify-between items-center;
  @apply px-4 py-6;
  @apply bg-cyan-600 text-white;

  &__brand {
    @apply flex gap-4 items-center;
    font-family: 'Pacifico', sans-serif;
  }

  &__actions {
    @apply flex gap-4 items-center;
  }
}

</style>

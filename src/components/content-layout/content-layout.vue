<template>
  <div class="flex flex-col grow items-center py-8 lg:max-w-5xl mx-auto">
    <h2 class="text-4xl uppercase">
      <slot name="title">
        Fallback Text
      </slot>
    </h2>
    <div class="grow">
      <slot name="content"/>
    </div>
  </div>
</template>

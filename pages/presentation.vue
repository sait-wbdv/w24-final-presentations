<script setup>
const items = [
  "https://picsum.photos/600/800?random=1",
  "https://picsum.photos/600/800?random=2",
  "https://picsum.photos/600/800?random=3",
  "https://picsum.photos/600/800?random=4",
  "https://picsum.photos/600/800?random=5",
  "https://picsum.photos/600/800?random=6",
];
</script>

<template>
  <main>
    <header>
      <h1>Now Presenting</h1>
    </header>
    <UCarousel
      :items="items"
      :ui="{
        item: 'basis-full',
        container: 'rounded-lg',
      }"
      arrows
      class="w-64 mx-auto"
    >
      <template #default="{ item }">
        <img :src="item" class="w-full" draggable="false" />
      </template>

      <template #prev="{ onClick, disabled }">
        <button :disabled="disabled" @click="onClick">Prev</button>
      </template>

      <template #next="{ onClick, disabled }">
        <button :disabled="disabled" @click="onClick">Next</button>
      </template>
    </UCarousel>
  </main>
</template>

<style scoped></style>

<script setup>
const { data: presentations } = await useFetch("/api/agenda");
</script>

<template>
  <main>
    <header>
      <h1>Agenda</h1>
    </header>
    <UContainer>
      <!-- List all presenters here -->
      <ul>
        <li v-for="(presenter, index) in presentations" :key="index">
          <PresentationCard :presenter />
        </li>
      </ul>
    </UContainer>
  </main>
</template>

<style scoped></style>

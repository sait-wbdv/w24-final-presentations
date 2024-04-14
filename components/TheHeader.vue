<script setup>
const route = useRoute();
</script>

<template>
  <header>
    <nav>
      <div>
        <NuxtLink to="/">SAIT LOGO</NuxtLink>
      </div>
      <ul>
        <li><NuxtLink to="/agenda">Agenda</NuxtLink></li>
        <li><NuxtLink to="/presentation">The Show</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped></style>

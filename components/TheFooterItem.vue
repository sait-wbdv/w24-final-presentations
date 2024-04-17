<script setup>
defineProps({
  role: {
    default: "Instructor",
  },
  name: {
    default: "Name",
  },
  email: {
    default: "name@sait.ca",
  },
});
</script>

<template>
  <li class="my-2">
    <p class="font-semibold">{{ role }}</p>
    <h4 class="text-gray-300">{{ name }}</h4>
    <a :href="`mailto:${email}`" class="text-blue-300">{{ email }}</a>
  </li>
</template>

<style scoped></style>

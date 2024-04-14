<script setup>
defineProps({
  name: {
    default: "Presenter Name",
  },
  image: {
    type: String,
  },
  tagLine: {
    default: "SAIT Fast Track Web Developer",
  },
  social: {
    default: [
      {
        platform: "github",
        url: "https://github.com/",
      },
      {
        platform: "linkedIn",
        url: "https://www.linkedin.com/",
      },
    ],
  },
  project: {
    default: {
      title: "A Capstone Project",
      url: "",
      repo: "",
    },
  },
});
</script>

<template>
  <article>
    <div>
      <h3>{{ name }}</h3>
      <p>{{ tagLine }}</p>
      <UIcon v-if="!image" name="fa6-solid:face-grin" />
      <img v-else :src="image" :alt="name" />
    </div>
  </article>
</template>

<style scoped></style>

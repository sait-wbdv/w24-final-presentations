<script setup>
const props = defineProps({
  presentation: {
    name: {
      default: "Presenter Name",
    },
    image: {
      type: String,
    },
    tagLine: {
      default: "SAIT Fast Track Web Developer",
    },
    socials: {
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
  },
});
const { name, image, tagLine, socials, project } = props.presentation;
</script>

<template>
  <article class="py-2">
    <header>
      <div class="flex gap-4 items-center">
        <h3 class="text-xl mb-2">{{ name }}</h3>
        <UAvatar :src="image" :alt="name" size="xl" class="order-first" />
      </div>
      <p class="ml-16 pl-2 max-w-prose">{{ tagLine }}</p>
    </header>
    <div>
      <ul>
        <li v-for="social in socials">
          <NuxtLink :to="social.url">
            <UIcon :name="`fa6-brands-${social.platform}`" />
          </NuxtLink>
        </li>
      </ul>
    </div>
  </article>
</template>

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
  <article
    class="py-6 bg-gray-800 rounded-lg p-6 grid gap-4 grid-cols-4 md:grid-cols-12 max-w-7xl"
  >
    <div class="col-span-2 md:col-span-8">
      <header>
        <div class="flex gap-4 items-center">
          <div>
            <h3
              class="text-xl font-semibold mb-1 bg-gradient-to-r from-blue-300 to-yellow-300 text-transparent bg-clip-text"
            >
              {{ name }}
            </h3>

            <p class="text-gray-200 max-w-prose">{{ tagLine }}</p>
          </div>
          <UAvatar :src="image" :alt="name" size="xl" class="order-first" />
        </div>
      </header>
      <div>
        <ul class="flex gap-2 mt-4">
          <li v-for="social in socials">
            <NuxtLink :to="social.url">
              <UIcon
                :name="`i-fa6-brands:${social.platform}`"
                class="text-lg"
              />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
    <div class="col-span-2 md:col-span-4 flex flex-col">
      <h4 class="text-xl font-semibold">{{ project.title }}</h4>
      <p v-if="project.description" class="text-gray-300">
        {{ project.description }}
      </p>
      <UButton
        color="yellow"
        icon="i-heroicons:link"
        :trailing="true"
        :to="project.url"
        target="_blank"
        class="mt-4 justify-end w-fit transition duration-150 ease-linear"
        :disabled="project.url === null"
        >Visit</UButton
      >
    </div>
  </article>
</template>

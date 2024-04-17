<script setup>
const route = useRoute();
</script>

<template>
  <header class="">
    <nav class="flex justify-between items-center mx-4 my-4">
      <div>
        <NuxtLink to="/" class="flex gap-2 items-end mr-4"
          ><img
            src="/public/images/sait-logo.png"
            alt="Sait Logo"
            class="w-14 md:w-10"
          />
          <div class="hidden md:block">
            <span class="block">Fast Track</span>
            <span class="block">Web Developers</span>
          </div>
        </NuxtLink>
      </div>
      <div class="border-2 rounded-full px-3">
        <ul class="flex gap-4 items-center p-2">
          <li>
            <NuxtLink
              to="/"
              class="hover:text-blue-300 duration-150 ease-linear active:text-blue-400"
              >Agenda</NuxtLink
            >
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

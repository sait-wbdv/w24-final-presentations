<script setup>
const { data: presentations } = await useFetch("/api/agenda");
</script>
<template>
  <main>
    <header class="container mx-auto my-12">
      <h1 class="text-8xl font-semibold">
        <span class="text-3xl block">SAIT Fast Track</span>
        <span
          class="bg-gradient-to-r from-blue-300 to-yellow-300 text-transparent bg-clip-text inline-block"
          >Web Dev</span
        ><span class="block">Capstone Exhibition</span>
      </h1>
      <p class="text-2xl text-gray-200 mb-2 mt-4 lg:mt-6">Winter 2024</p>
      <UDivider label="Web Development" class="my-4 md:my-8 lg:my-12" />
    </header>
    <section class="container mx-auto">
      <header class="mt-12 mb-8 lg:mb-10">
        <h2 class="text-5xl font-semibold text-gray-300">Agenda</h2>
      </header>
      <div>
        <ul>
          <li class="my-8 lg:my-10">
            <h3 class="text-2xl font-semibold mb-2">9-9:10 Check In</h3>
            <p class="text-gray-300">Refreshments provided.</p>
          </li>
          <li class="my-8 lg:my-10">
            <h3 class="text-2xl font-semibold mb-2">Opening Remarks</h3>
            <p class="text-gray-300">
              From the program instructors: Ashlyn Knox and Temitope Elodimuor.
            </p>
          </li>
          <li class="my-8 lg:my-10">
            <h3 class="text-2xl font-semibold mb-2">Presentations</h3>
            <ol>
              <li
                v-for="(presentation, index) in presentations"
                :key="index"
                class="my-3"
              >
                <PresentationCard :presentation :index />
              </li>
            </ol>
          </li>
          <li class="mt-8 lg:mt-12 mb-12 lg:mb-16">
            <h3 class="text-2xl font-semibold mb-2">
              Closing Remarks & After Party
            </h3>
            <p class="text-gray-300">Pizza and soft drinks will be served.</p>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style scoped></style>

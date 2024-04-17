<script setup>
const { data: presentations } = await useFetch("/api/agenda");
</script>
<template>
  <main>
    <header class="container mx-auto my-12">
      <h1 class="text-8xl font-semibold">
        <span class="block">Capstone</span> Presentation Exhibition
      </h1>
      <p class="text-2xl">Winter 2024</p>
    </header>
    <section class="container mx-auto">
      <header class="mt-12 mb-8">
        <h2 class="text-5xl">Agenda</h2>
      </header>
      <div>
        <ul>
          <li class="my-8">
            <h3 class="text-3xl font-semibold mb-2">9-9:10 Check In</h3>
            <p>Coffee will be provided.</p>
          </li>
          <li class="my-8">
            <h3 class="text-3xl font-semibold mb-2">Opening Remarks</h3>
            <p>From Ashlyn Knox and Temitope Elodimuor</p>
          </li>
          <li class="my-8">
            <h3 class="text-3xl font-semibold mb-2">Presentations</h3>
            <ol>
              <li
                v-for="(presentation, index) in presentations"
                :key="index"
                class="my-4"
              >
                <PresentationCard :presentation :index />
              </li>
            </ol>
          </li>
          <li class="my-8">
            <h3 class="text-3xl font-semibold mb-2">After Party</h3>
            <p>Pizza and soft drinks will be served</p>
          </li>
        </ul>
      </div>
    </section>
  </main>
</template>

<style scoped></style>

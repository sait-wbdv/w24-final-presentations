<script setup>
const instructors = [
  {
    role: "Instructor",
    name: "Ashlyn Knox",
    email: "ashlyn.knox@sait.ca",
  },
  {
    role: "Instructor",
    name: "Temitope Elodimuor",
    email: "temitope.elodimuor@sait.ca",
  },
];
const admin = [
  {
    role: "Academic Chair",
    name: "Jessica Whiting",
    email: "jessica.whiting@sait.ca",
  },
  {
    role: "Practicum Coordinator",
    name: "Terry O'Dwyer",
    email: "terry.odwyer@sait.ca",
  },
];
</script>
<template>
  <footer class="py-4 mt-12 px-4 md:px-8">
    <UDivider class="my-6" />
    <section class="flex justify-around">
      <div>
        <ul>
          <TheFooterItem
            v-for="({ role, name, email }, index) in instructors"
            :key="index"
            :role
            :name
            :email
          />
        </ul>
      </div>
      <div class="text-center">
        <h4 class="font-semibold">Pages</h4>
        <ul>
          <li><NuxtLink to="/" class="text-gray-300">Home</NuxtLink></li>
          <li>
            <NuxtLink to="/students" class="text-gray-300">Students</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/about" class="text-gray-300">Course</NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <TheFooterItem
            v-for="({ role, name, email }, index) in admin"
            :key="index"
            :role
            :name
            :email
          />
        </ul>
      </div>
    </section>
    <section class="mt-4">
      <!-- Copyright -->
      <p class="text-center my-4 text-gray-300">
        &copy; 2024 SAIT Web Development Fast Track
      </p>
    </section>
  </footer>
</template>

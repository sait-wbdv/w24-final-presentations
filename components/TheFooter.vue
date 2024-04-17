<template>
  <footer class="py-4 mt-12">
    <section class="flex justify-evenly">
      <div>
        <h3 class="text-xl">Instructors</h3>
        <ul>
          <li>
            <NuxtLink to="https://github.com/ashx3s">
              <UIcon name="fa6-brands:github" />
              <span>Ashlyn Knox</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="https://github.com/ELTemi">
              <UIcon name="fa6-brands:github" />
              <span>Temitope Elodimuor</span>
            </NuxtLink>
          </li>
        </ul>
      </div>
      <div>
        <h3 class="text-xl">Pages</h3>
        <ul>
          <li><NuxtLink to="/">Home</NuxtLink></li>
          <li><NuxtLink to="/students">Students</NuxtLink></li>
          <li><NuxtLink to="/about">Course Info</NuxtLink></li>
        </ul>
      </div>
      <div>
        <h3 class="text-xl">Coordinators</h3>
        <ul>
          <li>
            <h4 class="text-lg">Jessica</h4>
            <p>Academic Chair</p>
            <a href="">email</a>
          </li>
          <li>
            <h4 class="text-lg">Terry</h4>
            <p>Work Integrated Learning Coordinator</p>
            <a href="">email</a>
          </li>
        </ul>
      </div>
    </section>
    <section class="mt-4">
      <!-- Copyright -->
      <p class="text-center">&copy; 2024 SAIT Web Development Fast Track</p>
    </section>
  </footer>
</template>

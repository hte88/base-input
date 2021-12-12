<template>
  <main class="container mx-auto py-24 md:py-40">
    <div class="py-10">
      <div class="text-white text-center relative z-10">
        <h1 class="text-2xl md:text-5xl font-semibold mb-4">VUE-BASE-INPUT</h1>
        <h2 class="text-xs md:text-sm">
          Compontents for VueJS 3 with or without CSS
        </h2>

        <div class="flex items-center justify-center my-10">
          <a>
            <img
              src="@/assets/images/github-brands.svg"
              alt=""
              class="w-7 h-7 mx-2"
            />
          </a>
          <a>
            <img
              src="@/assets/images/npm-brands.svg"
              alt=""
              class="w-7 h-7 mx-2"
            />
          </a>
        </div>
        <router-link
          to="signin"
          class="
            bg-white
            text-sky-dark text-center
            font-semibold
            text-sm
            md:text-xl
            px-4
            py-2
            rounded
            mx-auto
            mt-5
          "
        >
          Demos
        </router-link>
      </div>
    </div>
  </main>
</template>

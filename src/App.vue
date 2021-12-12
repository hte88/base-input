<template>
  <header class="bg-white shadow w-full">
    <div
      class="
        px-4
        py-2
        mx-auto
        max-w-7xl
        sm:px-6
        lg:px-8
        justify-between
        flex
        items-center
      "
    >
      <router-link to="/">
        <h1 class="text-xl md:text-3xl font-bold leading-tight text-gray-900">
          Vue-base-input
        </h1>
      </router-link>
      <div class="flex items-center justify-center">
        <a href="https://github.com/hte88/vue-base-input">
          <img
            src="@/assets/images/github-brands.svg"
            alt=""
            class="w-7 h-7 mx-2"
          />
        </a>
        <a href="https://www.npmjs.com/package/vue-base-input">
          <img
            src="@/assets/images/npm-brands.svg"
            alt=""
            class="w-7 h-7 mx-2"
          />
        </a>
      </div>
    </div>
  </header>
  <router-view />
  <img
    src="@/assets/images/lines.png"
    alt=""
    class="absolute bottom-0 left-0"
  />
  <div class="fixed bottom-0 w-full text-xs text-white flex justify-evenly">
    <a href="https://portfolio-olivier.netlify.app/">© 2022 Olivier MARION</a>
    <a href="https://fontawesome.com/">Icons are from Font Awesome</a>
  </div>
</template>

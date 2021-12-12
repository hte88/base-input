<template>
  <header class="bg-white shadow absolute w-full">
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
        <h1 class="text-3xl font-bold leading-tight text-gray-900">
          Vue-base-input
        </h1>
      </router-link>
      <div class="flex items-center justify-center">
        <a href="https://github.com/hte88/vue-base-input">
          <img
            src="src/assets/images/github-brands.svg"
            alt=""
            class="w-7 h-7 mx-2"
          />
        </a>
        <a href="https://www.npmjs.com/package/vue-base-input">
          <img
            src="src/assets/images/npm-brands.svg"
            alt=""
            class="w-7 h-7 mx-2"
          />
        </a>
      </div>
    </div>
  </header>
  <main class="h-full flex">
    <div class="w-full">
      <router-view />
    </div>
  </main>
</template>
<style>
html,
body,
#app {
  height: 100%;
}
</style>

<template>
  <div class="radialGardient h-full items-center justify-center flex py-10">
    <img
      src="src/assets/images/lines.png"
      alt=""
      class="absolute bottom-0 left-0"
    />
    <div class="text-white text-center relative z-10">
      <h1 class="text-5xl font-semibold mb-4">VUE-BASE-INPUT</h1>
      <h2>Compontents for VueJS 3 with or without CSS</h2>

      <div class="flex items-center justify-center my-10">
        <a>
          <img
            src="src/assets/images/github-brands.svg"
            alt=""
            class="w-7 h-7 mx-2"
          />
        </a>
        <a>
          <img
            src="src/assets/images/npm-brands.svg"
            alt=""
            class="w-7 h-7 mx-2"
          />
        </a>
      </div>
      <router-link to="signin"
        class="
          bg-white
          text-sky-dark text-center
          font-semibold
          text-xl
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
</template>
<style>
.radialGardient {
  background: radial-gradient(
    98.84% 45.07% at 28.29% 31.61%,
    #2f8f83 14.17%,
    #00525f 100%
  );
}
</style>

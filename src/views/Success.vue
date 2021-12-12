<template>
  <div class="radialGardient h-full items-center justify-center flex py-10">
    <img
      src="@/assets/images/lines.png"
      alt=""
      class="absolute bottom-0 left-0"
    />
    <div class="bg-white text-center relative z-10 px-5 py-10 rounded">
      <h1 class="text-5xl font-semibold mb-4">Congratulation</h1>
      <h2>Your account has been created !</h2>

      <router-link
        to="/"
        class="
          bg-sky-dark
          text-white text-center
          font-semibold
          text-xl
          px-4
          py-2
          rounded
          mt-20
          flex
          w-full
          justify-center
        "
      >
        Home
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

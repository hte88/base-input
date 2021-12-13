<template>
  <main class="mx-auto py-24 flex justify-center">
    <div class="w-1/3 px-5">
      <img
        src="@/assets/images/lines.png"
        alt=""
        class="absolute bottom-0 left-0"
      />
      <div class="bg-white text-center relative z-10 px-5 py-10 rounded">
        <h1 class="text-2xl md:text-5xl font-semibold mb-4">Congratulation</h1>
        <h2 class="text-xs md:text-sm">Your account has been created !</h2>

        <router-link
          to="/"
          class="
            bg-sky-dark
            text-white text-center
            font-semibold
            text-sm
            md:text-xl
            px-4
            py-2
            rounded
            mt-10
            md:mt-20
            flex
            w-full
            justify-center
          "
        >
          Home
        </router-link>
      </div>
    </div>
  </main>
</template>

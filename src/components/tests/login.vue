<script>
import baseInput from '@/components/base-input.vue';

export default {
  components: { baseInput },
  data() {
    return {
      email: {
        value: '',
        isValid: null,
      },
      password: {
        value: '',
        isValid: null,
      },
      regexEmail: new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      ),
      regexPassword: new RegExp(
        /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/
      ),
    };
  },
};
</script>
<template>
  <div class="md:flex w-full justify-center items-center h-full my-10 p-2 md:p-5">
    <div class="mx-auto bg-white rounded px-2 md:px-5 py-10">
      <div class="mb-10 text-center w-full">
        <h1 class="mb-2 text-xl uppercase font-bold">Login</h1>
        <button
          type="button"
          class="text-sm md:text-xs underline text-green-500"
        >
          Sign in
        </button>
      </div>
      <base-input
        v-model:value="email.value"
        v-model:isValid="email.isValid"
        name="email"
        label="Email"
        error-message="une est survenue"
        input-class="border-2 rounded-md"
        :regex="regexEmail"
      >
      </base-input>
      <base-input
        v-model:value="password.value"
        v-model:isValid="password.isValid"
        name="password"
        label="Password"
        error-message="une est survenue"
        input-class="border-2 rounded-md mt-8"
        input-type="password"
        :regex="regexPassword"
      >
      </base-input>
    </div>
  </div>
  <div class="flex bg-gray-800 text-gray-300 p-5 relative">
    <span class="absolute right-0 top-0 m-2 text-xs">Console</span>
    <div class="justify-between w-full flex">
      <div class="w-1/2">
        <div>email {</div>
        <div class="ml-5">
          value: <span class="text-green-400">{{ email.value }}</span>
        </div>
        <div class="ml-5">
          isValid: <span class="text-green-400">{{ email.isValid }}</span>
        </div>
        <div>}</div>
      </div>
      <div class="w-1/2">
        <div>password {</div>
        <div class="ml-5">
          value: <span class="text-green-400">{{ password.value }}</span>
        </div>
        <div class="ml-5">
          isValid:
          <span class="text-green-400">{{ password.isValid }}</span>
        </div>
        <div>}</div>
      </div>
    </div>
  </div>
</template>

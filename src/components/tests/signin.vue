<script>
import baseInput from '@/components/base-input.vue';
import Console from '../console.vue';

export default {
  components: { baseInput, Console },
  data() {
    return {
      lastName: {
        value: '',
        isValid: null,
      },
      firstName: {
        value: '',
        isValid: null,
      },
      email: {
        value: '',
        isValid: null,
      },
      password: {
        value: '',
        isValid: null,
      },
      passwordConf: {
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
        <h1 class="mb-2 text-xl uppercase font-bold">Sign in</h1>
        <button
          type="button"
          class="text-sm md:text-xs underline text-green-500"
        >
          Login
        </button>
      </div>
      <div class="flex">
        <base-input
          v-model:value="lastName.value"
          v-model:isValid="lastName.isValid"
          name="lastName"
          label="Last name"
          error-message="une est survenue"
          input-class="w-1/2 border-2 rounded-md mt-8"
          :regex="regexEmail"
        >
        </base-input>
        <base-input
          v-model:value="firstName.value"
          v-model:isValid="firstName.isValid"
          name="firstName"
          label="First name"
          error-message="une est survenue"
          input-class="w-1/2 ml-2 border-2 rounded-md mt-8"
          :regex="regexEmail"
        >
        </base-input>
      </div>
      <base-input
        v-model:value="email.value"
        v-model:isValid="email.isValid"
        name="email"
        label="Email"
        error-message="une est survenue"
        input-class="w-full border-2 rounded-md mt-8"
        :regex="regexEmail"
      >
      </base-input>
      <div class="flex">
        <base-input
          v-model:value="password.value"
          v-model:isValid="password.isValid"
          name="password"
          label="Password"
          error-message="une est survenue"
          input-class="w-1/2 border-2 rounded-md mt-8"
          input-type="password"
          :regex="regexPassword"
        >
        </base-input>
        <base-input
          v-model:value="passwordConf.value"
          v-model:isValid="passwordConf.isValid"
          name="passwordConf"
          label="Password"
          error-message="une est survenue"
          input-class="w-1/2 ml-2 border-2 rounded-md mt-8"
          input-type="password"
          :regex="regexPassword"
        >
        </base-input>
      </div>
    </div>
  </div>
  <div class="bg-gray-800 text-gray-300 p-5 relative text-xs md:text-sm">
    <span class="absolute right-0 top-0 m-2 text-xs">Console</span>
    <div class="w-full">
      <div class="justify-between flex">
        <console :data="{ ...{ name: 'lastName' }, ...lastName }"></console>
        <console :data="{ ...{ name: 'firstName' }, ...firstName }"></console>
      </div>
    </div>
    <div class="w-full">
      <div class="justify-between flex">
        <console :data="{ ...{ name: 'email' }, ...email }"></console>
      </div>
    </div>
    <div class="w-full">
      <div class="justify-between flex">
        <console :data="{ ...{ name: 'password' }, ...password }"></console>
        <console
          :data="{ ...{ name: 'passwordConf' }, ...passwordConf }"
        ></console>
      </div>
    </div>
  </div>
</template>

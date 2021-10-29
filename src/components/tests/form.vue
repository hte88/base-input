<script>
import baseInput from '@/components/base-input.vue';
import Console from '../console.vue';

export default {
  components: { baseInput, Console },
  data() {
    return {
      createForm: {
        0: {
          model: {
            name: 'lastName',
            value: '',
            isValid: null,
          },
          config: {
            ref: '',
            name: '',
            type: 'text',
            label: 'Last name',
            errorMessage: 'une est survenue',
            inputClass: 'mb-2 border-2 rounded-md',
            showBorder: false,
            labelInside:true,
            showIcon: false
          },
        },
        1: {
          model: {
            name: 'firstName',
            value: '',
            isValid: null,
          },
          config: {
            ref: '',
            name: '',
            type: 'text',
            label: 'First name',
            errorMessage: 'une est survenue',
            inputClass: 'mb-2 border-2 rounded-md',
            labelInside:true,
          },
        },
        2: {
          model: {
            name: 'email',
            value: '',
            isValid: null,
          },
          config: {
            ref: '',
            name: '',
            type: 'text',
            label: 'email',
            errorMessage: 'une est survenue',
            inputClass: 'mb-2 border-2 rounded-md',
            labelInside:true,
            regex: new RegExp(
              /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
            ),
            isRequired:true
          },
        },
        3: {
          model: {
            name: 'password',
            value: '',
            isValid: null,
          },
          config: {
            ref: '',
            name: '',
            type: 'password',
            label: 'password',
            errorMessage: 'une est survenue',
            inputClass: 'mb-2 border-2 rounded-md',
            labelInside:true,
            regex: new RegExp(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/
            ),
            isRequired:true
          },
        },
        4: {
          model: {
            name: 'passwordConf',
            value: '',
            isValid: null,
          },
          config: {
            ref: '',
            name: '',
            type: 'password',
            label: 'passwordConf',
            errorMessage: 'une est survenue',
            inputClass: 'mb-2 border-2 rounded-md',
            labelInside:true,
            regex: new RegExp(
              /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$/
            ),
            isRequired:true
          },
        },
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
      <div class="flex flex-col">
        <base-input
          v-for="(inp, index) in createForm"
          :key="index"
          v-model:value="inp.model.value"
          v-model:isValid="inp.model.isValid"
          :inputType="inp.config.type"
          :name="inp.config.name"
          :label="inp.config.label"
          :error-message="inp.config.errorMessage"
          :input-class="inp.config.inputClass"
          :regex="inp.config.regex"
          :isRequired="inp.config.isRequired"
          :showBorder="inp.config.showBorder"
          :showIcon="inp.config.showIcon"
          :labelInside="inp.config.labelInside"
        >
        </base-input>
      </div>
    </div>
  </div>
  <div class="bg-gray-800 text-gray-300 p-5 relative text-xs md:text-sm">
    <span class="absolute right-0 top-0 m-2 text-xs">Console</span>
    <div class="w-full">
      <div class="">
        <console
          v-for="(inp, index) in createForm"
          :key="index"
          :data="inp.model"
        ></console>
      </div>
    </div>
  </div>
</template>

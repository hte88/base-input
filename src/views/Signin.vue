<script>
import vueBaseInput from 'vue-base-input';
import 'vue-base-input/src/assets/vue-base-input.css';
import signinJson from '../static/signin.json';
import check from '@/assets/images/icon-check.svg';
import openedEye from '@/assets/images/icon-opened-eye.svg';
import closedEye from '@/assets/images/icon-closed-eye.svg';
import warning from '@/assets/images/icon-warning.svg';
import {
  shakeMyForm,
  arrayToObject,
  clearCheckLoop,
} from '../static/functions.js';

export default {
  components: {
    vueBaseInput,
  },
  data() {
    return {
      signinJson,
      shakeMyForm,
      arrayToObject,
      clearCheckLoop,
      modelValue: {},
      check: { src: check, alt: 'good' },
      openedEye,
      closedEye,
      warning: { src: warning, alt: 'wrong' },
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.modelValue = this.arrayToObject(this.signinJson, 'name');
    },
    resetForm(model) {
      for (const key in model) {
        this.$refs[model[key].name].callResetValue();
      }
    },
    checkForm() {
      const dataForm = this.modelValue;
      const checkLoop = [];

      for (const key in dataForm) {
        const item = dataForm[key];
        const refItem = this.$refs[item.name];

        if (item.identicalVal !== '' && item.identicalVal !== undefined) {
          if (item.value === dataForm[item.identicalVal].value) {
            refItem.callUpdateIsValid(true);
          } else {
            refItem.callUpdateIsValid(false);
          }
        }
        if (item.isRequired) {
          item.isValid = refItem.isValid;
          if (item.isValid && item.value !== '') {
            checkLoop.push(true);
          } else {
            checkLoop.push(false);
            refItem.callUpdateIsValid(false);
            this.shakeMyForm();
          }
        } else {
          checkLoop.push(true);
        }
      }

      if (clearCheckLoop(checkLoop)) {
        this.resetForm(this.modelValue);
        this.$router.push({ path: 'success' });
      }
    },
  },
};
</script>

<template>
  <main class="h-full items-center flex py-10">
    <div
      class="
        relative
        z-10
        flex flex-col
        w-full
        md:w-3/4
        lg:w-1/2
        mx-auto
        justify-center
        items-center
        h-full
        my-10
        p-2
        md:p-5
      "
    >
      <div class="perspective w-full md:w-3/4 lg:w-1/2">
        <div id="form" class="mx-auto bg-white rounded px-2 md:px-5 py-10">
          <div class="mb-10 text-center w-full">
            <h1 class="mb-2 text-xl uppercase font-bold">Sign In</h1>
            <router-link
              to="signup"
              type="button"
              class="text-sm md:text-xs underline font-bold text-sky-dark"
            >
              Sign Up
            </router-link>
          </div>
          <template v-for="(input, index) in modelValue" :key="index">
            <vue-base-input
              v-model:value="modelValue[input.name].value"
              v-model:is-valid="modelValue[input.name].isValid"
              :input-type="input.type"
              :input-class="input.class"
              :name="input.name"
              :ref="input.name"
              :label="input.label"
              :url-icon-valid="check"
              :url-icon-faild="warning"
              :url-icon-open-eyes="openedEye"
              :url-icon-close-eyes="closedEye"
              :error-message="input.error"
              :regex="input.regex"
              :is-required="input.isRequired"
            >
            </vue-base-input>
          </template>

          <button
            @click.prevent="checkForm"
            type="button"
            class="
              bg-sky-dark
              text-white text-center
              px-4
              py-2
              rounded
              mx-auto
              flex
              mt-5
            "
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </main>
</template>

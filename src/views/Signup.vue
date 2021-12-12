<script>
import vueBaseInput from 'vue-base-input';
import 'vue-base-input/@/assets/vue-base-input-tailwind-css.css';
import signupJson from '../static/signup.json';
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
      signupJson,
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
      this.modelValue = this.arrayToObject(this.signupJson, 'name');
    },
    resetForm(model) {
      for (const key in model) {
        this.$refs[model[key].name].callResetValue();
      }
    },

    checkForm() {
      const dataForm = this.modelValue;
      const checkLoop = [];
      const checkIdentical = [];

      for (const key in dataForm) {
        const item = dataForm[key];
        const refItem = this.$refs[item.name];
        if (item.identicalVal !== '') {
          checkIdentical.push({ name: item.name, value: item.value });
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

      console.log(checkIdentical);

      if (clearCheckLoop(checkLoop)) {
        this.resetForm(this.modelValue);
        this.$router({ path: 'success' });
      }
    },
  },
};
</script>

<template>
  <div class="radialGardient h-full items-center flex py-10">
    <img
      src="@/assets/images/lines.png"
      alt=""
      class="absolute bottom-0 left-0"
    />
    <div
      class="
        relative
        z-10
        flex flex-row
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
      <div class="perspective w-full md:w-5/6">
        <div
          id="form-login"
          class="mx-auto bg-white rounded px-2 md:px-5 py-10"
        >
          <div class="mb-10 text-center w-full">
            <h1 class="mb-2 text-xl uppercase font-bold">Sign Up</h1>
            <router-link
              to="signin"
              type="button"
              class="text-sm md:text-xs underline font-bold text-sky-dark"
            >
              Sign In
            </router-link>
          </div>
          <div class="grid grid-cols-2 gap-5">
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
                :label-inside="true"
                :showBorder="true"
                :showIcon="false"
                :is-required="input.isRequired"
              >
              </vue-base-input>
            </template>
          </div>
          <div class="flex items-center justify-evenly mt-10">
            <button
              @click.prevent="resetForm(this.modelValue)"
              type="button"
              class="bg-sky-dark text-white text-center px-4 py-2 rounded"
            >
              Reset
            </button>
            <button
              @click.prevent="checkForm"
              type="button"
              class="bg-sky-dark text-white text-center px-4 py-2 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
      <div
        v-if="false"
        class="
          bg-white
          rounded
          px-2
          md:px-5
          py-10
          mt-10
          w-full
          md:w-3/4
          lg:w-1/2
        "
      >
        <h1 class="mb-2 text-xl uppercase font-bold">Console</h1>
        <ul
          v-for="(item, index) in modelValue"
          :key="index"
          class="mt-5 text-xs md:text-sm"
        >
          <li class="capitalize font-semibold underline">{{ item.name }}</li>
          <li><span class="font-semibold">Value:</span> {{ item.value }}</li>
          <li>
            <span class="font-semibold">Is Valid:</span> {{ item.isValid }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style>
@keyframes shake {
  0% {
    transform: translateX(0);
  }
  12.5% {
    transform: translateX(-6px) rotateY(-5deg);
  }
  37.5% {
    transform: translateX(5px) rotateY(4deg);
  }
  62.5% {
    transform: translateX(-3px) rotateY(-2deg);
  }
  87.5% {
    transform: translateX(2px) rotateY(1deg);
  }
  100% {
    transform: translateX(0);
  }
}

.shake {
  animation: shake 400ms ease-in-out;
}
.perspective {
  -webkit-perspective: 600px;
  -ms-perspective: 600px;
  perspective: 600px;
}
.radialGardient {
  background: radial-gradient(
    98.84% 45.07% at 28.29% 31.61%,
    #2f8f83 14.17%,
    #00525f 100%
  );
}
</style>

<script>
import vueBaseInput from 'vue-base-input';
import 'vue-base-input/src/assets/vue-base-input-tailwind-css.css';
import signinJson from '../static/signin.json';
import check from '@/assets/images/icon-check.svg';
import openedEye from '@/assets/images/icon-opened-eye.svg';
import closedEye from '@/assets/images/icon-closed-eye.svg';
import warning from '@/assets/images/icon-warning.svg';

export default {
  components: {
    vueBaseInput,
  },
  data() {
    return {
      signinJson,
      modelValue: {},
      check: { src: check, alt: 'good' },
      openedEye,
      closedEye,
      warning: { src: warning, alt: 'wrong' },
    };
  },
  created() {
    const arrayToObject = (array, keyField) =>
      array.reduce((obj, item) => {
        obj[item[keyField]] = item;
        return obj;
      }, {});
    this.modelValue = arrayToObject(this.signinJson, 'name');
  },
  methods: {
    checkForm() {
      const dataForm = this.modelValue;
      const checkLoop = [];

      for (const key in dataForm) {
        const item = dataForm[key];
        const refItem = this.$refs[item.name];
        if (item.isRequired) {
          item.isValid = refItem.isValid;
          if (item.isValid && item.value !== '') {
            checkLoop.push(true);
          } else {
            checkLoop.push(false);
            refItem.callUpdateIsValid(false);
            document.getElementById('form-login').classList.add('shake');
            setTimeout(() => {
              document.getElementById('form-login').classList.remove('shake');
            }, 500);
          }
        } else {
          checkLoop.push(true);
        }
      }

      const clearCheckLoop = [...new Set(checkLoop)];
      return clearCheckLoop.length === 1 && [clearCheckLoop] ? true : false;
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
        <div
          id="form-login"
          class="mx-auto bg-white rounded px-2 md:px-5 py-10"
        >
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

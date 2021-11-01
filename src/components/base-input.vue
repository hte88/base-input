<script>
import close from '@/assets/images/icon-close.svg';
import check from '@/assets/images/icon-check.svg';
import openedEye from '@/assets/images/icon-opened-eye.svg';
import closedEye from '@/assets/images/icon-closed-eye.svg';
import warning from '@/assets/images/icon-warning.svg';

export default {
  model: {
    prop: 'title',
    event: 'change',
  },
  props: {
    value: {
      type: String,
    },
    isValid: {
      type: Boolean,
      default: null,
    },
    inputType: {
      type: String,
      default: 'text',
    },
    inputClass: {
      type: String,
      default: '',
    },
    isRequired: {
      type: Boolean,
      default: false,
    },
    showValidate: {
      type: Boolean,
      default: true,
    },
    showBorder: {
      type: Boolean,
      default: true,
    },
    showIcon: {
      type: Boolean,
      default: true,
    },
    errorMessage: {
      type: String,
      default: '',
    },
    icon: {
      type: String,
      default: '',
    },
    regex: {
      type: Object,
      default: null,
      example: '^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{10,}$'
    },
    labelInside: {
      type: Boolean,
      default: false,
    },
    customStyle: {
      type: Object,
      default() {
        return {
          borderIsValid: 'border-green-500',
          borderIsDefault: 'border-gray-200',
          borderIsBad: 'border-red-500',
          errorMessage: 'text-red-700',
          label: 'text-gray-500',
          inputBgFull: 'bg-gray-50 rounded-md',
          inputBgEmpty: 'bg-gray-100 rounded-md',
        };
      },
    },
  },
  computed: {
    getValueLength() {
      return this.value !== '' && this.value !== null ? this.value.length : '';
    },
    getIconCheck() {
      if (this.isValidate === false) {
        return warning;
      } else {
        return check;
      }
    },
    getIconEyes() {
      if (this.showPassword) {
        return openedEye;
      } else {
        return closedEye;
      }
    },
    classBorder() {
      return this.isValidate && this.showBorder && this.returnValueByLength(this.getValueLength, true, false, 1)
        ? this.customStyle.borderIsValid
        : this.isValidate === false
        ? this.customStyle.borderIsBad
        : this.customStyle.borderIsDefault
    }
  },
  mounted() {
    if (this.getValueLength > 1) {
      this.update(this.value);
    }
  },
  watch: {
    value(value) {
      this.update(value);
    },
    regex(){
      this.update(this.value);
    }
  },
  data() {
    return {
      isValidate: this.isValid,
      showErrorMessage: false,
      showPassword: false,
    };
  },
  methods: {
    returnValueByLength(value, correct, incorrect, number) {
      return value >= number ? correct : incorrect;
    },
    testRegex(value) {
      if (this.regex !== null && this.regex !== '') {
        const regex = new RegExp(this.regex);
        return regex.test(value)
      } else {
        return true
      }
    },
    update(value) {
      if (this.isRequired && this.testRegex(value) && value.length >= 1) {
        this.isValidate = true;
      } else if (
        this.isRequired &&
        !this.testRegex(value) &&
        value.length >= 1
      ) {
        this.isValidate = false;
      } else if (!this.isRequired && value.length >= 1) {
        this.isValidate = true;
      } else {
        this.isValidate = null;
      }
      this.$emit('update:value', value);
      this.$emit('update:isValid', this.isValidate);
    },
  },
};
</script>
<template>
  <div
    :class="[classBorder, inputClass]"
    class="relative"
  >
    <div
      :class="[
        returnValueByLength(
          getValueLength,
          customStyle.inputBgFull,
          customStyle.inputBgEmpty,
          1
        ),
        'flex justify-between z-0 relative',
      ]"
    >
      <input
        v-model="value"
        v-bind="$attrs"
        :class="[labelInside ? 'pt-4 pb-2' : 'py-3', 'input']"
        :placeholder="$attrs.placeholder ? $attrs.placeholder : ' '"
        :type="showPassword ? 'text' : inputType"
      />
      <button
        v-if="isValidate !== null && getValueLength >= 1 && showIcon"
        @click.prevent="showErrorMessage = !showErrorMessage"
        :class="[
          returnValueByLength(
            getValueLength,
            customStyle.inputBgFull,
            customStyle.inputBgEmpty,
            1
          ),
          'button-icon',
        ]"
        type="button"
      >
        <img class="w-5" :src="getIconCheck" />
      </button>
      <div
        :class="[
          returnValueByLength(
            getValueLength,
            customStyle.inputBgFull,
            customStyle.inputBgEmpty,
            1
          ),
          'flex',
        ]"
      >
        <button
          v-if="showIcon && inputType === 'password'"
          @click.prevent="showPassword = !showPassword"
          class="button-icon"
          type="button"
        >
          <img :src="getIconEyes" class="w-5" />
        </button>
        <div v-if="icon" class="button-icon">
          <img :src="require(`@assets/images/${icon}`)" class="w-5" />
        </div>
      </div>
      <label
        v-if="$attrs.label && !$attrs.placeholder"
        :for="$attrs.name"
        :class="[labelInside ? 'labelInside' : 'labelOutside', customStyle.label]"
      >
        {{ $attrs.label }}
        <span v-if="isRequired" class="px-1">*</span>
      </label>
    </div>
    <div class="absolute">
      <transition name="fade">
        <p
          v-if="showErrorMessage && isValidate === false && errorMessage"
          :class="[customStyle.errorMessage, 'mt-1 text-xs md:text-sm']"
        >
          {{ errorMessage }}
        </p>
      </transition>
    </div>
  </div>
</template>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.input {
  @apply mx-auto focus:outline-none border-0 ring-0 focus:ring-0 appearance-none bg-transparent w-full block pl-2 text-xs md:text-sm;
}
.button-icon {
  @apply justify-center items-center flex w-8 mr-2;
}
.labelOutside {
  @apply absolute inset-y-0 left-2 items-center flex z-[-1] duration-300 transform-none text-xs md:text-sm;
}
.labelInside {
  @apply absolute top-0 bottom-0 left-2 items-center flex z-[-1] duration-300 transform-none text-xs md:text-sm;
}

input:focus-within ~ label.labelInside,
input:not(:placeholder-shown) ~ label.labelInside {
  @apply transform top-0 bottom-auto text-xs;
}

input:focus-within ~ label.labelOutside,
input:not(:placeholder-shown) ~ label.labelOutside {
  @apply transform -translate-y-9 -translate-x-2;
}
</style>

<script>
import check from '@/assets/images/icon-check.svg';
import openedEye from '@/assets/images/icon-opened-eye.svg';
import closedEye from '@/assets/images/icon-closed-eye.svg';
import warning from '@/assets/images/icon-warning.svg';
import baseInput from '@/components/base-input.vue';

export default {
  components: { baseInput },
  data() {
    return {
      check,
      warning,
      openedEye,
      closedEye,
      modelValue: {
        value: '',
        isValid: ''
      },
      customConfig: {
        type: 'text',
        label: 'label',
        errorMessage: 'error message',
        inputClass: 'mb-2 border-2 rounded-md mt-8',
        regex: null,
        showBorder: true,
        showIcon: true,
        iconValid: check,
        iconWarning: warning,
        iconOpen: openedEye,
        iconClose: closedEye,
        isRequired: true,
        isValid: true,
        labelInside: false,
      },
    };
  },
};
</script>
<template>
  <div class="md:flex w-full justify-evenly h-full">
    <div class="bg-white border-r border-gray-200">
      <h1 class="my-5 font-bold text-center">Configuration</h1>
      <base-input
        v-model:value="customConfig.label"
        input-type="text"
        label="Label"
        :custom-style="{ 'inputBgEmpty': 'bg-gray-100', 'inputBgFull': 'bg-transparent', 'borderIsDefault': 'border-b border-t border-gray-100' }"
        :label-inside="true"
        :show-icon="false"
      >
      </base-input>
      <base-input
        v-model:value="customConfig.type"
        inputType="text"
        label="Type"
        :custom-style="{ 'inputBgEmpty': 'bg-gray-100', 'inputBgFull': 'bg-transparent', 'borderIsDefault': 'border-b border-gray-100' }"
        :label-inside="true"
        :show-icon="false"
      >
      </base-input>
      <base-input
        v-model:value="customConfig.errorMessage"
        inputType="text"
        label="Error message"
        :custom-style="{ 'inputBgEmpty': 'bg-gray-100', 'inputBgFull': 'bg-transparent', 'borderIsDefault': 'border-b border-gray-100' }"
        :label-inside="true"
        :show-icon="false"
      >
      </base-input>
      <base-input
        v-model:value="customConfig.inputClass"
        inputType="text"
        label="Class on input"
        :custom-style="{ 'inputBgEmpty': 'bg-gray-100', 'inputBgFull': 'bg-transparent', 'borderIsDefault': 'border-b border-gray-100' }"
        :label-inside="true"
        :show-icon="false"
      >
      </base-input>
      <base-input
        v-model:value="customConfig.regex"
        inputType="text"
        label="Regex"
        :custom-style="{ 'inputBgEmpty': 'bg-gray-100', 'inputBgFull': 'bg-transparent', 'borderIsDefault': 'border-b border-gray-100' }"
        :label-inside="true"
        :show-icon="false"
      >
      </base-input>
      <div class="flex justify-between mt-2 px-2">
        <label for="required">Is required ?</label>
        <input v-model="customConfig.isRequired" id="required" type="checkbox" />
      </div>
      <div class="flex justify-between mt-2 px-2">
        <label for="border">show border ?</label>
        <input v-model="customConfig.showBorder" id="border" type="checkbox" />
      </div>
      <div class="flex justify-between mt-2 px-2">
        <label for="icon">show icons ?</label>
        <input v-model="customConfig.showIcon" id="icon" type="checkbox" />
      </div>
      <div class="flex justify-between mt-2 px-2">
        <label for="label">Label inside or outside ?</label>
        <input v-model="customConfig.labelInside" id="label" type="checkbox" />
      </div>
   </div>
    <div class="mx-auto bg-white rounded px-2 md:px-5 py-10 my-10">
      <div class="mb-10 text-center w-full">
        <h1 class="mb-2 text-xl uppercase font-bold">Test me</h1>
        <p>Custom this input for testing a plugin</p>
      </div>
      <base-input
          v-for="(item, index) in 3"
          :key="index"
          v-model:value="modelValue.value"
          v-model:isValid="modelValue.isValid"
          :inputType="customConfig.type"
          :name="customConfig.name"
          :label="customConfig.label"
          :icon="customConfig.iconValid"
          :url-icon-valid="customConfig.iconValid"
          :url-icon-faild="warning"
          :url-icon-open-eyes="openedEye"
          :url-icon-close-eyes="closedEye"
          :error-message="customConfig.errorMessage"
          :input-class="customConfig.inputClass"
          :regex="customConfig.regex"
          :is-required="customConfig.isRequired"
          :show-border="customConfig.showBorder"
          :show-icon="customConfig.showIcon"
          :label-inside="customConfig.labelInside"
      >
      </base-input>
    </div>
  </div>
  <div class="flex bg-gray-800 text-gray-300 p-5 relative">
    <span class="absolute right-0 top-0 m-2 text-xs">Console</span>
    <div class="justify-between w-full flex">
      <div class="w-1/2">
        <div>modelValue {</div>
        <div class="ml-5">
          value: <span class="text-green-400">{{ modelValue.value }}</span>
        </div>
        <div class="ml-5">
          isValid: <span class="text-green-400">{{ modelValue.isValid }}</span>
        </div>
        <div>}</div>
      </div>
    </div>
  </div>
</template>

<script>
import baseInput from '@/components/base-input.vue';

export default {
  components: { baseInput },
  data() {
    return {
      modelValue: {
        value: '',
        isValid: ''
      },
      customConfig: {
        type: 'text',
        label: 'label',
        errorMessage: 'error message',
        inputClass: 'mb-2 border-2 rounded-md',
        regex: null,
        showValidate: true,
        showBorder: true,
        showIcon: true,
        icon: '',
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
    <div class="bg-white">
      <h1>Configuration</h1>
      <base-input
        v-model:value="customConfig.label"
        input-type="text"
        label="Label"
        :custom-style = "{ 'inputBgEmpty': 'bg-transparent' }"
        :label-inside="true"
        :show-validate="false"
      >
      </base-input>
      <base-input
        v-model:value="customConfig.type"
        inputType="text"
        label="Type"
        :custom-style = "{ 'inputBgEmpty': 'bg-transparent' }"
        :label-inside="true"
        :show-validate="false"
      >
      </base-input>
      <base-input
        v-model:value="customConfig.errorMessage"
        inputType="text"
        label="Error message"
        :custom-style = "{ 'inputBgEmpty': 'bg-transparent' }"
        :label-inside="true"
        :show-validate="false"
      >
      </base-input>
      <base-input
        v-model:value="customConfig.inputClass"
        inputType="text"
        label="Class on input"
        :custom-style = "{ 'inputBgEmpty': 'bg-transparent' }"
        :label-inside="true"
        :show-validate="false"
      >
      </base-input>
      <base-input
        v-model:value="customConfig.regex"
        inputType="text"
        label="Regex"
        :custom-style = "{ 'inputBgEmpty': 'bg-transparent' }"
        :label-inside="true"
        :show-validate="false"
      >
      </base-input>
      <div class="flex justify-between mt-2 px-2">
        <label for="validate">show validate ?</label>
        <input v-model="customConfig.showValidate" id="validate" type="checkbox" />
      </div>
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
      </div>
      <base-input
        v-model:value="modelValue.value"
        v-model:isValid="modelValue.isValid"
          :inputType="customConfig.type"
          :name="customConfig.name"
          :label="customConfig.label"
          :error-message="customConfig.errorMessage"
          :input-class="customConfig.inputClass"
          :regex="customConfig.regex"
          :isRequired="customConfig.isRequired"
          :showValidate="customConfig.showValidate"
          :showBorder="customConfig.showBorder"
          :showIcon="customConfig.showIcon"
          :labelInside="customConfig.labelInside"
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

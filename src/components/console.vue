<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },
};
</script>
<template>
  <div class="w-1/2">
    <div>{{ data.name }} {</div>
    <div class="ml-5">
      value: <span class="text-green-400">{{ data.value }}</span>
    </div>
    <div class="ml-5">
      isValid: <span class="text-green-400">{{ data.isValid }}</span>
    </div>
    <div>}</div>
  </div>
</template>

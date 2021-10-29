<script>

export default {
    data() {
        return {
            showCode: false
        }
    }
}
</script>
<template>
  <div class="flex flex-col mt-10 min-h-screen/6">
      <div class="flex flex-col h-full border border-gray-200 opacity-100 dark:border-gray-700 overflow-hidden rounded-lg">
          <div class="flex items-center md:items-end justify-between p-2 pr-4 bg-white border-b border-gray-200 dark:border-gray-700 dark:bg-gray-800 sm:flex-row sm:items-center">
              <p class="px-4 py-2">Example</p>
              <button type="button" @click.prevent="showCode = !showCode" class="flex items-center px-4 py-2 space-x-3 text-gray-600 transition-colors duration-200 transform border rounded-lg focus:border-teal-500 focus:ring focus:ring-primary focus:ring-opacity-40 dark:text-gray-200 dark:border-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none">
                  Show Code
              </button>
          </div>
          <div v-show="!showCode" class="relative flex flex-col z-0 h-full overflow-hidden bg-gray-100 ">
              <slot name="preview"></slot>
          </div>
          <div v-show="showCode" class="relative z-0 flex justify-center h-full overflow-hidden bg-gray-100">
              <slot name="code"></slot>
          </div>
      </div>
  </div>
</template>

<script>
import baseInput from '@/components/base-input.vue';
import tab from '@/components/tab.vue';
import Login from '@/components/tests/login.vue';
import Signin from '@/components/tests/signin.vue';
import Form from '@/components/tests/form.vue';
import Custom from '@/components/tests/custom.vue';

import '@/assets/style/base-input.css';

export default {
  components: { baseInput, tab, Login, Signin, Form, Custom },
  data() {
    return {

    };
  },
};
</script>

<template>
  <div>
    <div class="w-full md:w-2/3 mx-auto justify-center px-2 my-5">

      <tab title="Custom Input">
        <template v-slot:preview>
          <Custom></Custom>
        </template>
        <template v-slot:code></template>
      </tab>

      <tab title="Login">
        <template v-slot:preview>
          <Login></Login>
        </template>
        <template v-slot:code></template>
      </tab>

      <tab title="Signin">
        <template v-slot:preview>
          <Signin></Signin>
        </template>
        <template v-slot:code> </template>
      </tab>

      <tab title="Form">
        <template v-slot:preview>
          <Form></Form>
        </template>
        <template v-slot:code> </template>
      </tab>
    </div>
  </div>
</template>

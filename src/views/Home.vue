<script>
import baseInput from '@/components/base-input.vue';
import tab from '@/components/tab.vue';
import Login from '@/components/tests/login.vue';
import Signin from '@/components/tests/signin.vue';
import Form from '@/components/tests/form.vue';

export default {
  components: { baseInput, tab, Login, Signin, Form },
  data() {
    return {
      email: {
        value: '',
        isValid: null,
      },
      password: {
        value: '',
        isValid: null,
      },
      hello2: '',
      hello3: '',
      regexEmail: new RegExp(
        /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      ),
    };
  },
};
</script>

<template>
  <div>
    <div class="w-full md:w-2/3 mx-auto justify-center px-2 my-5">
      <tab>
        <template v-slot:preview>
          <Login></Login>
        </template>
        <template v-slot:code></template>
      </tab>

      <tab>
        <template v-slot:preview>
          <Signin></Signin>
        </template>
        <template v-slot:code> </template>
      </tab>

      <tab>
        <template v-slot:preview>
          <Form></Form>
        </template>
        <template v-slot:code> </template>
      </tab>
    </div>
  </div>
</template>
<style scoped>
.console {
}
</style>

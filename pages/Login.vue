<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="onSubmit">
      <input type="text">
      <button type="submit">Login</button>
    </form>
    <nuxt-link to="/">Home</nuxt-link>
  </div>
</template>

<script lang="ts">
  // import {Vue} from 'vue-property-decorator';
  // // import Vue from 'vue'
  //
  // export default Vue.extend({
  //   name: 'Login',
  //   layout: 'empty',
  //   methods: {
  //     onSubmit() {
  //       this.$store.dispatch('login');
  //       console.log(this.$route);
  //
  //       // this.$route.push('/');
  //     },
  //   }
  // })

  import {Component, Vue} from 'vue-property-decorator'
  // import 'vue-router/types/vue'

  @Component
  export default class MyComp extends Vue {
    onSubmit() {console.log(this.$route)}
  }
</script>

<style scoped>

</style>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="collapse navbar-collapse">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <nuxt-link exact no-prefetch active-class="active" class="nav-link" to="/">
            Home
          </nuxt-link>
        </li>
        <li class="nav-item active">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/about">
            About
          </nuxt-link>
        </li>
        <li class="nav-item active">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/blog">
            Blog
          </nuxt-link>
        </li>
        <li class="nav-item active">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/users">
            Users
          </nuxt-link>
        </li>
        <li class="nav-item active">
          <nuxt-link no-prefetch active-class="active" class="nav-link" to="/login">
            Login
          </nuxt-link>
        </li>
        <li class="nav-item active">
          <nuxt-link @click.prevent="logout" no-prefetch active-class="active" class="nav-link" to="#">
            Logout
          </nuxt-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
  export default {
    methods: {
      logout() {
        this.$store.dispatch('logout');
        this.$route.push('/login');
      },
    }
  }


  // import Vue from 'vue'
  //
  // export default Vue.extend({
  //   data () {
  //     const message: string = 'This is a message'
  //
  //     return {
  //       message
  //     }
  //   },
  //     methods: {
  //       logout() {
  //         console.log(1);
  //         this.$store.dispatch('logout');
  //         this.$route.push('/login');
  //       },
  //     }
  // })

</script>


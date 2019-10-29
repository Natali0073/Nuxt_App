<template>
  <section>
    <h1>{{user.data.name}}</h1>
  </section>
</template>
<script>
  export default {
    validate({params}) {
      return /^\d+$/.test(params.id);
    },
    async asyncData({$axios, params}) {
      const user = await $axios.get(`https://jsonplaceholder.typicode.com/users/${params.id}`);
      console.log(user);
      return {user};
    },
    data: () => ({
      user: {},
    }),
  }
</script>

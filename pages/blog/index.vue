<template>
<div>
  Blog {{blogPost}}
  <h1>{{blogPost.title}}</h1>

</div>
</template>

<script>
  export default {

    async asyncData({params, payload}) {
      if (payload) {
        return { blogPost: payload };
      } else {
        return {
          blogPost: await require(`~/assets/content/blog/2019-10-30-test-2.json`),
        };
      }
    },
  };

</script>

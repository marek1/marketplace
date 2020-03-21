<template>
  <div class="wrapper">
    <HomeComponent></HomeComponent>
  </div>
</template>

<script>
  // @ is an alias to /src
  import HomeComponent from '../components/HomeComponent';
  export default {
    name: 'Products',
    components: {
      HomeComponent,
    },
  };
</script>

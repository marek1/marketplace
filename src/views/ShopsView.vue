<template>
  <div class="wrapper">
    <ShopsComponent></ShopsComponent>
  </div>
</template>


<script>
  // @ is an alias to /src
  import ShopsComponent from '../components/ShopsComponent';
  export default {
    name: 'Shops',
    components: {
      ShopsComponent,
    },
  };
</script>

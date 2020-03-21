<template>
  <div class="wrapper">
    <ShopComponent></ShopComponent>
  </div>
</template>

<script>
  // @ is an alias to /src
  import ShopComponent from '../components/ShopComponent';
  export default {
    name: 'Shop',
    components: {
      ShopComponent,
    },
  };
</script>

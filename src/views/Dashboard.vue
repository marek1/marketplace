<template>
  <div class="wrapper">
    <LoginComponent v-if="!$route.params.id"></LoginComponent>
    <DashboardComponent v-else v-bind:shop-route="$route.params.id"></DashboardComponent>
  </div>
</template>

<script>
  // @ is an alias to /src
  import LoginComponent from '../components/LoginComponent';
  import DashboardComponent from '../components/DashboardComponent';
  export default {
    name: 'Dashboard',
    components: {
      DashboardComponent,
      LoginComponent,
    },
  };
</script>

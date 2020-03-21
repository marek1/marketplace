<template>
  <div>
    <h5>
      Spielzeug in Friedrichshain / Prenzlauer Berg
    </h5>
    <ProductsComponent v-bind:products="Products"></ProductsComponent>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import ProductsComponent from '@/components/ProductsComponent.vue';
  import { Products } from '@/data/products';
  @Component({
    components: {ProductsComponent}
  })
  export default class HomeComponent extends Vue {
    private Products = Products;
  }
  
</script>



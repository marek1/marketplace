<template>
  <div>
    <h5>
      Spielzeug in Friedrichshain / Prenzlauer Berg
    </h5>
    <ProductsComponent v-bind:products="products"></ProductsComponent>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import ProductsComponent from '@/components/ProductsComponent.vue';
  import { Products } from '@/data/products';
  import { mapState } from 'vuex';
  import { Product } from '@/interfaces';
  @Component({
    components: {ProductsComponent},
    computed: mapState(['searchTerms']),
  })
  export default class HomeComponent extends Vue {
    private products = Products;

    mounted(): void {
      this.$store.subscribe((mutation) => {
        if (mutation.type === 'searched') {
          this.products = Products.filter((product: Product) =>
            product.name.toString().toLowerCase().indexOf(mutation.payload.toString().toLowerCase()) > -1);
        }
      });
    }
    
  }
  
</script>



<template>
  <div>
    <div>
      <input type="text" placeholder="Suche nach einem Produkt"/>
    </div>
    <div class="masonry" v-if="products.length > 0">
      <ProductComponent v-for="item in products" v-bind:key="item.name" v-bind:product="item"></ProductComponent>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Product, ProductFull } from '@/interfaces';
  import ProductComponent from '@/components/ProductComponent.vue';

  @Component({
      components: {ProductComponent}
  })
  export default class ProductsComponent extends Vue {
    @Prop() products: Product|ProductFull[];
  }

</script>


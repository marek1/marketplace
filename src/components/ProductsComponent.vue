<template>
  <div class="masonry" v-if="Products.length > 0">
    <div class="brick" v-for="item in Products" v-bind:key="item.name">
      <div>
        {{item.name}}
      </div>
      <div>
        <img v-bind:src="item.image">
      </div>
      <div id="tags">
        <div class="badge" v-for="badge in item.tags" v-bind:key="badge">
          {{badge}}
        </div>
      </div>
      <div v-if="!isProductFull(item) && checkIfProductExists(item.name).length > 0">
        <div>erhältlich bei</div>
        <div v-for="shop in checkIfProductExists(item.name)" v-bind:key="shop.name">
          <router-link :to="`/shops/${shop.route}`">{{shop.name}} </router-link>
          für nur <b>{{getLatestPrice(shop.products, item.name)}} EUR</b>
        </div>
      </div>
      <div v-else>
        nur <b>{{getLatestPrice(Products, item.name)}} EUR</b>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Product, ProductFull, Shop } from '@/interfaces';
  import { Shops } from '@/data/shops';

  @Component
  export default class ProductsComponent extends Vue {
    @Prop() Products: Product|ProductFull[];
    
    private Shops: Shop[] = Shops;

    isProductFull(item: Product|ProductFull) {
      return (item as ProductFull).inStock !== undefined;
    }

    checkIfProductExists(itemName: string) {
      return Shops
        .filter((shop: Shop) => shop.products.filter((product: ProductFull) => product.name === itemName).length > 0);
    }

    getLatestPrice(shopProducts: ProductFull[], itemName: string) {
      const prices = shopProducts.filter((prod: Product) => prod.name === itemName)[0].prices;
      return prices[prices.length - 1].price;
    }

  }

</script>

<style scoped>

</style>

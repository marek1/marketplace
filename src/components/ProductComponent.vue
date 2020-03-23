<template>
  <div class="brick">
    <div>
      {{product.name}}
    </div>
    <div id="tags">
      <div class="badge green" v-for="badge in product.tags" v-bind:key="badge">
        &checkmark; {{badge}}
      </div>
    </div>
    <div>
      <img v-bind:src="product.image">
    </div>
    <div>
      {{product.description}}
    </div>
    <div>
      Material: <div class="badge">{{product.material}}</div>
    </div>
    <div v-if="shopsFound(product.name).length > 0">
      <div>erhältlich bei</div>
      <div v-for="shop in shopsFound(product.name)" v-bind:key="shop.name">
        <router-link :to="`/shops/${shop.route}`">{{shop.name}} </router-link>
        für nur <b>{{getLatestPrice(shop.products, product.name)}} EUR</b>
      </div>
    </div>
    <div v-if="isProductFull(product)">
      <PastPricesComponent v-bind:product="product"></PastPricesComponent>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Product, ProductFull, Shop } from '@/interfaces';
  import { Shops } from '@/data/shops';
  import PastPricesComponent from '@/components/PastPricesComponent.vue';
  
  @Component({
    components: {PastPricesComponent}
  })
  export default class ProductComponent extends Vue {
    @Prop() product: Product | ProductFull;
    private Shops: Shop[] = Shops;

    isProductFull(item: Product|ProductFull): boolean {
      return (item as ProductFull).inStock !== undefined;
    }

    shopsFound(itemName: string): Shop[] {
      return Shops
        .filter((shop: Shop) => shop.products.filter((product: ProductFull) => product.name === itemName).length > 0);
    }

    getLatestPrice(shopProducts: ProductFull[], itemName: string): number {
      const prices = shopProducts.filter((prod: Product) => prod.name === itemName)[0].prices;
      return prices[prices.length - 1].price;
    }
  }
</script>

<style scoped>
  #tags {
    position: absolute;
    left: 10px;
    top: 40px;
    text-align: left;
  }
</style>

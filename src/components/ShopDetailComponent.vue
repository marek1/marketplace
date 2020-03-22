<template>
  <div>
    <div>
      <h5>
        <div v-if="shop.logo.length > 0">
          <img class="small-logo" v-bind:src="shop.logo">
        </div>
        {{shop.name}}
      </h5>
      <div>
        {{shop.address}}
      </div>
      <div>
        <a v-on:click="showMap=!showMap">Karte
          <span v-if="!showMap">zeigen</span>
          <span v-if="showMap">verstecken</span>
        </a>
      </div>
      <div v-if="showMap">
        <MapComponent v-bind:shops="[shop]"></MapComponent>
      </div>
      <div v-if="shop.url.length > 0">
        <a target="_blank" v-bind:href="shop.url">Webseite</a>
      </div>
    </div>
    <div class="row" v-if="shop!==null && shop.products.length > 0">
      <h5>
        Produkte
      </h5>
      <div>
        <ProductsComponent v-bind:products="shop.products"></ProductsComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Shop } from '@/interfaces';
  import MapComponent from '@/components/MapComponent.vue';
  import ProductsComponent from '@/components/ProductsComponent.vue';

  @Component({
    components: {
      ProductsComponent,
      MapComponent
    }
  })
  export default class ShopComponent extends Vue {
    @Prop() shop: Shop;
    private showMap = false;
    
  }

</script>

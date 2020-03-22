<template>
  <div v-if="shop">
    <ShopDetailComponent v-bind:shop="shop"></ShopDetailComponent>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Shop } from '@/interfaces';
  import { Shops } from '@/data/shops';
  import ShopDetailComponent from '@/components/ShopDetailComponent.vue';

  @Component({
    components: {ShopDetailComponent}
  })
  export default class ShopComponent extends Vue {
    private shop: Shop | null = null;
    
    mounted() {
      this.shop = Shops.filter((shop: Shop) => shop.route === this.$route.params.id)[0];
    }
    
  }

</script>

<style>
  img {
    max-width: 100%;
    max-height: 200px;
  }
</style>


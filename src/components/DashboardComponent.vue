<template>
  <div>
    <div class="row" v-if="shop">
      <div class="col s6">
        <ShopDetailComponent v-bind:shop="shop"></ShopDetailComponent>
      </div>
      <div class="col s6">
        <StatisticComponent v-bind:shop="shop"></StatisticComponent>
      </div>
    </div>
  </div>
</template>

<script lang="ts">

  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Shops } from '@/data/shops';
  import { Shop } from '@/interfaces';
  import ShopDetailComponent from '@/components/ShopDetailComponent.vue';
  import StatisticComponent from '@/components/StatisticComponent.vue';

  @Component({
    components: {ShopDetailComponent, StatisticComponent}
  })
  export default class DashboardComponent extends Vue {
    @Prop() shopRoute: string;
    private shop: Shop|null = null;
    
    mounted(): void {
      this.shop = Shops.filter((shop: Shop) => shop.route === this.shopRoute)[0];
    }
    
  }
</script>

<template>
  <div>
  
    <div class="row" v-if="shop">
      <div class="col s12">
        <ul class="tabs">
          <li class="tab col s3">
            <a v-bind:class="{'active': activeTab===1}" v-on:click="activeTab=1">Meine Statistik</a>
          </li>
          <li class="tab col s3">
            <a v-bind:class="{'active': activeTab===2}" v-on:click="activeTab=2">Mein Shop</a>
          </li>
        </ul>
      </div>
      <div class="col s12 tab-content" v-bind:class="{'active': activeTab===1}">
        <StatisticComponent v-bind:shop="shop"></StatisticComponent>
      </div>
      <div class="col s12 tab-content" v-bind:class="{'active': activeTab===2}">
        <ShopDetailComponent v-bind:shop="shop"></ShopDetailComponent>
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
    private activeTab = 1;
    mounted(): void {
      this.shop = Shops.filter((shop: Shop) => shop.route === this.shopRoute)[0];
    }
    
  }
</script>

<style scoped>
  .tab-content {
    display: none;
  }
  .tab-content.active {
    display: block;
  }
  .tab .active {
    text-decoration: underline;
    font-weight: bold;
  }
</style>

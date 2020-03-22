<template>
  <div>
    <div>
      Besuche
    </div>
    <div>
      {{shop.visits}}
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Shop } from '@/interfaces';
  import { shopVisits } from '@/data/dummy';

  @Component({
    components: {}
  })
  export default class StatisticComponent extends Vue {
    @Prop() shop: Shop;
    
    mounted(): void {
      console.log('this.shop.visits : ', this.shop.visits);
      this.shop.visits = this.shop.visits.concat(shopVisits);
    }
  }
</script>

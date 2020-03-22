
<template>
  <div v-if="loaded">
    Preisentwicklung:
   <LineChart v-bind:chart-data="chartData"></LineChart>-->
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Price, ProductFull } from '@/interfaces';
  import { ChartData } from 'chart.js';
  import LineChart from '@/components/LineChart.vue';

  @Component({
    components: {LineChart}
  })
  export default class PastPricesComponent extends Vue {
    @Prop() item: ProductFull;
    private loaded = false;
    
    private chartData: ChartData = {
      labels: [],
      datasets: [{
        label: 'Preis',
        data: []
      }]
    };
    
    mounted(): void {
      this.item.prices.map((price: Price) => {
        if (this.chartData.labels){
          this.chartData.labels.push(price.date.getDate().toString() + '.' + (price.date.getMonth() + 1).toString() + '.' + price.date.getFullYear().toString());
        }
        if (this.chartData.datasets && this.chartData.datasets[0].data) {
          this.chartData.datasets[0].data.push(price.price);
        }
        this.loaded = true;
      });
    }

  }
</script>

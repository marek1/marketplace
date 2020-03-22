<template>
  <div>
    <div v-if="loaded">
      <LineChart v-bind:chart-data="chartData"></LineChart>
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Shop, Visit } from '@/interfaces';
  import { shopVisits } from '@/data/dummy';
  import LineChart from '@/components/LineChart.vue';
  import { ChartData } from 'chart.js';
  
  @Component({
    // extends: LineChart, // this is important to add the functionality to your component
    components: {LineChart}
  })
  export default class StatisticComponent extends Vue {
    @Prop() shop: Shop;
    private loaded = false;
    private chartData: ChartData = {
      labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31],
      datasets: []
    };

    mounted(): void {
      this.shop.visits = this.shop.visits.concat(shopVisits);
      const dayVisits: number[] = [];
      if (this.chartData.labels !== undefined) {
        this.chartData.labels.map((day: any) => {
          // day 1,2,...
          const _day = day < 10 ? '0' + day.toString() : day.toString();
          const _date = '2020-03-' + _day;
          const _dayVisits = this.shop.visits.filter((visit: Visit) => visit.date.getTime() === new Date(_date).getTime()).length;
          dayVisits.push(_dayVisits);
        });
      }
      if (this.chartData.datasets !== undefined) {
        this.chartData.datasets.push({
          label: 'Besuche',
          backgroundColor: '#00bdf8',
          data: dayVisits
        });
      }
      
      this.loaded = true;
    }
    
  }
</script>

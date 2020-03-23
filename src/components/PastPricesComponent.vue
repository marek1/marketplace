<template>
  <div v-if="loaded">
    Preisentwicklung:
    <LineChart v-bind:chart-data="chartData"></LineChart>
  </div>
</template>
<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import { Price, ProductFull, Shop } from '@/interfaces';
  import { ChartData } from 'chart.js';
  import LineChart from '@/components/LineChart.vue';
  import { Shops } from '@/data/shops';

  export interface TempInt {
    date: number; //timestamp
    price: number;
    shopName: string;
  }

  export interface FoundShop {
    shopName: string;
    prices: number[];
  }


  @Component({
    components: {LineChart}
  })
  export default class PastPricesComponent extends Vue {
    @Prop() product: ProductFull;

    private tmpDict: TempInt[] = [];
    private foundShops: FoundShop[] = [];
    private loaded = false;

    private chartData: ChartData = {
      labels: [],
      datasets: []
    };

    mounted(): void {
      // this.generateChartDataset(this.product.prices, 'Meine Preise');
      this.findPrices();
      this.sortDataSet();
      this.loaded = true;

    }

    findPrices(): void {
      Shops.map((shop: Shop) => {
        const _foundProducts = shop.products.filter((product: ProductFull) => product.name === this.product.name);
        if (_foundProducts.length > 0) {
          _foundProducts[0].prices.map((price: Price) => {
            this.tmpDict.push({
              date: price.date.getTime(),
              price: price.price,
              shopName: shop.name
            });
          });
          this.foundShops.push({shopName: shop.name, prices: []});
        }
      });
    }

    generateChartDataset(prices: Price[], label: string) {
      const _priceData: number[] = [];
      prices.map((price: Price) => {
        if (this.chartData.labels) {
          this.chartData.labels.push(price.date.getTime());
          // Check whether date already exists
        }
        _priceData.push(price.price);
      });
      if (this.chartData.datasets) {
        this.chartData.datasets.push({
          label,
          data: _priceData,
          spanGaps: true
        });
      }
    }

    sortDataSet() {
      // this.chartData.datasets
      // sort dict timeStamp ASC !
      const _sortedDict = this.tmpDict.sort((tmp: TempInt, tmp1: TempInt) => {
        if (tmp.date < tmp1.date) {
          return -1;
        }
        if (tmp.date > tmp1.date) {
          return 1;
        }
        return 0;
      });
      _sortedDict.map((tmp: TempInt) => {
        // one label
        // but x datasets
        if (this.chartData.labels) {
          const _tmpStamp = new Date(tmp.date);
          this.chartData.labels.push(_tmpStamp.getDate().toString() + '.' + (_tmpStamp.getMonth() + 1).toString() + '.' + _tmpStamp.getFullYear().toString());
        }
        this.foundShops.map((foundShop: FoundShop, c: number) => {
          if (tmp.shopName === foundShop.shopName) {
            this.foundShops[c].prices.push(tmp.price);
          } else {
            this.foundShops[c].prices.push(NaN);
          }
        });

      });
      this.foundShops.map((foundShop: FoundShop) => {
        if (this.chartData.datasets) {
          this.chartData.datasets.push({
            label: foundShop.shopName,
            data: foundShop.prices
          });
        }
      });

    }

  }
</script>

<script lang="ts">
  import { Prop } from 'vue-property-decorator';
  import Component, { mixins } from 'vue-class-component';
  import { Line } from 'vue-chartjs';
  import { ChartData } from 'chart.js';

  @Component
  export default class LineChart extends mixins(Line) {
    @Prop() chartData: ChartData;
    mounted () {
      this.renderChart(this.chartData, {
        spanGaps: true
      });
    }
  }
</script>

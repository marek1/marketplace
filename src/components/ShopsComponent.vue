<template>
  <div>
    <h5>
      Spielzeugläden in Friedrichshain / Prenzlauer Berg
    </h5>
    <div>
      <a v-on:click="showMap=!showMap">Karte
        <span v-if="!showMap">zeigen</span>
        <span v-if="showMap">verstecken</span>
      </a>
    </div>
    <div v-if="showMap">
      <MapComponent v-bind:shops="shops"></MapComponent>
    </div>
    <div class="masonry">
      <div class="brick clickable"
           v-on:click="goToUrl(item.route)"
           v-for="item in shops"
           v-bind:key="item.name">
        <div>
          {{item.name}}
        </div>
        <img v-if="item.logo.length > 0" v-bind:src="item.logo">
        <div>
          {{item.address}}
        </div>
      </div>
    </div>
  </div>
  
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';
  import { Shops } from '@/data/shops';
  import { Shop } from '@/interfaces';
  import MapComponent from '@/components/MapComponent.vue';
  @Component({
    components: {MapComponent}
  })
  export default class ShopsComponent extends Vue {
    private shops: Shop[] = Shops;
    private showMap = false;
    goToUrl(url: string) {
      this.$router.push({ path: `/shops/${url}` })
    }
  }

</script>

<style scoped>


</style>

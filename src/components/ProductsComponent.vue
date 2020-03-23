<template>
  <div v-if="products !== undefined">
    <div v-if="searchTerm !== undefined">
      <input type="text" placeholder="Suche nach einem Produkt" v-model="searchTerm"/>
    </div>
    <div class="masonry" v-if="products.length > 0">
      <ProductComponent v-for="item in products" v-bind:key="item.name" v-bind:product="item"></ProductComponent>
    </div>
    <div v-else>Keine Produkte gefunden</div>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue, Watch } from 'vue-property-decorator';
  import { Product, ProductFull } from '@/interfaces';
  import ProductComponent from '@/components/ProductComponent.vue';
  import _ from 'lodash';

  @Component({
      components: {ProductComponent}
  })
  export default class ProductsComponent extends Vue {
    @Prop() products: Product|ProductFull[];
    private searchTerm = '';
    private debouncedGetAnswer: Function;
    
    @Watch('searchTerm')
    onPropertyChanged() {
      // Do stuff with the watcher here.
      this.debouncedGetAnswer()
    }
    
    created(): void {
      this.searchTerm = this.$store.getters.lastSearchTerm;
      this.debouncedGetAnswer = _.debounce(this.findProducts, 500)
    }

    findProducts() {
      console.log('dddd,', this.searchTerm);
      this.$store.commit('searched', this.searchTerm);
    }
    
  }

</script>


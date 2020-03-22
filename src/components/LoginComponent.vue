<template>
  <div>
    <h5>
      Login
    </h5>
    <div>
      <select style="display: block" v-model="selected" @change="onChange()">
        <option disabled value="null">Wähle ein Geschäft</option>
        <option v-for="shop in shops" v-bind:key="shop.route" v-bind:value="shop.route">{{shop.name}}</option>
      </select>
    </div>
  </div>
</template>

<script lang="ts">


  import { Component, Vue } from 'vue-property-decorator';
  import { Shops } from '@/data/shops';
  import { Shop } from '@/interfaces';

  @Component
  export default class LoginComponent extends Vue {
    private selected: null|string = null;
    private shops = Shops;
    private shop: Shop|null = null;

    onChange(): void {
      this.$router.push({ path: `/dashboard/${this.selected}` })
    }
  }

  

</script>

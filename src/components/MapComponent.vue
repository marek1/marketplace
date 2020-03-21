<template>
    <l-map
    v-if="showMap"
    :center="center"
    :zoom="zoom"
    style="min-height: 300px;"
    >
      <l-tile-layer
      :url="url"
      :attribution="attribution"
      />
      <l-marker v-for="marker in markers" v-bind:key="marker.lat" :lat-lng="marker.latLng" :icon="icon">
        <l-popup>
          <router-link :to="`/shops/${marker.shop.route}`">
            <div>{{marker.shop.name}}</div>
            <div>{{marker.shop.address}}</div>
          </router-link>
        </l-popup>
      </l-marker>
    </l-map>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import L from 'leaflet';
  import { Shop } from '@/interfaces';

  @Component
  export default class MapComponent extends Vue {
    @Prop() private shops: Shop[];
    
    private markerLatLng: L.LatLng|null = null;
    private markers: {shop: Shop; latLng: L.LatLng}[] = [];
    private zoom = 11;
    private center = L.latLng(52.5364551, 13.4105201);
    private url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    private attribution = '<a href="http://osm.org/copyright">OpenStreetMap</a> contributors';
    private icon = L.icon({
      iconUrl: "http://localhost/static/supermarkt.png",
      iconSize: [32, 37],
      iconAnchor: [16, 37]
    });
    private showMap = false;
    
    mounted(): void {
      this.createMarkers();
    }
    
    createMarkers() {
      this.shops.map((shop: Shop) => {
        this.markers.push({
          shop,
          latLng: L.latLng(shop.coordinates[0], shop.coordinates[1])
        });
      });
      this.showMap = true;
    }
  }
</script>

<style>
</style>



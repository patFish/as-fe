<template>
  <div class="map">
    <l-map
      v-if="showMap"
      :zoom="zoom"
      :center="locations[0]||defaultCenter"
      :options="mapOptions"
      @update:center="centerUpdate"
      @update:zoom="zoomUpdate"
    >
      <l-tile-layer :url="url" :attribution="attribution" />
      <div v-for="loc in locations" :key="loc">
        <l-marker :lat-lng="loc">
          <l-popup>
            <div @click="innerClick">
              <p v-show="showParagraph">
                Car Information Placeholder.
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laboriosam expedita error provident natus velit fugiat explicabo quasi iste tenetur ea vitae tempora, dolorum hic optio culpa. Consequuntur aspernatur vero modi?
              </p>
            </div>
          </l-popup>
        </l-marker>
      </div>
    </l-map>
  </div>
</template>

<script>
import {
  LMap,
  LTileLayer,
  LMarker,
  LPopup
  // , LTooltip
} from "vue2-leaflet";
import { Icon, latLng } from "leaflet";

import "leaflet/dist/leaflet.css";

delete Icon.Default.prototype._getIconUrl;
Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

export default {
  name: "FleetMap",
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LPopup
    // LTooltip
  },
  props: {
    locations: Array
  },
  data: () => {
    return {
      url: "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
      attribution:
        '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
      currentZoom: 11.5,
      zoom: 10,
      defaultCenter:
        latLng(process.env.VUE_MAPCENTER_LAT, process.env.VUE_MAPCENTER_LON) ||
        latLng(46.8383763, 9.2623928),
      showParagraph: true,
      mapOptions: {
        zoomSnap: 0.5
      },
      showMap: true
    };
  },
  methods: {
    zoomUpdate(zoom) {
      this.currentZoom = zoom;
    },
    centerUpdate(center) {
      this.currentCenter = center;
    },
    showLongText() {
      this.showParagraph = !this.showParagraph;
    }
  }
};
</script>

<style>
.map {
  height: 30vh;
}
</style>

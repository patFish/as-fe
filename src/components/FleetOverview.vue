<template>
  <div class="fleetoverview">
    <h1 class="header">Flottenübersicht</h1>
    <Map class="map" :locations="locs" />
    <FleetTable class="list" :cars="fleet" />
  </div>
</template>

<script>
import { latLng } from "leaflet";
import Map from "./Map";
import FleetTable from "./FleetTable";

export default {
  name: "FleetOverview",
  components: {
    Map,
    FleetTable
  },
  props: { fleet: Array },

  computed: {
    locs() {
      return this.fleet.map(item => {
        return latLng(item.Position.lat, item.Position.lon);
      });
    }
  }
};
</script>

<style>
.fleetoverview {
  display: block;
}
.map {
  grid-area: map;
}
.list {
  grid-area: list;
}
.header {
  grid-area: header;
}

@media only screen and (min-width: 700px) {
  .fleetoverview {
    margin: 5%;
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "header header"
      "map list";
  }
}
</style>

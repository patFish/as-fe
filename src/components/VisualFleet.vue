<template>
  <v-sheet class="visualfleet" :elevation="1" :rounded="true">
    <Map class="map" :locations="locations" />
    <FleetTable class="list" :cars="cars" />
  </v-sheet>
</template>

<script>
import Map from "./Map";
import FleetTable from "./FleetTable";

export default {
  name: "VisualFleet",
  components: {
    Map,
    FleetTable
  },
  props: { cars: Array },
  computed: {
    locations() {
      return this.cars.map(car => {
        return car.location;
      });
    }
  }
};
</script>

<style>
.visualfleet {
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
  .visualfleet {
    display: grid;
    grid-template-columns: 2fr 1fr;
    grid-template-rows: auto;
    grid-template-areas:
      "header header"
      "map list";
  }
}
</style>
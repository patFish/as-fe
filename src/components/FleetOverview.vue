<template>
  <div>
    <h1>Hello FleetOverview</h1>
    <Map :locations="locations" />
  </div>
</template>

<script>
import Map from "./Map";
import { latLng } from "leaflet";

export default {
  name: "FleetOverview",
  components: {
    Map
  },
  data() {
    return {
      locations: [
        latLng(47.41322, -1.219482),
        latLng(47.41422, -1.250482),
        latLng(47.41422, -1.250682),
        latLng(47.41443, -1.251482)
      ]
    };
  }
};
</script>

<style></style>

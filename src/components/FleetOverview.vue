<template>
  <div class="fleetoverview">
    <h1 class="header">Flottenübersicht</h1>
    <v-card-text>
      <v-row align="center" justify="center">
        <v-btn-toggle v-model="toggle_exclusive">
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on">
                <v-icon>mdi-map</v-icon>
              </v-btn>
            </template>
            <span>Flotte Karten Übersicht</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn v-bind="attrs" v-on="on">
                <v-icon>mdi-format-list-bulleted</v-icon>
              </v-btn>
            </template>
            <span>Flotte Listen Übersicht</span>
          </v-tooltip>
        </v-btn-toggle>
      </v-row>
    </v-card-text>
    <VisualFleet v-if="toggle_exclusive===0" :cars="cars" class="view" />
    <ListFleet v-if="toggle_exclusive===1" :cars="cars" class="view" />
  </div>
</template>

<script>
import { latLng } from "leaflet";
import VisualFleet from "./VisualFleet";
import ListFleet from "./ListFleet";

export default {
  name: "FleetOverview",
  components: {
    VisualFleet,
    ListFleet
  },
  props: { fleet: Array },
  data() {
    return {
      toggle_exclusive: 0
    };
  },
  computed: {
    cars() {
      return this.fleet.map(car => {
        car.location = latLng(car.Position.lat, car.Position.lon);
        return car;
      });
    }
  }
};
</script>

<style>
.view {
  margin: 3%;
}
</style>

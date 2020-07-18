<template>
  <v-data-table
    :headers="headers"
    :items="cars"
    :single-expand="singleExpand"
    :expanded.sync="expanded"
    item-key="name"
    show-expand
    class="elevation-1 listfleet"
  >
    <template v-slot:expanded-item="{ headers, item }">
      <td :colspan="headers.length">
        <Map :locations="[item.location]" />
      </td>
    </template>
  </v-data-table>
</template>

<script>
import Map from "./Map";
export default {
  components: {
    Map
  },
  props: { cars: Array },
  data() {
    return {
      headers: [
        {
          text: "Name",
          align: "start",
          value: "name"
        },
        { text: "Make", value: "make" },
        { text: "Model", value: "model" },
        { text: "Year", value: "year" },
        { text: "Fuel Type", value: "fuelType" },
        { text: "Odometer", value: "odometer" },
        { text: "Type", value: "type" },
        { text: "VIN", value: "vin" },
        { text: "Fuel Level", value: "fuel" },
        { text: "Battery Charge", value: "battery" }
      ]
    };
  }
};
</script>

<style>
</style>
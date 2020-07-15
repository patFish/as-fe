<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>

      <v-spacer></v-spacer>

      <v-avatar color="blue-grey darken-1">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
    </v-app-bar>

    <v-content>
      <!-- <HelloWorld/> -->
      <FleetOverview :fleet="fleet" />
    </v-content>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld';
import FleetOverview from "./components/FleetOverview";

export default {
  name: "App",

  components: {
    // HelloWorld,
    FleetOverview
  },
  data: () => {
    return {
      fleet: [
        {
          id: 12345678,
          name: "Executive car 1",
          vin: "ASD423E3D3RF5",
          make: "Mazda",
          model: "CX-5",
          year: "2019",
          fuelType: "petrol",
          type: "SUV",
          Position: {
            lat: 3.995,
            lon: 43.2221
          },
          odometer: 43546,
          fuel: 33.4,
          battery: 12.7
        },
        {
          id: 12345678,
          name: "Executive car 1",
          vin: "ASD423E3D3RF5",
          make: "Mazda",
          model: "CX-5",
          year: "2019",
          fuelType: "petrol",
          type: "SUV",
          Position: {
            lat: 3.795,
            lon: 43.1221
          },
          odometer: 43546,
          fuel: 33.4,
          battery: 12.7
        },
        {
          id: 12345678,
          name: "Executive car 1",
          vin: "ASD423E3D3RF5",
          make: "Mazda",
          model: "CX-5",
          year: "2019",
          fuelType: "petrol",
          type: "SUV",
          Position: {
            lat: 4.095,
            lon: 43.2221
          },
          odometer: 43546,
          fuel: 33.4,
          battery: 12.7
        },
        {
          id: 12345678,
          name: "Executive car 1",
          vin: "ASD423E3D3RF5",
          make: "Mazda",
          model: "CX-5",
          year: "2019",
          fuelType: "petrol",
          type: "SUV",
          Position: {
            lat: 4.195,
            lon: 43.2221
          },
          odometer: 43546,
          fuel: 33.4,
          battery: 12.7
        }
      ]
    };
  }
};
</script>

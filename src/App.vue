<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center"></div>

      <v-spacer></v-spacer>

      <v-avatar color="blue-grey darken-1">
        <v-icon dark>mdi-account-circle</v-icon>
      </v-avatar>
    </v-app-bar>

    <v-main>
      <FleetOverview :fleet="fleet" />
      <p v-show="showParagraph">{{callApi()}}</p>
    </v-main>
  </v-app>
</template>

<script>
import Amplify, { API } from "aws-amplify";
import awsconfig from "./aws-exports";
import FleetOverview from "./components/FleetOverview";

// Amplify.configure({
//   API: {
//     endpoints: [
//       {
//         name: "MyAPIGatewayAPI",
//         endpoint: "http://as-loadbalancer-521356964.us-east-2.elb.amazonaws.com"
//       }
//     ]
//   }
// });

Amplify.configure(awsconfig);

export default {
  name: "App",

  components: {
    // HelloWorld,
    FleetOverview
  },
  data() {
    return {
      fleet: [],
      test: [],
      source: process.env.BACKEND || "http://localhost:8080"
    };
  },
  methods: {
    async callApi() {
      const apiName = "apifeapi";
      const path = "/fleet";
      const myInit = {
        // // OPTIONAL
        // headers: {}, // OPTIONAL
        response: true // OPTIONAL (return the entire Axios response object instead of only response.data)
        // queryStringParameters: {
        //   // OPTIONAL
        //   name: "param"
        // }
      };

      await API.get(apiName, path, myInit)
        .then(response => {
          // Add your code here
          // console.log(JSON.stringify(response));
          console.log(response);
        })
        .catch(error => {
          console.log(error.response);
        });
    },
    fetchItems() {
      if (typeof this.source === "string") {
        fetch(this.source + "/fleet")
          .then(stream => {
            return stream.json();
          })
          .then(data => (this.fleet = data))
          .catch(error => {
            console.error(error);
            this.fleet = [
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
                name: "Executive car 2",
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
                name: "Executive car 3",
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
                name: "Executive car 4",
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
            ];
          });
      } else {
        this.items = this.source;
      }
    }
  },
  mounted() {
    this.fetchItems();
  }
};
</script>

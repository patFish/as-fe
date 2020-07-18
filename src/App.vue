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
    </v-main>
  </v-app>
</template>

<script>
import Amplify, { API } from "aws-amplify";
import awsconfig from "./aws-exports";
import FleetOverview from "./components/FleetOverview";

Amplify.configure(awsconfig);

export default {
  name: "App",

  components: {
    // HelloWorld,
    FleetOverview
  },
  data() {
    return {
      fleet: []
    };
  },
  methods: {
    async callApi() {
      const apiName = "apifeapi";
      const path = "/fleet";
      const myInit = {
        // // OPTIONAL
        // headers: {}, // OPTIONAL
        // response: true // OPTIONAL (return the entire Axios response object instead of only response.data)
        // queryStringParameters: {
        //   // OPTIONAL
        //   name: "param"
        // }
      };

      await API.get(apiName, path, myInit)
        .then(response => {
          // Add your code here
          // console.log(response);
          this.fleet = response.fleet;
        })
        .catch(error => {
          console.log(error.response);
        });
    }
  },
  mounted() {
    this.callApi();
  }
};
</script>

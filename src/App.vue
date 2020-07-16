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
import FleetOverview from "./components/FleetOverview";

export default {
  name: "App",

  components: {
    // HelloWorld,
    FleetOverview
  },
  data() {
    return {
      fleet: [],
      source: process.env.AWSBACKEND || "http://localhost:8080"
    };
  },
  methods: {
    fetchItems() {
      if (typeof this.source === "string") {
        fetch(this.source + "/fleet")
          .then(stream => {
            console.log(stream);
            return stream.json();
          })
          .then(data => (this.fleet = data))
          .catch(error => console.error(error));
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

<template>
  <v-simple-table fixed-header width="300px" height="300px">
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Name</th>
          <th class="text-left">VIN</th>
          <th class="text-left">Make</th>
          <th class="text-left">Model</th>
          <th class="text-left">Year</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in cars" :key="car.name">
          <td>{{ car.name }}</td>
          <td>{{ car.vin }}</td>
          <td>{{ car.make }}</td>
          <td>{{ car.model }}</td>
          <td>{{ car.year }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: {
    cars: Array
  }
};
</script>

<style>
</style>
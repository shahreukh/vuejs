<template>
  <v-container>
    <v-row justify="center" align="center">
      <v-col cols="auto">
        <h3>Ziyaret Sayısı :{{ this.counter }}</h3>
        <h3>Tarih :{{ this.date }}</h3>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "seodenem",
  data() {
    return {
      counter: "0",
      date: "00-00-0000",
    };
  },

  async mounted() {
    const url = "";
    const req = await axios.get(url);
    const msg = req.data.msg;
    this.counter = msg.count;
    this.date = msg.date;
  },
};
</script>

<style></style>

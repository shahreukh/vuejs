<template>
  <v-footer class="footer-dark">
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="auto">
          <router-link to="/">
            <v-img
              v-if="this.$route.path === '/'"
              src="../assets/logo.png"
              alt="weerobot"
              width="120"
            ></v-img>
            <v-img
              v-else
              src="../assets/img/whiteLogo.png"
              alt="weerobot"
              width="120"
            ></v-img>
          </router-link>
        </v-col>
        <v-col cols="auto"> </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style lang="scss" scoped>
.footer-dark {
  background-color: #e6e6e6;
  color: #d14011;
}
.footer-white {
  background-color: #e6e6e6;
  color: #d14011;
}

a {
  text-decoration: none;
}
</style>

<template>
  <section>
    <div class="banner">
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="auto" class="mt-16">
            <h1 class="banner-title text-center">
              {{ $t("feature.bannerTitle") }}
            </h1>
            <p class="banner-text text-center d-none d-md-block">
              {{ $t("feature.bannerText1") }}
              <br />
              {{ $t("feature.bannerText2") }}
              <br />
              {{ $t("feature.bannerTitle3") }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container>
      <v-row justify="space-around" align="center">
        <v-col cols="12" md="6">
          <v-img src="../assets/img/card4.png"  max-width="6000"> </v-img>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="text-center">
            {{ $t("feature.Otomatik.title") }}
            <v-icon color="#d14011" size="auto"
              >mdi-boom-gate-alert-outline
            </v-icon>
          </h3>
          <p class="text-center text">
            {{ $t("feature.Otomatik.text1") }}
          </p>
          <p class="text-center text">
            {{ $t("feature.Otomatik.text2") }}
          </p>
        </v-col>

        <v-col cols="12" md="6">
          <h3 class="text-center">
            {{ $t("feature.PingPong.title1") }}
            <v-icon color="#d14011" size="auto">mdi-table-tennis </v-icon>
          </h3>
          <p class="text-center text">
            {{ $t("feature.PingPong.text1") }}
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-img  max-width="6000" src="../assets/img/card3.png"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-img  max-width="6000" src="../assets/img/card5.png"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="text-center">
            {{ $t("feature.Manuel.title") }}
            <v-icon color="#d14011" size="auto"> mdi-handshake </v-icon>
          </h3>
          <p class="text-center text">
            {{ $t("feature.Manuel.text2") }}
          </p>
          <p class="text-center text">
            {{ $t("feature.Manuel.text3") }}
          </p>
          <p class="text-center text">
            {{ $t("feature.Manuel.text4") }}
          </p>
          <p class="text-center text">
            {{ $t("feature.Manuel.text5") }}
          </p>
        </v-col>

        <v-col cols="12" md="6">
          <h3 class="text-center">
            {{ $t("feature.sosyaltrade.title1") }}
            <v-icon color="#d14011" size="auto">
              mdi-social-distance-2-meters
            </v-icon>
          </h3>
          <p class="text-center text">
            {{ $t("feature.sosyaltrade.text1") }}
            <br />
            {{ $t("feature.sosyaltrade.text2") }}
            <br />
            {{ $t("feature.sosyaltrade.text3") }}
          </p>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="../assets/img/card7.png"   max-width="6000"/>
        </v-col>
        <v-col cols="12" md="6">
          <v-img src="../assets/img/card8.png"  max-width="6000"/>
        </v-col>
        <v-col cols="12" md="6">
          <h3 class="text-center">
            {{ $t("feature.teknikTrade.title") }}
            <v-icon color="#d14011" size="auto">mdi-camera-control </v-icon>
          </h3>
          <p class="text-center text">
            {{ $t("feature.teknikTrade.text1") }}
            <br />
            {{ $t("feature.teknikTrade.text2") }}
            <br />
            {{ $t("feature.teknikTrade.text3") }}
          </p>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "feature",
};
</script>

<style lang="scss" scoped>
@import "~vuetify/src/styles/settings/_variables";
.banner {
  background-image: url("../assets/img/banner2.png");
  background-attachment: local;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 25em;
}
section{
  background-color: white !important;
}
h3 {
  color: #d14011;
  font-size: 2rem;
}
@media #{map-get($display-breakpoints, 'sm-and-down')} {
  h3 {
    font-size: 1.2rem;
  }
}
.text {
  color: #3e77a8;
  font-size: 1.5rem;
}
@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .text {
    font-size: 1rem;
  }
}
.banner-title {
  font-weight: 600;
  font-size: 2rem;
  color: #d14011;
}
@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .banner-title {
    font-size: 1.5rem;
  }
}
.banner-text {
  color: white;
}
</style>

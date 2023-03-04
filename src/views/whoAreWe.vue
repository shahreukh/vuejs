<template>
  <section>
    <div class="banner">
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="auto" class="mt-16">
            <h1 class="banner-title text-center">
              {{ $t("whoareWee.bannerTitle") }}
            </h1>
            <p class="banner-text text-center d-none d-md-block">
              {{ $t("whoareWee.bannerText1") }}
              <br />
              {{ $t("whoareWee.bannerText2") }}
              <br />
              {{ $t("whoareWee.bannerText3") }}
              <br />
              {{ $t("whoareWee.bannerText4") }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>

    <v-container>
      <v-row justify="center"  md="space-between"  align="center">
        <v-col cols="10" md="6">
          <h3 class="text-center wow fadeInUp" >
            {{ $t("whoareWee.title1") }}
          </h3>
            <p class="text-center text">
               {{ $t("whoareWee.text1") }}
          </p>
        </v-col>
        <v-col cols="10" md="6">
          <v-img   src="../assets/img/card6.png"  max-width="6000"></v-img>
        </v-col>
        <v-col cols="10" md="6">
          <v-img src="../assets/img/card1.png" max-width="6000"></v-img>
        </v-col>
        <v-col cols="10" md="6">
          <h3 class="text-center">
            {{ $t("whoareWee.title2") }}
          </h3>
            <p class="text-center text">
              {{ $t("whoareWee.text2") }}
          </p>
        </v-col>
        <v-col cols="10" md="6">
          <h3 class="text-center">{{ $t("whoareWee.title3") }}</h3>
            <p class="text-center text">
              {{ $t("whoareWee.text3") }}
          </p>
        </v-col>
        <v-col cols="10" md="6">
           <v-img src="../assets/img/card2.png"   max-width="6000"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
export default {
  name: "whoAreWe",
  
};
</script>

<style lang="scss" scoped>

@import '~vuetify/src/styles/settings/_variables';
.banner {
  background-image: url("../assets/img/banner.png");
  background-attachment: local;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 25em;
}
h3{
  color: #d14011;
  font-size: 2rem;
}
 @media #{map-get($display-breakpoints, 'sm-and-down')} {
    h3 {
        font-size: 1.2rem;
    }
    }
.text{
  color: #3e77a8;
  font-size: 1.5rem;
}
  @media #{map-get($display-breakpoints, 'sm-and-down')} {
    .text{
        font-size: 1rem;
    }
    }

    .banner-title{
  font-weight: 600;
  font-size: 2rem;
  color: #d14011;

}
@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .banner-title {
    font-size: 1.5rem;
  }
}
.banner-text{
  color: white;
}
</style>

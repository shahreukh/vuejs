<template>
  <section>
    <div class="banner">
      <v-container>
        <v-row justify="center" align="center">
          <v-col cols="auto" class="mt-16">
            <h1 class="banner-title text-center">
              {{ $t("contact.bannerTitle") }}
            </h1>
            <p class="banner-text text-center d-none d-md-block">
              {{ $t("contact.bannerText") }}
            </p>
          </v-col>
        </v-row>
      </v-container>
    </div>
    <v-container>
      <v-row justify="center" align="center" class="my-16">
        <v-col cols="10" md="6">
          <h3 class="text-center titles">{{ $t("contact.title") }}</h3>
          <v-form>
            <v-text-field
              v-model="ad"
              color="#3e77a8"
              :label="$t('form.name')"
            ></v-text-field>
            <v-text-field
              v-model="soyad"
              color="#3e77a8"
              :label="$t('form.surname')"
            ></v-text-field>
            <v-text-field
              v-model="telephone"
              color="#3e77a8"
              :label="$t('form.tel')"
            ></v-text-field>
            <v-text-field
              v-model="email"
              :label="$t('form.mail')"
              color="#3e77a8"
            ></v-text-field>
            <v-textarea
              color="#3e77a8"
              name="input-7-1"
              v-model="mesaj"
              :label="$t('form.msg')"
            ></v-textarea>
            <v-btn class="white--text" color="#d14011" @click="submitForm()">
              {{ $t("form.submit") }}
            </v-btn>
          </v-form>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<script>
import swal from "sweetalert";
import axios from "axios";
export default {
  name: "contact",
  data() {
    return {
      ad: "",
      soyad: "",
      telephone: "",
      email: "",
      mesaj: "",
    };
  },
  methods: {
    async submitForm() {
      if (this.ad === "") {
        swal({
          title: this.$i18n.t("form.formControl.WarningTitle"),
          text: this.$i18n.t("form.formControl.warning1"),
          icon: "warning",
        });
      } else if (this.soyad === "") {
        swal({
          title: this.$i18n.t("form.formControl.WarningTitle"),
          text: this.$i18n.t("form.formControl.warning2"),
          icon: "warning",
        });
      } else if (this.telephone === "") {
        swal({
          title: this.$i18n.t("form.formControl.WarningTitle"),
          text: this.$i18n.t("form.formControl.warning3"),
          icon: "warning",
        });
      } else if (this.email === "") {
        swal({
          title: this.$i18n.t("form.formControl.WarningTitle"),
          text: this.$i18n.t("form.formControl.warning4"),
          icon: "warning",
        });
      } else if (this.mesaj === "") {
        swal({
          title: this.$i18n.t("form.formControl.WarningTitle"),
          text: this.$i18n.t("form.formControl.warning5"),
          icon: "warning",
        });
      } else {
        const telControl = new RegExp(
          "^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$"
        );
        const mailControl = new RegExp("[a-z0-9]+@[a-z]+\.[a-z]{2,3}");
        if (telControl.test(this.telephone) === false) {
          swal({
            title: this.$i18n.t("form.formControl.WarningTitle"),
            text: this.$i18n.t("form.formControl.warning6"),
            icon: "warning",
          });
        } else if (mailControl.test(this.email) === false) {
          swal({
            title: this.$i18n.t("form.formControl.WarningTitle"),
            text: this.$i18n.t("form.formControl.warning7"),
            icon: "warning",
          });
        } else {
          try {
            const url = ``;
            const req = await axios.post(url, {
              ad: this.ad,
              soyad: this.soyad,
              telephone: this.telephone,
              mesaj: this.mesaj,
              email: this.email,
              site: "weerobot.org",
            });
            if (req.data.status === 1) {
              //console.log(req);

              swal({
                title: this.$i18n.t("form.formControl.SuccessTitle"),
                text: this.$i18n.t("form.formControl.suucess"),
                icon: "success",
              });
              this.ad = "";
              this.soyad = "";
              this.telephone = "";
              this.mesaj = "";
              this.email = "";
            } else {
              // console.log("hata" , req);
            }
          } catch (error) {
            // console.log(error);
          }
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "~vuetify/src/styles/settings/_variables";
.banner {
  background-image: url("../assets/img/banner3.png");
  background-attachment: local;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  height: 25em;
}

.titles {
  text-transform: uppercase;
  color: #d14011;
  font-size: 2rem;
}
::v-deep .theme--light,
.v-input,
input,
.theme--light,
.v-input {
  color: #3e77a8;
}

.v-input ::v-deep {
  color: #d14011 !important;
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
::v-deep input {
  color: #d14011 !important;
}
::v-deep textarea {
  color: #d14011 !important;
}
</style>

<template>
  <nav :class="changeBackground">
    <v-container class="d-none d-md-block">
      <v-row justify="space-around" align="center" class="text-center">
        <v-col cols="auto" class="text-center">
          <router-link
            to="/who-are-we"
            class="link-items"
            :class="changeColor"
            exact
            active-class="active"
          >
            {{ $t("nav.about") }}
          </router-link>
        </v-col>

        <v-col cols="2" class="text-center ml-14">
          <router-link
            to="/feature"
            class="link-items"
            :class="changeColor"
            exact
            active-class="active"
          >
            {{ $t("nav.feature") }}
          </router-link>
        </v-col>

        <v-col cols="auto" class="text-center ml-10">
          <router-link to="/" class="link-items">
            <v-img
              v-if="this.$route.path === '/'"
              src="../assets/logo.png"
              alt="weerobot"
              width="130"
            ></v-img>
            <v-img
              v-else
              src="../assets/img/whiteLogo.png"
              alt="weerobot"
              width="130"
            ></v-img>
          </router-link>
        </v-col>
        <v-col cols="auto" class="text-center">
          <router-link
            to="/contact"
            class="link-items"
            :class="changeColor"
            exact
            active-class="active"
          >
            {{ $t("nav.contact") }}
          </router-link>
        </v-col>
        <v-col cols="auto" class="text-center"
          ><v-btn
            color="white"
            active-class="active"
            :class="changeIcon"
            :style="{ color: '#d14011' }"
            href="https://backoffice.weecoins.org/weerobot_link"
            target="_blank"
            >BackOffice
          </v-btn>
        </v-col>
        <v-col cols="auto" class="text-center">
          <v-menu offset-y open-on-hover transition="slide-y-transition">
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                color="white"
                x-large
                v-bind="attrs"
                v-on="on"
                :class="changeColor"
              >
                {{ $t("nav.lang") }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-btn @click="changeLange(1)"
                  ><v-img src="../assets/img/tr.png" alt="tr"></v-img
                ></v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn @click="changeLange(2)"
                  ><v-img src="../assets/img/us.png" alt="en"></v-img
                ></v-btn>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  <v-btn @click="changeLange(3)"
                    ><v-img src="../assets/img/ru.png" alt="ru"></v-img
                  ></v-btn>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-btn @click="changeLange(4)"
                  ><v-img src="../assets/img/az.png" alt="az"></v-img
                ></v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-col>
      </v-row>
    </v-container>
    <v-container class="d-block d-md-none">
      <v-row justify="space-between" align="center">
        <v-col cols="auto">
          <router-link to="/">
            <v-img
              v-if="this.$route.path === '/'"
              src="../assets/logo.png"
              alt="weerobot"
              width="80"
            ></v-img>
            <v-img
              v-else
              src="../assets/img/whiteLogo.png"
              alt="weerobot"
              width="80"
            ></v-img>
          </router-link>
        </v-col>
        <v-col cols="auto">
          <v-btn
            outlined
            color="#3e77a8"
            :class="changeBtn"
            dark
            @click.stop="drawer = !drawer"
          >
            <span v-if="this.$route.path === '/'" color="#d14011">Menu</span>

            <span v-else color="#3e77a8">Menu</span>
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
    <v-navigation-drawer
      overlay-color="none"
      v-model="drawer"
      absolute
      temporary
      class="drawer"
    >
      <router-link to="/">
        <v-list-item two-line>
          <v-list-item-avatar>
            <v-img src="../assets/logo.png" alt="weerobot"></v-img>
          </v-list-item-avatar>
          <v-col cols="6"></v-col>
          <v-list-item-content>
            <v-btn color="#d14011" @click="drawer = !drawer" icon> x </v-btn>
          </v-list-item-content>
        </v-list-item>
      </router-link>

      <v-divider></v-divider>

      <v-list dense>
        <router-link to="/who-are-we" exact active-class="active">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="#3e77a8"> mdi-home </v-icon>
            </v-list-item-icon>
            <v-list-item-content>
              <v-list-item-title class="mobile-color">
                {{ $t("nav.about") }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/feature" exact active-class="active">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="#3e77a8">mdi-information </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="mobile-color">
                {{ $t("nav.feature") }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <router-link to="/contact" exact active-class="active">
          <v-list-item link>
            <v-list-item-icon>
              <v-icon color="#3e77a8"> mdi-contacts </v-icon>
            </v-list-item-icon>

            <v-list-item-content>
              <v-list-item-title class="mobile-color">
                {{ $t("nav.contact") }}
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </router-link>

        <v-list-item link>
          <v-list-item-icon>
            <v-icon color="#3e77a8"> mdi-book-open-page-variant </v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>
              <a
                class="mobile-color"
                href="https://backoffice.weecoins.org/login"
                target="_blank"
                >BackOffice</a
              >
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item>
          <v-list-item-icon>
            <v-icon color="#3e77a8"> mdi-earth </v-icon>
          </v-list-item-icon>

          <v-menu offset-y>
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="#d14011" outlined v-bind="attrs" v-on="on">
                {{ $t("nav.lang") }}
              </v-btn>
            </template>
            <v-list>
              <v-list-item>
                <v-btn @click="changeLange(1)"
                  ><v-img src="../assets/img/tr.png" alt="tr"></v-img
                ></v-btn>
              </v-list-item>
              <v-list-item>
                <v-btn @click="changeLange(2)"
                  ><v-img src="../assets/img/us.png" alt="en"></v-img
                ></v-btn>
              </v-list-item>

              <v-list-item>
                <v-list-item-title>
                  <v-btn @click="changeLange(3)"
                    ><v-img src="../assets/img/ru.png" alt="ru"></v-img
                  ></v-btn>
                </v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-btn @click="changeLange(4)"
                  ><v-img src="../assets/img/az.png" alt="az"></v-img
                ></v-btn>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      lang: null,
      drawer: null,
    };
  },
  methods: {
    changeLange(lang) {
      if (lang === 1) {
        localStorage.setItem("lang", "tr");
        location.reload();
      }
      if (lang === 2) {
        localStorage.setItem("lang", "en");
        location.reload();
      }
      if (lang === 3) {
        localStorage.setItem("lang", "ru");
        location.reload();
      }
      if (lang === 4) {
        localStorage.setItem("lang", "az");
        location.reload();
      }
    },
  },

  computed: {
    changeColor() {
      if (this.$route.path === "/") {
        return {
          "link-items": true,
        };
      } else {
        return {
          color: true,
        };
      }
    },

    changeBackground() {
      if (this.$route.path === "/") {
        return {
          "nav-white": true,
          "nav-dark": false,
        };
      } else {
        return {
          "nav-dark": true,
        };
      }
    },
    changeBtn() {
      if (this.$route.path === "/") {
        return {
          chnBtnDark: true,
        };
      } else {
        return {
          chnBtnDark: false,
          chnBtnWhite: true,
        };
      }
    },
    changeIcon() {
      if (this.$route.path === "/") {
        return {
          colorIcon: true,
        };
      } else {
        return {
          colorIconDark: true,
          colorIcon: false,
        };
      }
    },
  },
  created() {
    this.changeLange();
  },
};
</script>

<style lang="scss" scoped>
.link-items {
  text-transform: uppercase;
  color: #d14011;
  text-decoration: none;
  font-weight: 500;
}
.mobile-color {
  color: #d14011;
}

.color {
  color: #3e77a8;
}
.drawer {
  height: 100vh !important;
}
.nav-dark {
  background-color: #e6e6e6;
}
.nav-white {
  background-color: #f6f9fc;
}
a {
  text-decoration: none;
}
.active {
  border-bottom: 2px solid #3e77a8;
}
.colorIcon {
  color: #d14011 !important;
}
.colorIconDark {
  color: #3e77a8 !important;
}
</style>

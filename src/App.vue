<template>
  <v-app style="background-color: #f6f9fc">
    <header >
      <VHeader />
    </header>

    <v-main>
      <transition name="fade" mode="out-in">
        <router-view />
      </transition>
    </v-main>

    <footer>
      <Footer />
    </footer>
  </v-app>
</template>

<script>

import Footer from "./components/Footer.vue";
import VHeader from "./components/VHeader.vue";
export default {
  name: "App",

  data: () => ({
    value: true,
  }),
  computed: {
    
  },
  components: {
    VHeader,
    Footer,
  },
 
};
</script>
<style scoped>
.header2 {
  position: relative;
  z-index: 6;
  width: 100%;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
 
}
.fade-enter-active,
.fade-leave-acitve {
  transition: all 0.1s ease-in;
}
</style>

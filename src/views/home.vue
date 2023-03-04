<template>
  <section>
    <v-carousel>
      <v-carousel-item src="../assets/img/slider1.png">
        <v-container class="">
          <v-row
            align="center"
            justify="center"
            justify-md="start"
            class="mt-16"
          >
            <v-col cols="auto" class="white--text mt-16">
              <h2>{{ $t("slider.title1") }}</h2>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
      <v-carousel-item src="../assets/img/slider2.png">
        <v-container class="">
          <v-row
            align="center"
            justify="center"
            justify-md="start"
            class="mt-16"
          >
            <v-col cols="auto" class="white--text mt-16">
              <h2>{{ $t("slider.title2") }}</h2>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
      <v-carousel-item src="../assets/img/slider3.png">
        <v-container class="">
          <v-row
            align="center"
            justify="center"
            justify-md="start"
            class="mt-16"
          >
            <v-col cols="auto" class="white--text mt-16">
              <h2>{{ $t("slider.title3") }}</h2>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
      <v-carousel-item src="../assets/img/slider4.png">
        <v-container class="">
          <v-row
            align="center"
            justify="center"
            justify-md="start"
            class="mt-16"
          >
            <v-col cols="auto" class="white--text mt-16">
              <h2>{{ $t("slider.title4") }}</h2>
            </v-col>
          </v-row>
        </v-container>
      </v-carousel-item>
    </v-carousel>
        
    <v-container class="my-16">
      <v-row justify="center" align="center">
        <v-col cols="auto">
          <h1 class="title-packet">{{ $t("features.title") }}</h1>
          <hr color="#3e77a8" />
        </v-col>
      </v-row>
      <v-row class="mt-10" justify="center" align="start">
        <v-card class="mx-auto my-auto" max-width="280">
          <v-img src="../assets/img/card13.png" height="200px"></v-img>
          <v-card-title class="card-title">
            {{ $t("features.card1.title") }}
          </v-card-title>
          <v-card-subtitle id="card-subtitle">
            {{ $t("features.card1.subtitle") }}
          </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click="show1 = !show1">
              <v-icon color="#3e77a8">{{
                show1 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show1">
              <v-divider></v-divider>
              <v-card-text class="card-text">
                {{ $t("features.card1.text") }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
        <v-card class="mx-auto my-auto" max-width="280">
          <v-img src="../assets/img/card11.png" height="200px"></v-img>
          <v-card-title class="card-title">
            {{ $t("features.card2.title") }}
          </v-card-title>
          <v-card-subtitle id="card-subtitle">
            {{ $t("features.card2.subtitle") }}
          </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click="show2 = !show2">
              <v-icon color="#3e77a8">{{
                show2 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show2">
              <v-divider></v-divider>
              <v-card-text>
                {{ $t("features.card2.text") }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
        <v-card class="mx-auto my-auto" max-width="280">
          <v-img src="../assets/img/card9.png" height="200px"></v-img>
          <v-card-title class="card-title">
            {{ $t("features.card3.title") }}
          </v-card-title>
          <v-card-subtitle id="card-subtitle">
            {{ $t("features.card3.subtitle") }}
          </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click="show3 = !show3">
              <v-icon color="#3e77a8">{{
                show3 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show3">
              <v-divider></v-divider>
              <v-card-text>
                {{ $t("features.card3.text") }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
        <v-card class="mx-auto my-auto" max-width="280">
          <v-img src="../assets/img/card12.png" height="200px"></v-img>
          <v-card-title class="card-title">
            {{ $t("features.card4.title") }}
          </v-card-title>
          <v-card-subtitle id="card-subtitle">
            {{ $t("features.card4.subtitle") }}
          </v-card-subtitle>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn icon @click="show4 = !show4">
              <v-icon color="#3e77a8">{{
                show4 ? "mdi-chevron-up" : "mdi-chevron-down"
              }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div v-show="show4">
              <v-divider></v-divider>
              <v-card-text>
                {{ $t("features.card4.text") }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-row>
    </v-container>
    
    <!-- Datatable -->
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="10" md="10" lg="12" xl="10" 
        style="background-color:#e7edf3;overflow:auto;border:1px solid #ccc;border-radius:2%; box-shadow:1px 10px 10px 1px #4a657c!important;">
          <v-row justify="center" align="center" >
            <v-col cols="auto" >
              <h3 class="title-packet">{{ $t("tab.title3") }}</h3>
              <hr color="#3e77a8" />
            </v-col>
          </v-row>

          <v-card style="background-color:#e7edf3;box-shadow: none!important;padding:20px">
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Ara..."
              single-line
              hide-details
            ></v-text-field>
          </v-card>
              
          <v-data-table id="dfs"
          :headers="headers" 
          :items="dataFutureSignals"
          item-key="name"
          :loading="loading"
          :sort-by.sync="sortBy"
          :sort-desc.sync="sortDesc"
          class="elevation-1"
          :search="search"
          :page.sync="page"
          :items-per-page="itemsPerPage"
          @page-count="pageCount = $event"
          style="background-color:#e7edf3;margin:10px"
          >

          <template v-slot:item.type="{ item }">
            <span 
              :style=" item.type === 'Buy' ? { color: '#2196f3' } : { color: 'brown' } " >
              {{ item.type  }} 
            </span>
          </template>

          <template v-slot:item.currentPrice="{ item }">
            <span>
              {{ item.currentPrice  }} 
            </span>
          </template>

          <template v-slot:item.created_at="{ item }">
            <span>{{  new Date(item.created_at).toISOString().split("T")[0] +
                        " " +
                        new Date(item.created_at).getHours() +
                        ":" +
                        new Date(item.created_at).getMinutes() +
                        ":" +
                        new Date(item.created_at).getSeconds() }}</span>
          </template>

          <template v-slot:item.sellDate="{ item }">
            <span>{{item.sellDate | formatDate }}</span>
          </template>

          <template v-slot:item.currentProfit="{ item }">
            <span :style="item.currentProfit > 0 ? { color: 'green' } : { color: 'red' }">{{ item.currentProfit.toFixed(2) }} </span>
          </template>
      
          <template v-slot:item.isOpen="{ item }">
            <v-chip :color="getColor(item.isOpen)" dark>
              {{ item.isOpen === true ? $t("tab.table.title12") : $t("tab.table.title13") }} 
            </v-chip>
          </template>
        
          </v-data-table> 
        
      
        

       </v-col>
      </v-row>
    </v-container>
    <br><br><br><br>
    <!-- Alis Sinyali Verilen Coinler -->
    <v-container >
      <v-row justify="center" align="start" >
        <v-col cols="10" md="10" lg="12" xl="10"
         style="background-color:#e7edf3;overflow:auto;border:1px solid #ccc;border-radius:2%;  box-shadow:1px 10px 10px 1px #4a657c!important;">
          <v-row justify="center" align="center" >
            <v-col cols="auto">
              <h3 class="title-packet" >{{ $t("tab.title1") }}</h3>
              <hr color="#3e77a8" />
            </v-col>
          </v-row>
          <v-tabs v-model="tab" centered> 
            <v-tab href="#tab-1"> {{ $t("tab.subtitle1") }} </v-tab>
            <v-tab href="#tab-2"> {{ $t("tab.subtitle2") }} </v-tab>
            <v-tab href="#tab-3"> {{ $t("tab.subtitle3") }} </v-tab>
          </v-tabs>
          <v-tabs-items v-model="tab" style="background-color:#e7edf3!important" >
          
          <v-card style="background-color:#e7edf3;box-shadow: none!important;padding:20px">
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Ara..."
              single-line
              hide-details
            ></v-text-field>
          </v-card>

          <!-- 15 Dakika -->
          <v-tab-item :value="'tab-1'">
            <v-data-table 
            :headers="headersOne"
            :items="dataOne"
            :loading="loading"
            item-key="name"
            class="elevation-1"
            :search="search"
            style="background-color:#e7edf3;margin:10px;"
            >

            <template v-slot:item.rate="{ item }">
              <span :style="item.rate > 0 ? { color: 'green' } : { color: 'red' }">{{ item.rate.toFixed(2) }} </span>
            </template>
            
            <template v-slot:item.updatet_at="{ item }">
              <span>{{ new Date(item.updatet_at).toISOString().split("T")[0] +
                        " " +
                        new Date(item.updatet_at).getHours() +
                        ":" +
                        new Date(item.updatet_at).getMinutes() +
                        ":" +
                        new Date(item.updatet_at).getSeconds() }}</span>
            </template>

            <template v-slot:item.RECOMMENDATION="{ item }">
              <span  :style="
                          item.RECOMMENDATION === 'STRONG_BUY'
                            ? { color: 'green' }
                            : item.RECOMMENDATION === 'BUY'
                            ? { color: '#2196f3' }
                            : item.RECOMMENDATION === 'NEUTRAL'
                            ? { color: 'orange' }
                            : item.RECOMMENDATION === 'SELL'
                            ? { color: 'pink' }
                            : { color: 'red' }
                        "
                      >
                        {{
                          item.RECOMMENDATION === "STRONG_BUY"
                            ? $t("tab.table.status.strongBuy")
                            : item.RECOMMENDATION === "BUY"
                            ? $t("tab.table.status.buy")
                            : item.RECOMMENDATION === "NEUTRAL"
                            ? $t("tab.table.status.neutral")
                            : item.RECOMMENDATION === "SELL"
                            ? $t("tab.table.status.sell")
                            : $t("tab.table.status.strongSel")}} </span>
            </template>
        
            </v-data-table> 
          </v-tab-item>
    
          <!-- 1 Saat -->
          <v-tab-item :transition="true" :value="'tab-2'">
            <v-data-table 
            :headers="headersOne"
            :items="dataTwo"
            item-key="name"
            class="elevation-1"
            :loading="loading"
            :search="search"
            style="background-color:#e7edf3;margin:10px"
            >

            <template v-slot:item.rate="{ item }">
              <span :style="item.rate > 0 ? { color: 'green' } : { color: 'red' }">{{ item.rate.toFixed(2) }} </span>
            </template>
            
            <template v-slot:item.updatet_at="{ item }">
              <span>{{ new Date(item.updatet_at).toISOString().split("T")[0] +
                        " " +
                        new Date(item.updatet_at).getHours() +
                        ":" +
                        new Date(item.updatet_at).getMinutes() +
                        ":" +
                        new Date(item.updatet_at).getSeconds() }}</span>
            </template>

            <template v-slot:item.RECOMMENDATION="{ item }">
              <span  :style="
                          item.RECOMMENDATION === 'STRONG_BUY'
                            ? { color: 'green' }
                            : item.RECOMMENDATION === 'BUY'
                            ? { color: '#2196f3' }
                            : item.RECOMMENDATION === 'NEUTRAL'
                            ? { color: 'orange' }
                            : item.RECOMMENDATION === 'SELL'
                            ? { color: 'pink' }
                            : { color: 'red' }
                        "
                      >
                        {{
                          item.RECOMMENDATION === "STRONG_BUY"
                            ? $t("tab.table.status.strongBuy")
                            : item.RECOMMENDATION === "BUY"
                            ? $t("tab.table.status.buy")
                            : item.RECOMMENDATION === "NEUTRAL"
                            ? $t("tab.table.status.neutral")
                            : item.RECOMMENDATION === "SELL"
                            ? $t("tab.table.status.sell")
                            : $t("tab.table.status.strongSel")}} </span>
            </template>
        
            </v-data-table> 
          </v-tab-item>
      
          <!-- 4 Saat -->
          <v-tab-item :transition="true" :value="'tab-3'">

          <v-data-table 
          :headers="headersOne"
          :items="dataThree"
          item-key="name"
          class="elevation-1"
          :loading="loading"
          :search="search"
          style="background-color:#e7edf3;margin:10px"
          >

          <template v-slot:item.rate="{ item }">
            <span :style="item.rate > 0 ? { color: 'green' } : { color: 'red' }">{{ item.rate.toFixed(2) }} </span>
          </template>
          
          <template v-slot:item.updatet_at="{ item }">
            <span>{{ new Date(item.updatet_at).toISOString().split("T")[0] +
                        " " +
                        new Date(item.updatet_at).getHours() +
                        ":" +
                        new Date(item.updatet_at).getMinutes() +
                        ":" +
                        new Date(item.updatet_at).getSeconds() }}</span>
          </template>

          <template v-slot:item.RECOMMENDATION="{ item }">
            <span  :style="
                        item.RECOMMENDATION === 'STRONG_BUY'
                          ? { color: 'green' }
                          : item.RECOMMENDATION === 'BUY'
                          ? { color: '#2196f3' }
                          : item.RECOMMENDATION === 'NEUTRAL'
                          ? { color: 'orange' }
                          : item.RECOMMENDATION === 'SELL'
                          ? { color: 'pink' }
                          : { color: 'red' }
                      "
                    >
                      {{
                        item.RECOMMENDATION === "STRONG_BUY"
                          ? $t("tab.table.status.strongBuy")
                          : item.RECOMMENDATION === "BUY"
                          ? $t("tab.table.status.buy")
                          : item.RECOMMENDATION === "NEUTRAL"
                          ? $t("tab.table.status.neutral")
                          : item.RECOMMENDATION === "SELL"
                          ? $t("tab.table.status.sell")
                          : $t("tab.table.status.strongSel")}} </span>
          </template>

          </v-data-table> 
        </v-tab-item>
      </v-tabs-items>
      
        </v-col>
      </v-row>
    </v-container>
    <br><br><br><br>
    <!-- 24 En Cok Kazanan Coinler -->
    <v-container>
      <v-row justify="center" align="start">
        <v-col cols="10" md="10" lg="12" xl="10"
        style="background-color:#e7edf3;overflow:auto;border:1px solid #ccc;border-radius:2%;  box-shadow:1px 10px 10px 1px #4a657c!important;">

          <v-row justify="center" align="center">
            <v-col cols="auto">
              <h3 class="title-packet">{{ $t("tab.title2") }}</h3>
              <hr color="#3e77a8" />
            </v-col>
          </v-row>

          <v-card style="background-color:#e7edf3;box-shadow: none!important;padding:20px">
            <v-spacer></v-spacer>
            <v-text-field
              v-model="search"
              append-icon="mdi-magnify"
              label="Ara..."
              single-line
              hide-details
            ></v-text-field>
          </v-card>
          
          <v-data-table 
          :headers="headersTwo"
          :items="dataFour"
          item-key="name"
          class="elevation-1"
          :loading="loading"
          :search="search"
          style="background-color:#e7edf3;margin:10px"
          >

          <template v-slot:item.rate="{ item }">
            <span :style="item.rate > 0 ? { color: 'green' } : { color: 'red' }">{{ item.rate.toFixed(2) }} </span>
          </template>
          
          <template v-slot:item.updatet_at="{ item }">
            <span>{{ new Date(item.updatet_at).toISOString().split("T")[0] +
                      " " +
                      new Date(item.updatet_at).getHours() +
                      ":" +
                      new Date(item.updatet_at).getMinutes() +
                      ":" +
                      new Date(item.updatet_at).getSeconds() }}</span>
          </template>

          </v-data-table> 
      
        </v-col>
      </v-row>
    </v-container>

    <br><br>

  </section>
</template>

<script>
import axios from "axios";

const header = {
  "Access-Control-Allow-Origin": "*",
  "Content-Type": "application/json",
};

export default {
  name: "contact",

  data() {
    return {
      dataOne: [],
      dataTwo: [],
      dataThree: [],
      dataFour: [],
      dataFutureSignals: [],
      tab: null,
      show1: false,
      show2: false,
      show3: false,
      show4: false,

      sortBy: 'isOpen',
      sortDesc: true,
      loading: true,
      page: 1,
      pageCount: 0,
      itemsPerPage: 10,

      search: '',
      fields: [],
      items: [],

      headers: [
        {
          text: this.$i18n.t("tab.table.title1"),
          align: 'start',
          sortable: true,
          value: 'data.coinName'
        },
        { text:  this.$i18n.t("tab.table.title9"), value: 'type', sortable: true },
        { text:  this.$i18n.t("tab.table.title14"), value: 'price', sortable: true, },
        { text:  this.$i18n.t("tab.table.title10"), value: 'created_at', sortable: true, },
        { text:  this.$i18n.t("tab.table.title15"), value: 'currentPrice', sortable: true, },
        { text:  this.$i18n.t("tab.table.title11"), value: 'sellDate', sortable: true, },
        { text:  this.$i18n.t("tab.table.title6"), value: 'currentProfit', sortable: true, },
        { text:  this.$i18n.t("tab.table.title8"), value: 'isOpen', sortable: true, }
      ],

      headersOne: [
        { text: this.$i18n.t("tab.table.title1"), align: 'start', sortable:false, value: 'coinName',},
        { text:  this.$i18n.t("tab.table.title2"), value: 'price' },      
        { text:  this.$i18n.t("tab.table.title3"), value: 'buy' },      
        { text:  this.$i18n.t("tab.table.title4"), value: 'sell' },      
        { text:  this.$i18n.t("tab.table.title5"), value: 'notr' },      
        { text:  this.$i18n.t("tab.table.title6"), value: 'rate' },      
        { text:  this.$i18n.t("tab.table.title7"), value: 'updatet_at' },      
        { text:  this.$i18n.t("tab.table.title8"), value: 'RECOMMENDATION' },         
      ],

      headersTwo: [
        { text: this.$i18n.t("tab.table.title1"), align: 'start', sortable:false, value: 'coinName',},
        { text:  this.$i18n.t("tab.table.title2"), value: 'price' },           
        { text:  this.$i18n.t("tab.table.title6"), value: 'rate' },      
        { text:  this.$i18n.t("tab.table.title7"), value: 'updatet_at' },             
      ],
    };
  },

  props: {
    tabIndex: {
      type: Number,
      default: 0,
    },
  },

  methods: {

      formatDate(date) {
        return moment(date).format('dd.mm.YYYY');
    },

    getColor (isOpen) {
      if (isOpen == false) return 'red'
      else if (isOpen == true) return 'green'
      else return 'brown'
    },
  
    toggleOrder () {
      this.sortDesc = !this.sortDesc
    },
    nextSort () {
      let index = this.headers.findIndex(h => h.value === this.sortBy)
      index = (index + 1) % this.headers.length
      this.sortBy = this.headers[index].value
    },
    
    async fetchOne() {
      this.loading = true
      const url = "";
      const res = await axios.get(url);
      this.dataOne = res.data;
      this.loading = false
    },
    async fetchTwo() {
      this.loading = true
      const res = await axios.get(
        ""
      );
      this.dataTwo = res.data;
      this.loading = false
    },
    async fetchThree() {
      this.loading = true
      const res = await axios.get(
        ""
      );
      this.dataThree = res.data;
      this.loading = false
    },
    async fetchFour() {
      this.loading = true
      const res = await axios.get(
        ""
      );
      this.dataFour = res.data;
      this.loading = false
    },
    async fetchFour() {
      this.loading = true
      const res = await axios.get(
        ""
      );
      this.dataFour = res.data;
      this.loading = false
    },
    async getFutureSignals() {

      this.loading = true

      const uri = "";
      await axios.get(uri)
      .then(res => {
        this.dataFutureSignals = res.data;

        this.loading = false

    }).catch(err => {
    }); 
    },
  },

  created() {
    this.fetchOne();
    this.fetchTwo();
    this.fetchThree();
    this.fetchFour();
    this.getFutureSignals();
  },
};

</script>

<style>
.theme--light.v-tabs > .v-tabs-bar {
    background-color:#e7edf3!important;
}
.v-data-table-header{
  background-color: #e0e0e082;
}
.theme--light.v-pagination .v-pagination__item {
    background: #e0e0e082;
    color: rgba(0, 0, 0, 0.87);
}
.theme--light.v-pagination .v-pagination__navigation {
    background: #e0e0e082;
}
.v-text-field {
    padding-top: 12px;
    margin-top: 14px;
}
</style>
<style lang="scss" scoped>
@import "~vuetify/src/styles/settings/_variables";
@import "https://cdn.jsdelivr.net/npm/@mdi/font@6.x/css/materialdesignicons.min.css" ;

.title-packet {
  color: #d14011;
  font-size: 2rem;
  padding-top: 10px;
}
@media #{map-get($display-breakpoints, 'sm-and-down')} {
  .title-packet {
    font-size: 1.5rem;
  }
}
h2 {
  font-size: 3rem;
}
@media #{map-get($display-breakpoints, 'md-and-down')} {
  h2 {
    font-size: 2rem;
  }
}
@media #{map-get($display-breakpoints, 'sm-and-down')} {
  h2 {
    font-size: 1rem;
  }
}
p {
  color: white;
  font-size: 1.3rem;
}
.jumbotron {
  border: 3px solid #3e77a8;
  background-color: #3e77a8b4;
  padding: 1rem;
}
.card-title {
  color: #3e77a8;
}
#card-subtitle {
  color: #d14011;
}
.v-card__text {
  color: #d14011;
}
tbody {
    height: 200px;
    overflow-y: scroll;
}

</style>

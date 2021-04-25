<template>
  <Layout>
    <Sidebar
      slot="sidebar"
      :hotels="hotelsList"
      @change-hotel="handleChangeHotel"
    />
    <RightBoard slot="rightBoard" :hotel="activeHotel" />
  </Layout>
</template>

<script>
import Layout from "./components/Layout.vue";
import Sidebar from "./components/Sidebar.vue";
import RightBoard from "./components/RightBoard.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    Layout,
    Sidebar,
    RightBoard
  },
  data() {
    return {
      activeHotelId: null,
      hotelsList: null
    };
  },
  mounted() {
    axios
      .get("http://localhost:2017/public/hotels")
      .then(response => (this.hotelsList = response.data.hotels));
  },
  computed: {
    activeHotel() {
      const fallback = {};
      if (!this.activeHotelId) {
        return fallback;
      }

      return (
        this.hotelsList.find(({ id }) => id === this.activeHotelId) || fallback
      );
    }
  },
  methods: {
    handleChangeHotel({ id }) {
      this.activeHotelId = id;
    }
  }
};
</script>

<style>
body {
  margin: 0;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #c5c6c7;
  background: var(--ultramarine_80);
}

:root {
  --dark_100: #0b0c10;
  --dark_80: #1f2833;
  --gray: #c5c6c7;
  --ultramarine_100: #66fcf1;
  --ultramarine_80: #45a29e;
}

html {
  height: 100%;
  /* display: flex; */
}
</style>

<template>
  <div class="sidebar">
    <SidebarRow
      v-for="(hotel, index) in hotels"
      :key="hotel.id"
      :id="hotel.id"
      :row-number="index + 1"
      :title="hotel.fullName"
      @change-hotel="$emit('change-hotel', $event)"
    />
  </div>
</template>

<script>
import SidebarRow from "./SidebarRow.vue";

export default {
  name: "Sidebar",
  components: {
    SidebarRow
  },
  props: {
    hotels: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.sidebar {
  overflow-y: auto;
  height: 100%;
  background: var(--dark_100);
  border-right: 1px solid var(--ultramarine_80);
}
</style>

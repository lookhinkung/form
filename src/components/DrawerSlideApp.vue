<script lang="ts">
export default {
  props: [],
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>
<template>
  <div class="drawer">
    <input id="my-drawer" type="checkbox" ref="input" class="drawer-toggle" />
    <div class="drawer-content">
      <slot name="window-mockup"></slot>
    </div>
    <div class="drawer-side shadow-lg">
      <label for="my-drawer" class="drawer-overlay"></label>
      <ul class="menu p-4 w-80 bg-base-100 text-base-content">
        <div class="flex flex-row justify-center">
          <h1 class="py-10 header-font">
            <i class="fa-solid fa-table-list fa-2xl font-bold mr-4"></i>
            MyFormTemplate
          </h1>
        </div>
        <!-- Sidebar content here -->
        <li>
          <router-link to="/" active-class="bg-base-300">Overview</router-link>
        </li>
        <li>
          <router-link to="form-register" active-class="bg-base-300"
            >Form</router-link
          >
        </li>
        <li>
          <router-link to="state-list" active-class="bg-base-300"
            >List</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:wght@800&display=swap");
.header-font {
  font-family: "Montserrat Alternates", sans-serif;
}
</style>

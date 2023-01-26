<script setup lang="ts">
import DrawerSlideApp from "./components/DrawerSlideApp.vue";
import WindowMockup from "./components/WindowMockup.vue"
</script>

<template>
  <div class="">
    <DrawerSlideApp>
      <template #window-mockup>
        <div class="h-screen flex items-center">
          <WindowMockup>
            <template #window-content>
              <router-view></router-view>
            </template>
          </WindowMockup>
        </div>
      </template>
    </DrawerSlideApp>
  </div>
</template>

<style scoped></style>

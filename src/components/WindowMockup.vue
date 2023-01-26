<script lang="ts">
export default {
  props: [],
  data() {
    return {};
  },
};
</script>
<script setup lang="ts">
import { watch, ref } from "vue";
import { useUserState } from "../store";
let counters = ref(0);
watch(
  useUserState().userState,
  () => {
    counters.value = useUserState().getCounter;
    console.log(counters.value);
  },
  { deep: true }
);
</script>
<template>
  <div class="container mx-auto">
    <div class="mockup-window border bg-base-300">
      <div class="absolute top-2 left-24">
        <div class="text-xs font-semibold breadcrumbs">
          <ul>
            <li><a>AppName</a></li>
            <li>
              <a>{{ $route.name }}</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="absolute top-2 right-8">
        <div class="flex gap-2 w-20">
          <label for="my-drawer" class="btn btn-primary btn-sm drawer-button"
            ><i class="fa-regular fa-window-maximize"></i
          ></label>
          <div
            class="tooltip tooltip-bottom text-xs"
            :data-tip="`${counters} states`"
          >
            <router-link
              to="/state-list"
              for=""
              class="btn btn-secondary btn-sm"
            >
              <h1
                v-if="counters !== 0"
                class="duration absolute -top-2 -right-4 flex text-black px-2 py-1 rounded-full bg-white"
              >
                {{ counters }}
              </h1>
              <i class="fa-solid fa-bell"></i>
            </router-link>
          </div>
        </div>
      </div>
      <div class="flex min-w-full h-full justify-center px-4 py-10 bg-slate-50">
        <slot name="window-content"></slot>
      </div>
    </div>
  </div>
</template>

<style scoped></style>

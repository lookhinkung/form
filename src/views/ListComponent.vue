<script lang="ts">
export default {
  props: [],
  methods: {
    selectMajor(facility: string) {
      switch (facility) {
        case "sci":
          return "วิทยาศาตร์";
        case "plant":
          return "ผลิตกรรมการเกษตร์";
        default:
          return "วิทยาศาตร์";
      }
    },
    linkInfo(index: number) {
      return Swal.fire({
        icon: "info",
        text: useUserState().$state.userState[index].annotation,
        title: "Notation",
      });
    },
  },
};
</script>
<script setup lang="ts">
import { ref, watch } from "vue";
import { useUserState } from "../store";
import Swal from "sweetalert2";

let userState = ref(useUserState().userState);

watch(useUserState().userState, () => {
  userState.value = useUserState().userState;
});

function removeStateConfirmation(index: number) {
  Swal.fire({
    title: "Do you really want to remove this?",
    showDenyButton: true,
    confirmButtonText: "Yes",
    denyButtonText: `Wait, no`,
  }).then((result) => {
    /* Read more about isConfirmed, isDenied below */
    if (result.isConfirmed) {
      useUserState().removeIndexState(index);
      Swal.fire("State had been deleted", "", "success");
    } else if (result.isDenied) {
      Swal.fire("Remove action was denied", "", "info");
    }
  });
}
</script>
<template>
  <div class="overflow-x-auto w-full">
    <table v-if="userState.length > 0" class="table table-zebra w-full">
      <!-- head -->
      <thead>
        <tr>
          <th>Name</th>
          <th>Citizen ID</th>
          <th>Major</th>
          <th>Student ID</th>
          <th>GPA</th>
          <th></th>
        </tr>
      </thead>
      <tbody class="text-sm google-font">
        <tr v-for="(stu, index) in userState" class="bg-slate-600">
          <td>
            <div class="flex items-center space-x-3">
              <div class="avatar">
                <div class="flex justify-center items-center w-12 h-12">
                  <i class="fa-solid fa-user fa-lg"></i>
                </div>
              </div>
              <div class="">
                <div class="font-base">{{ stu.prefixName }} {{ stu.name }}</div>
                <div class="badge badge-sm py-2 text-xs opacity-80">
                  <i
                    :class="{
                      'fa-solid fa-mars': stu.prefixName === 'นาย',
                      'fa-solid fa-venus':
                        stu.prefixName === 'นางสาว' || stu.prefixName === 'นาง',
                    }"
                    class="fa-solid fa-person-half-dress mr-1"
                  ></i>
                </div>
              </div>
            </div>
          </td>
          <td class="lg:text-sm text-xs">
            {{ stu.civilId }}
            <br />
            <span
              :class="index % 2 === 0 ? 'badge-ghost' : 'bg-opacity-80'"
              class="badge py-2 badge-sm"
              ><i class="fa-solid fa-phone mr-2"></i> {{ stu.tel }}</span
            >
          </td>
          <td class="lg:text-sm text-xs">
            {{ stu.major }}
            <br />
            <span
              :class="index % 2 === 0 ? 'badge-ghost' : 'bg-opacity-80'"
              class="badge py-2 badge-sm"
              >คณะ {{ selectMajor(stu.facility) }}</span
            >
          </td>
          <td class="lg:text-sm text-xs">{{ stu.stuCode }}</td>
          <td class="lg:text-sm text-xs">{{ stu.gpa }}</td>
          <th>
            <button
              @click="removeStateConfirmation(index)"
              class="btn btn-error text-white btn-xs"
            >
              Delete
            </button>
            <br />
            <button
              @click="linkInfo(index)"
              class="btn btn-info px-3 mt-1 text-white btn-xs"
            >
              Note
            </button>
          </th>
        </tr>
        <!-- row 2 -->
      </tbody>
    </table>
    <div v-else class="flex flex-col gap-3 justify-center items-center h-32">
      <i class="pb-4 fa-regular fa-folder-open fa-2xl"></i>
      <h1>Statement is empty!</h1>
      <hr class="border-black w-6/12" />
      <h1 class="text-slate-500">Try to submit something!</h1>
    </div>
  </div>
</template>
<style scoped></style>

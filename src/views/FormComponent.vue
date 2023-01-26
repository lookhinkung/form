<script lang="ts">
// ts-nochecked
import { useUserState, UserType, userValidation } from "../store";

import Swal from "sweetalert2";

export default {
  props: [],
  data() {
    return {
      userState: useUserState(),
      user: <UserType>{},
      selectedFacility: "",
      majorOpts: {
        plant: [
          "การส่งเสริมและสื่อสารเกษตร",
          "เกษตรเคมี",
          "พืชไร่",
          "พืชสวน",
          "สาขาพืชผัก",
          "พืชสวน",
          "สาขาพืชสวนประดับ",
          "พืชสวน",
          "สาขาไม้ผล",
          "วิทยาการสมุนไพร",
          "อารักขาพืช",
          "การส่งเสริมและสื่อสารเกษตร",
          "พืชไร่",
        ],
        sci: [
          "วัสดุศาสตร์",
          "คณิตศาสตร์",
          "เคมีอุตสาหกรรมและเทคโนโลยีสิ่งทอ",
          "เทคโนโลยีชีวภาพ เทคโนโลยีสารสนเทศ",
          "ฟิสิกส์ประยุกต์",
          "วิทยาการคอมพิวเตอร์",
          "วิทยาศาสตรบัณฑิต",
          "สาขาวิชาเคมี",
          "สถิติ",
        ],
      },
    };
  },
  methods: {
    async onSubmit(node: UserType) {
      try {
        userValidation.parse(node);
        await new Promise((r) => setTimeout(r, 1000)).then(() => {
          this.userState.pushState(node);
          console.log(this.userState.getState);
          this.$formkit.reset("student-form");
          this.user = <UserType>{};
          Swal.fire({
            icon: "success",
            title: "Submit succeed",
            text: "Push state successfully",
          });
        });
      } catch (err: any) {
        Swal.fire({
          icon: "error",
          title: "Error while tried to push statement!",
          text: err,
          footer:
            '<a class="text-danger">We found something strange about how your input form, please try again </a>',
        });
        return;
      }
    },
    invalidation() {
      Swal.fire({
        icon: "error",
        title: "Values are invalid!",
        text: "are your form values really valid?. Please checked your form again!",
      });
    },
    selectMajor(facility: string) {
      switch (facility) {
        case "sci":
          return this.majorOpts.sci;
        case "plant":
          return this.majorOpts.plant;
        default:
          return this.majorOpts.sci;
      }
    },
  },
};
</script>

<template>
  <FormKit
    type="form"
    id="student-form"
    @submit-invalid="invalidation"
    submit-label="Register"
    messages-class="text-center"
    :actions="false"
    @submit="onSubmit"
    #default="{ value }"
  >
    <hr />
    <div class="text-center"></div>
    <div class="grid sm:grid-cols-2 grid-cols-1 gap-x-16 xl:gap-x-20 my-6">
      <FormKit
        v-model="user.prefixName"
        type="select"
        name="prefixName"
        label="Prefix"
        inner-class="text-xs lg:text-sm xl:text-base"
        placeholder="คำนำหน้า"
        help="นาย | นาง | นางสาว"
        :options="['นาย', 'นางสาว', 'นาง']"
        validation="required"
      />
      <FormKit
        v-model="user.name"
        type="text"
        name="name"
        label="Name"
        inner-class="text-xs lg:text-sm xl:text-base"
        placeholder="ชื่อ"
        help="ชื่อเต็ม"
        validation="required|length:5"
      />
      <FormKit
        v-model="user.stuCode"
        type="text"
        name="stuCode"
        inner-class="text-xs lg:text-sm xl:text-base"
        label="Student Code"
        validation="required|length:10,10|number"
        placeholder="เลขนักศีกษา"
        help="640xxxxxxx"
      />
      <FormKit
        v-model="user.tel"
        type="text"
        name="tel"
        inner-class="text-xs lg:text-sm xl:text-base"
        label="Telephone"
        validation="required|length:10,10|number"
        placeholder="เบอร์โทรศัพท์"
        help="065xxxxxxx"
      />
      <FormKit
        v-model="user.civilId"
        type="text"
        name="civilId"
        inner-class="text-xs lg:text-sm xl:text-base"
        label="Citizen ID"
        placeholder="เลขประจำตัวประชาชน"
        validation="required|number|length:13,13"
        help="150xxxxxxxxxx"
      />
      <FormKit
        v-model="user.cSelection"
        type="select"
        name="cSelection"
        inner-class="text-xs lg:text-sm xl:text-base"
        label="Course Selection"
        :options="['4 - 5 ปี', '4 ปีเทียบเข้าเรียน (2 ปี)']"
        placeholder="เลือกหลักสูตร"
        validation="required"
      />
      <FormKit
        v-model="user.gpa"
        type="text"
        name="gpa"
        inner-class="text-xs lg:text-sm xl:text-base"
        label="GPA"
        placeholder="ป้อนหน่วยกิต"
        validation="required|number|length:1,4"
      />
      <FormKit
        type="select"
        name="facility"
        v-model="user.facility"
        inner-class="text-xs lg:text-sm xl:text-base"
        label="Facility"
        :options="{
          sci: 'วิทยาศาสตร์',
          plant: 'ผลิตกรรมการเกษตร์',
        }"
        placeholder="เลือกหลักสูตร"
        validation="required"
      />
      <FormKit
        v-model="user.major"
        v-if="user.facility"
        type="select"
        name="major"
        outer-class="col-span-full lg:flex flex-col items-center justify-center grow"
        :options="selectMajor(user.facility)"
        inner-class=" text-xs lg:text-sm xl:text-base"
        label="Major"
        placeholder="เลือกหลักสูตร"
        validation="required"
      />
      <FormKit
        v-model="user.annotation"
        type="textarea"
        name="annotation"
        outer-class="col-span-full lg:flex flex-col items-center justify-center grow"
        inner-class=" text-xs lg:text-sm break-words"
        cols="100"
        label="Annotation"
        placeholder="หมายเหตุ"
        validation="required|length:10,50"
      />
    </div>

    <FormKit
      input-class="bg-accent"
      type="submit"
      label="Register"
      outer-class="w-full flex justify-center"
    />
  </FormKit>
</template>
<style scoped></style>

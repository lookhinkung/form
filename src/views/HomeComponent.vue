<script lang="ts">
// @ts-nocheck
import TypeIt from "typeit";

export default {
  props: [],
  mounted() {
    this.type();
  },
  methods: {
    type() {
      new TypeIt(".creatorName", {
        speed: 100,
        startDelay: 2000,
        waitUntilVisible: true,
      }).go();
    },
  },
};
</script>
<script setup lang="ts">
const intros = [
  "Application form เกี่ยวกับข้อมูลนักศึกษาในมหาวิทยาลัยแม่โจ้",
  "Application นี้จะประกอบไปด้วย 3 หน้าหลัก (Overviews, Form and ListStates)",
  "ฟอร์มจะเก็บข้อมูสำคัญ ๆ ของนักศึกษาตั้งแต่ ชื่อ เลขที่นศ สาขา คณะ ๆลๆ",
  "แสดงข้อมูลออกมาเป็น Table รายการแต่ละแถวก็โชว์ข้อมูลของแต่ละ state",
  "สามารถลบข้อมูลแต่ละรายการ (state) ได้",
];
const libs = [
  "ใช้ Pinia ในการจัดการ Statement",
  "ใช้ Formkit ในการจัดการ Form (Such as validations etc.)",
  "ใช้ Zod ในการตรวจสอบ และ validation type ก่อน push state ขิ้น",
  "Using Typescript for development.",
];
</script>
<template>
  <div
    class="mockup-code md:text-sm text-xs lg:text-base w-full flex flex-col gap-1"
  >
    <pre
      data-prefix="$"
      class="text-base lg:text-lg bg-warning text-warning-content font-semibold"
    ><code>MyFormTemplate</code></pre>
    <pre data-prefix=">"><code>Welcome to my little form!</code></pre>
    <pre data-prefix=">" class="text-info"><code>Introduction</code></pre>
    <pre :data-prefix="index" v-for="(i, index) in intros">
    <code class="font-mono text">{{ i }}</code></pre>
    <pre
      data-prefix=">"
      class="text-accent"
    ><code>Node Libraries Usage</code></pre>
    <pre :data-prefix="index" v-for="(i, index) in libs">
    <code class="font-mono text">{{ i }}</code></pre>
    <pre data-prefix=">" class="text-secondary"><code>Get Start</code></pre>
    <pre data-prefix=">" class="flex items-center">
      <label class="btn ml-6 mr-3 btn-primary btn-xs "
        ><i class="fa-regular fa-window-maximize"></i
      ></label><code>ปุ่มสำหรับเปิดหน้าต่าง Navigation</code>
      <span class="btn btn-secondary btn-xs  ml-3 mr-3">
              <i class="fa-solid fa-bell"></i>
            </span><code>ปุ่มสำหรับ Navigate ไปยัง ListState</code>
    </pre>
    <pre
      data-prefix="//"
      class="text-black font-semibold mt-5 bg-base-200"
    ><code class="creatorName">ทำโดย: นายติณณ์ ศรีสมศักดิ์ เลขนศ 6404101317</code></pre>
  </div>
</template>
<style scoped></style>

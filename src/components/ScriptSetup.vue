<template>
  <h3 class="container py-4">Script Setup</h3>
  <div class="container py-1">
    msg : {{ msg }}
    <br />
    message : {{ message }}
    <input v-model="message" type="text" />
    <button @click="sayHello">click</button>
    <button @click="child.sayHello">child click</button>
    <hr />

    <TemplateRefsChild ref="child"></TemplateRefsChild>
    <template v-if="child">child.message : {{ child.message }}</template>
    <hr />

    <MyButton class="parent-class"></MyButton>
    <hr class="my-4" />
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import TemplateRefsChild from "./TemplateRefsChild.vue";
import MyButton from "./MyButton.vue";

const msg = "Script Setup 부모 컴포넌트 입니다";
const message = ref("");
const sayHello = () => {
  alert("Hello World!");
};
const child = ref(null);

// script setup 사용시 기본적으로 Template Refs나 $parent와 같이 컴포넌트간 통신이 닫혀 있다
// 자식에서 $parent로 사용하려면 defineExpose 필요
defineExpose({
  msg,
});

// script setup내의 Top-level에서 async 선언없이도 await을 사용할 수 있다 => async setup()로 컴파일
// const response = await axios(
//   "https://dummy.restapiexample.com/api/v1/employees"
// );
</script>

<style lang="scss" scoped></style>

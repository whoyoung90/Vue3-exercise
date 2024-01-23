<template>
  <div class="container py-4">
    {{ msg }}
    <br />
    {{ message }}
    <input v-model="message" type="text" />
    <button @click="sayHello">click</button>
    <PostItem
      type="news"
      title="제목"
      contents="내용"
      :is-like="true"
    ></PostItem>
    <PostItem
      type="news"
      title="제목"
      contents="내용"
      :is-like="true"
    ></PostItem>
    <PostItem
      type="news"
      title="제목"
      contents="내용"
      :is-like="true"
    ></PostItem>
    <hr />
    <TemplateRefsChild ref="child"></TemplateRefsChild>
    <template v-if="child">{{ child.message }}</template>
    <hr />
    <MyButton class="parent-class"></MyButton>
  </div>
</template>

<script setup>
import { ref } from "vue";
import axios from "axios";
import PostItem from "@/components/PostItem.vue";
import TemplateRefsChild from "./TemplateRefsChild.vue";
import MyButton from "./MyButton.vue";

const msg = "Hello World!";
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
const response = await axios(
  "https://dummy.restapiexample.com/api/v1/employees"
);
console.log("response: ", response);
</script>

<style lang="scss" scoped></style>

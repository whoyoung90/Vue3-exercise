<template>
  <div>
    <h2>보간법</h2>
    <p>{{ message }}</p>
    <p v-once>{{ message }}</p>
    <button v-on:click="message = message + '!'">Click!</button>
    <hr />

    <h2>v-html</h2>
    <p>{{ rawHtml }}</p>
    <p v-html="rawHtml"></p>
    <hr />

    <h2>속성 바인딩(v-bind)</h2>
    <div :title="dynamicTitle">마우스를 올려보세요</div>
    <input type="text" value="홍길동" :disabled="isInputDisabled" />
    <input v-bind="attrs" />

    <h2>JavaScript</h2>
    {{ message.split("").reverse().join("") }}<br />
    {{ isInputDisabled ? "예" : "아니오" }}
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  // vue는 template 문법을 이용해서 컴포넌트 인스턴스에 바인딩 할 수 있다.
  setup() {
    const message = ref("안녕하세요!");
    const rawHtml = ref("<strong>안녕하세요</strong>");

    const dynamicTitle = ref("안녕하세요!@@@@@!!!");
    const isInputDisabled = ref(false);

    // v-bind는 다중 속성을 한꺼번에 객체로 바인딩 할 수 있다.
    const attrs = ref({
      type: "text",
      value: "12345678",
      disabled: false,
    });

    return {
      message,
      rawHtml,
      dynamicTitle,
      isInputDisabled,
      attrs,
    };
  },
};
</script>

<style lang="scss" scoped></style>

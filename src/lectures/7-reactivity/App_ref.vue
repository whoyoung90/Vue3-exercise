<template>
  <div>
    <p>{{ message }}</p>
    <button v-on:click="addMessage">add click</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    /**
     * @description ref()
     * reactive() 함수는 객체타입에만 동작.
     * ref() 함수로 primitive 타입(number, string, boolean)을 반응형으로 만들 수 있다!
     */
    let message = ref("Hello Vue!");

    const addMessage = () => {
      message.value = message.value + "!";
    };
    console.log(message);
    console.log("message: ", message.value);
    console.log("message typeof: ", typeof message.value);

    // ref로 리턴된 반응형 객체는 내부적으로 unwrapping 되므로 "템플릿에서 value를 빼줘도 된다"
    return {
      message,
      addMessage,
    };
  },
};
</script>

<style lang="scss" scoped></style>

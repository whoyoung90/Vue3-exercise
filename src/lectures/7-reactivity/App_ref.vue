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
     * @returns { mutable object } .value라는 단 하나의 속성 포함
     *
     * ref() 함수로 primitive 타입(number, string, boolean)에 반응형 데이터를 만들 수 있다!
     */
    let message = ref("Hello Vue!");

    const addMessage = () => {
      message.value = message.value + "!";
    };
    console.log(message);
    console.log("message: ", message.value);
    console.log("message typeof: ", typeof message.value);

    // ref로 리턴된 반응형 객체를 템플릿에서 사용할 때는 자동으로 내부 값(value)을 풀어내기(Unwrapping) 때문에
    // .value를 추가할 필요없이 사용 가능!
    return {
      message,
      addMessage,
    };
  },
};
</script>

<style lang="scss" scoped></style>

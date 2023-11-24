<template>
  <div>
    <p>
      {{ counter }}
    </p>
    <p>
      {{ message }}
    </p>
    <button @click="increment">click!</button>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  /**
   * @description setup()
   * @param { props, context }
   * 컴포넌트 인스턴스가 생성되기 전에 실행되는 hook
   * setup 함수 안에 반응형 상태나 메서드를 선언하고 객체로 반환하면, template에 노출할 수 있다
   */
  setup() {
    const counter = ref(0);
    const message = ref("Hello Vue3");
    const increment = () => {
      counter.value++;
    };
    return {
      counter,
      message,
      increment,
    };
  },
};
</script>

<style lang="scss" scoped></style>

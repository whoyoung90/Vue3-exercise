<template>
  <div>
    <button v-on:click="increment">Click {{ state.count }}</button>
    <button v-on:click="increment">Deep Click {{ state.deep.count }}</button>
  </div>
</template>

<script>
import { reactive } from "vue";

export default {
  setup() {
    /**
     * @description reactive()
     * 객체나 배열과 같은 "reference 타입"의 반응형 객체를 선언하는 함수
     *
     * primitive 타입은 반응형으로 만들수 없다. reactive("Hello Vue")
     * 그래서 반응형 API에서는 primitive 타입을 선언할 수 있는 ref 함수를 제공!!
     */
    const state = reactive({
      count: 0,
      deep: {
        count: 0,
      },
    });
    const increment = () => {
      state.count++;
      state.deep.count++;
    };
    return {
      state,
      increment,
    };
  },
};
</script>

<style lang="scss" scoped></style>

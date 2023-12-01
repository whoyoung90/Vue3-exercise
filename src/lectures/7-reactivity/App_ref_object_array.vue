<template>
  <div></div>
</template>

<script>
import { reactive, ref } from "vue";

export default {
  setup() {
    /**
     * @description ref -> Object
     * ref로 선언한 반응형 상태를 "객체"에 넣었을 때, 객체에서 사용할 때는 .value 필요 X
     */
    const count = ref(0);
    const state = reactive({
      count,
    });
    count.value++;
    count.value++;
    console.log(count.value); // 2
    console.log("state.count: ", state.count); // 2
    console.log("state.count: ", state.count.value); // undefined

    /**
     * @description ref -> Array
     * ref로 선언한 반응형 상태를 "배열"에 넣었을 때, 배열에서 사용할 때는 .value 필요 O
     */
    const message = ref("Hello");
    const arr = reactive([message]);
    console.log(message.value); // "Hello"
    console.log("arr[0]: ", arr[0]); // RefImpl
    console.log("arr[0]: ", arr[0].value); // "Hello"
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

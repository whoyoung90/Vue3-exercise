<template>
  <div></div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const message = ref("");

    watch(message, (newValue, oldValue) => {
      // 특정 반응형 데이터가 변경되었을 때
      // DOM을 조작하거나, API 호출 또는 다른 반응형 상태를 변경하고자 할때 사용!
      console.log("newValue: ", newValue);
      console.log("oldValue: ", oldValue);
    });
    return {
      message,
    };
  },
};
</script>

<style lang="scss" scoped></style>

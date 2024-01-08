<template>
  <div>
    <p>{{ message }}</p>
    <p>{{ reverseMessage }}</p>
  </div>
</template>

<script>
import { ref, watch } from "vue";

export default {
  setup() {
    const message = ref("Hello Vue3");
    const reverseMessage = ref("");

    const reverseFunction = () => {
      console.log("즉시실행함!!!");
      reverseMessage.value = message.value.split("").reverse().join("");
    };
    watch(message, reverseFunction);
    reverseFunction(); // 세번째 인자에 { immediate: true }와 동일한 기능!
    return { message, reverseMessage };
  },
};
</script>

<style lang="scss" scoped></style>

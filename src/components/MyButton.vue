<template>
  <div class="p-3 bg-danger">
    <button class="btn btn-primary" type="button" v-bind="$attrs">
      My Button {{ message }}
    </button>
    <!-- {{$attrs}} -->
  </div>
</template>

<script>
export default {
  // non Props 속성을 root에 상속할건지 말건지를 지정하는 옵션 (parent-class 상속여부)
  inheritAttrs: false,
};
</script>
<script setup>
import { ref } from "vue";
const message = ref("message");
</script>

<style lang="scss" scoped></style>

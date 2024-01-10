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
  inheritAttrs: false, // script setup에서 지원하지 않는 속성을 사용할 경우
};
</script>
<script setup>
import { ref } from "vue";
const message = ref("message");
</script>

<style lang="scss" scoped></style>

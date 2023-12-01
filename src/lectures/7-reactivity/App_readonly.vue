<template>
  <div></div>
</template>

<script>
import { reactive, readonly } from "vue";

export default {
  // readonly를 이용하여 반응형 객체의 변경 방지
  setup() {
    const original = reactive({
      count: 0,
    });
    const copy = readonly(original);

    original.count++; // 원본은 변경 가능
    copy.count++; // readonly로 생성된 복사본은 변경 불가

    console.log(original.count); // 1
    console.log(copy.count); // 1 target is readonly
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

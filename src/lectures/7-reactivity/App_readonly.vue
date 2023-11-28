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

    // 원본은 변경 가능
    original.count++;
    // readonly로 생성된 복사본은 변경 불가
    copy.count++;

    console.log(original.count); // 1
    console.log(copy.count); // 여전히 1
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

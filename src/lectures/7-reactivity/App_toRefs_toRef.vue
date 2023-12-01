<template>
  <div>
    <p>author: {{ author }}</p>
    <p>title: {{ title }}</p>
  </div>
</template>

<script>
import { reactive, toRef, toRefs } from "vue";

export default {
  /**
   * @description toRef, toRefs
   * 반응형을 잃지 않으면서 구조 분해 할당
   * (-> 반응형 객체에서 그대로 구조 분해 할당시, 반응형을 잃게 되므로!)
   */
  setup() {
    const book = reactive({
      author: "Vue Team",
      year: "2020",
      title: "Vue 3 Guide",
      description: "당신은 지금 바로 이 책을 읽습니다  ;)",
      price: "무료",
    });

    // const { author, title } = book; // 반응형을 잃어버린 string..

    const { author, title } = toRefs(book);
    // const author = toRef(book, "author");
    // const title = toRef(book, "title");

    return { author, title, book };
  },
};
</script>

<style lang="scss" scoped></style>

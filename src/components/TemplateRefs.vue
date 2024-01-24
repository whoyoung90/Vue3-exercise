<template>
  <h3 class="container py-4">Template Refs</h3>
  <div class="container py-4">
    <input ref="input" type="text" />

    <!-- input은 마운트가 완료될 때까지 null (마운트가 완료된 후에 참조값이 할당된다) -->
    <!-- Cannot read properties of null (reading 'value'): v-if="input"으로 해결 -->
    <!-- <template> 안에서 $refs 내장 객체로 Refs 참조에 접근할 수도 있다 -->
    <p>{{ input }}</p>
    <p v-if="input">
      {{ input.value }}, {{ $refs.input.value }}, {{ $refs.input === input }}
    </p>
    <hr />

    <!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs">{{ fruit }}</li> -->
    <ul>
      <li
        v-for="fruit in fruits"
        :key="fruit"
        :ref="(el) => itemRefs.push(el.textContent)"
      >
        {{ fruit }}
      </li>
    </ul>
    <hr />

    <!-- ref 속성으로 자식 컴포넌트에 접근할 수 있다 -->
    <TemplateRefsChild ref="child"></TemplateRefsChild>
    <hr class="my-4" />
  </div>
</template>

<script>
import TemplateRefsChild from "./TemplateRefsChild.vue";
import { onMounted, ref } from "vue";
export default {
  components: {
    TemplateRefsChild,
  },
  setup() {
    const input = ref(null);
    console.log("setup: ", input.value); // null
    onMounted(() => {
      input.value.value = "Template Ref";
      console.log("onMounted: ", input.value); // ref: 렌더링이(마운트가) 된 이후에 접근할 수 있다!

      // itemRefs.value.forEach((item) => console.log("item: ", item.textContent));
      itemRefs.value.forEach((item) => console.log("item: ", item));

      console.log("child.message: ", child.value.message);
      child.value.sayHello();
    });

    const fruits = ref(["사과", "딸기", "포도"]);
    const itemRefs = ref([]); // v-for내부에서 ref가 사용될 때 ref는 마운트 후 요소 배열로 채워진다!!

    const child = ref(null);
    return { input, fruits, itemRefs, child };
  },
};
</script>

<style lang="scss" scoped></style>

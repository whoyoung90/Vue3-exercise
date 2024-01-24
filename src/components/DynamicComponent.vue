<template>
  <h3 class="container py-4">Dynamic Component</h3>
  <div class="container py-1">
    <button
      class="btn btn-primary me-2"
      @click="changeCurrentComp(DynamicApple)"
    >
      사과
    </button>
    <button class="btn btn-danger" @click="changeCurrentComp(DynamicBanana)">
      바나나
    </button>
    <!-- is속성으로 현재 컴포넌트를 갖고있는 반응형 데이터를 삽입 -->
    <component :is="currentComp" />

    <p>ref는 값 + 속성 모두 반응 : {{ obj1 }}</p>
    <p>shallowRef는 값에만 반응 : {{ obj2 }}</p>
    <hr class="my-4" />
  </div>
</template>

<script setup>
import { ref, shallowRef } from "vue";
import DynamicApple from "./DynamicApple.vue";
import DynamicBanana from "./DynamicBanana.vue";

// 현재 보여줄 컴포넌트
// is속성으로 컴포넌트를 넘기는 경우 ref보다 "shallowRef"로 정의하는게 퍼포먼스에서 유리!
const currentComp = shallowRef(DynamicApple);
// 컴포넌트를 변경할 수 있는 메서드
const changeCurrentComp = (comp) => (currentComp.value = comp);

const obj1 = ref({ name: "김우영" }); // obj1.value + obj1.value.name 모두 반응 (속성 + 값)
const obj2 = shallowRef({ name: "김동영" }); // obj2.value 반응 (값)
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <!-- $parent : 자식 컴포넌트에서 부모 컴포넌트로 접근할 수 있다 -->
    <!-- 부모 컴포넌트의 속성이 출력 -->
    {{ $parent }}
    <ul>
      <li v-for="fruit in $parent.fruits" :key="fruit">{{ fruit }}</li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from "vue";

const message = ref("Hello ~!");
const sayHello = () => {
  alert(message.value);
};

// script setup 사용시 기본적으로 Template Refs나 $parent와 같이 컴포넌트간 통신이 닫혀 있음
defineExpose({
  message,
  sayHello,
});
</script>

<script>
// import { ref } from "vue";

// export default {
//   setup() {
//     const message = ref("Hello ~!");
//     const sayHello = () => {
//       alert(message.value);
//     };
//     return { message, sayHello };
//   },
// };
//
</script>

<style lang="scss" scoped></style>

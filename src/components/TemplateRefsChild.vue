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

<script>
import { ref } from "vue";

export default {
  setup() {
    const message = ref("Hello ~!");
    const sayHello = () => {
      alert(message.value);
    };
    return { message, sayHello };
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div>
    <div
      class="text"
      :class="[isActive ? 'active-class' : 'class', errorClass, classObject]"
    >
      텍스트 입니다.
    </div>
    <button v-on:click="handleIsActive">toggle</button>
    <button v-on:click="hasError = !hasError">toggleError</button>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { reactive, ref } from "vue";

export default {
  setup() {
    const isActive = ref(true);
    const hasError = ref(false);

    // const classObject = reactive({
    // 	active: true,
    // 	'text-danger': true,
    // });

    // 해당 className 상태에 여러 조건이 필요하다면 computed를 활용할 수 있다!
    const classObject = computed(() => {
      return {
        active: true && true,
        "text-danger": true && true,
        "text-blue": true,
      };
    });

    const handleIsActive = () => {
      isActive.value = !isActive.value;
    };

    const activeClass = ref("active");
    const errorClass = ref("error");

    return {
      isActive,
      handleIsActive,
      hasError,
      classObject,
      activeClass,
      errorClass,
    };
  },
};
</script>

<style scoped>
.active {
  font-weight: 900;
}
.text-danger {
  color: red;
}
</style>

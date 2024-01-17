<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" header-message="헤더 메시지">
        #Fallback Content1
      </slot>
    </div>
    <div v-if="$slots.default" class="card-body">
      <!-- name이 없으면 자동으로 default를 받는다 -->
      <slot :child-message="childMessage" hello-message="안녕하세요!">
        #Fallback Content2
      </slot>
    </div>
    <div v-if="hasFooter" class="card-footer text-muted">
      <slot name="footer" footer-message="푸터 메시지">
        #Fallback Content3
      </slot>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity";
import { ref } from "vue";

export default {
  setup(props, { slots }) {
    const childMessage = ref("자식 컴포넌트 메시지");
    // context.slots
    const hasFooter = computed(() => !!slots.footer);
    return { childMessage, hasFooter };
  },
};
</script>

<style scoped>
.card {
  margin: 1rem 0;
}
</style>

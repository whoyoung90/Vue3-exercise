<template>
  <button class="fancy-btn">
    <slot :fancy-message="fancyMessage">
      <span>Default Click!!</span>
    </slot>
  </button>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const fancyMessage = ref("Fancy Message");
    return { fancyMessage };
  },
};
</script>

<style scoped>
.fancy-btn {
  margin: 1rem 1rem 0 0;
  padding: 5px 12px;
  color: #fff;
  background: linear-gradient(315deg, #42d392 25%, #647eff);
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
</style>

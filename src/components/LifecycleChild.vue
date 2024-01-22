<template>
  <div class="card">
    <div class="card-body">Lifecycle Child</div>
    <input id="input" type="text" />
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from "vue";

export default {
  setup() {
    console.log("[Child] setup");
    onBeforeMount(() => {
      console.log("[Child] onBeforeMount");
    });
    onMounted(() => {
      console.log("[Child] onMounted");
    });
    onBeforeUnmount(() => {
      // 마운트를 해제하기 직전에 호출하므로 -> 아직 DOM을 가져올 수 있다!
      console.log("[Child] onBeforeUnmount:", document.querySelector("#input"));
    });
    onUnmounted(() => {
      // 마운트를 해제한 후이므로 -> null
      console.log("[Child] onUnmounted:", document.querySelector("#input"));
    });
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

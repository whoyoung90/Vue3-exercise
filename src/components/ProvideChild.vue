<template>
  <div class="card">
    <div class="card-header">Child Component</div>
    <div class="card-body">
      <p>appMessage: {{ appMessage }}</p>
      <ProvideDeepChild></ProvideDeepChild>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";
import ProvideDeepChild from "./ProvideDeepChild.vue";

export default {
  components: {
    ProvideDeepChild,
  },
  setup() {
    /* App-level Provide */
    const appMessage = inject("app-message");
    return { appMessage };
  },
};
</script>

<style lang="scss" scoped></style>

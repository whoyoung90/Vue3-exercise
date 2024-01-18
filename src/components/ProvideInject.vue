<template>
  <div class="container py-4">
    <div class="card">
      <div class="card-header">ProvideInject Component</div>
      <div class="card-body">
        <button @click="count++">Click</button>
        <p>appMessage: {{ appMessage }}</p>
        <ProvideChild></ProvideChild>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, provide, readonly, ref } from "vue";
import ProvideChild from "./ProvideChild.vue";

export default {
  components: {
    ProvideChild,
  },
  setup() {
    const staticMessage = "static message";
    const message = ref("message");
    const updateMessage = (appendMessage) => {
      message.value = message.value + appendMessage;
    };
    const count = ref(10);

    // provide("static-message", staticMessage);
    provide("message", { message: readonly(message), updateMessage });
    provide("count", count);

    /* App-level Provide */
    const appMessage = inject("app-message");
    const msg = inject("msg");
    console.log("(Vue3) msg: ", msg);

    return { count, appMessage };
  },
  mounted() {
    /* globalProperties(Vue2) */
    console.log("(Vue2) this.msg: ", this.msg);
  },
};
</script>

<style lang="scss" scoped></style>

<template>
  <div class="card">
    <div class="card-header">Deep Child Component</div>
    <div class="card-body">
      <p>staticMessage: {{ staticMessage }}</p>
      <p>message: {{ message }}</p>
      <p>count: {{ count }}</p>
    </div>
  </div>
</template>

<script>
import { inject } from "vue";

export default {
  setup() {
    const staticMessage = inject("static-message", "default message"); // 값이 안넘어올 경우를 대비해서 "default message"
    const { message, updateMessage } = inject("message"); // 데이터를 변경할 수 있는 메서드도 함께 제공 (updateMessage)
    updateMessage("!");
    message.value = message.value + "@"; // readonly(message)로 해당 변경을 막았다
    const count = inject("count");
    return { staticMessage, message, count };
  },
};
</script>

<style lang="scss" scoped></style>

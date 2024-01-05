<template>
  <div>
    <!-- 메서드 실행시 첫번째 매개변수로 event 객체가 넘어온다 -->
    <input type="text" @keyup="onKeyupHandler" />
    <hr />
    <!-- 다이렉트로 호출시 $event로 넘겨줄 수 있다 -->
    <button @click="printEventInfo('Hello Vue3', $event)">
      inline event handler
    </button>
  </div>
</template>

<script>
export default {
  setup() {
    const onKeyupHandler = (event) => {
      console.log("event.key: ", event.key);
    };
    const printEventInfo = (message, event) => {
      console.log("message: ", message);
      console.log("event.target: ", event.target);
      console.log("event.target.tagName: ", event.target.tagName);
    };
    return { onKeyupHandler, printEventInfo };
  },
};
</script>

<style lang="scss" scoped></style>

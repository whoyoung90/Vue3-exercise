<template>
  <!-- 여기가 결국 DOM 트리다 -->
  <h3 class="container py-4">Lifecycle Hooks</h3>
  <div class="container py-4">
    <input ref="inputRef" type="text" value="hello world!" />
    <hr />
    <button @click="visible = !visible">Toggle Child</button>
    <LifecycleChild v-if="visible"></LifecycleChild>
    <p id="message">{{ message }}</p>
    <hr class="my-4" />
  </div>
</template>

<script>
import { onBeforeMount, onBeforeUpdate, onMounted, onUpdated, ref } from "vue";
import LifecycleChild from "./LifecycleChild.vue";
export default {
  components: {
    LifecycleChild,
  },
  setup() {
    console.log("setup");
    const inputRef = ref(null);
    const message = ref("");
    const visible = ref(false);

    onBeforeMount(() => {
      // 아직 컴포넌트가 DOM에 추가되기 전이기 때문에 DOM에 접근 불가
      console.log("onBeforeMount", inputRef.value); // null
    });
    onMounted(() => {
      // 컴포넌트가 DOM에 추가되었기 때문에 DOM에 접근이 가능 (ref)
      // onMounted 훅이 호출되었다는 것은 "모든 자식 컴포넌트가 마운트 되었음"을 의미!!!
      console.log("onMounted", inputRef.value.value);
    });

    onBeforeUpdate(() => {
      // 반응형 상태 변경으로 -> 컴포넌트가 "DOM 트리를 업데이트하기 직전에" 호출
      console.log("onBeforeUpdate", message.value); // 변경된 데이터
      console.log(
        "DOM Content: ",
        document.querySelector("#message").textContent // DOM 트리를 업데이트하기 이전이므로 기존 데이터
      );
    });
    onUpdated(() => {
      // 반응형 상태 변경으로 -> 컴포넌트가 "DOM 트리를 업데이트한 후에" 호출
      console.log("onUpdated", message.value); // 변경된 데이터
      console.log(
        "DOM Content: ",
        document.querySelector("#message").textContent // DOM 트리를 업데이트한 이후므로 변경된 데이터
      );
    });
    return { inputRef, message, visible };
  },
  // data: () => ({
  //   dataMessage: "data message",
  // }),
  // beforeCreate() {
  //   // 컴포넌트가 초기화 될때 실행
  //   // data() 또는 computed와 같은 다른 옵션을 처리하기 전에 즉시 호출
  //   console.log("beforeCreate", this); // 컴포넌트 인스턴스에는 접근 가능
  //   console.log("beforeCreate", this.dataMessage); // 반응형 데이터 data()에는 접근 불가
  // },
  // created() {
  //   // 컴포넌트가 초기화를 완료한 후 호출
  //   console.log("created", this);
  //   console.log("created", this.dataMessage); // data() 옵션을 처리한 이후이므로 접근 가능
  // },
};
</script>

<style lang="scss" scoped></style>

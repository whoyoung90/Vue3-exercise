<template>
  <div>
    <form @submit.prevent>
      <!-- <form action="" @submit.prevent="save(title, contents)"> -->
      <input v-model.lazy="title" type="text" placeholder="Title" />
      <textarea v-model.lazy="contents" placeholder="Contents"></textarea>
      <hr />
      <button @click="save(title, contents)">저장</button>
    </form>
  </div>
</template>

<script>
import { ref, watchEffect } from "vue";

export default {
  setup() {
    const title = ref("");
    const contents = ref("");

    const save = (title, contents) => {
      console.log(`저장되었습니다. title: ${title}, contents: ${contents}`);
    };

    /**
     * @description watchEffect
     * watch와 다르게 기본적으로 "최초 한번 즉시 실행"! (watch는 immediate 필요)
     */
    watchEffect(() => {
      console.log("watchEffect");
      save(title.value, contents.value);
    });
    return { title, contents, save };
  },
};
</script>

<style lang="scss" scoped></style>

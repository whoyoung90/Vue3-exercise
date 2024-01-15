<template>
  <div class="row g-3">
    <div class="col col-2">
      <select
        v-model="type"
        class="form-select"
        aria-label="Default select example"
      >
        <option value="news">뉴스</option>
        <option value="notice">공지사항</option>
      </select>
    </div>
    <div class="col col-8">
      <input v-model="title" type="text" class="form-control" />
    </div>
    <div class="col col-2 d-grid">
      <button class="btn btn-primary" @click="addPost">추가</button>
      <!-- @click="$emit('createPost', 1, 2, 3, '김우영')" -->
    </div>
  </div>
</template>

<script>
import { ref } from "vue";

export default {
  // emits: ["createPost"],
  emits: {
    // 유효성 검사가 있는 이벤트 선언 (유효성 체크에 걸려도 이벤트는 발생한다!)
    createPost: (newPost) => {
      if (!newPost.type) {
        return false;
      } else if (!newPost.title) {
        return false; // [Vue warn]: Invalid event arguments: event validation failed for event
      }
      return true;
    },
  },

  setup(props, { emit }) {
    // context.emit
    const type = ref("news");
    const title = ref("");
    const contents = ref("");

    const addPost = () => {
      const newPost = {
        type: type.value,
        title: title.value,
        contents: title.value,
      };
      emit("createPost", newPost);
      type.value = "news";
      title.value = "";
      contents.value = "";
    };

    return { addPost, type, title };
  },
};
</script>

<style lang="scss" scoped></style>

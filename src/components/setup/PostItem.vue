<template>
  <div class="card">
    <div class="card-body">
      <!-- type : news, notice -->
      <span class="badge bg-secondary">
        {{ typeName }}
      </span>
      <h5 class="card-title mt-2">{{ title }}</h5>
      <p class="card-text">
        {{ contents }}
      </p>
      <a href="#" class="btn" :class="isLikeClass" @click="toggleLike">
        좋아요
      </a>
    </div>
  </div>
</template>

<script>
console.log("Normal Script"); // 한번만 실행하고 싶은 경우, 일반 script 블럭과 함께 사용
</script>

<script setup>
// import { computed } from "@vue/reactivity";
import { computed } from "vue";
console.log("Script Setup"); // 인스턴스가 생성된 갯수만큼 호출

const props = defineProps({
  title: {
    type: String,
    required: true,
  },
  contents: {
    type: String,
    required: true,
  },
  isLike: {
    type: Boolean,
    default: false,
  },
  type: {
    type: String,
    default: "news",
    validator: (value) => {
      return ["news", "notice"].includes(value);
    },
  },
  obj: {
    type: Object,
    default: () => ({}),
  },
});

const emit = defineEmits(["toggleLike"]);

const isLikeClass = computed(() =>
  props.isLike ? "btn-danger" : "btn-outline-danger"
);
const typeName = computed(() => (props.type === "news" ? "뉴스" : "공지사항"));
const toggleLike = () => {
  emit("toggleLike");
};
</script>

<style lang="scss" scoped></style>

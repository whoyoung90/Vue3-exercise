<template>
  <label class="form-label" id="child-id">
    {{ label }}
  </label>
  <input v-model="value" type="text" class="form-control" />
</template>

<script>
import { computed } from "@vue/reactivity";

export default {
  // v-model 전달인자의 이름변경이 가능하다 (v-model:title)
  props: ["title", "label"],
  emits: ["update:title"],
  setup(props, { emit }) {
    const value = computed({
      get() {
        return props.title;
      },
      set(value) {
        emit("update:title", value);
      },
    });
    return { value };
  },
};
</script>

<style lang="scss" scoped></style>

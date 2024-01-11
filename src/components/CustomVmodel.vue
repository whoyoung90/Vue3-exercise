<template>
  <label class="form-label" id="child-id">
    {{ label }}
  </label>
  <input
    :value="modelValue"
    @input="(event) => $emit('update:modelValue', event.target.value)"
    type="text"
  />
  <!-- <input v-model="value" v-bind="$attrs" type="text" class="form-control" /> -->
</template>

<script>
import { computed } from "@vue/reactivity";

export default {
  props: ["modelValue", "label"], // value (vue2)
  emits: ["update:modelValue"], // @input (vue2)
  // setup(props, { emit }) {
  //   const value = computed({
  //     get() {
  //       return props.modelValue;
  //     },
  //     set(value) {
  //       emit("update:modelValue", value);
  //     },
  //   });
  //   return { value };
  // },
};
</script>

<style lang="scss" scoped></style>

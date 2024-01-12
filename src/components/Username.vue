<template>
  <div>
    <CustomVmodel
      :model-value="firstname"
      @update:model-value="(value) => $emit('update:firstname', value)"
      label="성"
    ></CustomVmodel>
    <CustomVmodel
      :model-value="lastname"
      @update:model-value="(value) => $emit('update:lastname', value)"
      label="이름"
    ></CustomVmodel>
  </div>
</template>

<script>
import CustomVmodel from "./CustomVmodel.vue";

export default {
  // 다중 바인딩: 전달인자를 활용해서 두개의 v-model을 전달
  props: ["firstname", "lastname"],
  emits: ["update:firstname", "update:lastname"],
  components: {
    CustomVmodel,
  },
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

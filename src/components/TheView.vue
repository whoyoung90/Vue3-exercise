<template>
  <main>
    <DynamicComponent />
    <DynamicPostItem />
    <LifecycleHooks />
    <!-- <TemplateRefs /> -->
  </main>
</template>

<script setup>
import DynamicComponent from "./DynamicComponent.vue";
import DynamicPostItem from "@/components/setup/DynamicPostItem.vue";
import LifecycleHooks from "./LifecycleHooks.vue";
// import TemplateRefs from "./TemplateRefs.vue";
</script>

<style lang="scss" scoped></style>

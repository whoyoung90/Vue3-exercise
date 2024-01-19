<template>
  <main>
    <DynamicComponent />
    <DynamicPostItem />
    <LifecycleHooks />
  </main>
</template>

<script setup>
import DynamicComponent from "./DynamicComponent.vue";
import DynamicPostItem from "@/components/setup/DynamicPostItem.vue";
import LifecycleHooks from "./LifecycleHooks.vue";
// import DynamicPostItem from "./DynamicPostItem.vue";
</script>

<style lang="scss" scoped></style>

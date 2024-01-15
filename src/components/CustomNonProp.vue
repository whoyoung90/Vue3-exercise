<template>
  <!-- Non-Prop 속성은 컴포넌트의 Root Element에 상속된다(div) -->
  <!-- inheritAttrs: false를 통해 속성 상속 비활성화 -->
  <div class="my-4 bg-danger">
    <!-- Root Element에 상속을 비활성화 하더라도 attrs 속성을 통해 하위 Element에 상속 가능!! -->
    <button class="btn btn-primary" type="button" v-bind="$attrs">
      attrs 속성 테스트
    </button>
  </div>
</template>

<script>
export default {
  inheritAttrs: false, // 속성 상속 비활성화

  setup(props, context) {
    // console.log('context.attrs: ', context.attrs);
    // console.log('class: ', context.attrs.class);
    // console.log('id: ', context.attrs.id);
    // console.log('onClick: ', context.attrs.onClick);
    // context.attrs.onClick();
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

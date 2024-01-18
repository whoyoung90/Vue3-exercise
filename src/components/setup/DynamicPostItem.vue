<template>
  <div class="container py-4">
    <div class="row g-3">
      <div v-for="post in posts" :key="post.id" class="col col-4">
        <PostItem
          :title="post.title"
          :contents="post.contents"
          :type="post.type"
          :is-like="post.isLike"
          @toggle-like="post.isLike = !post.isLike"
        />
      </div>
    </div>

    <hr class="my-4" />
    <CustomEmit @createPost="createPost"></CustomEmit>

    <hr class="my-4" />
    <!-- 동일 컴포넌트 v-model -->
    <!-- <label>
      이름
      <input
        :value="username"
        @input="(event) => (username = event.target.value)"
        type="text"
      />
    </label>
    <label>
      이름
      <input v-model="username" type="text" />
    </label> -->

    <!-- 사용자정의 컴포넌트 v-model (emit 사용) -->
    <CustomVmodel
      :model-value="username"
      @update:model-value="(value) => (username = value)"
      label="이름"
    ></CustomVmodel>
    <!-- <CustomVmodel v-model="username" label="이름"></CustomVmodel> -->
    <CustomVmodelTitle
      v-model:title="username"
      label="제목"
    ></CustomVmodelTitle>

    <!-- 다중 바인딩 -->
    <hr class="my-4" />
    <Username
      v-model:firstname="firstname"
      v-model:lastname="lastname"
    ></Username>

    <!-- NonProp 속성 -->
    <CustomNonProp
      class="parent-attrs"
      id="parent-attrs"
      @click="sayHello"
    ></CustomNonProp>

    <!-- Slot -->
    <SlotButton></SlotButton>
    <SlotButton>
      <template v-slot="{ fancyMessage }">
        Slot Click😆
        <br />
        {{ fancyMessage }}
      </template>
    </SlotButton>
    <SlotCard>
      <!-- <template #[slotArgs]> 제목입니다 </template> -->
      <!-- <template v-slot:default> 내용입니다 </template> -->
      <!-- <template v-slot> 내용입니다 </template> -->
      <!-- 암시적으로 Default 슬롯입니다 -->
      <!-- <template v-slot:footer> 푸터입니다 </template> -->

      <template v-slot:header="{ headerMessage }">
        제목입니다
        <br />
        {{ headerMessage }}
      </template>
      <template #default="{ childMessage, helloMessage }">
        내용입니다.
        <br />
        {{ childMessage }}
        <br />
        {{ helloMessage }}
      </template>
      <template v-slot:footer="{ footerMessage }">
        푸터입니다
        <br />
        {{ footerMessage }}
      </template>
    </SlotCard>

    <!-- Slot에서 특정 부분만 사용시 v-if="$slot." -->
    <SlotCard> 디플트만 보여줍니다. </SlotCard>

    <!-- Provide Inject -->
    <ProvideInject></ProvideInject>
  </div>
</template>

<script setup>
import { reactive, ref } from "vue";
import PostItem from "./PostItem.vue";
import CustomEmit from "@/components/CustomEmit.vue";
import CustomVmodel from "@/components/CustomVmodel.vue";
import CustomVmodelTitle from "@/components/CustomVmodelTitle.vue";
import CustomNonProp from "../CustomNonProp.vue";
import Username from "@/components/Username.vue";
import SlotButton from "@/components/SlotButton.vue";
import SlotCard from "@/components/SlotCard.vue";
import ProvideInject from "../ProvideInject.vue";

const username = ref("");
const posts = reactive([
  { id: 1, title: "제목1", contents: "내용1", isLike: true, type: "news" },
  { id: 2, title: "제목2", contents: "내용2", isLike: true, type: "news" },
  { id: 3, title: "제목3", contents: "내용3", isLike: true, type: "news" },
  { id: 4, title: "제목4", contents: "내용4", isLike: true, type: "news" },
  {
    id: 5,
    title: "제목5",
    contents: "내용5",
    isLike: false,
    type: "notice",
  },
  {
    id: 6,
    title: "제목6",
    contents: "내용6",
    isLike: false,
    type: "notice",
  },
]);

const firstname = ref("");
const lastname = ref("");
// Dynamic Slot
const slotArgs = ref("header");

const createPost = (newPost) => {
  posts.push(newPost);
};
const sayHello = () => {
  alert("안녕하세요");
};
</script>

<style lang="scss" scoped></style>

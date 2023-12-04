<template>
  <div>
    <h2>{{ teacher.name }}</h2>
    <h3>강의가 있습니까?</h3>
    <!-- <p>{{ teacher.lectures.length > 0 ? '있음 🙂' : '없음 🥲' }}</p> -->
    <p>{{ hasLecture }}</p>
    <p>{{ hasLecture }}</p>
    <p>{{ existLecture() }}</p>
    <p>{{ existLecture() }}</p>

    <button v-on:click="counter++">Counter: {{ counter }}</button>

    <h2>이름</h2>
    <p>{{ fullName }}</p>
  </div>
</template>

<script>
import { computed, reactive, ref } from "vue";

export default {
  setup() {
    const teacher = reactive({
      name: "짐코딩",
      lectures: ["HTML/CSS", "JavaScript", "Vue3"],
    });
    // computed가 성능면에서 비용이 더 적게 든다 => computed는 계산된 결과 값을 캐시해놓기 때문!
    // 캐시가 다시 계산되는 시점은 반응형 데이터가 변경될 때
    const hasLecture = computed(() => {
      console.log("computed");
      return teacher.lectures.length > 0 ? "있음 🙂" : "없음 🥲";
    });
    // 반면 method는 실행될 때마다(렌더링 될때마다)..!
    const existLecture = () => {
      console.log("method");
      return teacher.lectures.length > 0 ? "있음 🙂" : "없음 🥲";
    };

    const counter = ref(0);

    // computed에 setter함수를 활용해서 쓰기 가능한 속성으로 만들 수 있다
    const firstName = ref("홍");
    const lastName = ref("길동");
    const fullName = computed({
      get() {
        return firstName.value + " " + lastName.value;
      },
      set(value) {
        [firstName.value, lastName.value] = value.split(" ");
      },
    });
    console.log("Console 출력: ", fullName.value);
    fullName.value = "짐 코딩";

    return {
      teacher,
      hasLecture,
      existLecture,
      counter,
      fullName,
    };
  },
};
</script>

<style lang="scss" scoped></style>

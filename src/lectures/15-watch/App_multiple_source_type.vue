<template>
  <div></div>
</template>

<script>
import { reactive, ref, watch } from "vue";

export default {
  setup() {
    const x = ref(0);
    const y = ref(0);

    const obj = reactive({
      count: 0,
    });

    /**
     * @description 첫 번째 매개변수에 getter 함수
     */
    // watch(
    // 	() => x.value + y.value,
    // 	(sum, oldValue) => {
    // 		console.log('sum: ', sum);
    // 		console.log('oldValue: ', oldValue);
    // 	},
    // );

    /**
     * @description 첫 번째 매개변수에 array (한꺼번에 따로따로 감지할 수 있다)
     */
    // watch([x, y], ([newX, newY]) => {
    // 	console.log(newX, newY);
    // });

    /**
     * @description 첫 번째 매개변수에 reactive
     * + object 타입을 감지할때는 newValue와 oldValue가 같은 객체를 가리키고 있기 때문에 같은 값!!!
     */
    // watch(obj, (newValue, oldValue) => {
    // 	console.log('newValue: ', newValue);
    // 	console.log('oldValue: ', oldValue);
    // });

    /**
     * @description 첫 번째 매개변수에 reactive
     * + 특정 object의 속성을 감지하고 싶을 때 -> getter함수를 넣어주자
     */
    // watch(
    // 	() => obj.count,
    // 	(newValue, oldValue) => {
    // 		console.log('newValue: ', newValue);
    // 	},
    // );

    const person = reactive({
      name: "홍길동",
      age: 30,
      hobby: "운동",
      obj: {
        count: 0,
      },
    });

    // watch(person, newValue => {
    // 	console.log('newValue: ', newValue);
    // });

    /**
     * person이 아닌 count도 아닌 person.obj의 값이 변할 때만 감지!! obj 객체 자체가 변경됐을 때만!
     * 결국 getter 함수로 받은 값의 변경 여부에 따라 체크한다.
     */
    watch(
      () => person.obj,
      (newValue) => {
        console.log("newValue: ", newValue);
      }
    );

    return { x, y, obj, person };
  },
};
</script>

<style lang="scss" scoped></style>

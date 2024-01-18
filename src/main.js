import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";

// createApp: 뷰 인스턴스를 생성하는 메서드
const app = createApp(App);

/* 컴포넌트 전역등록 예시 */
// app.component('AppCard', AppCard);

/**
 * @description globalProperties -> provide
 * globalProperties(Vue2) : 모든 컴포넌트에서 접근하고 싶은 라이브러리와 같은 객체
 * provide(Vue3)로 대체하자!!
 */
app.config.globalProperties.msg = "hello globalProperties";
app.provide("msg", "hello provide");

app.provide("app-message", "app message 입니다. ⭐️");

app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";

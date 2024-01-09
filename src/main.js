import "bootstrap/dist/css/bootstrap.min.css";
import { createApp } from "vue";
import App from "./App.vue";

// createApp: 뷰 인스턴스를 생성하는 메서드
const app = createApp(App);

/* 컴포넌트 전역등록 예시 */
// app.component('AppCard', AppCard);

app.provide("app-message", "app message 입니다");
//
app.config.globalProperties.msg = "hello";
app.provide("msg", "hello msg");
app.mount("#app");
import "bootstrap/dist/js/bootstrap.js";

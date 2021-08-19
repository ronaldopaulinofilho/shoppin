import Vue from 'vue';
import Home from './components/Home.vue';
const app = new Vue({
    el: '#app',
    render: createElement => createElement(Home)
});

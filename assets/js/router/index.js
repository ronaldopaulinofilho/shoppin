import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../pages/Home.vue";
import Item from "../components/Item.vue";
import AddItem from "../components/AddItem.vue";
import FilterItem from "../pages/FilterItem.vue";
Vue.use(VueRouter);

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/item",
        name: "Item",
        component: Item,
    },
    {
        path: "/filter-item",
        name: "FilterItem",
        component: FilterItem
        ,
    }

];


const router = new VueRouter({
    routes,
});

export default router;
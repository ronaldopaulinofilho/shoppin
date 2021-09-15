<template>
  <div id="app">
    <side-bar />
    <add-item v-model="newItem.url" v-on:add-item-event="addItem" />
    <item-list :itemList="itemList" v-on:del-item-event="deleteItem" />
    <el-empty v-show="isEmpty" description="description"></el-empty>
    <div class="footer">@Copyright SHOPPIN All rights reserved 2021.</div>
  </div>
</template>

<script>
import ItemList from "../components/ItemList";
import AddItem from "../components/AddItem";
import SideBar from "../components/SideBar.vue";

export default {
  components: {
    ItemList,
    AddItem,
    SideBar,
  },
  data() {
    return {
      url: "",
      itemList: [],
      newItem: {
        title: "",
        description: "",
        id: "",
        url: "",
        images: "",
      },
      isCollapse: true,
      isEmpty: true,
    };
  },

  mounted() {
    if (localStorage.getItem("itemList")) {
      this.itemList = JSON.parse(localStorage.getItem("itemList"));
      this.isEmpty = false;
    }
  },

  watch: {
    itemList: {
      handler() {
        localStorage.setItem("itemList", JSON.stringify(this.itemList));
      },
      deep: true,
    },
  },

  methods: {
    addItem(newItem) {
      this.itemList = [...this.itemList, newItem];
    },

    deleteItem(id) {
      this.itemList = this.itemList.filter((item) => item.id !== id);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Hind+Siliguri:400,600");

body {
  background-color: #f1f2f3;
  height: 600px;
  overflow: hidden;
  border-radius: 10px;
}
.footer {
  margin: 20px;
  font-size: 12px;
}
</style>

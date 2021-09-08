<template>
  <div id="app">
    <add-item v-model="newItem.url" v-on:add-item-event="addItem" />
    <item-list :itemList="itemList" v-on:del-item-event="deleteItem" />
    <button @click="goToFilterItem"></button>
  </div>
</template>

<script>
import ItemList from "../components/ItemList";
import AddItem from "../components/AddItem";

export default {
  components: {
    ItemList,
    AddItem,
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
    };
  },

  mounted() {
    if (localStorage.getItem("itemList")) {
      this.itemList = JSON.parse(localStorage.getItem("itemList"));
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
      localStorage.removeItem(id);
    },
    getCategory(description) {
      this.itemList = this.itemList.filter(
        (item) => item.description !== description
      );
      localStorage.getItem(this.item);
    },
    goToFilterItem() {
      this.$router.push({ path: "/filter-item" });
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
#logo {
  cursor: pointer;
  margin: 10px;
  height: 20px;
  width: 30px;
  animation: go-back 5s alternate;
  border-radius: 8px;
}
@keyframes go-back {
  from {
    transform: translateX(150px);
  }
  to {
    transform: translateX(0px);
  }
}
</style>

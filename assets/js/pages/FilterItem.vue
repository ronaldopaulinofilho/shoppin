<template>
  <div>
    <input v-model="item.description" />
    <button @click="getCategory"></button>
    <item-list :itemList="itemList" v-on:filter-item-event="getCategory" />
  </div>
</template>

<script>
import ItemList from "../components/ItemList.vue";
import Item from "../components/Item.vue";
export default {
  components: {
    ItemList,
    Item,
  },
  data() {
    return {
      itemList: [],
      item: {
        title: "",
        description: "",
        id: "",
        url: "",
        images: "",
      },
      description: "",
    };
  },

  methods: {
    getCategory(description) {
      this.itemList = this.itemList.filter(
        (item) => item.description !== description
      );
      localStorage.getItem("itemList");
    },

    filterItem(description) {
      this.$emit("filter-item-event", description);
    },
  },
};
</script>

<style>
</style>
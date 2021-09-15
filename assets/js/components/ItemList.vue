<template>
  <div>
    <draggable :list="itemList">
      <div v-bind:key="item.id" v-for="item in itemList">
        <item v-bind:item="item" v-on:del-item="delItem"></item>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";
import Item from "./Item.vue";
export default {
  name: "ItemList",
  components: {
    Item,
    draggable,
  },
  props: ["itemList"],
  methods: {
    delItem(id) {
      this.$emit("del-item-event", id);
    },
  },
};
</script>

<style scoped>
</style>
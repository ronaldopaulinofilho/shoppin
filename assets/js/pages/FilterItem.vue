<template>
  <div>
    <side-bar />
    <div class="description">
      <enhanced-check-radio
        :label="[
          'Eletro 🎧',
          'Vestuário 👚',
          'Mercado 🛒',
          'Beleza 🧴',
          'Informática 💻',
          'Livros 📚',
          'Diversos 🎁',
        ]"
        name="description"
        subClass="primary"
        type="checkbox"
        v-model="item.description"
        :disabled="false"
        :rounded="true"
        :animate="true"
        :transition="true"
        :inline="true"
        id="enhancedCheckRadio"
        :value="[
          'Eletro',
          'Vestuário',
          'Mercado',
          'Beleza',
          'Informática',
          'Livros',
          'Diversos',
        ]"
      >
      </enhanced-check-radio>
    </div>
    <el-button
      type="primary"
      plain
      style="color: blue"
      icon="el-icon-check"
      circle
      @click="getCategory"
    ></el-button>

    <item-list :itemList="itemList" v-on:del-item-event="deleteItem" />
  </div>
</template>

<script>
import ItemList from "../components/ItemList.vue";
import SideBar from "../components/SideBar.vue";
import { EnhancedCheckGroup, EnhancedCheckRadio } from "vue-enhanced-check";

export default {
  components: {
    ItemList,
    SideBar,
    EnhancedCheckGroup,
    EnhancedCheckRadio,
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
    };
  },

  methods: {
    getCategory() {
      localStorage.getItem("itemList");
      this.itemList = JSON.parse(localStorage.getItem("itemList"));
      this.itemList = this.itemList.filter(
        (item) => item.description === this.item.description
      );
    },

    deleteItem(id) {
      this.itemList = this.itemList.filter((item) => item.id !== id);
    },
  },
};
</script>

<style lang="scss">
.description {
  margin: 80px 20px 20px 20px;
}
.enhancedCheck {
  font-size: 14px;
  color: #2e8db9;
  font-family: sans-serif;
  font-weight: 300px;
}
</style>
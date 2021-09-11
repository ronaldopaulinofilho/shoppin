<template>
  <div class="card-item">
    <div class="category" v-background="item.color">
      {{ item.description }}
    </div>
    <a :href="item.url" style="text-decoration: none">
      <div>
        <link-prevue :url="item.url">
          <template slot-scope="props">
            <img class="card-img-top" :src="props.img" :alt="props.title" />
            <h2 class="text">{{ props.title }}</h2>
          </template>
        </link-prevue>
      </div>
    </a>
    <div>
      <el-button
        class="button"
        size="small"
        icon="el-icon-delete"
        type="danger"
        circle
        @click="deleteAndNotify"
      ></el-button>
    </div>
  </div>
</template>

<script>
import LinkPrevue from "link-prevue";
export default {
  name: "Item",
  components: {
    LinkPrevue,
  },
  props: {
    item: {
      type: Object,
    },
    color: {
      type: String,
    },
  },
  data() {
    return {
      id: "",
      url: "",
      description: "",
      img: "",
    };
  },

  methods: {
    deleteAndNotify() {
      this.$emit("del-item", this.item.id);
      const h = this.$createElement;
      this.$notify.success({
        message: h("i", { style: "color: red" }, "Seu Item foi Excluído"),
        offset: 100,
      });
    },
    filter() {
      this.$emit("filter-item", this.item.description);
    },
  },
};
</script>
<style sass>
.category {
  border-radius: 20px 20px 2px 20px;
  background-color: #f3f722;
  min-width: 12%;
  max-width: 20%;
  height: 30px;
  padding: 8px;
  margin-top: 108px;
  box-shadow: 0px -3px 8px rgba(112, 144, 176, 0.16);
}
.card-item {
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 2px 14px 32px 0px rgba(0, 0, 0, 0.15);
  font-family: "Hind Siliguri", sans-serif;
  float: center;
  margin: 20px;
  display: flex;
  flex-direction: collumn;
  justify-content: space-between;
  width: 400px;
}
.card-img-top {
  height: 20px;
  width: 70px;
}
.text {
  font-size: 10px;
  font-color: rgb(12, 28, 107);
}

.spinner {
  margin-top: 40%;
  margin-left: 45%;
  height: 28px;
  width: 28px;
  animation: rotate 0.8s infinite linear;
  border: 2px solid #93b5db;
  border-right-color: transparent;
  border-radius: 50%;
}
</style>
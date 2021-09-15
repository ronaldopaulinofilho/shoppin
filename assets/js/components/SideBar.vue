<template>
  <div class="side-bar">
    <h4 class="title">SHOPPIN</h4>

    <Slide width="130" height="80">
      <el-tooltip content="Página Inicial" placement="right" effect="light">
        <a class="fa fa-home" @click="goToInitial"> </a>
      </el-tooltip>
      <el-tooltip
        content="Filtre por Categoria"
        placement="right"
        effect="light"
      >
        <a class="fa fa-tags" @click="goToFilterItem"> </a>
      </el-tooltip>
      <el-tooltip
        content="Visite nosso GitHub"
        placement="right"
        effect="light"
      >
        <a class="fa fa-github" @click="goToGitHub"> </a>
      </el-tooltip>
    </Slide>
  </div>
</template>

<script>
import { Slide } from "vue-burger-menu";
export default {
  name: "SideBar",
  components: {
    Slide,
  },
  methods: {
    goToInitial() {
      this.$router.push({ path: "/" });
    },
    goToFilterItem() {
      this.$router.push({ path: "/filter-item" });
    },
    goToGitHub() {
      window.open("https://github.com/ronaldopaulinofilho/shoppin");
    },
  },
};
</script>

<style>
.title {
  font-family: "Ubuntu";
  font-weight: 300;
  margin: 6px;
  text-align: center;
  color: #9d9da5;
}
.side-bar {
  width: 30px;
  height: 20px;
}
.bm-burger-button {
  position: fixed;
  width: 36px;
  margin: 2px;
  height: 30px;
  top: 36px;
  cursor: pointer;
}
.bm-burger-bars {
  background-color: #2780b4;
}
.line-style {
  position: absolute;
  height: 20%;
  left: 0;
  right: 0;
}
.cross-style {
  position: absolute;
  top: 12px;
  right: 2px;
  cursor: pointer;
}
.bm-cross {
  background: #fbfbfb;
}
.bm-cross-button {
  height: 24px;
  width: 24px;
}
.bm-menu {
  height: 230px;
  width: 0;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  background-color: rgba(250, 250, 250, 0);
  overflow-x: hidden;
  padding-top: 80px;
  transition: 0.5s;
}

.bm-overlay {
  background: rgba(92, 120, 133, 0.24);
}
.bm-item-list {
  color: #ffffff;
  margin-left: 10%;
  font-size: 20px;
}
.bm-item-list > * {
  display: flex;
  padding: 0.7em;
}
.bm-item-list > * > span {
  margin-left: 2px;
  font-weight: 300;
  color: #ffffff;
  font-size: 24px;
}
</style>
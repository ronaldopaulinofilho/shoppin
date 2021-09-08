<template>
  <div class="card-item">
    <div
      :class="[
        hasEletro,
        vestuarioDefinition,
        mercadoDefinition,
        eletrodomesticoDefinition,
        belezaDefinition,
        informaticaDefinition,
        livrosDefinition,
        diversosDefinition,
      ]"
      class="category"
    >
      {{ item.color }}
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
    hasEletro: {
      type: Boolean,
      default: false,
    },
    hasVestuario: {
      type: Boolean,
      default: false,
    },
    hasMercado: {
      type: Boolean,
      default: false,
    },
    hasEletrodomestico: {
      type: Boolean,
      default: true,
    },
    hasBeleza: {
      type: Boolean,
      default: false,
    },
    hasInformatica: {
      type: Boolean,
      default: false,
    },
    hasLivros: {
      type: Boolean,
      default: false,
    },
    hasDiversos: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      id: "",
      url: "https://www.uol.com.br",
      description: "eletro",
      img: "",
      color: "#1e90ff",
    };
  },
  computed: {
    eletroDefinition() {
      if (this.item.description === "Eletro") {
        return (this.hasEletro = "eletroDefinition");
      }
    },
    vestuarioDefinition() {
      if (this.item.description === "Vestuário") {
        return this.hasVestuario ? "vestuarioDefinition" : "";
      }
    },
    mercadoDefinition() {
      if (this.item.description === "Mercado") {
        return this.hasMercado ? "mercadoDefinition" : "";
      }
    },
    eletrodomesticoDefinition() {
      if (this.item.description === "Eletrodoméstico") {
        return this.hasEletrodomestico ? "eletrodomesticoDefinition" : "";
      }
    },
    belezaDefinition() {
      if (this.item.description === "Beleza") {
        return this.hasBeleza ? "belezaDefinition" : "";
      }
    },
    informaticaDefinition() {
      if (this.item.description === "Informática") {
        return this.hasInformatica ? "informaticaDefinition" : "";
      }
    },
    livrosDefinition() {
      if (this.item.description === "Livros") {
        return this.hasLivros ? "livrosDefinition" : "";
      }
    },
    diversosDefinition() {
      if (this.item.description === "Diversos") {
        return this.hasDiversos ? "diversosDefinition" : "";
      }
    },
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
  border-radius: 20px 2px 30px 20px;
  background-color: #93b5db;
  min-width: 10%;
  max-width: 20%;
  height: 30px;
  padding: 8px;
  margin-top: 100px;
  box-shadow: 2px 16px 30px 0px rgba(0, 0, 0, 0.15);
}
.eletroDefinition {
  backgroundcolor: "#f5365c";
}
.vestuarioDefinition {
  backgroundcolor: "#ffbb33";
}
.mercadoDefinition {
  backgroundcolor: "#5e72e4";
}
.eletrodomesticoDefinition {
  backgroundcolor: "#11cdef";
}
.belezaDefinition {
  backgroundcolor: "#80bdef";
}
.informaticaDefinition {
  background: "#f8bdef";
}
.livrosDefinition {
  backgroundcolor: "#90bdbe";
}
.diversosDefinition {
  backgroundcolor: "#fbff08";
}
@import url("https://fonts.googleapis.com/css?family=SF-UI:400,600");

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
}
.card-img-top {
  height: 30px;
  width: 80px;
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
<template>
  <div class="url-group">
    <link-prevue :url="url">
      <template slot-scope="props">
        <div class="card">
          <img class="card-img-top" :src="props.img" :alt="props.title" />
          <h4>{{ props.title }}</h4>
          <el-link class="el-icon-link" v-bind:href="props.url" />
        </div>
      </template>
    </link-prevue>

    <el-color-picker
      size="small"
      v-model="color"
      show-alpha
      :predefine="predefineColors"
    />

    <form @submit="addItem">
      <div class="url-group">
        <input
          type="text"
          v-model="url"
          placeholder="Adicione seu link de compras"
        />

        <el-select v-model="description" placeholder="Categoria">
          <el-option
            v-for="item in options"
            :key="item.description"
            :label="item.label"
            :value="item.description"
          >
          </el-option>
        </el-select>
        <el-button
          type="primary"
          plain
          icon="el-icon-check"
          style="color: blue"
          @click="addItem"
          circle
        ></el-button>
      </div>
    </form>
  </div>
</template>

<script>
import LinkPrevue from "link-prevue";
export default {
  name: "AddItem",
  components: {
    LinkPrevue,
  },
  data() {
    return {
      id: "",
      title: "",
      url: "",
      images: "",
      description: "",
      edit: false,
      validateUrl: false,
      color: "#1e90ff",
      predefineColors: [
        "#ff4500",
        "#ff8c00",
        "#ffd700",
        "#90ee90",
        "#00ced1",
        "#1e90ff",
        "#c71585",
        "rgba(255, 69, 0, 0.68)",
        "rgb(255, 120, 0)",
        "hsv(51, 100, 98)",
        "hsva(120, 40, 94, 0.5)",
        "hsl(181, 100%, 37%)",
        "hsla(209, 100%, 56%, 0.73)",
        "#c7158577",
      ],

      options: [
        {
          description: "Eletro",
          label: "Eletro",
        },
        {
          description: "Vestuário",
          label: "Vestuário",
        },
        {
          description: "Mercado",
          label: "Mercado",
        },
        {
          description: "Beleza",
          label: "Beleza",
        },
        {
          description: "Informática",
          label: "Informática",
        },

        {
          description: "Livros",
          label: "Livros",
        },
        {
          description: "Diversos",
          label: "Diversos",
        },
      ],
    };
  },
  methods: {
    addItem(e) {
      e.preventDefault();
      const newItem = {
        title: this.title,
        url: this.url,
        images: this.images,
        description: this.description,
        id: Math.floor(Math.random() * 10000),
        color: this.color,
      };
      if (newItem.url !== "") {
        this.$emit("add-item-event", newItem);
        this.title = "";
        this.id = "";
        this.url = "";
        this.images = "";
        this.description = "";
        this.color = "";
        this.$notify.success({
          title: "Sucesso",
          type: "success",
          message: "Adicionamos o Item na sua Shoppin",
          offset: 20,
        });
      } else
        this.$message({
          message: "Oh no, seu link não é válido",
          type: "error",
        });
    },
  },
};
</script>


<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Ubuntu:400,600");
.url-group {
  margin: 20px 20px 30px 30px;
}
.url-group input[type="text"] {
  height: 40px;
  border: none;
  padding: 1.5px;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 8px 8px 8px 8px;
  border-color: transparent;
  width: 72.5%;
  box-shadow: 2px 14px 32px 0px rgba(0, 0, 0, 0.15);
  float: center;
  display: inline-block;
  text-align: center;
  font-family: "SF UI Display", sans-serif;
  font-size: 15px;
  margin: 12px;
  outline: none;
}
.url-group input[type="text"]:focus {
  outline: none;
}
.select-category {
  height: 20px;
}
.card {
  width: 250px;
  height: 100%;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: 2px 14px 32px 0px rgba(0, 0, 0, 0.15);
  font-family: "Hind Siliguri", sans-serif;
  float: center;
  display: inline-block;
  text-align: center;
}
.card-img-top {
  height: 100px;
  width: 100px;
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
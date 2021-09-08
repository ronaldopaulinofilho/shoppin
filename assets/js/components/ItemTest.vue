<template>
  <div>
    <input type="text" v-model="url" />
    <button @click="changeUrl">Enviar</button>
    <div v-if="hasItem">
      <img
        height="100px"
        width="100px"
        :src="this.info.image"
        :alt="this.info.title"
      />
      <p>{{ this.info.title }}</p>
      <p>{{ this.info.description }}</p>
      <p>
        <button @click="go">{{ this.info.url }}</button>
      </p>
    </div>
  </div>
</template>

<script>
import api from "../service/api.js";
export default {
  components: {
    api,
  },
  data() {
    return {
      info: null,
      url: "",
    };
  },
  computed: {
    hasItem() {
      return this.info !== null;
    },
  },
  methods: {
    changeUrl() {
      api
        .get(
          //"https://api.linkpreview.net/?key=0698084ae946088e8604329e42b628d5&",
          //"https://unfurl.io/api/v1/api_token=UwxU5dxIiHXvsnVbQTDuKpgVfwHhV4ReRZBggOjI6IqZ6hTgNiFf2IHTQt7e&preview",
          { params: { q: this.url } }
        )

        .then((response) => {
          this.info = response.data;
        })
        .catch((err) => {
          console.error("ops! ocorreu um erro" + err);
        });
    },
    go() {
      this.info.url;
    },
  },
};
</script>

<style>
</style>
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, "Segoe UI", Tahoma, Geneva, Verdana, sans-serif Helvetica,
    Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  font-weight: 500;
}
#nav {
  padding: 20px;
}
#nav a {
  font-weight: bold;
  color: #124e8a;
}
#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<template>
  <div id="app">
    <div>
      <label>Brew for</label>
      <input ref="brewFor" v-model="brewFor" />
    </div>
    <div>
      <label>Cool for</label>
      <input ref="coolFor" v-model="coolFor" />
    </div>

    <component :is="step" :nextStep="nextStep" :brewFor="brewFor" />
  </div>
</template>

<script>
  import Prepare from "./Prepare"
  import Brew from "./Brew"

  export default {
    name: 'app',
    components: {
      Prepare,
      Brew
    },
    data () {
      return {
        step: "prepare",
        brewFor: 3,
        coolFor: 10,
        msg: 'Welcome to Your Vue.js App'
      }
    },
    methods: {
      nextStep() {
        this.step = "brew"
      }
    }
  }
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>

<template>
  <div id="app" class="container">
    <div class="columns">
      <div class="column" />
      <div class="column is-three-fifths">
        <section class="section">
          <div class="columns">
            <div class="column">
              <div class="field">
                <label class="label">Brew for</label>
                <div class="control">
                  <input type="number" class="input" ref="brewFor" v-model="brewFor" />
                </div>
              </div>
            </div>
            <div class="column">
              <div class="field">
                <label class="label">Cooldown time (includes brew time)</label>
                <div class="control">
                  <input type="number" class="input" ref="totalTime" v-model="totalTime" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <component class="has-text-centered" :is="step" :nextStep="nextStep" :brewFor="brewFor" />
      </div>
      <div class="column" />
    </div>
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
        totalTime: 10,
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
}

a {
  color: #42b983;
}

img {
  object-fit: cover;
  height: 60vh;
  width: 400px;
}
</style>

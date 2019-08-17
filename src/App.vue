<template>
  <div>
    <section class="hero is-light">
       <div class="hero-body has-text-centered">
         <div class="container">
           <h1 class="title is-6">
             <a class="has-text-grey-darker" href="/">Brew Cooldown</a>
           </h1>
           <h2 class="subtitle is-6 has-text-grey-darker">
              Brew your drink and wait for it to cool down
           </h2>
         </div>
        </div>
    </section>

    <div id="app" class="container">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
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
                  <label class="label">Cooldown for (includes brewing time)</label>
                  <div class="control">
                    <input type="number" class="input" ref="cooldownFor" v-model="cooldownFor" />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <component
            class="has-text-centered"
            :is="step"
            :nextStep="nextStep"
            :brewForSeconds="brewForSeconds"
            :cooldownForSeconds="cooldownForSeconds"
            :prepareNewBrew="prepareNewBrew" />
        </div>
      </div>
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
        cooldownFor: 10,
        msg: 'Welcome to Your Vue.js App'
      }
    },
    computed: {
      brewForSeconds() {
        return this.brewFor * 60
      },
      cooldownForSeconds() {
        return this.cooldownFor * 60
      }
    },
    methods: {
      prepareNewBrew() {
        this.step = "prepare"
      },
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

.hero-body {
  padding: 0.5rem 0.5rem;
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

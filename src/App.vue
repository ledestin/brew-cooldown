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
                <ValidatedInput
                  id="brewFor"
                  label="Brew for"
                  v-model.number="brewFor"
                  :errorMessage="errorMessage"
                  :disabled="step !== 'prepare'" />
              </div>
              <div class="column">
                <ValidatedInput
                  id="cooldownFor"
                  label="Cooldown for (includes brewing time)"
                  v-model.number="cooldownFor"
                  :disabled="step !== 'prepare'" />
              </div>
            </div>
          </section>

          <component
            class="has-text-centered"
            :is="step"
            :nextStep="nextStep"
            :brewForSeconds="brewForSeconds"
            :cooldownForSeconds="cooldownForSeconds"
            :prepareNewBrew="prepareNewBrew"
            :disableProgress="!!errorMessage"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import Prepare from "./Prepare"
  import Brew from "./Brew"
  import ValidatedInput from "./ValidatedInput"

  export default {
    name: 'app',
    components: {
      Prepare,
      Brew,
      ValidatedInput
    },
    data () {
      return {
        step: "prepare",
        brewFor: 3,
        cooldownFor: 10,
        errorMessage: "",
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
    watch: {
      brewFor(oldValue, newValue) {
        this.validate()
        this.saveData()
      },
      cooldownFor(oldValue, newValue) {
        this.validate()
        this.saveData()
      }
    },
    methods: {
      prepareNewBrew() {
        this.step = "prepare"
      },
      nextStep() {
        this.step = "brew"
      },
      isStorageAvailable() {
        return typeof(Storage) !== "undefined"
      },
      validate() {
        if (this.brewFor <= this.cooldownFor) {
          this.errorMessage = ""
          return
        }

        this.errorMessage = "Can't brew longer than total time"
      },
      saveData() {
        if (!this.isStorageAvailable())
          return

        window.localStorage.setItem("brewFor", this.brewFor)
        window.localStorage.setItem("cooldownFor", this.cooldownFor)
      },
      loadData() {
        if (!this.isStorageAvailable())
          return

        this.loadVariable("brewFor")
        this.loadVariable("cooldownFor")
      },
      loadVariable(name) {
        const value = window.localStorage.getItem(name)
        const number = Number.parseInt(value)
        if (Number.isNaN(number))
          return

        this[name] = number
      }
    },
    mounted() {
      this.loadData()
    }
  }
</script>

<style lang="scss">
.hero-body {
  padding: 0.5rem 0.5rem;
}

img {
  object-fit: cover;
  height: 60vh;
  width: 400px;
}
</style>

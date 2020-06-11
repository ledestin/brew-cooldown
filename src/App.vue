<template>
  <div>
    <Navbar :isMobile="isMobile" />

    <div id="app" class="container">
      <div class="columns">
        <div class="column is-three-fifths is-offset-one-fifth">
          <router-view></router-view>
        </div>
      </div>
    </div>

    <div class="has-text-centered">
      Brought to you by
      <a href="https://twitter.com/oledestin" target="_blank">Dmitry</a>
    </div>
  </div>
</template>

<script>
  import isMobile from 'ismobilejs';
  import Navbar from "./Navbar"

  export default {
    name: 'app',
    components: {
      Navbar
    },
    data () {
      return {
        isMobile: isMobile().any
      }
    }
  }
</script>

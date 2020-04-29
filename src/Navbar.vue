<template>
  <div>
    <div v-if="isMobile" class="notification is-warning">
      Warning: this webapp isn't mobile-ready.
    </div>

    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <img src="/static/ms-icon-310x310.png">
          <span class="is-size-4 has-text-weight-medium">Brew Cooldown</span>
        </a>

        <a role="button" class="navbar-burger burger" aria-label="menu"
            aria-expanded="false" data-target="navbarMenu"
            v-on:click="isActive = !isActive"
            v-bind:class="{ 'is-active': isActive }">
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </a>
      </div>

      <div id="navbarMenu" class="navbar-menu"
           v-bind:class="{ 'is-active': isActive }">
        <div class="navbar-start">
            <router-link
              class="navbar-item"
              to="/about"
              @click.native="isActive = !isActive">About
            </router-link>

         <a class="navbar-item">
           Help
         </a>
        </div>

      </div>
    </nav>
  </div>
</template>

<script>
  export default {
    name: 'Navbar',
    props: {
      isMobile: Boolean
    },
    data () {
      return {
        isActive: false
      }
    }
  }
</script>

<template>
  <div>
    <div v-if="isMobile" class="notification is-warning">
      Warning: this webapp isn't mobile-ready.
    </div>

    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <router-link exact class="navbar-item has-text-dark" to="/">
          <img src="/static/ms-icon-310x310.png">
          <span class="is-size-4 has-text-weight-medium">Brew Cooldown</span>
        </router-link>

        <router-link
          class="navbar-item has-text-dark"
          to="/brew-it">Brew your drink
        </router-link>

        <a class="navbar-item has-text-dark"
          href="mailto:ledestin@gmail.com?subject=Brew Cooldown">Contact
        </a>
      </div>

      <div class="navbar-end">
	<div class="navbar-item has-text-centered">
	  <p>Brought to you by
	    <a href="https://twitter.com/oledestin" target="_blank">Dmitry</a>
	  </p>
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
    }
  }
</script>

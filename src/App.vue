<template>
  <div id="app">
      <site-menu></site-menu>
    <router-view/>
  </div>
</template>
<script>
    import SiteMenu from "./components/SiteMenu";
    export default {
        components: {SiteMenu}
    }
</script>
<template>
  <div>
    <Sidebar class="sidebar-container" />
    <div class="main-container">
      <Navbar />
      <AppMain />
    </div>
  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'
  import { AppMain, Sidebar, Navbar } from './components'

  @Component({
    name: 'Layout',
    components: {
      AppMain,
      Sidebar,
      Navbar
    }
  })
  export default class Layout extends Vue {}
</script>

<template>
  <section class="app-container">
    <transition name="fade-transform"
                mode="out-in">
      <keep-alive>
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

  @Component
export default class AppMain extends Vue {
  private get key (): string {
    return this.$route.path
  }
}
</script>

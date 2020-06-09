<template>
  <div class="main-container">
    <transition name="fade-transform"
                mode="out-in">
      <keep-alive>
        <router-view :key="key" />
      </keep-alive>
    </transition>
  </div>
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

<style lang="less" scope>
</style>

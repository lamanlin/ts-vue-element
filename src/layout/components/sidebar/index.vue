<template>
  <div class="side-bar">
    <el-menu default-active="2"
             class="el-menu-vertical-demo"
             @open="handleOpen"
             @close="handleClose">
      <sidebar-item />
    </el-menu>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SidebarItem from './SidebarItem.vue'
  @Component({
    components: {
      SidebarItem
    }
  })
export default class ClassName extends Vue {
  private get routes (): [] {
    return this.$router.options.routes
  }
}
</script>

<style lang="less" scope>
</style>

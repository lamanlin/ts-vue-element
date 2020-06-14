<template>
  <div class="side-bar">
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        :show-timeout="200"
        :default-active="$route.path"
        mode="vertical"
        :background-color="variables.menuBg"
        :text-color="variables.menuText"
      >
        <sidebar-item v-for="route in routes" :key="route.name" :item="route" :base-path="route.path" />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import SidebarItem from './SidebarItem.vue'
import variables from '@/styles/variables.less'
@Component({
  name: 'Sidebar',
  components: {
    SidebarItem
  }
})
export default class ClassName extends Vue {
  private get routes(): [] {
    const router: any = this.$router
    return router.options.routes
  }
  private get variables() {
    return variables
  }
}
</script>

<style lang="less" scope></style>

<template>
  <div v-if="!item.meta || !item.meta.hidden">
    <template v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children">
      <app-link v-if="theOnlyOneChild.meta"
                :to="resolvePath(theOnlyOneChild.path)">
        <el-menu-item :index="resolvePath(theOnlyOneChild.path)">
          <i v-if="theOnlyOneChild.meta.icon"
             :class="`el-icon-${theOnlyOneChild.meta.icon}`"></i>
          <span v-if="theOnlyOneChild.meta.title"
                slot="title">{{ theOnlyOneChild.meta.title }}</span>
        </el-menu-item>
      </app-link>
    </template>
    <el-submenu v-else
                :index="resolvePath(item.path)"
                popper-append-to-body>
      <template slot="title">
        <i v-if="item.meta && item.meta.icon"
           :class="`el-icon-${item.meta.icon}`"></i>
        <span v-if="item.meta && item.meta.title"
              slot="title">{{ item.meta.title }}</span>
      </template>
      <template v-if="item.children">
        <sidebar-item v-for="child in item.children"
                      :key="child.path"
                      :item="child"
                      :is-first-level="false"
                      :base-path="resolvePath(child.path)"></sidebar-item>
      </template>
    </el-submenu>
  </div>
</template>

<script lang="ts">
import path from 'path'
import { Component, Vue, Prop } from 'vue-property-decorator'
import { RouteConfig } from 'vue-router'
import { isExternal } from '@/utils/validate'
import Link from './Link.vue'

  @Component({
    name: 'SidebarItem',
    components: {
      AppLink: Link
    }
  })
export default class ClassName extends Vue {
    @Prop({ required: true }) private item!: RouteConfig
    @Prop({ default: '' }) private basePath!: string

    private get alwaysShowRootMenu () {
      if (this.item.meta && this.item.meta.children) {
        return true
      }
      return false
    }

    private get showingChildNumber () {
      if (this.item.children) {
        const showinfChildren = this.item.children.filter(item => {
          if (item.meta && item.meta.hidden) {
            return false
          } else {
            return true
          }
        })
        return showinfChildren.length
      }
      return 0
    }

    private get theOnlyOneChild () {
      if (this.showingChildNumber > 1) {
        return null
      }
      if (this.item.children) {
        for (const child of this.item.children) {
          if (!child.meta || !child.meta.hidden) {
            return child
          }
        }
      }
      // If there is no children, return itself with path removed,
      // because this.basePath already conatins item's path information
      return { ...this.item, path: '' }
    }

    public resolvePath (routePath: string) {
      if (isExternal(routePath)) {
        return routePath
      }
      if (isExternal(this.basePath)) {
        return this.basePath
      }
      return path.resolve(this.basePath, routePath)
    }
}
</script>

<style lang="less" scope>
</style>

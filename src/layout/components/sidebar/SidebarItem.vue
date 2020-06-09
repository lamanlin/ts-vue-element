<template>
  <div v-if="!item.meta || !item.meta.hidden">
    <template v-if="!alwaysShowRootMenu && theOnlyOneChild && !theOnlyOneChild.children">

    </template>
    <el-submenu v-else index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>导航一</span>
      </template>
      <template v-if="item.children">
        <el-menu-item index="1-1">选项1</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
      </template>

  </div>
</template>

<script lang="ts">
  import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component({
    name: 'SidebarItem'
  })
  export default class ClassName extends Vue {
    @Prop({ required: true }) item!: object
  }
</script>

<style lang="less" scope>
</style>

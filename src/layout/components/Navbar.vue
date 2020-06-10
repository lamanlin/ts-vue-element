<template>
  <div class="app-container">
    <el-breadcrumb>
      <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item><a href="/">活动管理</a></el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>


<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator'

  @Component
  export default class ClassName extends Vue {}
</script>


<style lang="less" scope>
</style>
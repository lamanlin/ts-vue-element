<template>
  <div>
    
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

  @Component
export default class ClassName extends Vue {
    @Prop({ required: true }) to!: string
}
</script>

<style lang="less" scope>
</style>

<template>
    <component :is="type"
               v-bind="linkProps(to)">
      <slot />
    </component>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'
import { isExternal } from '@/utils/validate'

  @Component({
    name: 'AppLink'
  })
export default class ClassName extends Vue {
    @Prop({ required: true }) to!: string
    private get isExternal () {
      return isExternal(this.to)
    }

    private get type (): string {
      if (this.isExternal) {
        return 'a'
      } else {
        return 'router-link'
      }
    }

    public linkProps (to: string) {
      if (this.isExternal) {
        return {
          href: to,
          target: '_blank',
          rel: 'noopener'
        }
      }
      return {
        to: to
      }
    }
}
</script>

<template>
  <slot></slot>
  <span :class="$style.root" :style="badgeStyle">
      {{ badge.count }}
    </span>
</template>

<script>
export default {
  name: 'BadgeComponent',
  props: {
    badge: {
      type: Object
    },
  },
  computed: {
    badgeStyle() {
      return `
        background: ${this.badge.color};
        color: ${this.badge.color ? 'white' : 'grey'};
        height: ${this.badge.count ? undefined : '8px'};
        min-width: ${this.badge.count ? undefined : '8px'};
      `
    }
  }
}
</script>

<style module>
.root {
  border-radius: 10px;
  position: absolute;
  top: 4px;
  right: 2px;
  text-align: center;
}
</style>

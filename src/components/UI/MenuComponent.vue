<template>
  <div :class="$style.root" @click="hideDialog">
    <div @click.stop :class="$style.content" ref="menu" :style="styleMenu">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuComponent',
  props: {
    anchor: {
      type: Object,
    }
  },
  data() {
    return {
      styleMenu: null
    }
  },
  mounted() {
    this.styleMenu = `
      top: ${this.anchor.y + 8}px;
      left: ${this.anchor.x - (this.$refs.menu.offsetWidth - 60)}px;
    `
  },
  methods: {
    hideDialog() {
      this.$emit('update:anchor', null)
    }
  },
}
</script>

<style module>
.root {
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  position: fixed;
  display: flex;
}

.content {
  background: white;
  position: absolute;
  border-radius: 8px;
  min-width: 300px;
  min-height: 50px;
  box-shadow: rgb(0 0 0 / 20%) 0 2px 1px -1px,
  rgb(0 0 0 / 14%) 0 1px 1px 0,
  rgb(0 0 0 / 12%) 0 1px 3px 0;
}
</style>

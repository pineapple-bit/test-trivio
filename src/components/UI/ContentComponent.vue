<template>
  <div :class="$style.root">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'ContentComponent'
}
</script>

<style module>
.root {
  max-width: 500px;
  margin: 30px auto;
  box-shadow: rgb(0 0 0 / 20%) 0 2px 1px -1px, rgb(0 0 0 / 14%) 0 1px 1px 0, rgb(0 0 0 / 12%) 0 1px 3px 0;
  border-radius: 12px;
  padding: 24px;
}
</style>

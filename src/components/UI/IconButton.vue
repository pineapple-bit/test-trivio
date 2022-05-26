<template>
  <div :class="$style.root">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'IconButton',
}
</script>

<style module>
.root {
  cursor: pointer;
  padding: 8px;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: .5s
}

.root:hover {
  background: rgba(25, 118, 210, 0.04);
}
</style>

<template>
  <div :class="$style.root">
    <slot name="title"></slot>
    <div :class="$style.info">
      <slot name="info"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuItem',
  props: {
    item: {
      type: Object
    }
  }
}
</script>

<style module>
.root {
  cursor: pointer;
  padding: 8px;
  color: #1A2027;
  line-height: 20px;
  transition: .5s
}

.root:hover {
  background: rgba(0, 0, 0, 0.04);
}

.info {
  color: #7D808A;
}
</style>

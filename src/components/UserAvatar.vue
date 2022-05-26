<template>
  <div :class="$style.root">
    aa
  </div>
</template>

<script>
export default {
  name: 'UserAvatar'
}
</script>

<style module>
.root {
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: #EFEFEF;
  text-align: center;
  line-height: 40px;
  cursor: pointer;
  transition: .5s
}
.root:hover {
  background: #E1E1ED;
}
</style>

<template>
  <button :class="[$style.root, isActive ? $style.active : '', icon ? $style.contained : '']">
    <icon-base :name="icon" v-if="icon" width="20" height="20" :class="$style.icon"/>
    <slot></slot>
  </button>
</template>

<script>

export default {
  name: 'ButtonComponent',
  props: {
    icon: {
      type: String
    },
    isActive: {
      type: Boolean
    }
  }
}
</script>

<style module>
.root {
  padding: 10px 15px;
  background: none;
  color: #7D808A;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  line-height: 20px;
  border-radius: 8px;
  transition: .5s
}

.contained {
  background: #EFEFEF;
}

.root:hover {
  background: rgba(25, 118, 210, 0.04);
}

.contained:hover {
  background: #e1e1ed;
}

.icon {
  margin-right: 8px;
}

.active {
  color: #007AFF;
}
</style>

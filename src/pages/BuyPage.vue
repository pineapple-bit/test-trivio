<template>
  <h1>{{ screenMode + ": " + width }}</h1>
</template>

<script>
export default {
  name: 'BuyPage',
  computed: {
    screenMode() {
      return this.$store.getters.screenMode
    },
    width() {
      return this.$store.state.width
    }
  }
}
</script>

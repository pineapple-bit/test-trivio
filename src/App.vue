<template>
  <nav-bar/>
  <router-view/>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
<script>
import NavBar from '@/components/NavBar'
import {onMounted, onUnmounted, ref} from 'vue'

export default {
  components: {NavBar},
  setup() {
    let width = ref(window.innerWidth)
    const changeWidth = () => width.value = window.innerWidth
    onMounted(() => window.addEventListener('resize', changeWidth))
    onUnmounted(() => window.removeEventListener('resize', changeWidth))
    return {width}
  },
  mounted() {
    this.useBreakpoints()
  },
  watch: {
    width() {
      this.useBreakpoints()
    }
  },
  methods: {
    useBreakpoints() {
      this.$store.commit('setWidth', this.width)
    }
  }
}
</script>

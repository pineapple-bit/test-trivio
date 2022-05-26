<template>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 480" :class="$style.root">
    <defs>
      <clipPath id="myCircle">
        <circle cx="320" cy="240" r="240"/>
      </clipPath>
    </defs>
    <g xmlns="http://www.w3.org/2000/svg" clip-path="url(#myCircle)">
      <component :is="`${country}Icon`"/>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'FlagComponent',
  props: {
    country: {
      type: String,
      required: true
    }
  }
}
</script>

<style module>
.root {
  height: 32px;
  cursor: pointer;
}
</style>

<template>
  <svg
      xmlns="http://www.w3.org/2000/svg"
      :width="width"
      :height="height"
      viewBox="0 0 48 48"
  >
    <title :id="name" lang="en">{{name}}</title>
    <g :fill="color">
      <component :is="`${name}Icon`"/>
    </g>
  </svg>
</template>

<script>
export default {
  name: 'IconBase',
  props: {
    name: {
      type: String,
      required: true
    },
    width: {
      type: [Number, String],
      default: 48
    },
    height: {
      type: [Number, String],
      default: 48
    },
    color: {
      type: String,
      default: 'currentColor'
    }
  }
}
</script>

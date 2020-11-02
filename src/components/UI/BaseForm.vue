<template>
  <form :class="mode">
    <slot></slot>
  </form>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false
    }
  }
};
</script>

<style scoped>
form > * + * {
  margin: 2rem 0 0;
}

.form-group {
  position: relative;
}

label {
  text-transform: capitalize;
}

input {
  display: block;
  width: 100%;
}
</style>

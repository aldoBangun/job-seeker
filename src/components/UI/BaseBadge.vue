<template>
  <span class="badge">
    <slot></slot>
  </span>
</template>

<script>
export default {};
</script>

<style scoped>
.badge {
  display: inline-block;
  padding: 0.25em 0.5em;
  border-radius: 0.75em;
  background-color: var(--clr-primary);
  color: var(--clr-light);
}
</style>

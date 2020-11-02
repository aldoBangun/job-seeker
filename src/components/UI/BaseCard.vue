<template>
  <div class="card" :class="mode">
    <slot></slot>
  </div>
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
.card {
  margin: 2rem auto;
  width: 30rem;
  padding: 2rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: var(--clr-light);
}
</style>

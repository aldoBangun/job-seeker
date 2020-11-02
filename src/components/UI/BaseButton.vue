<template>
  <router-link v-if="link" class="btn" :class="mode">
    <slot></slot>
  </router-link>
  <button v-else class="btn" :class="mode">
    <slot></slot>
  </button>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: false
    },
    mode: {
      type: String,
      required: true,
      default: 'btn-primary'
    }
  }
};
</script>

<style scoped>
.btn {
  display: inline-block;
  padding: 0.5em 1em;
  color: var(--clr-light);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
  transition: 0.15s;
}

.btn:hover {
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.btn:active {
  transform: scale(0.97);
}

.btn-primary {
  background-color: var(--clr-primary);
}

.btn-secondary {
  background-color: var(--clr-secondary);
}

.btn-danger {
  background-color: var(--clr-danger);
}
</style>

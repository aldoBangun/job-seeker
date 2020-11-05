<template>
  <router-link v-if="link" :to="link" class="btn" :class="mode">
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
  padding: 0.35em 1em;
  margin-right: 0.5em;
  color: var(--clr-light);
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.15);
  transition: 0.15s;
}

.btn:hover {
  filter: brightness(1.2);
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

.btn-rounded {
  border-radius: 1.35em;
}

.btn-outline {
  color: currentcolor;
  border: 1px solid currentColor;
  background-color: transparent;
}

.btn-block {
  display: block;
  width: 100%;
}
</style>

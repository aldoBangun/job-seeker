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
  margin: 0 0 1rem;
}

input,
input:disabled,
textarea {
  display: block;
  width: 100%;
  background-color: var(--clr-lightgray);
  border: 1px solid var(--clr-darkgray);
  padding: 0.5rem;
  font-size: 0.8rem;
}

input:disabled {
  background-color: #bbbbbb;
  border: 1px solid #aaaaaa;
  color: var(--clr-lightgray);
}

input:focus,
textarea:focus {
  background-color: var(--clr-primary-soft);
  border: 1px solid var(--clr-primary);
}

.error input,
.error textarea {
  background-color: var(--clr-danger-soft);
  border: 1px solid var(--clr-danger);
}

small.error {
  color: var(--clr-danger);
  font-style: oblique;
  font-style: italic;
}
</style>

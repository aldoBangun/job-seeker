<template>
  <span class="badge" :class="title">
    {{ title }}
  </span>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  }
};
</script>

<style scoped>
.badge {
  text-transform: capitalize;
  display: inline-block;
  padding: 0.2em 0.7em;
  border-radius: 1em;
  background-color: var(--clr-darkgray);
  color: var(--clr-light);
}

.vue {
  background-color: var(--clr-primary);
}

.javascript {
  background-color: #ffcc00;
  color: var(--clr-dark);
}

.html {
  background-color: rgb(255, 68, 0);
}

.css {
  background-color: #7f7fff;
}
</style>

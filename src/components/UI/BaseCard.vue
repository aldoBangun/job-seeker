<template>
  <div class="card" :class="mode">
    <h1 v-if="title" class="title">{{ title }}</h1>
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    mode: {
      type: String,
      required: false
    },
    title: {
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
  box-shadow: 0 0 10px rgba(143, 143, 143, 0.15);
  border-radius: 5px;
  background-color: var(--clr-light);
}

.card-flat {
  margin: 0;
  border-radius: 0;
  background-color: var(--clr-light);
  border: 1px solid var(--clr-lightgray);
  box-shadow: 3px 3px 0 var(--clr-primary);
  transition: 0.15s;
}

.card-flat:hover {
  transform: translate(-3px, -3px);
  box-shadow: 9px 9px 0 var(--clr-darkgray);
}

.title {
  margin: 0 0 2rem;
  position: relative;
  font-weight: 400;
}

.title::after,
.title::before {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 10%;
  height: 3px;
  border-radius: 6px;
  background-color: var(--clr-primary);
  transition: 0.15s;
}

.card-flat:hover .title::after {
  width: 30%;
}

.title::before {
  background-color: var(--clr-darkgray);
  width: 30%;
}
</style>

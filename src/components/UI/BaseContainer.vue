<template>
  <div class="container" :class="mode">
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
.container {
  height: 100%;
  width: 80%;
  margin: 0 auto;
}

.flex,
.flex-center,
.flex-between,
.flex-between-center {
  display: flex;
}

.flex-center,
.flex-between-center {
  align-items: center;
}

.flex-between,
.flex-between-center {
  justify-content: space-between;
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}
</style>

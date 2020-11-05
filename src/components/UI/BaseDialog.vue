<template>
  <div>
    <div class="screen-drop"></div>
    <dialog open>
      <header v-if="title">
        <h1>{{ title }}</h1>
      </header>
      <slot></slot>
    </dialog>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: false
    }
  }
};
</script>

<style scoped>
.screen-drop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.25);
  z-index: 998;
}

dialog {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 25rem;
  background-color: var(--clr-light);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

header {
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-primary);
  color: var(--clr-light);
}
</style>

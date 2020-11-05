<template>
  <teleport to="body">
    <div class="screen-drop"></div>
    <dialog open>
      <header v-if="title">
        <h2>{{ title }}</h2>
      </header>
      <main>
        <slot></slot>
      </main>
    </dialog>
  </teleport>
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
  margin: 0;
  padding: 0;
  border: none;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30rem;
  background-color: var(--clr-light);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
}

header {
  height: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--clr-primary);
  color: var(--clr-light);
}

main {
  padding: 2rem;
}

/* .dialog-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}

.dialog-enter-active,
.dialog-leave-active {
  transition: 0.25s;
}

.dialog-enter-to,
.dialog-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.dialog-leave-to {
  opacity: 0;
  transform: translateY(50px);
} */
</style>

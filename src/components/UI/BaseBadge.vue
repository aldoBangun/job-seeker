<template>
  <span class="badge" :class="title.toLowerCase()">
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
  padding: 0 0.75em;
  margin: 0 0.25em 0 0;
  border-radius: 1em;
  background-color: var(--clr-darkgray);
  color: var(--clr-light);
  font-size: 0.8rem;
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

.express {
  background-color: #0099cc;
}

.nodejs {
  background-color: #9aef90;
  color: var(--clr-dark);
}

.mongodb {
  background-color: var(--clr-light);
  color: var(--clr-primary);
  border: 1px solid var(--clr-primary);
}

.react {
  background-color: #4191ea;
}

.adobe.xd {
  background-color: #ba20de;
  color: #eaa0ff;
}

.design {
  background: linear-gradient(45deg, #fa90ff, #83edf0);
  color: var(--clr-dark);
}
</style>

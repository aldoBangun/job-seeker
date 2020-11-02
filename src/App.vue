<template>
  <TheNavbar />
  <router-view></router-view>
</template>

<script>
import TheNavbar from './components/layouts/TheNavbar';

export default {
  components: {
    TheNavbar
  }
};
</script>

<style>
:root {
  --clr-primary: #41b783;
  --clr-primary-soft: #41b78355;
  --clr-secondary: #34495e;
  --clr-danger: #b74141;
  --clr-danger-soft: #b7414155;
  --clr-dark: #2f2f2f;
  --clr-light: #fafafa;
  --clr-lightgray: #cfcfcf;
  --clr-darkgray: #7f7f7f;
}

:focus {
  outline: none;
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

html {
  font-family: 'Poppins', sans-serif;
}

body {
  margin: 0;
  background-color: var(--clr-light);
  color: var(--clr-dark);
  overflow-x: hidden;
}

a {
  text-decoration: none;
  color: inherit;
}

button {
  cursor: pointer;
  border: none;
}

input,
button,
textarea {
  font: inherit;
}

img {
  display: block;
}

ul,
ol {
  padding: 0;
  list-style: none;
}

h1,
h2,
h3 {
  line-height: 1.5em;
}

h1 {
  font-size: 1.8rem;
}

h2 {
  font-size: 1.5rem;
}

h3 {
  font-size: 1.2rem;
}

p,
small {
  line-height: 1.25em;
  color: var(--clr-darkgray);
}
</style>

<template>
  <nav>
    <base-container mode="flex-between-center">
      <div class="nav-brand">
        <router-link to="/">Job Seeker</router-link>
      </div>
      <ul class="nav-menu">
        <li>
          <router-link to="/jobs">All Jobs</router-link>
        </li>
        <li v-if="isLoggedIn">
          <router-link to="/profile">Profile</router-link>
        </li>
        <li v-if="isLoggedIn">
          <base-button
            @click="logout"
            mode="btn-secondary btn-rounded btn-outline"
          >
            Logout
          </base-button>
        </li>
        <li v-else>
          <base-button
            link="/auth"
            mode="btn-secondary btn-rounded btn-outline"
          >
            Sign In
          </base-button>
        </li>
      </ul>
    </base-container>
  </nav>
</template>

<script>
export default {
  computed: {
    isLoggedIn() {
      return this.$store.getters.isAuth;
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch('logout');
      this.$router.replace('/auth');
    }
  }
};
</script>

<style scoped>
nav {
  height: 4rem;
  background-color: var(--clr-primary);
  color: var(--clr-light);
  z-index: 99;
}

.nav-brand {
  font-weight: 600;
}

ul {
  display: flex;
  align-items: center;
  gap: 1em;
}

a {
  position: relative;
}

a:not(.btn)::before {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 100%;
  height: 1px;
  background-color: currentColor;
  transform: scaleX(0);
  transition: 0.15s;
}

a:not(.btn):hover {
  color: var(--clr-lightgray);
}

.active:not(.btn)::before {
  transform: scaleX(1);
}

.btn:hover,
.active.btn {
  background-color: var(--clr-secondary);
}
</style>

<template>
  <section>
    <div class="test">
      <div class="icon">{{ user.icon }}</div>
      <ul>
        <li>
          <a href="#">Overview</a>
        </li>
        <li>
          <a href="#">Edit Profile</a>
        </li>
        <li>
          <a href="#">My Jobs</a>
        </li>
        <li>
          <a href="#">My Proposals</a>
        </li>
      </ul>
    </div>
    <main>
      <h1>
        {{ user.username }}
      </h1>
      <h3>Email</h3>
      <p>{{ user.email }}</p>
      <h3>Expertise</h3>
      <p v-if="user.expertise.length">
        <base-badge v-for="skill in user.expertise" :key="skill">
          {{ skill }}
        </base-badge>
      </p>
      <p v-else>No skills were added</p>
      <h3>Bio</h3>
      <p>{{ user.desc || 'No Description' }}</p>
    </main>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  components: {},
  computed: {
    ...mapGetters(['user'])
  }
};
</script>

<style scoped>
section {
  display: flex;
  gap: 1rem;
}

.test {
  background-color: var(--clr-dark);
  color: var(--clr-light);
  padding: 2rem 0;
  width: 20rem;
  display: flex;
  flex-direction: column;
}

li a {
  display: block;
  padding: 0.5em 1em;
}

li a:hover {
  background-color: var(--clr-darkgray);
}

.icon {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: var(--clr-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  font-size: 2.5rem;
}

main {
  min-height: calc(100vh - 4rem);
}
</style>

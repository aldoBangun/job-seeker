<template>
  <base-container>
    <base-card>
      <div class="card-head">
        <a href="#" @click.prevent="back" class="back"> ↩ </a>
      </div>
      <div class="card-body">
        <div class="icon">{{ user.icon }}</div>
        <h2>{{ user.username }}</h2>
        <base-badge v-for="skill in user.expertise" :key="skill" :title="skill">
        </base-badge>
        <p>{{ user.description }}</p>
        <div class="actions">
          <base-button mode="btn-danger"> Decline </base-button>
          <base-button> Approve </base-button>
        </div>
      </div>
    </base-card>
  </base-container>
</template>

<script>
export default {
  computed: {
    user() {
      const { userId } = this.$route.params;
      const { users } = this.$store.getters;

      return users.find(user => user.userId === userId);
    }
  },
  methods: {
    back() {
      return this.$router.back();
    }
  }
};
</script>

<style scoped>
.back {
  padding: 0.2em 0.6em;
  font-size: 1.3rem;
  border-radius: 0 0 50% 0;
}

.back:hover {
  background-color: var(--clr-lightgray);
}

.icon {
  margin: 1rem auto 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px;
  width: 80px;
  border-radius: 50%;
  background-color: var(--clr-lightgray);
  font-size: 1.2rem;
  text-transform: uppercase;
}

.actions {
  margin: 2rem 0 0;
}
</style>

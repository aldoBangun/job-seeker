<template>
  <li :class="{ active: isActive }" @click="toggleActive">
    <div class="content">
      <header>
        <h3>{{ job.title }}</h3>
        <router-link to="/u1">{{ proposal.name }}</router-link>
        <div>
          <base-badge
            v-for="skill in user.expertise"
            :key="skill"
            :title="skill"
          >
          </base-badge>
        </div>
      </header>

      <main>
        <h4>Message</h4>
        <p>{{ proposal.message }}</p>
        <div class="actions">
          <base-button mode="btn-danger" @click.stop="">
            Decline
          </base-button>
          <base-button @click.stop=""> Approve </base-button>
        </div>
      </main>
    </div>
  </li>
</template>

<script>
export default {
  props: {
    proposal: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  methods: {
    toggleActive() {
      this.isActive = !this.isActive;
    }
  },
  computed: {
    job() {
      const jobs = this.$store.getters['jobs/jobs'];

      return jobs.find(job => job.jobId === this.proposal.jobId);
    },
    user() {
      const users = this.$store.getters.users;

      return users.find(user => user.userId === this.proposal.userId);
    }
  }
};
</script>

<style scoped>
li {
  position: relative;
  border-radius: 0.5rem;
  background-color: var(--clr-light);
  border: 1px solid var(--clr-lightgray);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  cursor: pointer;
}

li:hover {
  background-color: rgba(0, 255, 0, 0.05);
}

li.active main {
  max-height: 500px;
}

.content {
  padding: 2rem;
}

a {
  display: inline-block;
  color: var(--clr-primary);
  font-weight: 500;
  margin: 0 0 1rem;
}

a:hover {
  text-decoration: underline;
}

main {
  overflow: hidden;
  max-height: 0;
  transition: 0.5s;
}

li:not(.active) .actions {
  position: absolute;
  top: 50%;
  right: 2rem;
  transform: translateY(-50%);
  margin: 0;
}

.actions {
  margin: 2rem 0 0;
  transition: 0.25s;
}

li h4::after {
  content: ' :';
}
</style>

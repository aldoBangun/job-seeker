<template>
  <section>
    <div class="sidebar">
      <ul>
        <li>
          <a href="#" @click="selectTab('user-overview')">Overview</a>
        </li>
        <li>
          <a href="#" @click="selectTab('edit-profile')">Edit Profile</a>
        </li>
        <li>
          <a href="#" @click="selectTab('add-job')">Post Jobs</a>
        </li>
      </ul>
    </div>
    <main>
      <h2 class="title">{{ pageTitle }}</h2>
      <keep-alive>
        <component :is="selectedTab" @switch-tab="selectTab"></component>
      </keep-alive>
    </main>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import UserOverview from '../../components/user/UserOverview';
import EditProfile from '../../components/user/EditProfile';
import AddJob from '../../components/user/AddJob';

export default {
  data() {
    return {
      selectedTab: 'user-overview'
    };
  },
  methods: {
    selectTab(tab) {
      this.selectedTab = tab;
    }
  },
  components: {
    UserOverview,
    EditProfile,
    AddJob
  },
  computed: {
    ...mapGetters(['user']),
    pageTitle() {
      const { selectedTab } = this;
      if (selectedTab === 'user-overview') return 'Overview';
      if (selectedTab === 'edit-profile') return 'Edit Profile';
      return 'Post a Job';
    }
  }
};
</script>

<style scoped>
section {
  display: flex;
}

.sidebar {
  background-color: var(--clr-dark);
  color: var(--clr-light);
  padding: 2rem 0;
  width: 10rem;
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

main {
  flex: 1;
  padding: 2rem;
  min-height: calc(100vh - 4rem);
}

.title {
  text-align: center;
  margin: 0 0 2rem;
}
</style>

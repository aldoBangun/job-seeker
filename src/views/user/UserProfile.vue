<template>
  <section>
    <div class="sidebar">
      <ul>
        <li :class="{ active: selectedTab === 'user-overview' }">
          <a href="#" @click="selectTab('user-overview')">Overview</a>
        </li>
        <li :class="{ active: selectedTab === 'edit-profile' }">
          <a href="#" @click="selectTab('edit-profile')">Edit Profile</a>
        </li>
        <li :class="{ active: selectedTab === 'add-job' }">
          <a href="#" @click="selectTab('add-job')">Post Jobs</a>
        </li>
        <li :class="{ active: selectedTab === 'interview-requests' }">
          <a href="#" @click="selectTab('interview-requests')">
            Requests
          </a>
        </li>
      </ul>
    </div>
    <main>
      <h2 class="title">{{ pageTitle }}</h2>
      <transition name="profile">
        <keep-alive>
          <component :is="selectedTab" @switch-tab="selectTab"></component>
        </keep-alive>
      </transition>
    </main>
  </section>
</template>

<script>
import { mapGetters } from 'vuex';

import UserOverview from '../../components/user/UserOverview';
import EditProfile from '../../components/user/EditProfile';
import AddJob from '../../components/user/AddJob';
import InterviewRequests from '../../components/user/InterviewRequests';

export default {
  data() {
    return {
      selectedTab: 'interview-requests'
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
    AddJob,
    InterviewRequests
  },
  computed: {
    ...mapGetters(['user']),
    pageTitle() {
      const { selectedTab } = this;
      if (selectedTab === 'user-overview') return 'Overview';
      if (selectedTab === 'edit-profile') return 'Edit Profile';
      if (selectedTab === 'add-job') return 'Post a Job';
      return 'Interview Requests';
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

.active a,
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

.profile-enter-from {
  opacity: 0;
  transform: translateY(-50px);
}

.profile-enter-active,
.profile-leave-active {
  transition: 0.25s;
}

.profile-enter-to,
.profile-leave-from {
  opacity: 1;
  transform: translateY(0);
}

.profile-leave-to {
  opacity: 0;
  transform: translateY(50px);
}
</style>

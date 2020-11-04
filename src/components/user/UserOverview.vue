<template>
  <div class="content">
    <UserData />
    <UserJobs />
    <UserProposals />
  </div>
</template>

<script>
import UserData from './UserData';
import UserJobs from './UserJobs';
import UserProposals from './UserProposals';

export default {
  components: {
    UserData,
    UserJobs,
    UserProposals
  }
};
</script>

<style scoped>
.content {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 20rem;
  gap: 2rem;
  max-width: 100%;
}
</style>

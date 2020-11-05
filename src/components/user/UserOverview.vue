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
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
}
</style>

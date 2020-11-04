<template>
  <base-card>
    <base-form @submit.prevent="addJob">
      <div class="form-group">
        <label for="title">title</label>
        <input type="text" id="title" v-model.trim="title" />
      </div>
      <div class="form-group">
        <label for="categories">categories</label>
        <input type="text" id="categories" v-model.trim="categories" />
      </div>
      <div class="form-group">
        <label for="description">description</label>
        <textarea
          id="description"
          v-model.trim="description"
          rows="4"
        ></textarea>
      </div>

      <base-button mode="btn-block btn-primary btn-rounded">
        Post Job
      </base-button>
    </base-form>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      description: '',
      categories: ''
    };
  },
  methods: {
    addJob() {
      const { title, description, categories } = this;
      const { userId } = this.$store.getters.user;
      const newJob = {
        userId,
        title,
        description,
        categories: categories.split(', ')
      };

      this.$store.dispatch('jobs/addJob', newJob);

      this.title = '';
      this.categories = '';
      this.description = '';
    }
  }
};
</script>

<template>
  <base-card>
    <base-form @submit.prevent="addJob">
      <div class="form-group" :class="invalidInput('title')">
        <label for="title">title</label>
        <input type="text" id="title" v-model.trim="title" />
        <small class="error" v-if="invalidTitle"
          >Title Shouldn't be empty</small
        >
      </div>
      <div class="form-group" :class="invalidInput('cat')">
        <label for="categories">categories</label>
        <input type="text" id="categories" v-model.trim="categories" />
        <small class="error" v-if="invalidCat"
          >Please input at lease 1 categories</small
        >
      </div>
      <div class="form-group" :class="invalidInput('desc')">
        <label for="description">description</label>
        <textarea
          id="description"
          v-model.trim="description"
          rows="4"
        ></textarea>
        <small class="error" v-if="invalidDesc"
          >Description shouldn't be empty</small
        >
      </div>

      <base-button mode="btn-block btn-primary btn-rounded">
        Post Job
      </base-button>
    </base-form>
  </base-card>
</template>

<script>
export default {
  emits: ['switch-tab'],
  data() {
    return {
      title: '',
      description: '',
      categories: '',
      invalidTitle: false,
      invalidDesc: false,
      invalidCat: false
    };
  },
  methods: {
    invalidInput(input) {
      if (input === 'title') return { error: this.invalidTitle };
      if (input === 'cat') return { error: this.invalidCat };
      if (input === 'desc') return { error: this.invalidDesc };
    },
    async addJob() {
      this.invalidTitle = false;
      this.invalidDesc = false;
      this.invalidCat = false;

      const { title, description, categories } = this;

      if (title !== '' && description !== '' && categories !== '') {
        const { userId } = this.$store.getters.user;
        const newJob = {
          userId,
          title,
          description,
          categories: categories.split(', ')
        };

        await this.$store.dispatch('jobs/addJob', newJob);
        this.$emit('switch-tab', 'user-overview');

        this.title = '';
        this.categories = '';
        this.description = '';
      } else {
        if (title === '') this.invalidTitle = true;
        if (description === '') this.invalidDesc = true;
        if (categories === '') this.invalidCat = true;
      }
    }
  }
};
</script>

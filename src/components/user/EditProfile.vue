<template>
  <base-dialog v-if="error" title="An Error Occured">
    <h3>{{ error }}</h3>
    <base-button mode="btn-rounded btn-primary" @click="error = null">
      Okay
    </base-button>
  </base-dialog>
  <base-card>
    <base-form @submit.prevent="updateProfile">
      <div class="form-group">
        <label for="username">username</label>
        <input type="text" id="username" v-model.trim="username" />
      </div>
      <div class="form-group">
        <label for="email">email</label>
        <input type="text" id="email" disabled :value="user.email" />
      </div>
      <div class="form-group">
        <label for="password">password</label>
        <input type="password" id="password" disabled :value="user.password" />
      </div>
      <div class="form-group">
        <label for="expertise">expertise</label>
        <input type="text" id="expertise" v-model.trim="expertise" />
      </div>
      <div class="form-group">
        <label for="description">description</label>
        <textarea
          id="description"
          rows="4"
          v-model.trim="description"
        ></textarea>
      </div>
      <base-button mode="btn-block btn-primary btn-rounded">
        Save Changes
      </base-button>
    </base-form>
  </base-card>
</template>

<script>
export default {
  emits: ['switch-tab'],
  data() {
    return {
      username: '',
      expertise: '',
      description: '',
      error: null
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    async updateProfile() {
      const { username, expertise, description } = this;
      const updatedUser = {
        ...this.user,
        username,
        description,
        expertise: expertise.split(', ')
      };

      try {
        await this.$store.dispatch('updateUser', updatedUser);
        this.$emit('switch-tab', 'user-overview');
      } catch (error) {
        this.error = error.message;
      }
    }
  },
  created() {
    const { username, email, expertise, description } = this.user;

    this.username = username;
    this.email = email;
    this.expertise = expertise.join(', ');
    this.description = description;
  }
};
</script>

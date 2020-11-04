<template>
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
  data() {
    return {
      username: '',
      expertise: '',
      description: ''
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  methods: {
    updateProfile() {
      const { username, expertise, description } = this;
      const updatedUser = {
        ...this.user,
        username,
        expertise,
        description
      };

      this.$store.dispatch('updateUser', updatedUser);
    }
  },
  created() {
    const { username, email, expertise, description } = this.user;

    this.username = username;
    this.email = email;
    this.expertise = expertise;
    this.description = description;
  }
};
</script>

<template>
  <div>
    <p v-if="error">{{ error }}</p>
    <base-card>
      <base-form @submit.prevent="login">
        <div class="form-group" :class="errorEmail">
          <label for="email">email</label>
          <input type="text" id="email" v-model.trim="email" />
          <small class="error" v-if="invalidEmail && !error">
            Please enter a valid email
          </small>
        </div>
        <div class="form-group" :class="errorPassword">
          <label for="password">password</label>
          <input type="password" id="password" v-model.trim="password" />
          <small class="error" v-if="invalidPassword && !error">
            Password must have at least 8 characters
          </small>
        </div>
        <base-button mode="btn-primary btn-block btn-rounded">
          Sign In
        </base-button>
        <p>
          Not have any account yet?
          <router-link to="register"> Sign Up </router-link>here!
        </p>
      </base-form>
    </base-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      invalidEmail: false,
      invalidPassword: false,
      error: null
    };
  },
  computed: {
    errorEmail() {
      return { error: this.invalidEmail };
    },
    errorPassword() {
      return { error: this.invalidPassword };
    }
  },
  methods: {
    async login() {
      this.invalidEmail = false;
      this.invalidPassword = false;
      this.error = null;

      const { email, password } = this;

      if (email === '' || !email.includes('@') || password.length < 8) {
        if (email === '' || !email.includes('@')) this.invalidEmail = true;
        if (password.length < 8) this.invalidPassword = true;

        return;
      }

      const user = { email, password };

      try {
        await this.$store.dispatch('login', user);

        this.email = '';
        this.password = '';

        this.$router.replace('/jobs');
      } catch (error) {
        this.error = error;
        this.invalidEmail = true;
        this.invalidPassword = true;
      }
    }
  }
};
</script>

<template>
  <base-card>
    <base-form @submit.prevent="register">
      <div class="form-group" :class="errorUsername">
        <label for="username">username</label>
        <input type="text" id="username" v-model.trim="username" />
        <small v-if="invalidUsername" class="error">
          Username shouldn't be empty!
        </small>
      </div>
      <div class="form-group" :class="errorEmail">
        <label for="email">email</label>
        <input type="text" id="email" v-model.trim="email" />
        <small v-if="invalidEmail" class="error">
          Please enter a valid email
        </small>
      </div>
      <div class="form-group" :class="errorPassword">
        <label for="password">password</label>
        <input type="password" id="password" v-model.trim="password" />
        <small v-if="invalidPassword" class="error">
          Password must have at least 8 characters
        </small>
      </div>
      <base-button mode="btn-primary btn-rounded btn-block">
        Sign Up
      </base-button>
    </base-form>
    <p>
      Already have an account?
      <router-link to="login"> Sign In</router-link> here!
    </p>
  </base-card>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      username: '',
      password: '',
      invalidEmail: false,
      invalidUsername: false,
      invalidPassword: false
    };
  },
  computed: {
    errorEmail() {
      return { error: this.invalidEmail };
    },
    errorUsername() {
      return { error: this.invalidUsername };
    },
    errorPassword() {
      return { error: this.invalidPassword };
    }
  },
  methods: {
    register() {
      this.invalidEmail = false;
      this.invalidUsername = false;
      this.invalidPassword = false;

      const { email, username, password } = this;

      if (
        email === '' ||
        !email.includes('@') ||
        username === '' ||
        password.length < 8
      ) {
        if (email === '' || !email.includes('@')) this.invalidEmail = true;
        if (username === '') this.invalidUsername = true;
        if (password.length < 8) this.invalidPassword = true;

        return;
      }

      const newUser = { email, username, password };

      this.email = '';
      this.username = '';
      this.password = '';
      console.log(newUser);
    }
  }
};
</script>

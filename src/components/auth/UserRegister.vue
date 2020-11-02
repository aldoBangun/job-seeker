<template>
  <base-card>
    <base-form @submit.prevent="register">
      <div class="form-group" :class="errorUsername">
        <label for="username">username</label>
        <input type="text" id="username" v-model.trim="username" />
      </div>
      <div class="form-group" :class="errorEmail">
        <label for="email">email</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-group" :class="errorPassword">
        <label for="password">password</label>
        <input type="password" id="password" v-model.trim="password" />
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
    register(e) {
      this.invalidEmail = false;
      this.invalidPassword = false;
      this.invalidEmail = false;

      const { email, username, password } = this;

      if (
        email === '' ||
        !email.includes('@') ||
        username === '' ||
        password === '' ||
        password.length < 8
      ) {
        if (email === '' || !email.includes('@')) this.invalidEmail = true;
        if (username === '') this.invalidUsername = true;
        if (password === '' || password.length < 8) this.invalidPassword = true;
      }

      const newUser = { email, username, password };

      e.target.reset();
      console.log(newUser);
    }
  }
};
</script>

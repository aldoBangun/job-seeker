<template>
  <base-card>
    <base-form @submit.prevent="login">
      <div class="form-group">
        <label for="email">email</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-group">
        <label for="password">password</label>
        <input type="password" id="password" v-model.trim="password" />
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
</template>

<script>
export default {
  data() {
    return {
      email: null,
      password: null
    };
  },
  methods: {
    login() {
      const { email, password } = this;
      const user = { email, password };

      console.log(user);
    }
  }
};
</script>

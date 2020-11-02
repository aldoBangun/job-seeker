<template>
  <base-card>
    <base-form @submit.prevent="register">
      <div class="form-group">
        <label for="username">username</label>
        <input type="text" id="username" v-model.trim="username" />
      </div>
      <div class="form-group">
        <label for="email">email</label>
        <input type="email" id="email" v-model.trim="email" />
      </div>
      <div class="form-group">
        <label for="password">password</label>
        <input type="password" id="password" v-model.trim="password" />
      </div>
      <base-button mode="btn-primary btn-rounded btn-block"
        >Sign Up</base-button
      >
    </base-form>
  </base-card>
</template>

<template>
  <form @submit.prevent="login">
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit">Login</button>
    <button type="button" @click="recover">Forgot Password?</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";

const email = ref("");
const password = ref("");
const auth = useAuthStore();

const login = async () => {
  await auth.login(email.value, password.value);
};

const recover = async () => {
  await auth.recoverPassword(email.value);
  alert("Password reset email sent!");
};
</script>

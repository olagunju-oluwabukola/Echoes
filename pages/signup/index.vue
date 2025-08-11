<template>
  <form @submit.prevent="signup">
    <input v-model="email" placeholder="Email" />
    <input v-model="password" type="password" placeholder="Password" />
    <button type="submit">Signup</button>
  </form>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";

const email = ref("");
const password = ref("");
const auth = useAuthStore();

const signup = async () => {
  await auth.signup(email.value, password.value);
};
</script>

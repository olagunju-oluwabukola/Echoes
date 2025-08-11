<template>
  <div class="auth-page">
    <h1>Recover Password</h1>
    <form @submit.prevent="handleRecover">
      <input v-model="email" type="email" placeholder="Your Email" required />
      <button type="submit">Send Reset Link</button>
    </form>
    <p v-if="auth.error" class="error">{{ auth.error }}</p>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAuthStore } from "../../stores/auth";

const email = ref("");
const auth = useAuthStore();

const handleRecover = () => {
  auth.recoverPassword(email.value);
};
</script>

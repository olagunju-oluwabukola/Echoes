<script setup lang="ts">
import { useAuthStore } from "../stores/auth";

definePageMeta({
  middleware: "auth"
});

const auth = useAuthStore();
</script>

<template>
  <div>
    <h1>Dashboard</h1>
    <p>Welcome, {{ auth.user?.email }}</p>
  </div>
</template>

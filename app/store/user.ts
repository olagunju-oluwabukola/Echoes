import { defineStore } from 'pinia'

export type User = { id: string; name: string; avatar?: string }

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null as User | null
  }),
  getters: {
    isLoggedIn: (s) => !!s.user
  },
  actions: {
    login(name: string) {
      this.user = { id: crypto.randomUUID(), name, avatar: `https://api.dicebear.com/9.x/personas/svg?seed=${encodeURIComponent(name)}` }
    },
    logout() {
      this.user = null
    }
  },
  persist: false
})
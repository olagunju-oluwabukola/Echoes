
export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null as null | { id: string; name: string }
  }),
  actions: {
    login(userData: { id: string; name: string }) {
      this.user = userData
    },
    logout() {
      this.user = null
    },
    isLoggedIn() {
      return !!this.user
    }
  }
})

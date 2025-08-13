// import { useRouter } from 'vue-router'
// import { useUserStore } from '@/stores/user'

// export function useAuthGuard() {
//   const router = useRouter()
//   const userStore = useUserStore()

//   function requireLogin(action) {
//     if (!userStore.isLoggedIn) {
//       router.push('/login')
//     } else {
//       action()
//     }
//   }

//   return { requireLogin }
// }


// import { useRouter } from 'vue-router'
// import { useUserStore } from '../store/user'

// export function useAuthGuard() {
//   const router = useRouter()
//   const user = useUserStore()

//   function requireLogin(action?: () => void) {
//     if (!user.isLoggedIn) {
//       router.push({ path: '/login', query: { next: router.currentRoute.value.fullPath } })
//       return false
//     }
//     action?.()
//     return true
//   }

//   return { requireLogin }
// }


import { useAuthStore } from '../store/auth'

export function useAuthGuard() {
  const auth = useAuthStore()
  const router = useRouter()

  function requireLogin(action: () => void) {
    if (!auth.isLoggedIn()) {
      router.push('/login')
    } else {
      action()
    }
  }

  return { requireLogin }
}

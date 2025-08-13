import { defineStore } from 'pinia'
import { useUserStore } from './user'

export type Comment = {
  id: string
  user: { id: string; name: string; avatar?: string }
  text: string
  createdAt: string
}

export type Post = {
  slug: string
  title: string
  author: { name: string; avatar?: string }
  date: string
  readTime: number
  hero: string
  gallery: string[]
  html: string
  likes: number
  likedByMe?: boolean
  comments: Comment[]
}

// seed data (replace with API later)
const seed: Post[] = [
  {
    slug: 'how-to-make-fluffy-pancakes',
    title: 'How to make fluffy pancakes',
    author: { name: 'Emily Carter' },
    date: '2025-08-10',
    readTime: 6,
    hero: 'https://images.unsplash.com/photo-1508736793122-f516e3ba5569?q=80&w=1400&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1400&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1400&auto=format&fit=crop'
    ],
    html: `<p>Fluffy pancakes are all about aeration and gentle mixing. Sift dry ingredients, separate eggs, and fold whipped whites at the end. Cook on medium heat until bubbles form.</p>
      <h3>Ingredients</h3>
      <ul><li>1½ cups flour</li><li>3 tbsp sugar</li><li>1 tbsp baking powder</li><li>1 egg (separated)</li><li>1¼ cups milk</li><li>3 tbsp melted butter</li></ul>
      <h3>Method</h3>
      <ol><li>Whisk dry ingredients.</li><li>Combine milk, yolk and butter.</li><li>Fold into dry mix.</li><li>Whip whites to soft peaks and fold.</li><li>Cook 2–3 min per side.</li></ol>`,
    likes: 128,
    likedByMe: false,
    comments: [
      { id: 'c1', user: { id: 'u1', name: 'Jane Doe' }, text: 'Looks delicious!', createdAt: new Date().toISOString() },
      { id: 'c2', user: { id: 'u2', name: 'Sam Ade' }, text: 'Tried it—super fluffy.', createdAt: new Date().toISOString() }
    ]
  }
]

export const useBlogStore = defineStore('blog', {
  state: () => ({
    posts: seed
  }),
  getters: {
    bySlug: (s) => (slug: string) => s.posts.find((p) => p.slug === slug)
  },
  actions: {
    toggleLike(slug: string) {
      const user = useUserStore()
      if (!user.isLoggedIn) return false
      const post = this.posts.find((p) => p.slug === slug)
      if (!post) return false
      post.likedByMe = !post.likedByMe
      post.likes += post.likedByMe ? 1 : -1
      return true
    },
    addComment(slug: string, text: string) {
      const user = useUserStore()
      if (!user.isLoggedIn) return false
      const post = this.posts.find((p) => p.slug === slug)
      if (!post) return false
      post.comments.unshift({
        id: crypto.randomUUID(),
        user: { id: user.user!.id, name: user.user!.name, avatar: user.user!.avatar },
        text,
        createdAt: new Date().toISOString()
      })
      return true
    }
  }
})
// composables/usePosts.ts
import { ref } from 'vue'
import Avatar from "../assets/images/avatar.png"
import cakes from "../assets/images/cake.png"
import omlette from "../assets/images/omlette.png"
import whisk from "../assets/images/whisk.png"
export interface Author {
  name: string
  avatar: string
  bio: string
}

export interface Reactions {
  likes: number
  comments: number
  bookmarks: number
}

export interface Post {
  id: number
  author: Author
  title: string
  excerpt: string
  intro: string
  content: string
  images: string[]
  reactions: Reactions
  tags: string[]
  createdAt: string
  readTime: string
  direction:string
  tip: string
  progressImg: string []
}

export interface Comment {
  id: number
  postId: number
  author: {
    name: string
    avatar: string
  }
  content: string
  createdAt: string
  likes: number
}

const posts = ref<Post[]>([
  {
    id: 1,
    author: {
      name: 'Sarah Flinch',
      avatar: Avatar,
      bio: 'Food blogger and recipe developer. Sharing delicious homemade recipes with love.'
    },
    title: 'How to make fluffy pancakes',
    excerpt: 'Learn the secret to making perfectly fluffy pancakes that will melt in your mouth. These tips will transform your breakfast game forever.',
    intro : "Pancakes for breakfast are my children favourites, this recipe explains how to make a perfect puffy anf fluffy pancake.",
    content: `
      <div class="prose max-w-none">

        <h3 class="font-bold mb-4" >Ingredients you will need:</h3>
        <ul class =" list-disc pl-6">
          <li>2 cups all-purpose flour</li>
          <li>2 tablespoons sugar</li>
          <li>2 teaspoons baking powder</li>
          <li>1 teaspoon salt</li>
          <li>2 large eggs</li>
          <li>1¾ cups milk</li>
          <li>4 tablespoons melted butter</li>
          <li>1 teaspoon vanilla extract</li>
        </ul>
      </div>
    `,
    direction: 'Mix your dry ingredients in a bowl, flour, baking powder and sugar.  Add your butter to your dry ingredients and mx properly. In another bowl mix your wet ingredients, mik, egg and vanilla extract. whisk your wet ingredients and add it to your dry ingredients. Whisk until smooth, then pour your batter on a heated pan until golden.',
    tip: 'Do not Overmix your batter. Once your batter is mixed, make sure to pour thr batter in the frying pan immediately. When freezing, make sure your pancakes is completely cool, stack two pancakes on top of each other and cover in plastic wrap, warp again in an aluminum foil and this can br frozen for up to three months.',
    images: [
      whisk,
    ],
    progressImg :[
        omlette
    ],
    reactions: {
      likes: 256,
      comments: 42,
      bookmarks: 89
    },
    tags: ['breakfast', 'pancakes', 'recipe', 'cooking'],
    createdAt: '2024-03-15T08:30:00Z',
    readTime: '3 min read'
  },
  {
    id: 2,
    author: {
      name: 'Mike Chen',
      avatar:  Avatar,
      bio: 'Professional chef and culinary instructor. 15+ years in the restaurant industry.'
    },
    title: 'The Ultimate Guide to Pasta Making',
    excerpt: 'Master the art of homemade pasta with this comprehensive guide. From basic dough to advanced techniques.',
    intro : "Pancakes for breakfast are my children favourites, this recipe explains how to make a perfect puffy anf fluffy pancake.",
    content: `
      <div class="prose max-w-none">

        <h3>Basic Pasta Dough Recipe:</h3>
        <ul>
          <li>400g tipo 00 flour</li>
          <li>4 large eggs</li>
          <li>1 tablespoon olive oil</li>
          <li>1 teaspoon salt</li>
        </ul>


      </div>
    `,
     direction: 'Mix your dry ingredients in a bowl, flour, baking powder and sugar.  Add your butter to your dry ingredients and mx properly. In another bowl mix your wet ingredients, mik, egg and vanilla extract. whisk your wet ingredients and add it to your dry ingredients. Whisk until smooth, then pour your batter on a heated pan until golden.',
    tip: 'Do not Overmix your batter. Once your batter is mixed, make sure to pour thr batter in the frying pan immediately. When freezing, make sure your pancakes is completely cool, stack two pancakes on top of each other and cover in plastic wrap, warp again in an aluminum foil and this can br frozen for up to three months.',
    images: [
      whisk
    ],
        progressImg :[
        omlette
    ],
    reactions: {
      likes: 189,
      comments: 23,
      bookmarks: 67
    },
    tags: ['pasta', 'italian', 'cooking', 'homemade'],
    createdAt: '2024-03-14T14:20:00Z',
    readTime: '8 min read'
  },
  {
    id: 3,
    author: {
      name: 'Emma Rodriguez',
      avatar:  Avatar,
      bio: 'Nutritionist and wellness coach. Helping people create healthy relationships with food.'
    },
    title: 'Quick and Healthy Breakfast Ideas',
    excerpt: 'Start your day right with these nutritious and delicious breakfast options that take less than 10 minutes to prepare.',
   intro : "Mornings can be hectic, but that doesn't mean you have to skip breakfast. Here are my favorite quick and healthy options",
    content: `
      <div class="prose max-w-none">
        <h3>Overnight Oats</h3>
        <p>Prepare these the night before for a grab-and-go breakfast that's both nutritious and delicious.</p>

        <h3>Avocado Toast Variations</h3>
        <p>Elevate your avocado toast with different toppings like cherry tomatoes, feta cheese, or a poached egg.</p>
      </div>
    `,
     direction: 'Mix your dry ingredients in a bowl, flour, baking powder and sugar.  Add your butter to your dry ingredients and mx properly. In another bowl mix your wet ingredients, mik, egg and vanilla extract. whisk your wet ingredients and add it to your dry ingredients. Whisk until smooth, then pour your batter on a heated pan until golden.',
    tip: 'Do not Overmix your batter. Once your batter is mixed, make sure to pour thr batter in the frying pan immediately. When freezing, make sure your pancakes is completely cool, stack two pancakes on top of each other and cover in plastic wrap, warp again in an aluminum foil and this can br frozen for up to three months.',
    images: [
      omlette
    ],
        progressImg :[
        whisk
    ],
    reactions: {
      likes: 342,
      comments: 28,
      bookmarks: 156
    },
    tags: ['breakfast', 'healthy', 'quick', 'nutrition'],
    createdAt: '2024-03-13T07:45:00Z',
    readTime: '4 min read'
  },
  {
    id: 4,
    author: {
      name: 'James Wilson',
      avatar: '/assets/images/avatar.png',
      bio: 'Barbecue enthusiast and weekend grillmaster. Sharing smoky flavors and techniques.'
    },
    title: 'Mastering the Perfect BBQ Ribs',
    excerpt: 'Learn the secrets to fall-off-the-bone ribs with the perfect balance of smoke, spice, and tenderness.',
    intro : "There's nothing quite like perfectly cooked BBQ ribs. After years of experimentation, I've perfected my technique.",
    content: `
      <div class="prose max-w-none">
        <h3>The Rub</h3>
        <p>A good dry rub is essential. I use brown sugar, paprika, garlic powder, onion powder, salt, pepper, and a touch of cayenne.</p>

        <h3>Low and Slow</h3>
        <p>Cook at 225°F for 5-6 hours. The key is patience and maintaining consistent temperature.</p>
      </div>
    `,
     direction: 'Mix your dry ingredients in a bowl, flour, baking powder and sugar.  Add your butter to your dry ingredients and mx properly. In another bowl mix your wet ingredients, mik, egg and vanilla extract. whisk your wet ingredients and add it to your dry ingredients. Whisk until smooth, then pour your batter on a heated pan until golden.',
    tip: 'Do not Overmix your batter. Once your batter is mixed, make sure to pour thr batter in the frying pan immediately. When freezing, make sure your pancakes is completely cool, stack two pancakes on top of each other and cover in plastic wrap, warp again in an aluminum foil and this can br frozen for up to three months.',
    images: [
      whisk
    ],
     progressImg :[
        omlette
    ],
    reactions: {
      likes: 198,
      comments: 31,
      bookmarks: 78
    },
    tags: ['bbq', 'ribs', 'grilling', 'smoking'],
    createdAt: '2024-03-12T16:30:00Z',
    readTime: '6 min read'
  },
  {
    id: 5,
    author: {
      name: 'Lisa Park',
      avatar:  Avatar,
      bio: 'Pastry chef and baking instructor. Creating sweet moments one recipe at a time.'
    },
    title: 'Decadent Chocolate Cake Recipe',
    excerpt: 'Indulge in this rich, moist chocolate cake that\'s perfect for special occasions or when you need a chocolate fix.',
    intro : "This chocolate cake recipe has been in my family for generations. It's incredibly moist and rich, perfect for any celebration",
    content: `
      <div class="prose max-w-none">

        <h3>For the Cake:</h3>
        <ul>
          <li>2 cups all-purpose flour</li>
          <li>2 cups sugar</li>
          <li>3/4 cup cocoa powder</li>
          <li>2 teaspoons baking soda</li>
          <li>1 cup buttermilk</li>
          <li>1 cup hot coffee</li>
        </ul>

        <p>The secret ingredient is the hot coffee - it intensifies the chocolate flavor without making the cake taste like coffee.</p>
      </div>
    `,
    images: [
     cakes
    ],
     progressImg :[
        whisk
    ],
    reactions: {
      likes: 423,
      comments: 56,
      bookmarks: 201
    },
     direction: 'Mix your dry ingredients in a bowl, flour, baking powder and sugar.  Add your butter to your dry ingredients and mx properly. In another bowl mix your wet ingredients, mik, egg and vanilla extract. whisk your wet ingredients and add it to your dry ingredients. Whisk until smooth, then pour your batter on a heated pan until golden.',
    tip: 'Do not Overmix your batter. Once your batter is mixed, make sure to pour thr batter in the frying pan immediately. When freezing, make sure your pancakes is completely cool, stack two pancakes on top of each other and cover in plastic wrap, warp again in an aluminum foil and this can br frozen for up to three months.',
    tags: ['chocolate', 'cake', 'dessert', 'baking'],
    createdAt: '2024-03-11T12:15:00Z',
    readTime: '5 min read'
  }
])

const comments = ref<Comment[]>([
  {
    id: 1,
    postId: 1,
    author: {
      name: 'Anna Johnson',
      avatar:  Avatar
    },
    content: 'These pancakes are incredible! I followed your recipe exactly and they turned out perfect. My family loved them!',
    createdAt: '2024-03-15T10:30:00Z',
    likes: 12
  },
  {
    id: 2,
    postId: 1,
    author: {
      name: 'David Miller',
      avatar: '/assets/images/avatar.png'
    },
    content: 'Great recipe! I added some blueberries and it was amazing. Thanks for sharing!',
    createdAt: '2024-03-15T11:45:00Z',
    likes: 8
  },
  {
    id: 3,
    postId: 1,
    author: {
      name: 'Maria Garcia',
      avatar:  Avatar
    },
    content: 'I\'ve been looking for a good pancake recipe forever. This one is definitely a keeper. The tip about not overmixing really makes a difference.',
    createdAt: '2024-03-15T13:20:00Z',
    likes: 15
  },
  {
    id: 4,
    postId: 1,
    author: {
      name: 'Robert Johnson',
      avatar:  Avatar
    },
    content: 'Made these for Sunday brunch and everyone asked for the recipe. Thanks for making me look like a pancake pro! 😄',
    createdAt: '2024-03-15T14:10:00Z',
    likes: 6
  },
  {
    id: 5,
    postId: 1,
    author: {
      name: 'Sophie Wilson',
      avatar:  Avatar
    },
    content: 'Perfect timing! I was just wondering what to make for breakfast tomorrow. These look absolutely delicious.',
    createdAt: '2024-03-15T15:30:00Z',
    likes: 4
  }
])

export const usePosts = () => {
  const getPostById = (id: string | number): Post | undefined => {
    return posts.value.find(post => post.id === parseInt(id.toString()))
  }

  const getPostsByTab = (tab: string): Post[] => {
    switch (tab) {
      case 'For you':
        return posts.value.slice(0, 2)
      case 'Following':
        return []
      case 'New':
        return posts.value.slice(0, 2).reverse()
      case 'Trending':
        return posts.value.slice(0, 3)
      default:
        return posts.value
    }
  }

  const getCommentsByPostId = (postId: string | number): Comment[] => {
    return comments.value.filter(comment => comment.postId === parseInt(postId.toString()))
  }

  const getSimilarPosts = (currentPostId: string | number, limit: number = 4): Post[] => {
    return posts.value
      .filter(post => post.id !== parseInt(currentPostId.toString()))
      .slice(0, limit)
  }

  const formatDate = (dateString: string): string => {
    const date = new Date(dateString)
    const now = new Date()
    const diffTime = Math.abs(now.getTime() - date.getTime())
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24))

    if (diffDays === 1) return '1 day ago'
    if (diffDays < 7) return `${diffDays} days ago`
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`
    return `${Math.ceil(diffDays / 30)} months ago`
  }

  return {
    posts,
    comments,
    getPostById,
    getPostsByTab,
    getCommentsByPostId,
    getSimilarPosts,
    formatDate
  }
}
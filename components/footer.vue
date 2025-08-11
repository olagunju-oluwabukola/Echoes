<template>
  <footer class="bg-black text-gray-400 py-12 px-6">
    <div class="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-8">
      <div v-for="(section, index) in footerSections" :key="index">
        <h4 class="text-white font-semibold mb-4">{{ section.title }}</h4>
        <ul class="space-y-2 text-sm">
          <li v-for="(link, i) in section.links" :key="i">
            <a :href="link.href" class="hover:text-white">{{ link.label }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="mt-12 text-center text-sm text-gray-500">
      <p>&copy; 2025 FutureTech. All rights reserved.</p>
      <div class="flex justify-center space-x-4 mt-2">
        <a v-for="(item, i) in policyLinks" :key="i" :href="item.href" class="hover:text-white">
          {{ item.label }}
        </a>
      </div>
    </div>
  </footer>
</template>

<script setup>
const footerSections = [
  {
    title: 'Home',
    links: [
      { label: 'About', href: '#' },
      { label: 'Team', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
  {
    title: 'Work',
    links: [
      { label: 'Technology', href: '#' },
      { label: 'Product', href: '#' },
      { label: 'Marketing', href: '#' },
    ],
  },
  {
    title: 'Blogs',
    links: [
      { label: 'Latest', href: '#' },
      { label: 'Popular', href: '#' },
      { label: 'Categories', href: '#' },
    ],
  },
  {
    title: 'Podcasts',
    links: [
      { label: 'Episodes', href: '#' },
      { label: 'Guests', href: '#' },
      { label: 'Transcripts', href: '#' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Documentation', href: '#' },
      { label: 'FAQs', href: '#' },
      { label: 'Support', href: '#' },
    ],
  },
];

const policyLinks = [
  { label: 'Terms & Conditions', href: '#' },
  { label: 'Privacy Policy', href: '#' },
];
</script>



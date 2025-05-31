<template>
    <Navbar :navItems="navItems" />
  <section id="projects" class="py-20">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mb-10">Latest Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(project, index) in projects" :key="index"
            class="border border-gray-100 p-6 hover:shadow-xl transform hover:scale-105 transition-all duration-300">
            <h3 class="text-xl font-medium mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4 text-sm">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="(tech, techIndex) in project.technologies" :key="techIndex"
                class="px-3 py-1 bg-gray-100 text-gray-700 text-xs">
                {{ tech }}
              </span>
            </div>
            <a :href="project.liveLink" class="text-sm font-medium hover:underline flex items-center mt-2 transition-colors duration-300">
              View Project
            </a>
          </div>
        </div>

        <!-- Show All Button -->
        <div class="mt-10">
          <a href="https://capstonesi.online" class="text-sm font-medium flex items-center hover:underline transition-colors duration-300">
            Show All Projects
          </a>
        </div>
      </div>
    </div>
  </section>
    <Footer :navItems="navItems" />
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { RouterLink } from 'vue-router';

import { navItems } from '../stores/menus.js';
import { technologies, projects } from '../stores/masters.js';
import { contactInfo, socialLinks } from '../stores/contacts.js';

defineProps({
    projects: Array
});
</script>
<style scoped>
html {
    scroll-behavior: smooth;
}
</style>

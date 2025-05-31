<template>
  <Navbar :navItems="navItems" />
  <section id="about" class="py-20 bg-gray-50 border-t border-b border-gray-100">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mb-10">About</h2>
        <div class="space-y-6 text-gray-700">
          <p>
            I’m a passionate web developer with a strong foundation in building modern, scalable applications using
            frameworks like Laravel, Vue.js, and Next.js.
          </p>
          <p>
            Beyond frontend and backend development, I’ve also taken part in projects as a DevOps and QA engineer,
            allowing
            me to support the entire software lifecycle — from CI/CD setup to testing and deployment.
          </p>
          <p>
            I specialize in developing RESTful APIs, integrating third-party services, and managing cloud infrastructure
            to
            ensure performance, scalability, and reliability across both web and mobile platforms.
          </p>
        </div>

        <div class="mt-16">
          <h3 class="text-xl font-bold mb-8">Technologies</h3>
          <div class="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
            <div v-for="(tech, index) in technologies" :key="index"
              class="flex items-center transform hover:scale-105 transition-all duration-300">
              <component :is="tech.icon" class="w-5 h-5 text-gray-700 mr-3 flex-shrink-0" />
              <span class="text-gray-700">{{ tech.name }}</span>
            </div>
          </div>
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
  technologies: Array
});
</script>
<style scoped>
html {
  scroll-behavior: smooth;
}
</style>

<template>
  <Navbar :navItems="navItems" />
  <section id="home" class="pt-32 pb-20 md:pt-40 md:pb-32">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-light mb-6 leading-tight">
          Hello, I'm <span class="font-medium">Ahmad Akrom Kamaluddin</span>.<br />
          I Create & Build Solutions.
        </h1>
        <p class="text-lg text-gray-600 mb-8 leading-relaxed">
          Web developer and Backend developer.
        </p>
        <div class="flex flex-wrap gap-4">
          <router-link
            to="/about"
            class="px-6 py-3 bg-black text-white rounded-none hover:bg-gray-900 transition-colors"
          >
            Get in Touch
          </router-link>
          <router-link
            to="/projects"
            class="px-6 py-3 border border-gray-200 text-gray-800 rounded-none hover:bg-gray-50 transition-colors"
          >
            View Projects
          </router-link>
          <router-link
            to="/contact"
            class="px-6 py-3 border border-gray-200 text-gray-800 rounded-none hover:bg-gray-100 transition-colors"
          >
            Let's Connect
          </router-link>
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
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>

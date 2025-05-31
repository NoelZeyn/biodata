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
          Web developer and Software developer.
        </p>
        <div class="flex flex-wrap gap-4">
          <router-link to="/about"
            class="px-6 py-3 bg-black text-white rounded-none hover:bg-gray-900 transition-colors">
            Get in Touch
          </router-link>
          <router-link to="/projects"
            class="px-6 py-3 border border-gray-200 text-gray-800 rounded-none hover:bg-gray-50 transition-colors">
            View Projects
          </router-link>
          <router-link to="/contact"
            class="px-6 py-3 border border-gray-200 text-gray-800 rounded-none hover:bg-gray-100 transition-colors">
            Let's Connect
          </router-link>
        </div>
      </div>
    </div>
  </section>
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
            <div v-for="(tech, index) in technologies" :key="index" class="flex items-center">
              <component :is="tech.icon" class="w-5 h-5 text-gray-700 mr-3 flex-shrink-0" />
              <span class="text-gray-700">{{ tech.name }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="projects" class="py-20">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mb-10">Latest Projects</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div v-for="(project, index) in projects" :key="index"
            class="border border-gray-100 p-6 hover:shadow-sm transition-shadow">
            <h3 class="text-xl font-medium mb-2">{{ project.title }}</h3>
            <p class="text-gray-600 mb-4 text-sm">{{ project.description }}</p>
            <div class="flex flex-wrap gap-2 mb-4">
              <span v-for="(tech, techIndex) in project.technologies" :key="techIndex"
                class="px-3 py-1 bg-gray-100 text-gray-700 text-xs">
                {{ tech }}
              </span>
            </div>
            <a :href="project.liveLink" class="text-sm font-medium hover:underline flex items-center mt-2">
              View Project
            </a>
          </div>
        </div>

        <!-- Show All Button -->
        <div class="mt-10">
          <a href="https://capstonesi.online" class="text-sm font-medium flex items-center hover:underline">
            Show All Projects
          </a>
        </div>
      </div>
    </div>
  </section>
  <section id="contact" class="py-20 bg-gray-50 border-t border-gray-100">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto">
        <h2 class="text-2xl font-bold mb-10">Get in Touch</h2>
        <div class="grid grid-cols-1 gap-12">
          <div>
            <p class="text-gray-600 mb-6">
              Have a project in mind or just want to chat? Feel free to reach out.
            </p>
            <div class="space-y-4">
              <div v-for="(contact, index) in contactInfo" :key="index" class="flex items-start">
                <component :is="contact.icon" class="w-5 h-5 text-gray-700 mt-0.5 mr-3" />
                <span class="text-gray-700">{{ contact.value }}</span>
              </div>
            </div>
            <div class="mt-8">
              <h4 class="text-sm uppercase tracking-wider text-gray-500 mb-4">Connect</h4>
              <div class="flex space-x-4">
                <a v-for="(social, index) in socialLinks" :key="index" :href="social.link"
                  class="text-gray-600 hover:text-black transition-colors">
                  <component :is="social.icon" class="w-5 h-5" />
                </a>
              </div>
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
</script>

<style scoped>
html {
  scroll-behavior: smooth;
}
</style>

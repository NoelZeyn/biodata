<template>
    <Navbar :navItems="navItems" />
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
defineProps({
    contactInfo: Array,
    socialLinks: Array
});
</script>
<style scoped>
html {
    scroll-behavior: smooth;
}
</style>

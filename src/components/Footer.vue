<template>
  <footer class="py-8 border-t border-gray-100">
    <div class="container mx-auto px-6">
      <div class="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <p class="text-sm text-gray-500">&copy; {{ new Date().getFullYear() }} Ahmad Akrom Kamaluddin</p>
        <div class="flex space-x-6 mt-4 md:mt-0">
          <router-link
            v-for="(item, index) in navItems"
            :key="index"
            :to="item.href"
            class="text-sm text-gray-500 hover:text-gray-800 transition-colors"
          >
            {{ item.label }}
          </router-link>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { RouterLink } from 'vue-router';

defineProps({
  navItems: Array
});
</script>

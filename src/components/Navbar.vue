<template>
  <nav class="fixed w-full bg-white/90 backdrop-blur-sm z-50 border-b border-gray-100">
    <div class="container max-w-4xl mx-auto px-6 md:px-0 py-4 flex justify-between items-center">
      <!-- Desktop Nav -->
      <div class="hidden md:flex space-x-8">
        <router-link
          v-for="(item, index) in navItems"
          :key="index"
          :to="item.href"
          class="text-gray-600 hover:text-black transition-colors text-sm font-medium"
        >
          {{ item.label }}
        </router-link>
      </div>

      <!-- Mobile Button -->
      <button @click="mobileMenuOpen = !mobileMenuOpen" class="md:hidden text-gray-600">
        <component :is="Menu" v-if="!mobileMenuOpen" class="w-6 h-6" />
        <component :is="X" v-else class="w-6 h-6" />
      </button>
    </div>

    <!-- Mobile Menu -->
    <div v-if="mobileMenuOpen" class="md:hidden bg-white border-b border-gray-100 py-4">
      <div class="container mx-auto px-6 flex flex-col space-y-4">
        <router-link
          v-for="(item, index) in navItems"
          :key="index"
          :to="item.href"
          class="text-gray-600 hover:text-black transition-colors text-sm font-medium"
          @click="mobileMenuOpen = false"
        >
          {{ item.label }}
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';
import { Menu, X } from 'lucide-vue-next';

const mobileMenuOpen = ref(false);

defineProps({
  navItems: Array
});
</script>

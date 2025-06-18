<template>
  <div>
    <Navbar :navItems="navItems" />

    <section id="biodata" class="py-20 bg-white border-t border-gray-100">
      <div class="container mx-auto px-6">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-2xl font-bold mb-10">Biodata</h2>

          <!-- Foto & Info -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-10 items-start">
            <!-- Foto -->
            <div class="flex justify-center md:justify-start">
              <img
                class="w-40 h-40 rounded-full border-4 border-blue-200 shadow-md object-cover"
                src="../assets/foto.jpg"
                alt="Foto Biodata"
              />
            </div>

            <!-- Informasi Umum -->
            <div class="md:col-span-2 space-y-4">
              <div>
                <h1 class="text-3xl font-extrabold text-gray-900">
                  Ahmad Akrom Kamaluddin
                </h1>
                <p class="text-gray-600">
                  Mahasiswa Teknologi Informasi di Universitas Brawijaya
                </p>
              </div>

              <div>
                <a
                  href="/Curriculum Vitae_Ahmad Akrom Kamaluddin.pdf"
                  download
                  class="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                >
                  Download CV
                </a>
              </div>

              <div class="space-y-2 text-sm text-gray-700">
                <div class="flex">
                  <span class="w-40 font-medium">Tempat, Tanggal Lahir:</span>
                  <span>Gresik, East Java</span>
                </div>
                <div class="flex">
                  <span class="w-40 font-medium">Email:</span>
                  <a href="mailto:ahmadakrom562@student.ub.ac.id" class="text-blue-600 hover:underline">
                    ahmadakrom562@student.ub.ac.id
                  </a>
                </div>
                <div class="flex">
                  <span class="w-40 font-medium">Telepon:</span>
                  <span>085740669440</span>
                </div>
                <div class="flex">
                  <span class="w-40 font-medium">LinkedIn:</span>
                  <a href="https://www.linkedin.com/in/ahmad-akrom-kamaluddin" target="_blank" class="text-blue-600 hover:underline">
                    linkedin.com/in/ahmad-akrom-kamaluddin
                  </a>
                </div>
                <div class="flex">
                  <span class="w-40 font-medium">Portfolio:</span>
                  <a href="https://portofolio-mo52.vercel.app" target="_blank" class="text-blue-600 hover:underline">
                    portofolio-mo52.vercel.app
                  </a>
                </div>
              </div>
            </div>
          </div>

          <!-- Deskripsi -->
          <p class="mt-10 text-gray-700 text-justify leading-relaxed">
            Saya adalah mahasiswa Teknologi Informasi yang memiliki kemampuan analisis yang baik, teliti, dan cepat beradaptasi. Berpengalaman dalam organisasi serta mampu bekerja secara individu maupun dalam tim.
          </p>

          <!-- Pengalaman & Proyek -->
          <div class="grid grid-cols-1 md:grid-cols-2 gap-12 mt-16">
            <!-- Pengalaman -->
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Pengalaman</h3>
              <div class="space-y-6 text-sm text-gray-700">
                <div>
                  <h4 class="font-semibold">Brawijaya E-Sport – Universitas Brawijaya</h4>
                  <p class="text-gray-500">Divisi IT – Staff | Mar 2024 – Des 2024</p>
                  <ul class="list-disc list-inside">
                    <li>Mengembangkan Web Profile Brawijaya Esports</li>
                    <li>Melakukan pemeliharaan server Discord</li>
                    <li>Mendukung kebutuhan IT dalam organisasi</li>
                  </ul>
                </div>
                <div>
                  <h4 class="font-semibold">Asisten Praktikum – Universitas Brawijaya</h4>
                  <p class="text-gray-500">Pengembangan Aplikasi Mobile | Feb 2025 – Sekarang</p>
                  <ul class="list-disc list-inside">
                    <li>Membantu administrasi praktikum</li>
                    <li>Mengajarkan dan membimbing praktikan</li>
                    <li>Menyiapkan materi dan soal praktikum</li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Proyek -->
            <div>
              <h3 class="text-xl font-bold text-gray-900 mb-4 border-b pb-2">Proyek</h3>
              <div class="space-y-4 text-sm text-gray-700">
                                <div>
                  <h4 class="font-semibold">Capstone Project – Posyandu Care</h4>
                  <p>Transformasi digital sistem informasi posyandu berbasis Web dan Mobile.</p>
                  <a href="https://capstonesi.online" target="_blank" class="text-blue-600 hover:underline">
                    Lihat Proyek
                  </a>
                </div>
                <div>
                  <h4 class="font-semibold">Visualisasi Peta & Data Kependudukan Desa Tingal</h4>
                  <p>Peta interaktif yang menampilkan detail lokasi dan data spasial Desa Tingal, terintegrasi dengan database kependudukan yang hanya dapat diakses oleh pengguna berwenang.</p>
                  <a href="https://tingal.vercel.app" target="_blank" class="text-blue-600 hover:underline">
                    Lihat Proyek
                  </a>
                </div>
                <div>
                  <h4 class="font-semibold">Portfolio Website</h4>
                  <p>Situs web pribadi untuk menampilkan profil dan proyek.</p>
                  <a href="https://portofolio-mo52.vercel.app" target="_blank" class="text-blue-600 hover:underline">
                    Lihat Proyek
                  </a>
                </div>
                <div>
                  <h4 class="font-semibold">Trivia Game Website</h4>
                  <p>Permainan trivia interaktif berbasis web.</p>
                  <a href="https://trivia-lake-one.vercel.app" target="_blank" class="text-blue-600 hover:underline">
                    Lihat Proyek
                  </a>
                </div>
                <div>
                  <h4 class="font-semibold">(Pending) Music Platform Website</h4>
                  <p>Situs web streaming dan koleksi musik.</p>
                  <a href="https://musicplat.vercel.app" target="_blank" class="text-blue-600 hover:underline">
                    Lihat Proyek
                  </a>
                </div>
                <div>
                  <h4 class="font-semibold">(OnGoing) Masjid App Mamba'ul Huda</h4>
                  <p>Layanan Sistem Informasi untuk pengelolaan data Masjid Mamba'ul Huda</p>
                  <a href="#" target="_blank" class="text-blue-600 hover:underline">
                    Lihat Proyek
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <Footer :navItems="navItems" />
  </div>
</template>

<script setup>
import Navbar from '../components/Navbar.vue';
import Footer from '../components/Footer.vue';
import { navItems } from '../stores/menus.js';
</script>

<style scoped>
img {
  transition: transform 0.3s ease;
}
img:hover {
  transform: scale(1.05);
}
</style>

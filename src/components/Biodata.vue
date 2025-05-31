<template>
  <div class="bg-gray-50 py-12">
    <div class="max-w-7xl mx-auto px-6">
      <div class="flex flex-col items-center md:flex-row md:space-x-10">
        <!-- Foto Profil -->
        <div class="flex-shrink-0 mb-6 md:mb-0">
          <img class="w-40 h-40 rounded-full border-4 border-gray-200 shadow-lg" src="../assets/foto.jpg" alt="Foto Biodata" />
        </div>
        
        <!-- Info Biodata -->
        <div class="text-center md:text-left">
          <h1 class="text-3xl font-bold text-gray-900 sm:text-4xl mb-2">Ahmad Akrom Kamaluddin</h1>
          <p class="text-gray-600 mb-4">Mahasiswa Teknologi Informasi di Universitas Brawijaya</p>

          <div class="space-y-2 text-lg text-gray-700">
            <p><strong>Tempat, Tanggal Lahir:</strong> Gresik, East Java</p>
            <p><strong>Email:</strong> <a href="mailto:ahmadakrom562@student.ub.ac.id" class="text-blue-500 hover:underline">ahmadakrom562@student.ub.ac.id</a></p>
            <p><strong>Telepon:</strong> 085740669440</p>
            <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/ahmad-akrom-kamaluddin" target="_blank" class="text-blue-500 hover:underline">www.linkedin.com/in/ahmad-akrom-kamaluddin</a></p>
            <p><strong>Portfolio:</strong> <a href="https://portofolio-mo52.vercel.app" target="_blank" class="text-blue-500 hover:underline">https://portofolio-mo52.vercel.app</a></p>
          </div>

          <p class="mt-4 text-gray-600 leading-relaxed">Mahasiswa Teknologi Informasi yang memiliki kemampuan analisis yang baik, sangat teliti, semangat tinggi, dan mudah beradaptasi pada situasi baru. Berpengalaman dalam organisasi dan bekerja baik secara mandiri maupun dalam tim.</p>
        </div>
      </div>

      <!-- Pengalaman dan Proyek -->
      <div class="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div class="space-y-4">
          <h2 class="text-2xl font-semibold text-gray-900">Pengalaman</h2>
          <ul class="space-y-4 text-gray-700">
            <li>
              <h3 class="font-semibold">Brawijaya E-Sport – Universitas Brawijaya</h3>
              <p class="text-sm text-gray-500">Divisi IT- Staff | Mar 2024 – Des 2024</p>
              <ul class="list-disc pl-5 mt-2 text-gray-600">
                <li>Menangani dan mengembangkan Web Profile Brawijaya Esports</li>
                <li>Menangani pemeliharaan dan pembaruan server Discord Brawijaya Esports</li>
                <li>Membantu menangani kebutuhan IT</li>
              </ul>
            </li>
            <li>
              <h3 class="font-semibold">Asisten Praktikum – Universitas Brawijaya</h3>
              <p class="text-sm text-gray-500">MK Pengembangan Aplikasi Mobile | Feb 2025 – Sekarang</p>
              <ul class="list-disc pl-5 mt-2 text-gray-600">
                <li>Membantu administrasi praktikum</li>
                <li>Mengajarkan dan membimbing praktikan MK pengembangan Aplikasi Mobile</li>
                <li>Menyiapkan materi dan soal praktikum</li>
              </ul>
            </li>
          </ul>
        </div>

        <div class="space-y-4">
          <h2 class="text-2xl font-semibold text-gray-900">Proyek</h2>
          <ul class="space-y-4 text-gray-700">
            <li>
              <h3 class="font-semibold">Portfolio Website</h3>
              <p class="text-sm text-gray-500">Situs web pribadi untuk menampilkan profil, keterampilan, dan proyek.</p>
              <a href="https://portofolio-mo52.vercel.app" target="_blank" class="text-blue-500 hover:underline">Lihat Proyek</a>
            </li>
            <li>
              <h3 class="font-semibold">Trivia Game Website</h3>
              <p class="text-sm text-gray-500">Platform permainan trivia interaktif berbasis web.</p>
              <a href="https://trivia-lake-one.vercel.app" target="_blank" class="text-blue-500 hover:underline">Lihat Proyek</a>
            </li>
            <li>
              <h3 class="font-semibold">Music Platform Website</h3>
              <p class="text-sm text-gray-500">Proyek pembuatan situs web platform musik untuk streaming atau koleksi musik.</p>
              <a href="https://musicplat.vercel.app" target="_blank" class="text-blue-500 hover:underline">Lihat Proyek</a>
            </li>
            <li>
              <h3 class="font-semibold">Capstone Project Posyandu Care</h3>
              <p class="text-sm text-gray-500">Pengembangan Transformasi digital berbasis sistem Informasi posyandu dengan penerapan Web dan Mobile.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Biodata",
};
</script>

<style scoped>
/* Styling tambahan jika diperlukan */
</style>

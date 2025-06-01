<template>
  <div class="bg-white py-16 px-4 sm:px-6 lg:px-8">
    <div class="max-w-7xl mx-auto">
      <div class="flex flex-col md:flex-row items-center md:items-start md:space-x-10">
        <!-- Foto Profil -->
        <div class="flex-shrink-0 mb-8 md:mb-0">
          <img class="w-40 h-40 rounded-full border-4 border-blue-200 shadow-md object-cover" src="../assets/foto.jpg"
            alt="Foto Biodata" />
        </div>

        <!-- Info Biodata -->
        <div class="w-full md:flex-1">
          <h1 class="text-4xl font-extrabold text-gray-900 mb-2">Ahmad Akrom Kamaluddin</h1>
          <p class="text-lg text-gray-600 mb-6">
            Mahasiswa Teknologi Informasi di Universitas Brawijaya
          </p>
          <div>
            <a href="/Curriculum Vitae_Ahmad Akrom Kamaluddin.pdf"
            download
            class="inline-block px-4 py-1 bg-blue-600 text-white font-semibold rounded-lg shadow hover:bg-blue-700 transition"
            >Download File CV</a>
          </div>

          <div class="space-y-3 text-gray-700 text-base">
            <div class="flex items-center">
              <span class="font-semibold w-48">Tempat, Tanggal Lahir:</span>
              <span>Gresik, East Java</span>
            </div>
            <div class="flex items-center">
              <span class="font-semibold w-48">Email:</span>
              <a href="mailto:ahmadakrom562@student.ub.ac.id" class="text-blue-600 hover:underline">
                ahmadakrom562@student.ub.ac.id
              </a>
            </div>
            <div class="flex items-center">
              <span class="font-semibold w-48">Telepon:</span>
              <span>085740669440</span>
            </div>
            <div class="flex items-center">
              <span class="font-semibold w-48">LinkedIn:</span>
              <a href="https://www.linkedin.com/in/ahmad-akrom-kamaluddin" target="_blank"
                class="text-blue-600 hover:underline">
                linkedin.com/in/ahmad-akrom-kamaluddin
              </a>
            </div>
            <div class="flex items-center">
              <span class="font-semibold w-48">Portfolio:</span>
              <a href="https://portofolio-mo52.vercel.app" target="_blank" class="text-blue-600 hover:underline">
                portofolio-mo52.vercel.app
              </a>
            </div>
          </div>

          <p class="mt-6 text-gray-700 leading-relaxed text-justify">
            Saya adalah mahasiswa Teknologi Informasi yang memiliki kemampuan analisis yang baik,
            teliti, dan cepat beradaptasi. Berpengalaman dalam organisasi serta mampu bekerja
            secara individu maupun dalam tim.
          </p>
        </div>
      </div>

      <!-- Pengalaman dan Proyek -->
      <div class="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        <!-- Pengalaman -->
        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Pengalaman</h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-800">Brawijaya E-Sport – Universitas Brawijaya</h3>
              <p class="text-sm text-gray-500 mb-1">Divisi IT – Staff | Mar 2024 – Des 2024</p>
              <ul class="list-disc pl-5 text-gray-600 text-sm">
                <li>Mengembangkan Web Profile Brawijaya Esports</li>
                <li>Melakukan pemeliharaan server Discord Brawijaya Esports</li>
                <li>Mendukung kebutuhan IT dalam organisasi</li>
              </ul>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-800">Asisten Praktikum – Universitas Brawijaya</h3>
              <p class="text-sm text-gray-500 mb-1">Pengembangan Aplikasi Mobile | Feb 2025 – Sekarang</p>
              <ul class="list-disc pl-5 text-gray-600 text-sm">
                <li>Membantu administrasi praktikum</li>
                <li>Mengajarkan dan membimbing praktikan</li>
                <li>Menyiapkan materi dan soal praktikum</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Proyek -->
        <div>
          <h2 class="text-2xl font-bold text-gray-900 mb-4 border-b pb-2">Proyek</h2>
          <div class="space-y-6">
            <div>
              <h3 class="text-lg font-semibold text-gray-800">Portfolio Website</h3>
              <p class="text-sm text-gray-500">Situs web pribadi untuk menampilkan profil dan proyek.</p>
              <a href="https://portofolio-mo52.vercel.app" target="_blank"
                class="text-blue-600 hover:underline text-sm">
                Lihat Proyek
              </a>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-800">Trivia Game Website</h3>
              <p class="text-sm text-gray-500">Permainan trivia interaktif berbasis web.</p>
              <a href="https://trivia-lake-one.vercel.app" target="_blank"
                class="text-blue-600 hover:underline text-sm">
                Lihat Proyek
              </a>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-800">Music Platform Website</h3>
              <p class="text-sm text-gray-500">Situs web streaming dan koleksi musik.</p>
              <a href="https://musicplat.vercel.app" target="_blank" class="text-blue-600 hover:underline text-sm">
                Lihat Proyek
              </a>
            </div>
            <div>
              <h3 class="text-lg font-semibold text-gray-800">Capstone Project – Posyandu Care</h3>
              <p class="text-sm text-gray-500">Transformasi digital sistem informasi posyandu berbasis Web dan Mobile.
              </p>
              <a href="https://capstonesi.online" target="_blank" class="text-blue-600 hover:underline text-sm">
                Lihat Proyek
              </a>
            </div>
          </div>
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
/* Tambahan animasi ringan untuk UX */
img {
  transition: transform 0.3s ease;
}

img:hover {
  transform: scale(1.05);
}
</style>

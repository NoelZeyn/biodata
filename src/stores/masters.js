import {
  FileCode,
  Layout,
  Code,
  Layers,
  Palette,
  GitBranch,
  Globe,
  Cloud,
  Database,
  ShieldCheck,
  Server,
  Cpu,
} from "lucide-vue-next";

export const technologies = [
  { name: "Laravel", icon: FileCode },
  //   { name: 'CodeIgniter', icon: FileCode },
  { name: "PHP", icon: FileCode },
  //   { name: 'Bootstrap', icon: Layout },
  //   { name: 'JavaScript', icon: Code },
  { name: "Vue.js", icon: Layers },
  //   { name: 'JQuery', icon: Palette },
  //   { name: 'Flutter', icon: Code },
  { name: "Jetpack Compose", icon: Code },
  { name: "Next.js", icon: Layers },
  { name: "React", icon: Layers },
  { name: "TypeScript", icon: Code },
  { name: "TailwindCSS", icon: Palette },
  { name: "Git", icon: GitBranch },
  { name: "REST API", icon: Globe },
  //   { name: 'Tripay API', icon: ShieldCheck },
  { name: "Firebase", icon: Cloud },
  { name: "Supabase", icon: Server },
  { name: "MySQL", icon: Database },
  //   { name: 'Cloudflare', icon: Cloud }
];

export const projects = [
  {
    title: "Sistem Informasi Manajemen Pengadaan Material Consumable (SIMAC)",
    description:
      "Sistem Informasi Manajemen Pengadaan Material Consumable (SIMAC) adalah aplikasi berbasis web yang dirancang untuk mengelola pengadaan material consumable di PT. PLN Nusantara Power UP Gresik.",
    technologies: ["Laravel", "MySQL", "PHP", "VueJS"],
    // liveLink: "https://posyandu.capstonesi.online",
  },
  {
    title: "Posyandu Care",
    description:
      "Transformasi digital layanan posyandu dengan penerapan Website dan Mobile",
    technologies: ["Laravel", "MySQL", "PHP", "VueJS", "Jetpack Compose"],
    liveLink: "https://posyandu.koryuz.com",
  },
  {
    title: "•	Sistem Antrian & Monetisasi Streamer MLBB",
    description:
      "Integrasi Saweria & Sociabuzz untuk auto player, wallet, dan antrian (VIP/Public) dengan tracking history berbasis jadwal ",
    technologies: ["Laravel", "MySQL", "PHP", "VueJS", "Hostinger"],
    liveLink: "https://koryuz.com",
  },
  {
    title: "Visualisasi Peta & Data Kependudukan Desa Tingal",
    description:
      "Peta interaktif yang menampilkan detail lokasi dan data spasial Desa Tingal, terintegrasi dengan database kependudukan yang hanya dapat diakses oleh pengguna berwenang.",
    technologies: ["QGIS"],
    liveLink: "https://tingal.vercel.app",
  },
  {
    title: "Documentation Data Science Project",
    description:
      "Analysis and Visualitation earthquake data 2008–2022, Java Region",
    technologies: ["Google Colab Research"],
    liveLink:
      "https://docs.google.com/document/d/1Nnua451BUnxm-RqBGzFDHgI2pwkso_UZZBs3CBCP8rQ/edit?usp=sharing",
  },
  {
    title: "Data Analyst Simple Project",
    description:
      "Akselerasi Profit Margin Monitor 10%: Fokus Pemulihan Kalimantan Timur ",
    technologies: ["Data Studio"],
    liveLink:
      "https://drive.google.com/drive/folders/19eIZZUQKra983NA4K80kbH_UAM21qRIW?usp=sharing",
  },
  {
    title: "Personal Portfolio",
    description: "A modern portfolio showcasing my projects and skills.",
    technologies: ["NextJS", "React", "TypeScript", "TailwindCSS"],
    liveLink: "https://portofolio-mo52.vercel.app",
  },
  {
    title: "Trivia Game",
    description:
      "A Game website with responsive design and leaderboard functionality",
    technologies: ["NextJS", "React", "TypeScript", "TailwindCSS", "supabase"],
    liveLink: "https://trivia-lake-one.vercel.app",
  },
  {
    title: "Discord Bot",
    description:
      "Perancangan Custom Bot Discord yang dirancang untuk mengelola layanan otomatis seperti pemesanan, notifikasi, dan laporan pendapatan menggunakan database MongoDB dalam penerapan game Growtopia.",
    technologies: ["MongoDB", "JavaScript"],
    // liveLink: "https://trivia-lake-one.vercel.app",
  },
];

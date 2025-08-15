const title = document.getElementById("title");
const card = document.getElementById("card");
const containerHome = document.getElementById("container-home");
const containerSoal = document.getElementById("container-soal");
const containerLoading = document.getElementById("container-loading");
const containerHasil = document.getElementById("container-hasil");
const containerEndButton = document.getElementById("container-button-end");
const question = document.getElementById("soal");
const btnMulai = document.getElementById("button-mulai");
const btn1 = document.getElementById("button-1");
const btn2 = document.getElementById("button-2");
const btnDownload = document.getElementById("button-download");
const btnRestart = document.getElementById("button-restart");
const btn3d = document.getElementById("button-3d");
const hasil = document.getElementById("hasil");
const deskripsi = document.getElementById("deskripsi");
const jodoh = document.getElementById("jodoh");
const film = document.getElementById("film");
const bar = document.getElementById("bar");
const loading = document.getElementById("loading");
const frame = document.getElementById("frame");

const questions = [
  {
    question: "Gender kamu?",
    choice1: "Pria",
    choice2: "Wanita",
    code1: "pria",
    code2: "wanita",
  },
  {
    question: "Kamu lebih suka menghabiskan waktu dengan?",
    choice1: "Interaksi sosial",
    choice2: "Menikmati waktu sendiri",
    code1: "sosial",
    code2: "sendiri",
  },
  {
    question: "Kamu itu orangnya?",
    choice1: "Suka Berinovasi",
    choice2: "Suka Menjalankan Rutinitas",
    code1: "inovasi",
    code2: "rutinitas",
  },
  {
    question: "Ketika menjalankan sesuatu kamu biasa?",
    choice1: "Perhatikan detail",
    choice2: "Lebih spotan",
    code1: "detail",
    code2: "spontan",
  },
  {
    question: "Di dalam suatu kegiatan kamu cenderung?",
    choice1: "Senang memimpin",
    choice2: "Bergerak sesuai tugas",
    code1: "memimpin",
    code2: "arahan",
  },
  {
    question: "Kamu lebih memperjuangkan kepentingan?",
    choice1: "kelompok",
    choice2: "umum",
    code1: "kelompok",
    code2: "umum",
  },
];

const dataHasil = {
  "pria-sosial-inovasi-detail-memimpin-kelompok": {
    nomor: 1,
    nama: "Leonardo da Vinci",
    biografi:
      "seorang seniman, ilmuwan, dan penemu Italia, terkenal dengan karya seperti Mona Lisa dan The Last Supper. Dikenal karena kecerdasan dan penemuan-penemuannya di berbagai bidang, da Vinci dianggap salah satu jenius terbesar dalam sejarah manusia.",
    url: "./image/1.jpeg",
    jodoh: "Kreatif - Teliti - Penyabar",
    film: "The Help (2011) - Into the Wild (2007)",
    rarity: "Legendary",
  },
  "pria-sosial-inovasi-detail-memimpin-umum": {
    nomor: 2,
    nama: "Thomas Jefferson",
    biografi:
      "Presiden ketiga Amerika Serikat dan penulis utama Deklarasi Kemerdekaan ini memperluas wilayah AS melalui Pembelian Louisiana. Ia dikenal mendukung pemerintahan terbatas, hak-hak individu, dan meninggalkan warisan besar dalam pembentukan negara.",
    url: "./image/2.jpeg",
    jodoh: "Antusias - Tangguh - Humoris",
    film: "A Silent Voice - Maharaja",
    rarity: "Common",
  },
  "pria-sosial-inovasi-detail-arahan-kelompok": {
    nomor: 3,
    nama: "Nikola Tesla",
    biografi:
      "Seorang ilmuwan, insinyur listrik, fisikawan, dan penemu kelahiran Smiljan, Kroasia (dulu bagian Kekaisaran Austria), terkenal atas kontribusinya dalam pengembangan teknologi arus bolak-balik (AC) dan inovasi yang menjadi dasar berbagai teknologi modern.",
    url: "./image/3.jpeg",
    jodoh: "Visioner - Mandiri - Pengertian",
    film: "Logan (2017) - Interstellar",
    rarity: "Legendary",
  },
  "pria-sosial-inovasi-detail-arahan-umum": {
    nomor: 4,
    nama: "Martin Luther King Jr",
    biografi:
      'Seorang pendeta dan aktivis hak sipil dari Amerika Serikat yang memimpin perjuangan melawan diskriminasi rasial melalui aksi tanpa kekerasan. Ia terkenal dengan pidato "I Have a Dream" yang menyerukan kesetaraan dan keadilan.',
    url: "./image/4.jpeg",
    jodoh: "Religius - Penuh kasih - Loyal",
    film: "Wild Tales - Hacksaw Ridge",
    rarity: "Rare",
  },
  "pria-sosial-inovasi-spontan-memimpin-kelompok": {
    nomor: 5,
    nama: "Napoleon Bonaparte",
    biografi:
      "Kaisar Prancis dan jenderal ulung yang dikenal dengan inovasi strategi perangnya. Ia berjiwa pemimpin kuat, kerap mengambil keputusan spontan, serta mengutamakan kepentingan Prancis dan pasukannya dalam memperluas kekaisaran dan mempertahankan kekuasaan.",
    url: "./image/5.jpeg",
    jodoh: "Tulus - Penyabar - Adaptif",
    film: "The Wild Robot - Klaus (2019)",
    rarity: "Epic",
  },
  "pria-sosial-inovasi-spontan-memimpin-umum": {
    nomor: 6,
    nama: "Genghis Khan",
    biografi:
      "Pendiri Kekaisaran Mongol, kekaisaran terbesar dalam sejarah. Lahir sebagai Temüjin, ia menyatukan suku-suku Mongol, menaklukkan sebagian besar Asia dan Eropa Timur, serta mendorong penyebaran budaya dan perdagangan di Jalur Sutra.",
    url: "./image/6.jpeg",
    jodoh: "Tegas - Ambisius - Religius",
    film: "Prisoners (2013) - Batman Begins",
    rarity: "Epic",
  },
  "pria-sosial-inovasi-spontan-arahan-kelompok": {
    nomor: 7,
    nama: "Benedict Arnold",
    biografi:
      "Jenderal Amerika dalam Perang Revolusi yang awalnya berjasa bagi kemenangan Amerika, namun berpindah pihak ke Inggris karena merasa tidak dihargai. Tindakannya menjadikannya simbol pengkhianatan dalam sejarah Amerika.",
    url: "./image/7.jpeg",
    jodoh: "Waspada - Realistis - Teguh",
    film: "Green Book - Hamilton",
    rarity: "Common",
  },
  "pria-sosial-inovasi-spontan-arahan-umum": {
    nomor: 8,
    nama: "Galileo Galilei",
    biografi:
      'Ilmuwan Italia, "Bapak Astronomi Modern," yang memelopori teleskop untuk mengamati langit. Ia mendukung teori heliosentris Copernicus, yang menempatkannya dalam konflik dengan Gereja. Penemuan pentingnya meliputi bulan Jupiter dan hukum gerak.',
    url: "./image/8.jpeg",
    jodoh: "Kreatif - Dingin - Optimis",
    film: "The Wold of Wall Street - Dangal (2016)",
    rarity: "Epic",
  },
  "pria-sosial-rutinitas-detail-memimpin-kelompok": {
    nomor: 9,
    nama: "King David",
    biografi:
      "Raja kedua Israel yang terkenal sebagai gembala muda yang mengalahkan Goliath, ia menjadi pemimpin yang kuat dan penulis banyak Mazmur. Ia dihormati sebagai figur penting dalam tradisi Yahudi, Kristen, dan Islam.",
    url: "./image/9.jpeg",
    jodoh: "Tanggap - Proaktif - Sederhana",
    film: "Downfall (2004) - 1997",
    rarity: "Common",
  },
  "pria-sosial-rutinitas-detail-memimpin-umum": {
    nomor: 10,
    nama: "Homer",
    biografi:
      "Penyair epik Yunani yang menulis Iliad dan Odyssey. Meskipun sedikit yang diketahui tentang hidupnya, Homer memengaruhi budaya Yunani dan memberikan kontribusi besar pada sastra dan pemikiran umum.",
    url: "./image/10.jpeg",
    jodoh: "Penyayang - Komunikatif - Mandiri",
    film: "A Separation - Incendies",
    rarity: "Common",
  },
  "pria-sosial-rutinitas-detail-arahan-kelompok": {
    nomor: 11,
    nama: "Marcus Vipsanius Agrippa",
    biografi:
      "Seorang jenderal dan politikus Romawi yang hidup pada masa kekuasaan Kaisar Augustus. Ia memainkan peran penting dalam pembangunan infrastruktur, seperti Colosseum dan kompleks Bath di Roma, serta membantu memperkuat dominasi kekaisaran Romawi.",
    url: "./image/11.jpeg",
    jodoh: "Cerdas - Tegas - Berani",
    film: "Eternal Sunshine of the Spotless Mind",
    rarity: "Rare",
  },
  "pria-sosial-rutinitas-detail-arahan-umum": {
    nomor: 12,
    nama: "Imhotep",
    biografi:
      "Arsitek, tabib, dan penasihat Raja Djoser dari Mesir kuno. Ia merancang Piramida Bertingkat di Saqqara, piramida pertama dalam sejarah. Dianggap sebagai dewa kebijaksanaan setelah kematiannya, dikenal sebagai pelopor kedokteran dan penulisan hieroglif.",
    url: "./image/12.jpeg",
    jodoh: "Adil - Pemimpin - Proaktif",
    film: "The Hunt (2012) - Capernaum",
    rarity: "Common",
  },
  "pria-sosial-rutinitas-spontan-memimpin-kelompok": {
    nomor: 13,
    nama: "Attila the Hun",
    biografi:
      'Pemimpin Kekaisaran Hun yang menakutkan di abad ke-5. Ia dikenal karena ekspansi militernya yang luas di Eropa, sering disebut "Cambuk Tuhan." Attila memimpin kampanye melawan Kekaisaran Romawi tetapi gagal menaklukkan Roma. Ia meninggal mendadak pada tahun 453.',
    url: "./image/13.jpeg",
    jodoh: "Tegas - Berani - Loyal",
    film: "The Dark Knight Rises - Joker (2019)",
    rarity: "Rare",
  },
  "pria-sosial-rutinitas-spontan-memimpin-umum": {
    nomor: 14,
    nama: "Pericles",
    biografi:
      "Pemimpin dan orator Athena selama Zaman Keemasan Yunani. Ia memperluas demokrasi, memimpin pembangunan Parthenon, dan memperkuat kekuatan laut Athena. Di bawah kepemimpinannya, Athena menjadi pusat seni, budaya, dan filsafat.",
    url: "./image/14.jpeg",
    jodoh: "Cemburu - Disiplin - Religius",
    film: "12th Fail - Inglourious Basterds",
    rarity: "Common",
  },
  "pria-sosial-rutinitas-spontan-arahan-kelompok": {
    nomor: 15,
    nama: "Zhuge Liang",
    biografi:
      'Ahli strategi militer, negarawan, dan penasihat Shu Han selama Tiga Kerajaan di Tiongkok. Dikenal sebagai "Naga Tidur," ia terkenal karena kecerdasannya dalam taktik perang dan inovasi seperti repeating crossbow.',
    url: "./image/15.jpeg",
    jodoh: "Bijaksana - Teliti - Pemikir",
    film: "The Lives of Others - WALL-E",
    rarity: "Rare",
  },
  "pria-sosial-rutinitas-spontan-arahan-umum": {
    nomor: 16,
    nama: "William Wallace",
    biografi:
      "Pemimpin Skotlandia yang memimpin perlawanan melawan Inggris selama Perang Kemerdekaan Skotlandia. Dikenal karena kemenangan di Pertempuran Stirling Bridge (1297), ia menjadi simbol perjuangan kemerdekaan Skotlandia.",
    url: "./image/16.jpeg",
    jodoh: "Berani - Setia - Pemberani",
    film: "Untouchable - Parasite",
    rarity: "Common",
  },
  "pria-sendiri-inovasi-detail-memimpin-kelompok": {
    nomor: 17,
    nama: "Niccolò Machiavelli",
    biografi:
      "Seorang filsuf dan politisi Italia, terkenal dengan karya The Prince, yang membahas kekuasaan dan strategi politik. Ia menekankan pragmatisme dan realisme dalam pemerintahan. Machiavelli dianggap sebagai bapak ilmu politik modern.",
    url: "./image/17.jpeg",
    jodoh: "Bijaksana - Manipulatif - Egois",
    film: "Oppenheimer - Weapons",
    rarity: "Rare",
  },
  "pria-sendiri-inovasi-detail-memimpin-umum": {
    nomor: 18,
    nama: "Albert Einstein",
    biografi:
      "Fisikawan teoretis asal Jerman, terkenal dengan teori relativitas. Ia memenangkan Hadiah Nobel Fisika 1921 dan mengubah pemahaman kita tentang ruang, waktu, dan gravitasi. Einstein juga aktif dalam politik dan filantropi, mendukung perdamaian dan HAM.",
    url: "./image/18.jpeg",
    jodoh: "Boros - Humoris - Teliti",
    film: "The Theory of Everything - Oppenheimer",
    rarity: "Legendary",
  },
  "pria-sendiri-inovasi-detail-arahan-kelompok": {
    nomor: 19,
    nama: "Charles Darwin",
    biografi:
      "Ilmuwan Inggris yang mengembangkan teori evolusi melalui seleksi alam. Karyanya, On the Origin of Species (1859), mengubah pemahaman tentang kehidupan dan spesies. Darwin dianggap sebagai salah satu tokoh paling berpengaruh dalam ilmu pengetahuan.",
    url: "./image/19.jpeg",
    jodoh: "Penyabar - Terbuka - Penyayang",
    film: "Dune: Part Two - Pefect Days",
    rarity: "Rare",
  },
  "pria-sendiri-inovasi-detail-arahan-umum": {
    nomor: 20,
    nama: "Nikolaus Copernicus",
    biografi:
      "Astronom asal Polandia yang mengemukakan teori heliosentris, yang menyatakan bahwa Bumi mengelilingi Matahari, bukan sebaliknya. Teori ini mengubah pemahaman tentang tata surya dan memulai revolusi ilmiah.",
    url: "./image/20.jpeg",
    jodoh: "Pemikir - Bijaksana - Kreatif",
    film: "Arcadian - The Aeronauts",
    rarity: "Common",
  },
  "pria-sendiri-inovasi-spontan-memimpin-kelompok": {
    nomor: 21,
    nama: "Julius Caesar",
    biografi:
      "Jenderal dan politisi Romawi yang memperluas Kekaisaran Romawi melalui penaklukan besar, termasuk Galia. Ia menjadi diktator seumur hidup, Keberhasilannya mengubah sejarah Romawi dan memicu transisi menuju Kekaisaran.",
    url: "./image/21.jpeg",
    jodoh: "Intelek - Mandiri - Penasaran",
    film: "The Making of a Dictator - Gladiator II",
    rarity: "Common",
  },
  "pria-sendiri-inovasi-spontan-memimpin-umum": {
    nomor: 22,
    nama: "Edgar Allan Poe",
    biografi:
      "Penulis Amerika yang terkenal dengan cerpen horor dan misterinya. Poe dianggap sebagai salah satu pendiri genre detektif modern. Ia memiliki kehidupan yang penuh misteri dan tragis, yang terrefleksi dalam karya-karyanya.",
    url: "./image/22.jpeg",
    jodoh: "Empatik - Setia - Dermawan",
    film: "The Pale Blue Eye - Nightmare Alley",
    rarity: "Common",
  },
  "pria-sendiri-inovasi-spontan-arahan-kelompok": {
    nomor: 23,
    nama: "Socrates",
    biografi:
      "Filsuf Yunani kuno yang hidup sekitar 470–399 SM. Ia dikenal sebagai salah satu tokoh utama dalam sejarah filsafat Barat, dengan metode dialognya yang terkenal, yakni bertanya dan mendiskusikan kebenaran moral dan etika.",
    url: "./image/23.jpeg",
    jodoh: "Cerdas - Terbuka - Sabar",
    film: "12 Angry Men - I'm Thinking of Ending Things",
    rarity: "Epic",
  },
  "pria-sendiri-inovasi-spontan-arahan-umum": {
    nomor: 24,
    nama: "Aristotle",
    biografi:
      "Filsuf dan ilmuwan Yunani kuno yang mendalami berbagai bidang seperti logika, etika, politik, ilmu alam, dan metafisika. Ia adalah murid Plato dan guru Alexander Agung, serta dikenal dengan kontribusinya yang signifikan dalam pemikiran Barat.",
    url: "./image/24.jpeg",
    jodoh: "Rasional - Penuh Pertimbangan - Kritis",
    film: "The Man Who Knew Infinity - The Creator",
    rarity: "Rare",
  },
  "pria-sendiri-rutinitas-detail-memimpin-kelompok": {
    nomor: 25,
    nama: "Isaac Newton",
    biografi:
      "Ilmuwan Inggris terkenal yang mengembangkan teori gravitasi dan hukum gerak. Karyanya Philosophiæ Naturalis Principia Mathematica menjadi dasar fisika modern. Ia dianggap salah satu ilmuwan terbesar dalam sejarah.",
    url: "./image/25.jpeg",
    jodoh: "Adil - Cemburu - Disiplin",
    film: "The Beast - Civil War",
    rarity: "Epic",
  },
  "pria-sendiri-rutinitas-detail-memimpin-umum": {
    nomor: 26,
    nama: "Alexander the Great",
    biografi:
      "Raja Makedonia yang menaklukkan sebagian besar dunia kuno, termasuk Persia, Mesir, dan India. Terkenal karena strategi militernya yang cemerlang, ia membentuk kerajaan terbesar di dunia pada masa itu.",
    url: "./image/26.jpeg",
    jodoh: "Tegas - Ambisius - Religius",
    film: "Alexander: The Making of a God - Reign: The Conqueror",
    rarity: "Common",
  },
  "pria-sendiri-rutinitas-detail-arahan-kelompok": {
    nomor: 27,
    nama: "Plato",
    biografi:
      "Filsuf Yunani kuno, murid Socrates, dan guru Aristoteles. Ia mendirikan Akademi di Athena, sekolah tertua di dunia Barat. Karyanya, termasuk Republik, membahas keadilan, pengetahuan, dan filosofi politik, memengaruhi pemikiran Barat selama berabad-abad.",
    url: "./image/27.jpeg",
    jodoh: "Cerdas - Tulus - Penuh Energi",
    film: "The Matrix Resurrections - The Truman Show",
    rarity: "Common",
  },
  "pria-sendiri-rutinitas-detail-arahan-umum": {
    nomor: 28,
    nama: "Carl Linnaeus",
    biografi:
      'Ilmuwan Swedia yang dikenal sebagai "bapak taksonomi modern." Ia mengembangkan sistem klasifikasi biologis dengan memberi nama Latin pada spesies dan mengorganisasi makhluk hidup dalam hierarki, yang digunakan hingga saat ini.',
    url: "./image/28.jpeg",
    jodoh: "Analitis - Rasional - Sabar",
    film: "Kingdom of the Planet of the Apes - I.S.S",
    rarity: "Rare",
  },
  "pria-sendiri-rutinitas-spontan-memimpin-kelompok": {
    nomor: 29,
    nama: "Leonidas I",
    biografi:
      "Raja Sparta yang terkenal karena memimpin pasukannya dalam Pertempuran Thermopylae melawan pasukan Persia yang jauh lebih besar. Meskipun kalah, keberanian dan pengorbanannya menjadi simbol heroisme, keteguhan, dan perjuangan melawan penindasan dalam sejarah.",
    url: "./image/29.jpeg",
    jodoh: "Tangguh - Emosional - Berani",
    film: "The Woman King - The Last Samurai",
    rarity: "Common",
  },
  "pria-sendiri-rutinitas-spontan-memimpin-umum": {
    nomor: 30,
    nama: "Marcus Aurelius",
    biografi:
      "Kaisar Romawi dan filsuf Stoik. Dikenal dengan karya Meditations, yang berisi pemikiran tentang kebajikan dan pengendalian diri. Memerintah dari 161 hingga 180 M, ia terkenal karena kepemimpinan bijaksana dan kesederhanaannya.",
    url: "./image/30.jpeg",
    jodoh: "Pemikir - Sederhana - Pemalu",
    film: "The Last Samurai - The Outpost",
    rarity: "Common",
  },
  "pria-sendiri-rutinitas-spontan-arahan-kelompok": {
    nomor: 31,
    nama: "Hannibal Barca",
    biografi:
      "Jenderal Carthage yang terkenal karena memimpin pasukan dalam Perang Punisia Kedua melawan Roma. Ia terkenal dengan penyeberangan Alpen yang epik dan strategi militer cerdik. Hannibal dianggap salah satu jenderal terbesar dalam sejarah.",
    url: "./image/31.jpeg",
    jodoh: "Tangguh - Pekerja Keras - Pemikir",
    film: "300: Rise of an Empire - Mindhunter",
    rarity: "Common",
  },
  "pria-sendiri-rutinitas-spontan-arahan-umum": {
    nomor: 32,
    nama: "Confucius",
    biografi:
      "Filsuf dan guru Tiongkok yang mengajarkan etika, moralitas, dan hubungan sosial. Ajarannya, yang tertulis dalam Analects, menekankan kebajikan dan harmoni dalam masyarakat. Konsep-konsepnya mempengaruhi budaya Tiongkok dan dunia.",
    url: "./image/32.jpeg",
    jodoh: "Pemikir - Adil - Idealis",
    film: "The Farewell - A Beautiful Day in the Neigborhood",
    rarity: "Common",
  },
  "wanita-sosial-inovasi-detail-memimpin-kelompok": {
    nomor: 33,
    nama: "Marie Curie",
    biografi:
      "Ilmuwan Polandia-Prancis yang dikenal karena penemuan unsur radioaktif radium dan polonium. Ia adalah wanita pertama yang memenangkan Nobel, meraih Nobel Fisika dan Kimia, dan berkontribusi besar dalam pengembangan radiologi.",
    url: "./image/33.jpeg",
    jodoh: "Penyabar - Pengertian - Peduli",
    film: "Radioactive - Picture a Scientist",
    rarity: "Rare",
  },
  "wanita-sosial-inovasi-detail-memimpin-umum": {
    nomor: 34,
    nama: "Cleopatra VII",
    biografi:
      "Ratu Mesir terakhir dinasti Ptolemaic. Dikenal karena kecerdasan politik dan daya tariknya, ia menjalin hubungan dengan Julius Caesar dan Mark Antony. Setelah kalah di Perang Actium, Cleopatra bunuh diri, menandai akhir kerajaan Mesir kuno.",
    url: "./image/34.jpeg",
    jodoh: "Bijaksana - Loyal - Religius",
    film: "The Favourite - The Trial of the Chicago 7",
    rarity: "Epic",
  },
  "wanita-sosial-inovasi-detail-arahan-kelompok": {
    nomor: 35,
    nama: "Queen Elizabeth I",
    biografi:
      'Ratu Inggris yang memerintah dari 1558 hingga 1603. Terkenal karena memperkuat Inggris dalam menanggulangi ancaman Spanyol, dan mendukung kebangkitan seni, termasuk karya William Shakespeare."',
    url: "./image/35.jpeg",
    jodoh: "Bijaksana - Teguh - Loyal",
    film: "The Favourite - The Trial of the Chicago 7",
    rarity: "Rare",
  },
  "wanita-sosial-inovasi-detail-arahan-umum": {
    nomor: 36,
    nama: "Hypatia dari Alexandria",
    biografi:
      "Filsuf, matematikawan, dan astronom terkenal di Mesir Kuno. Ia mengajar di Alexandria dan dikenal karena pengetahuan mendalamnya tentang ilmu pengetahuan. Hypatia menjadi simbol kecerdasan wanita.",
    url: "./image/36.jpeg",
    jodoh: "Bijaksana - Tenang - Adaptif",
    film: "The Two Popes - Mary Queen of Scots",
    rarity: "Common",
  },
  "wanita-sosial-inovasi-spontan-memimpin-kelompok": {
    nomor: 37,
    nama: "Joan of Arc",
    biografi:
      "Pahlawan nasional Prancis yang memimpin pasukan dalam Perang Seratus Tahun. Diyakini mendengar suara ilahi, ia membantu Raja Charles VII merebut takhta. Diakui sebagai santo oleh Gereja Katolik pada 1920.",
    url: "./image/37.jpeg",
    jodoh: "Setia - Tulus - Tangguh",
    film: "Mulan - Wonder Woman",
    rarity: "Common",
  },
  "wanita-sosial-inovasi-spontan-memimpin-umum": {
    nomor: 38,
    nama: "Catherine the Great",
    biografi:
      "Kaisar Rusia yang memerintah dari 1762 hingga kematiannya. Lahir sebagai Putri Sophie dari Jerman, ia menikah dengan Tsar Peter III, lalu merebut tahta. Catherine dikenal karena reformasi dan dukungannya terhadap seni serta pendidikan di Rusia.",
    url: "./image/38.jpeg",
    jodoh: "Tegas - Loyal - Kreatif",
    film: "The Iron Lady - Victoria",
    rarity: "Common",
  },
  "wanita-sosial-inovasi-spontan-arahan-kelompok": {
    nomor: 39,
    nama: "Queen Victoria",
    biografi:
      "Ratu Inggris dari 1837 hingga 1901, memerintah selama era Victoria yang menyaksikan kemajuan industri dan kolonialisasi. Ia menikah dengan Pangeran Albert dan dikenal karena ketegasan serta pengaruhnya dalam membentuk monarki modern Inggris.",
    url: "./image/39.jpeg",
    jodoh: "Setia - Tangguh - Sabar",
    film: "Finding Your Feet - The Leisure Seeker",
    rarity: "Common",
  },
  "wanita-sosial-inovasi-spontan-arahan-umum": {
    nomor: 40,
    nama: "Florence Nightingale",
    biografi:
      'Pelopor keperawatan modern asal Inggris. Dikenal karena upayanya selama Perang Krimea, ia mendirikan sekolah keperawatan pertama yang menyelamatkan banyak nyawa. Nightingale dihormati sebagai "Ibu Keperawatan".',
    url: "./image/40.jpeg",
    jodoh: "Ramah - Sabar - Setia",
    film: "The Pursuit of Happyness - The Martian",
    rarity: "Rare",
  },
  "wanita-sosial-rutinitas-detail-memimpin-kelompok": {
    nomor: 41,
    nama: "Rosalind Franklin",
    biografi:
      "Ahli kimia dan kristalografi Inggris yang berperan penting dalam penemuan struktur DNA. Foto X-ray yang dihasilkannya memberikan bukti kunci bagi pemahaman heliks ganda DNA.",
    url: "./image/41.jpeg",
    jodoh: "Ramah - Adil - Loyal",
    film: "Ex Machina  - The Imitation Game",
    rarity: "Common",
  },
  "wanita-sosial-rutinitas-detail-memimpin-umum": {
    nomor: 42,
    nama: "Jane Austen",
    biografi:
      "Novelis Inggris yang terkenal dengan karya seperti Pride and Prejudice dan Sense and Sensibility. Lahir di Hampshire, ia menulis tentang cinta dan kehidupan sosial dengan humor dan kritik tajam. Karya-karyanya kini dianggap klasik sastra dunia.",
    url: "./image/42.jpeg",
    jodoh: "Cerdas - Empati - Kreatif",
    film: "Little Women - Brooklyn",
    rarity: "Common",
  },
  "wanita-sosial-rutinitas-detail-arahan-kelompok": {
    nomor: 43,
    nama: "Lise Meitner",
    biografi:
      "Fisikawan Austria-Swedia yang berkontribusi pada penemuan fisi nuklir. Ia bekerja sama dengan Otto Hahn, tetapi tidak menerima Nobel bersamanya. Meitner dihormati dengan elemen meitnerium yang dinamai untuknya.",
    url: "./image/43.jpeg",
    jodoh: "Kritis - Sederhana - Disiplin",
    film: "Gravity - The Social Network",
    rarity: "Common",
  },
  "wanita-sosial-rutinitas-detail-arahan-umum": {
    nomor: 44,
    nama: "Raden Adjeng Kartini",
    biografi:
      "Tokoh emansipasi perempuan Indonesia. Lahir di Jepara, ia memperjuangkan hak pendidikan dan kesetaraan bagi perempuan melalui surat-suratnya yang kemudian dibukukan sebagai Habis Gelap Terbitlah Terang.",
    url: "./image/44.jpeg",
    jodoh: "Mandiri - Disiplin - Lembut",
    film: "The Iron Lady - Suffragette",
    rarity: "Legendary",
  },
  "wanita-sosial-rutinitas-spontan-memimpin-kelompok": {
    nomor: 45,
    nama: "Boudica",
    biografi:
      "Ratu suku Iceni di Inggris kuno yang memimpin pemberontakan besar melawan Kekaisaran Romawi. Dikenal karena keberaniannya. Boudica menjadi simbol perlawanan dan kebebasan di Britania Raya.",
    url: "./image/45.jpeg",
    jodoh: "Tegas - Mandiri - Berani",
    film: "Alita: Battle Angel - Brave",
    rarity: "Common",
  },
  "wanita-sosial-rutinitas-spontan-memimpin-umum": {
    nomor: 46,
    nama: "Wu Zetian",
    biografi:
      "Satu-satunya kaisar perempuan dalam sejarah Tiongkok, memerintah Dinasti Tang. Cerdas dan ambisius, ia memperluas kekuasaan kerajaan, memperkuat birokrasi, dan mendukung budaya serta inovasi.",
    url: "./image/46.jpeg",
    jodoh: "Kreatif - Disiplin - Teguh",
    film: "Lady Macbeth - Zero Dark Thirty",
    rarity: "Epic",
  },
  "wanita-sosial-rutinitas-spontan-arahan-kelompok": {
    nomor: 47,
    nama: "Hildegard von Bingen",
    biografi:
      "Seorang biarawati Jerman, teolog dan ilmuwan. Ia dikenal sebagai penulis teks medis, dan mistikus. Hildegard memimpin Biara Rupertsberg dam menjadi tokoh perempuan paling berpengaruh di Abad Pertengahan.",
    url: "./image/47.jpeg",
    jodoh: "Peduli - Religius - Sabar",
    film: "The Book Thief - Arrival",
    rarity: "Rare",
  },
  "wanita-sosial-rutinitas-spontan-arahan-umum": {
    nomor: 48,
    nama: "Ada Lovelace",
    biografi:
      "Matematikawan Inggris yang dikenal sebagai programmer komputer pertama di dunia. Ia bekerja dengan Charles Babbage pada mesin analitik dan menciptakan algoritma untuk mesin tersebut. Ia menjadi salah satu tokoh pengembangan komputasi modern.",
    url: "./image/48.jpeg",
    jodoh: "Tangguh - Logis - Inovatif",
    film: "Her - A Beautiful Mind",
    rarity: "Epic",
  },
  "wanita-sendiri-inovasi-detail-memimpin-kelompok": {
    nomor: 49,
    nama: "Cecilia Payne-Gaposchkin",
    biografi:
      "Astronom asal Inggris yang dikenal karena penemuannya mengenai komposisi bintang. Ia menunjukkan bahwa bintang sebagian besar terdiri dari hidrogen dan helium, sebuah teori yang sangat penting dalam astronomi modern.",
    url: "./image/49.jpeg",
    jodoh: "Tegas - Inovatif - Analitis",
    film: "The Space Between Us - Ad Astra",
    rarity: "Common",
  },
  "wanita-sendiri-inovasi-detail-memimpin-umum": {
    nomor: 50,
    nama: "Sappho",
    biografi:
      "penyair Yunani kuno asal Lesbos, terkenal dengan puisi-puisi liris yang menggambarkan cinta, kecantikan, dan emosi manusia. Berkat karyanya menjadikannya salah satu tokoh besar dalam sastra dunia klasik.",
    url: "./image/50.jpeg",
    jodoh: "Sabar - Tegas - Pemaaf",
    film: "Ammonite - Lady Bird",
    rarity: "Common",
  },
  "wanita-sendiri-inovasi-detail-arahan-kelompok": {
    nomor: 51,
    nama: "Aspasia",
    biografi:
      "Seorang intelektual dan orator dari Miletos, Yunani Kuno. Ia dikenal karena kecerdasannya, pengaruh politiknya, dan kontribusinya dalam budaya Athena, meski menghadapi kritik karena perannya sebagai wanita dalam ranah publik.",
    url: "./image/51.jpeg",
    jodoh: "Sederhana - Tulus - Sabar",
    film: "Les Miserables - The Post",
    rarity: "Common",
  },
  "wanita-sendiri-inovasi-detail-arahan-umum": {
    nomor: 52,
    nama: "Mary Cassatt",
    biografi:
      "Seorang pelukis dan pembuat grafis asal Amerika yang dikenal karena karyanya tentang kehidupan wanita, terutama hubungan ibu dan anak. Sebagai anggota kelompok impresionis di Prancis, ia menjadi salah satu seniman wanita terkemuka abad ke-19.",
    url: "./image/52.jpeg",
    jodoh: "Empati - Lembut - Tulus",
    film: "Potrait of a Lady on Fire - The Danish Girl",
    rarity: "Rare",
  },
  "wanita-sendiri-inovasi-spontan-memimpin-kelompok": {
    nomor: 53,
    nama: "Rabi'ah al-Adawiyah",
    biografi:
      "Sufi wanita terkenal dari Basra, Irak. Ia dikenal karena ajarannya tentang cinta tulus kepada Allah, menekankan ibadah berdasarkan cinta, bukan takut. Hidupnya penuh kesederhanaan dan spiritualitas, menjadikannya ikon tasawuf dalam Islam.",
    url: "./image/53.jpeg",
    jodoh: "Teguh - Peduli - Penyabar",
    film: "The Secret Life of Walter Mitty - The Intouchables",
    rarity: "Legendary",
  },
  "wanita-sendiri-inovasi-spontan-memimpin-umum": {
    nomor: 54,
    nama: "Frida Kahlo",
    biografi:
      "Pelukis Meksiko terkenal karena potret dirinya yang menggambarkan rasa sakit dan identitasnya. Mengalami kecelakaan parah pada usia 18 tahun, ia menyalurkan emosinya melalui seni. Kahlo menjadi ikon feminisme dan budaya Meksiko.",
    url: "./image/54.jpeg",
    jodoh: "Sensitif - Tulus - Sederhana",
    film: "An Education - The Broken Circle Breakdown",
    rarity: "Common",
  },
  "wanita-sendiri-inovasi-spontan-arahan-kelompok": {
    nomor: 55,
    nama: "Virginia Woolf",
    biografi:
      "Penulis dan feminis Inggris terkenal, pelopor aliran stream of consciousness. Karya utamanya meliputi Mrs. Dalloway dan To the Lighthouse. Woolf juga mendirikan Hogarth Press. Ia memperjuangkan hak perempuan dalam esainya A Room of One’s Own.",
    url: "./image/55.jpeg",
    jodoh: "Lugas - Cerdas - Sensitif",
    film: "A Ghost Story - Eternal Sunshine of the Spotless Mind",
    rarity: "Common",
  },
  "wanita-sendiri-inovasi-spontan-arahan-umum": {
    nomor: 56,
    nama: "Agatha Christie",
    biografi:
      'Penulis Inggris terkenal sebagai "Ratu Kejahatan" Ia menciptakan detektif ikonik seperti Hercule Poirot dan Miss Marple, dengan karya terkenal seperti Murder on the Orient Express. Christie adalah salah satu penulis terlaris sepanjang masa.',
    url: "./image/56.jpeg",
    jodoh: "Percaya - Lugas - Kritis",
    film: "Knives Out - Sherlock Holmes",
    rarity: "Common",
  },
  "wanita-sendiri-rutinitas-detail-memimpin-kelompok": {
    nomor: 57,
    nama: "Clara Schumann",
    biografi:
      "Pianis, komposer, dan guru musik Jerman terkenal. Ia memengaruhi musik romantik lewat karya dan penampilannya. Sebagai salah satu pianis terbaik zamannya, sambil menciptakan komposisi yang dihargai hingga kini.",
    url: "./image/57.jpeg",
    jodoh: "Setia - Sabar - Empati",
    film: "La La Land - Whiplash",
    rarity: "Rare",
  },
  "wanita-sendiri-rutinitas-detail-memimpin-umum": {
    nomor: 58,
    nama: "Artemisia Gentileschi",
    biografi:
      "Pelukis Barok Italia terkenal, dikenal karena karyanya yang dramatis dan penuh emosi, sering menggambarkan tokoh perempuan kuat. Sebagai salah satu pelukis wanita pertama yang diakui di era itu yang kebanyakan didominasi pria.",
    url: "./image/58.jpeg",
    jodoh: "Sensitif - Lugas - Berani",
    film: "Promising Young Woman - The White Tiger",
    rarity: "Common",
  },
  "wanita-sendiri-rutinitas-detail-arahan-kelompok": {
    nomor: 59,
    nama: "Manuela Sáenz",
    biografi:
      "Seorang pejuang kemerdekaan Amerika Selatan. Lahir di Ekuador, ia mendukung perjuangan melawan penjajahan Spanyol, menjadi tokoh penting dalam revolusi. Ia berperan dalam penyelamatkan Bolívar dari upaya pembunuhan.",
    url: "./image/59.jpeg",
    jodoh: "Ambisius - Sabar - Percaya",
    film: "The Hunger Games - Kill Bill: Vol. 1",
    rarity: "Rare",
  },
  "wanita-sendiri-rutinitas-detail-arahan-umum": {
    nomor: 60,
    nama: "Ratu Nefertiti",
    biografi:
      "Dikenal karena kecantikannya, Nefertiti berperan penting dalam agama dan politik Mesir kuno, mendukung perubahan agama monoteistik yang dipimpin Akhenaten. Ia mungkin pernah memerintah sebagai firaun setelah kematian suaminya.",
    url: "./image/60.jpeg",
    jodoh: "Sabar - Sensitif - Empati",
    film: "Queen of Katwe - Coco",
    rarity: "Common",
  },
  "wanita-sendiri-rutinitas-spontan-memimpin-kelompok": {
    nomor: 61,
    nama: "Nellie Bly",
    biografi:
      "Jurnalis investigatif Amerika yang terkenal karena menyamar untuk mengungkap kondisi rumah sakit jiwa dalam Ten Days in a Mad-House. Ia menjadi pelopor jurnalisme investigatif dan hak-hak perempuan dalam bidang media.",
    url: "./image/61.jpeg",
    jodoh: "Optimis - Mandiri - Tanggap",
    film: "12 Years a Slave - Dark Waters",
    rarity: "Common",
  },
  "wanita-sendiri-rutinitas-spontan-memimpin-umum": {
    nomor: 62,
    nama: "Murasaki Shikibu",
    biografi:
      "Penulis dan pujangga Jepang abad ke-11, terkenal sebagai penulis The Tale of Genji, novel pertama yang dianggap sebagai karya sastra panjang terbesar. Ia adalah seorang wanita istana di Heian dan berperan dalam perkembangan sastra Jepang klasik.",
    url: "./image/62.jpeg",
    jodoh: "Sopan - Empati - Inovatif",
    film: "The Queen's Gambit - Potrait of a Lady",
    rarity: "Common",
  },
  "wanita-sendiri-rutinitas-spontan-arahan-kelompok": {
    nomor: 63,
    nama: "Tomoe Gozen",
    biografi:
      "adalah seorang samurai wanita Jepang terkenal pada abad ke-12, yang berjuang dalam Perang Genpei. Dikenal karena keahlian dalam bertempur, keberanian, dan kecantikan, ia menjadi simbol kekuatan wanita dalam sejarah Jepang.",
    url: "./image/63.jpeg",
    jodoh: "Percaya - Serius - Pintar",
    film: "Pacific Rim - A Quiet Place",
    rarity: "Rare",
  },
  "wanita-sendiri-rutinitas-spontan-arahan-umum": {
    nomor: 64,
    nama: "Rumi",
    biografi:
      "Penyair dan mistikus Persia terkenal. Karyanya, terutama Masnavi dan spiritualitas. Sebagai pendiri aliran Mevlevi (Sufi Whirling Dervishes), Rumi menginspirasi banyak orang dengan ajaran cinta universal dan kedalaman spiritualnya.",
    url: "./image/64.jpeg",
    jodoh: "Tulus - Empati - Sabar",
    film: "Eat Pray Love - Cloud Atlas",
    rarity: "Common",
  },
};

let score = "";
let nomor = 0;

question.innerHTML = questions[nomor].question;
btn1.innerHTML = questions[nomor].choice1;
btn2.innerHTML = questions[nomor].choice2;

// containerHome.style.display = "none";
// containerSoal.style.display = "none";
// containerLoading.style.display = "none";
// containerHasil.style.display = "flex";
// frame.src = "./image/f4.png";
// frame.style.display = "block";
// hasil.innerHTML = dataHasil[score].nama;
// deskripsi.innerHTML = dataHasil[score].biografi;
// jodoh.innerHTML = dataHasil[score].jodoh;

card.style.backgroundImage = "url('./image/home.webp')";
// card.style.backgroundImage = `url(${dataHasil[score].url})`;
// card.style.backgroundPosition = "center -5px";
// card.style.backgroundSize = "90%";

btnMulai.addEventListener("click", () => {
  title.innerHTML = "Pilih yang sesuai dengan diri kamu";
  containerSoal.style.display = "flex";
  containerHome.style.display = "none";
  card.style.backgroundImage = "url('./image/whiteboard6.webp')";
});

btn1.addEventListener("click", () => {
  score += `${
    nomor == 0 ? `${questions[nomor].code1}` : `-${questions[nomor].code1}`
  }`;

  if (nomor < questions.length - 1) {
    nomor++;
    question.innerHTML = questions[nomor].question;
    btn1.innerHTML = questions[nomor].choice1;
    btn2.innerHTML = questions[nomor].choice2;
    bar.style.width = `${((nomor + 1) * 100) / questions.length}%`;
  } else {
    title.innerHTML = "Tunggu sebentar";
    containerSoal.style.display = "none";
    containerLoading.style.display = "block";

    hasil.innerHTML = dataHasil[score].nama;
    deskripsi.innerHTML = dataHasil[score].biografi;
    jodoh.innerHTML = dataHasil[score].jodoh;
    if (dataHasil[score].rarity == "Legendary") {
      hasil.style.color = "#fced63";
      frame.src = "./image/f4.png";
    } else if (dataHasil[score].rarity == "Epic") {
      hasil.style.color = "#f1bf42";
      frame.src = "./image/f3.png";
    } else if (dataHasil[score].rarity == "Rare") {
      hasil.style.color = "#90b6c8";
      frame.src = "./image/f2.png";
    } else {
      hasil.style.color = "#c07f4e";
      frame.src = "./image/f1.png";
    }
    // film.innerHTML = dataHasil[score].film;
    setTimeout(() => {
      loading.style.width = `100%`;
      setTimeout(() => {
        title.innerHTML = "Kamu mirip dengan";
        frame.style.display = "block";
        card.style.backgroundPosition = "center -5px";
        card.style.backgroundSize = "90%";
        containerLoading.style.display = "none";
        containerHasil.style.display = "flex";
        card.style.backgroundImage = `url(${dataHasil[score].url})`;
        btnRestart.classList.remove("hidden");
        btnDownload.classList.remove("hidden");
      }, 3000);
    }, 100);
  }
});

btn2.addEventListener("click", () => {
  score += `${
    nomor == 0 ? `${questions[nomor].code2}` : `-${questions[nomor].code2}`
  }`;

  if (nomor < questions.length - 1) {
    nomor++;
    question.innerHTML = questions[nomor].question;
    btn1.innerHTML = questions[nomor].choice1;
    btn2.innerHTML = questions[nomor].choice2;
    bar.style.width = `${((nomor + 1) * 100) / questions.length}%`;
  } else {
    title.innerHTML = "Tunggu sebentar";
    containerSoal.style.display = "none";
    containerLoading.style.display = "block";

    hasil.innerHTML = dataHasil[score].nama;
    deskripsi.innerHTML = dataHasil[score].biografi;
    jodoh.innerHTML = dataHasil[score].jodoh;
    if (dataHasil[score].rarity == "Legendary") {
      hasil.style.color = "#fced63";
      frame.src = "./image/f4.png";
    } else if (dataHasil[score].rarity == "Epic") {
      hasil.style.color = "#f1bf42";
      frame.src = "./image/f3.png";
    } else if (dataHasil[score].rarity == "Rare") {
      hasil.style.color = "#90b6c8";
      frame.src = "./image/f2.png";
    } else {
      hasil.style.color = "#c07f4e";
      frame.src = "./image/f1.png";
    }
    // film.innerHTML = dataHasil[score].film;
    setTimeout(() => {
      loading.style.width = `100%`;
      setTimeout(() => {
        title.innerHTML = "Kamu mirip dengan";
        frame.style.display = "block";
        card.style.backgroundPosition = "center -5px";
        card.style.backgroundSize = "90%";
        containerLoading.style.display = "none";
        containerHasil.style.display = "flex";
        card.style.backgroundImage = `url(${dataHasil[score].url})`;
        btnRestart.classList.remove("hidden");
        btnDownload.classList.remove("hidden");
      }, 3000);
    }, 100);
  }
});

// Rotasi kartu ==========================

card.addEventListener("mousemove", (e) => {
  if (toggle3d) {
    const x = e.pageX - card.offsetLeft - card.offsetWidth / 2;
    const y = e.pageY - card.offsetTop - card.offsetHeight / 2;
    card.style.transform = `perspective(1000px) rotateX(${
      (y / 10) * -1 * 2
    }deg) rotateY(${(x / 10) * 3}deg)`;
  }
});

card.addEventListener("mouseleave", () => {
  if (toggle3d) {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  }
});

card.addEventListener("touchmove", (e) => {
  if (toggle3d) {
    const touch = e.touches[0];
    const x = touch.pageX - card.offsetLeft - card.offsetWidth / 2;
    const y = touch.pageY - card.offsetTop - card.offsetHeight / 2;
    card.style.transform = `perspective(1000px) rotateX(${
      (y / 10) * -1 * 2
    }deg) rotateY(${(x / 10) * 3}deg)`;
  }
});

card.addEventListener("touchend", () => {
  if (toggle3d) {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  }
});

card.addEventListener("click", () => {
  card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});

// Button download restart kartu =========================

let toggle3d = false;

document.getElementById("button-3d").addEventListener("click", () => {
  toggle3d = !toggle3d;

  if (toggle3d) {
    btn3d.classList.remove("bg-white", "text-black");
    btn3d.classList.add("bg-blue-600", "text-white");
  } else {
    btn3d.classList.remove("bg-blue-600", "text-white");
    btn3d.classList.add("bg-white", "text-black");
  }
});

document.getElementById("button-download").addEventListener("click", () => {
  document.fonts.ready.then(() => {
    html2canvas(document.getElementById("card"), {
      scale: 2,
      useCORS: true,
      backgroundColor: null,
      onclone: (doc) => {
        const hasil = doc.getElementById("container-hasil");
        hasil.style.transform = "translateY(-8px)";
      },
    }).then((canvas) => {
      const link = document.createElement("a");
      link.download = "card.png";
      link.href = canvas.toDataURL("image/png");
      link.click();
    });
  });
});

document.getElementById("button-restart").addEventListener("click", () => {
  location.reload();
});

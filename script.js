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

const randomNumber = Math.random();
const questions = [
  {
    question:
      randomNumber < 0.3
        ? "Kamu lebih suka menghabiskan waktu dengan?"
        : randomNumber > 0.3 && randomNumber < 0.6
        ? "Bagaimana cara favoritmu mengisi waktu luang?"
        : "Saat butuh energi baru, kamu lebih memilih?",
    choice1:
      randomNumber < 0.3
        ? "Interaksi sosial"
        : randomNumber > 0.3 && randomNumber < 0.6
        ? "Bersama teman atau komunitas"
        : "Berkumpul dan berbincang dengan orang lain",
    choice2:
      randomNumber < 0.3
        ? "Menikmati waktu sendiri"
        : randomNumber > 0.3 && randomNumber < 0.6
        ? "Menyendiri dengan hobi pribadi"
        : "Beristirahat atau melakukan aktivitas sendirian",
    code1: "sosial",
    code2: "sendiri",
  },
  {
    question:
      randomNumber < 0.3
        ? "Kamu itu orangnya?"
        : randomNumber > 0.3 && randomNumber < 0.6
        ? "Dalam bekerja, kamu lebih condong ke?"
        : "Kalau menghadapi tantangan, kamu biasanya?",
    choice1:
      randomNumber < 0.3
        ? "Suka Berinovasi"
        : randomNumber > 0.3 && randomNumber < 0.6
        ? "Mencari ide baru dan berkreasi"
        : "Berpikir kreatif untuk menemukan solusi",
    choice2:
      randomNumber < 0.3
        ? "Suka Menjalankan Rutinitas"
        : randomNumber > 0.3 && randomNumber < 0.6
        ? "Mengikuti pola yang sudah ada"
        : "Mengandalkan kebiasaan yang teratur",
    code1: "inovasi",
    code2: "rutinitas",
  },
  {
    question:
      randomNumber < 0.3
        ? "Ketika menjalankan sesuatu kamu biasa?"
        : randomNumber > 0.3 && randomNumber < 0.6
        ? "Kalau dapat tugas baru, kamu lebih?"
        : "Saat mengambil keputusan, kamu cenderung?",
    choice1:
      randomNumber < 0.3
        ? "Perhatikan detail"
        : randomNumber > 0.3 && randomNumber < 0.6
        ? "Menyusun langkah dengan teliti"
        : "Menganalisis dengan hati-hati",
    choice2:
      randomNumber < 0.3
        ? "Lebih spotan"
        : randomNumber > 0.3 && randomNumber < 0.6
        ? "Langsung bertindak tanpa banyak rencana"
        : "Mengikuti intuisi dan perasaan saat itu",
    code1: "detail",
    code2: "spontan",
  },
  {
    question:
      randomNumber < 0.3
        ? "Di dalam suatu kegiatan kamu cenderung?"
        : randomNumber > 0.3 && randomNumber < 0.6
        ? "Kalau ada proyek bersama, kamu biasanya?"
        : "Saat bekerja dalam tim, kamu lebih suka?",
    choice1:
      randomNumber < 0.3
        ? "Senang memimpin"
        : randomNumber > 0.3 && randomNumber < 0.6
        ? "Mengatur arah dan memberi arahan"
        : "Mengambil peran sebagai penggerak utama",
    choice2:
      randomNumber < 0.3
        ? "Bergerak sesuai tugas"
        : randomNumber > 0.3 && randomNumber < 0.6
        ? "Menjalankan peran sesuai instruksi"
        : "Fokus menyelesaikan bagian yang diberikan",
    code1: "memimpin",
    code2: "arahan",
  },
  {
    question:
      randomNumber < 0.3
        ? "Kamu lebih memperjuangkan kepentingan?"
        : randomNumber > 0.3 && randomNumber < 0.6
        ? "Dalam membuat keputusan, kamu lebih mengutamakan?"
        : "Saat menghadapi konflik, kamu biasanya berpihak pada?",
    choice1:
      randomNumber < 0.3
        ? "Individu"
        : randomNumber > 0.3 && randomNumber < 0.6
        ? "Hak dan kebutuhan pribadi"
        : "Pendapat atau tujuan diri sendiri",
    choice2:
      randomNumber < 0.3
        ? "Kelompok"
        : randomNumber > 0.3 && randomNumber < 0.6
        ? "Kepentingan bersama"
        : "Kebaikan untuk banyak orang",
    code1: "kelompok",
    code2: "umum",
  },
  {
    question:
      randomNumber < 0.3
        ? "Gender kamu?"
        : randomNumber > 0.3 && randomNumber < 0.6
        ? "Kamu mengidentifikasi diri sebagai?"
        : "Jenis kelamin kamu adalah?",
    choice1:
      randomNumber < 0.3
        ? "Pria"
        : randomNumber > 0.3 && randomNumber < 0.6
        ? "Laki-laki"
        : "Pria",
    choice2:
      randomNumber < 0.3
        ? "Wanita"
        : randomNumber > 0.3 && randomNumber < 0.6
        ? "Perempuan"
        : "Wanita",
    code1: "pria",
    code2: "wanita",
  },
];

const dataHasil = {
  "sosial-inovasi-detail-memimpin-kelompok-pria": {
    nomor: 1,
    nama: "Leonardo da Vinci",
    biografi:
      "seorang seniman, ilmuwan, dan penemu Italia, terkenal dengan karya seperti Mona Lisa dan The Last Supper. Dikenal karena kecerdasan dan penemuan-penemuannya di berbagai bidang, da Vinci dianggap salah satu jenius terbesar dalam sejarah manusia.",
    url: "./image/1.jpeg",
    jodoh: "Kreatif - Teliti - Penyabar",
    film: "The Help (2011) - Into the Wild (2007)",
    caption: `<div>
  <p><strong>Keren banget!</strong> Kamu visioner yang doyan eksperimen ✨ 
  nggak takut nyoba hal baru dan selalu punya sudut pandang unik.</p>
  <p>🍝 <strong>Makanan Favorit:</strong> Hidangan simpel tapi elegan—kayak pasta homemade atau roti artisan—biar ide tetap mengalir.</p>
</div>`,
    rarity: "Legendary",
  },
  "sosial-inovasi-detail-memimpin-umum-pria": {
    nomor: 2,
    nama: "Thomas Jefferson",
    biografi:
      "Presiden ketiga Amerika Serikat dan penulis utama Deklarasi Kemerdekaan ini memperluas wilayah AS melalui Pembelian Louisiana. Ia dikenal mendukung pemerintahan terbatas, hak-hak individu, dan meninggalkan warisan besar dalam pembentukan negara.",
    url: "./image/2.jpeg",
    jodoh: "Antusias - Tangguh - Humoris",
    film: "A Silent Voice - Maharaja",
    caption: `<div>
  <p><strong>Mantap!</strong> Kamu punya jiwa visioner yang selalu mikirin masa depan ✨ 
  penuh ide besar, suka diskusi panjang soal kehidupan, dan percaya kalau ilmu bisa mengubah dunia.</p>
  <p>🎬 <strong>Rekomendasi Film:</strong> <em>National Treasure</em> — kisah penuh misteri sejarah yang pasti bikin penasaran.</p>
</div>`,
    rarity: "Common",
  },
  "sosial-inovasi-detail-arahan-kelompok-pria": {
    nomor: 3,
    nama: "Nikola Tesla",
    biografi:
      "Seorang ilmuwan, insinyur listrik, fisikawan, dan penemu kelahiran Smiljan, Kroasia (dulu bagian Kekaisaran Austria), terkenal atas kontribusinya dalam pengembangan teknologi arus bolak-balik (AC) dan inovasi yang menjadi dasar berbagai teknologi modern.",
    url: "./image/3.jpeg",
    jodoh: "Visioner - Mandiri - Pengertian",
    film: "Logan (2017) - Interstellar",
    caption: `<div>
  <p><strong>Wow!</strong> Kamu tipe visioner yang imajinasinya selalu melesat jauh ke depan ⚡️ 
  penuh ide unik, sering dianggap "nyeleneh" sama orang lain, tapi justru itulah yang bikin kamu beda.</p>
  <p>⚡ <strong>Fun Fact:</strong> Sosok ini dikenal sebagai "penemu yang mendahului zamannya".</p>
</div>`,
    rarity: "Legendary",
  },
  "sosial-inovasi-detail-arahan-umum-pria": {
    nomor: 4,
    nama: "Martin Luther King Jr",
    biografi:
      'Seorang pendeta dan aktivis hak sipil dari Amerika Serikat yang memimpin perjuangan melawan diskriminasi rasial melalui aksi tanpa kekerasan. Ia terkenal dengan pidato "I Have a Dream" yang menyerukan kesetaraan dan keadilan.',
    url: "./image/4.jpeg",
    jodoh: "Religius - Penuh kasih - Loyal",
    film: "Wild Tales - Hacksaw Ridge",
    caption: `<div>
  <p><strong>Inspiratif banget!</strong> Kamu punya hati besar dan semangat juang yang kuat ✊ 
  selalu percaya pada keadilan, nggak takut bersuara, dan mampu bikin orang lain tergerak oleh kata-katamu.</p>
  <p>🎬 <strong>Rekomendasi Film:</strong> <em>Selma</em> — kisah perjuangan damai yang penuh keberanian dan harapan.</p>
</div>`,
    rarity: "Rare",
  },
  "sosial-inovasi-spontan-memimpin-kelompok-pria": {
    nomor: 5,
    nama: "Napoleon Bonaparte",
    biografi:
      "Kaisar Prancis dan jenderal ulung yang dikenal dengan inovasi strategi perangnya. Ia berjiwa pemimpin kuat, kerap mengambil keputusan spontan, serta mengutamakan kepentingan Prancis dan pasukannya dalam memperluas kekaisaran dan mempertahankan kekuasaan.",
    url: "./image/5.jpeg",
    jodoh: "Tulus - Penyabar - Adaptif",
    film: "The Wild Robot - Klaus (2019)",
    caption: `<div>
  <p><strong>Berani banget!</strong> Kamu punya jiwa pemimpin yang kuat ⚔️ 
  penuh strategi, ambisi tinggi, dan selalu siap maju paling depan buat ngejar tujuanmu.</p>
  <p>📖 <strong>Fun Fact:</strong> Sosok ini dikenal jago mengatur strategi perang hingga memenangkan banyak pertempuran, tapi juga seorang reformis yang merombak sistem hukum.</p>
</div>`,
    rarity: "Epic",
  },
  "sosial-inovasi-spontan-memimpin-umum-pria": {
    nomor: 6,
    nama: "Genghis Khan",
    biografi:
      "Pendiri Kekaisaran Mongol, kekaisaran terbesar dalam sejarah. Lahir sebagai Temüjin, ia menyatukan suku-suku Mongol, menaklukkan sebagian besar Asia dan Eropa Timur, serta mendorong penyebaran budaya dan perdagangan di Jalur Sutra.",
    url: "./image/6.jpeg",
    jodoh: "Tegas - Ambisius - Religius",
    film: "Prisoners (2013) - Batman Begins",
    caption: `<div>
  <p><strong>Ganas tapi visioner!</strong> Kamu punya jiwa petualang yang tangguh 🐎 
  pantang menyerah, cepat beradaptasi, dan punya kemampuan alami buat memimpin orang banyak.</p>
  <p>🎮 <strong>Rekomendasi Game:</strong> <em>Mount & Blade II: Bannerlord</em> — seru banget buat kamu yang suka memimpin pasukan dan menaklukkan wilayah baru.</p>
</div>`,
    rarity: "Epic",
  },
  "sosial-inovasi-spontan-arahan-kelompok-pria": {
    nomor: 7,
    nama: "Benedict Arnold",
    biografi:
      "Jenderal Amerika dalam Perang Revolusi yang awalnya berjasa bagi kemenangan Amerika, namun berpindah pihak ke Inggris karena merasa tidak dihargai. Tindakannya menjadikannya simbol pengkhianatan dalam sejarah Amerika.",
    url: "./image/7.jpeg",
    jodoh: "Waspada - Realistis - Teguh",
    film: "Green Book - Hamilton",
    caption: `<div>
  <p><strong>Unik banget!</strong> Kamu punya jiwa ambisius 🔥 
  penuh keberanian ambil risiko besar, tapi kadang keputusanmu bisa bikin orang lain kaget.</p>
  <p>📚 <strong>Rekomendasi Bacaan:</strong> <em>Washington’s Spies</em> — buku tentang dunia mata-mata era Revolusi Amerika yang penuh intrik dan kejutan.</p>
</div>`,
    rarity: "Common",
  },
  "sosial-inovasi-spontan-arahan-umum-pria": {
    nomor: 8,
    nama: "Galileo Galilei",
    biografi:
      'Ilmuwan Italia, "Bapak Astronomi Modern," yang memelopori teleskop untuk mengamati langit. Ia mendukung teori heliosentris Copernicus, yang menempatkannya dalam konflik dengan Gereja. Penemuan pentingnya meliputi bulan Jupiter dan hukum gerak.',
    url: "./image/8.jpeg",
    jodoh: "Kreatif - Dingin - Optimis",
    film: "The Wold of Wall Street - Dangal (2016)",
    caption: `<div>
  <p><strong>Menantang arus!</strong> Kamu punya jiwa penasaran yang nggak ada habisnya 🔭 
  berani melawan opini umum demi kebenaran, dan selalu haus akan pengetahuan baru.</p>
  <p>🎬 <strong>Rekomendasi Film:</strong> <em>The Theory of Everything</em> — kisah tentang ilmuwan yang hidup dengan rasa ingin tahu tak terbatas.</p>
</div>`,
    rarity: "Epic",
  },
  "sosial-rutinitas-detail-memimpin-kelompok-pria": {
    nomor: 9,
    nama: "King David",
    biografi:
      "Raja kedua Israel yang terkenal sebagai gembala muda yang mengalahkan Goliath, ia menjadi pemimpin yang kuat dan penulis banyak Mazmur. Ia dihormati sebagai figur penting dalam tradisi Yahudi, Kristen, dan Islam.",
    url: "./image/9.jpeg",
    jodoh: "Tanggap - Proaktif - Sederhana",
    film: "Downfall (2004) - 1997",
    caption: `<div>
  <p><strong>Karismatik banget!</strong> Kamu punya jiwa pemimpin yang kuat 🎵👑 
  penuh keberanian, tapi juga sensitif dan puitis—gabungan unik antara kekuatan dan kelembutan.</p>
  <p>🍇 <strong>Rekomendasi Makanan:</strong> Hidangan Mediterania klasik seperti anggur, zaitun, dan roti hangat—simple tapi penuh makna sejarah.</p>
</div>`,
    rarity: "Common",
  },
  "sosial-rutinitas-detail-memimpin-umum-pria": {
    nomor: 10,
    nama: "Homer",
    biografi:
      "Penyair epik Yunani yang menulis Iliad dan Odyssey. Meskipun sedikit yang diketahui tentang hidupnya, Homer memengaruhi budaya Yunani dan memberikan kontribusi besar pada sastra dan pemikiran umum.",
    url: "./image/10.jpeg",
    jodoh: "Penyayang - Komunikatif - Mandiri",
    film: "A Separation - Incendies",
    caption: `<div>
  <p><strong>Puitis abis!</strong> Kamu punya imajinasi liar dan jiwa pendongeng sejati 📜✨ 
  bisa bikin cerita sederhana jadi epik, dan suka melihat dunia lewat sudut pandang penuh makna.</p>
  <p>📚 <strong>Rekomendasi Bacaan:</strong> <em>The Song of Achilles</em> — novel modern dengan nuansa mitologi Yunani yang puitis dan emosional.</p>
</div>`,
    rarity: "Common",
  },
  "sosial-rutinitas-detail-arahan-kelompok-pria": {
    nomor: 11,
    nama: "Marcus Vipsanius Agrippa",
    biografi:
      "Seorang jenderal dan politikus Romawi yang hidup pada masa kekuasaan Kaisar Augustus. Ia memainkan peran penting dalam pembangunan infrastruktur, seperti Colosseum dan kompleks Bath di Roma, serta membantu memperkuat dominasi kekaisaran Romawi.",
    url: "./image/11.jpeg",
    jodoh: "Cerdas - Tegas - Berani",
    film: "Eternal Sunshine of the Spotless Mind",
    caption: `<div>
  <p><strong>Tangguh banget!</strong> Kamu punya jiwa strategi yang kuat ⚔️ 
  loyal, cerdas dalam mengambil keputusan, dan selalu bisa diandalkan dalam situasi sulit.</p>
  <p>🎬 <strong>Rekomendasi Film:</strong> <em>Gladiator</em> — kisah penuh strategi, loyalitas, dan kejayaan Romawi.</p>
</div>`,
    rarity: "Rare",
  },
  "sosial-rutinitas-detail-arahan-umum-pria": {
    nomor: 12,
    nama: "Imhotep",
    biografi:
      "Arsitek, tabib, dan penasihat Raja Djoser dari Mesir kuno. Ia merancang Piramida Bertingkat di Saqqara, piramida pertama dalam sejarah. Dianggap sebagai dewa kebijaksanaan setelah kematiannya, dikenal sebagai pelopor kedokteran dan penulisan hieroglif.",
    url: "./image/12.jpeg",
    jodoh: "Adil - Pemimpin - Proaktif",
    film: "The Hunt (2012) - Capernaum",
    caption: `<div>
  <p><strong>Jenius sejati!</strong> Kamu punya otak logis sekaligus kreatif 🏺✨ 
  mampu menyatukan seni, ilmu pengetahuan, dan spiritualitas jadi satu kesatuan yang harmonis.</p>
  <p>🍵 <strong>Rekomendasi Makanan:</strong> Hidangan bergizi sederhana seperti biji-bijian, madu, dan teh herbal — cocok buat menjaga fokus dan energi.</p>
</div>`,
    rarity: "Common",
  },
  "sosial-rutinitas-spontan-memimpin-kelompok-pria": {
    nomor: 13,
    nama: "Attila the Hun",
    biografi:
      'Pemimpin Kekaisaran Hun yang menakutkan di abad ke-5. Ia dikenal karena ekspansi militernya yang luas di Eropa, sering disebut "Cambuk Tuhan." Attila memimpin kampanye melawan Kekaisaran Romawi tetapi gagal menaklukkan Roma. Ia meninggal mendadak pada tahun 453.',
    url: "./image/13.jpeg",
    jodoh: "Tegas - Berani - Loyal",
    film: "The Dark Knight Rises - Joker (2019)",
    caption: `<div>
  <p><strong>Garang tapi karismatik!</strong> Kamu punya semangat tak terbendung 🐎🔥 
  selalu berani ambil jalan sulit, cepat bergerak, dan bikin orang lain segan sekaligus kagum.</p>
  <p>⚔️ <strong>Fun Fact:</strong> Sosok ini dijuluki “Cambuk Tuhan” karena kepemimpinannya membuat Hun jadi salah satu pasukan paling ditakuti di masanya.</p>
</div>`,
    rarity: "Rare",
  },
  "sosial-rutinitas-spontan-memimpin-umum-pria": {
    nomor: 14,
    nama: "Pericles",
    biografi:
      "Pemimpin dan orator Athena selama Zaman Keemasan Yunani. Ia memperluas demokrasi, memimpin pembangunan Parthenon, dan memperkuat kekuatan laut Athena. Di bawah kepemimpinannya, Athena menjadi pusat seni, budaya, dan filsafat.",
    url: "./image/14.jpeg",
    jodoh: "Cemburu - Disiplin - Religius",
    film: "12th Fail - Inglourious Basterds",
    caption: `<div>
  <p><strong>Elegan dan visioner!</strong> Kamu punya kepemimpinan yang tenang tapi berpengaruh 🏛️✨ 
  cinta seni, intelektual, dan percaya kalau kemajuan lahir dari ilmu dan kebersamaan.</p>
  <p>📚 <strong>Rekomendasi Bacaan:</strong> <em>Pericles of Athens and the Birth of Democracy</em> — biografi yang menyingkap kepemimpinan brilian dan pemikirannya.</p>
</div>`,
    rarity: "Common",
  },
  "sosial-rutinitas-spontan-arahan-kelompok-pria": {
    nomor: 15,
    nama: "Zhuge Liang",
    biografi:
      'Ahli strategi militer, negarawan, dan penasihat Shu Han selama Tiga Kerajaan di Tiongkok. Dikenal sebagai "Naga Tidur," ia terkenal karena kecerdasannya dalam taktik perang dan inovasi seperti repeating crossbow.',
    url: "./image/15.jpeg",
    jodoh: "Bijaksana - Teliti - Pemikir",
    film: "The Lives of Others - WALL-E",
    caption: `<div>
  <p><strong>Cerdas dan penuh strategi!</strong> Kamu tipe pemikir tenang 🧠🐉 
  jago merencanakan langkah jauh ke depan, nggak gampang panik, dan selalu punya solusi jitu di saat genting.</p>
  <p>🎬 <strong>Rekomendasi Film:</strong> <em>Red Cliff</em> — kisah epik tentang strategi perang Tiga Kerajaan yang penuh intrik dan kejeniusannya.</p>
</div>`,
    rarity: "Rare",
  },
  "sosial-rutinitas-spontan-arahan-umum-pria": {
    nomor: 16,
    nama: "William Wallace",
    biografi:
      "Pemimpin Skotlandia yang memimpin perlawanan melawan Inggris selama Perang Kemerdekaan Skotlandia. Dikenal karena kemenangan di Pertempuran Stirling Bridge (1297), ia menjadi simbol perjuangan kemerdekaan Skotlandia.",
    url: "./image/16.jpeg",
    jodoh: "Berani - Setia - Pemberani",
    film: "Untouchable - Parasite",
    caption: `<div>
  <p><strong>Berani dan penuh semangat kebebasan!</strong> Kamu punya jiwa pejuang sejati 🗡️🏴 
  pantang mundur demi prinsip, selalu membela yang lemah, dan rela berkorban demi keadilan.</p>
  <p>🎬 <strong>Rekomendasi Film:</strong> <em>Braveheart</em> — kisah heroik penuh keberanian yang bakal bikin darahmu berdesir.</p>
</div>`,
    rarity: "Common",
  },
  "sendiri-inovasi-detail-memimpin-kelompok-pria": {
    nomor: 17,
    nama: "Niccolò Machiavelli",
    biografi:
      "Seorang filsuf dan politisi Italia, terkenal dengan karya The Prince, yang membahas kekuasaan dan strategi politik. Ia menekankan pragmatisme dan realisme dalam pemerintahan. Machiavelli dianggap sebagai bapak ilmu politik modern.",
    url: "./image/17.jpeg",
    jodoh: "Bijaksana - Manipulatif - Egois",
    film: "Oppenheimer - Weapons",
    caption: `<div>
  <p><strong>Pintar membaca situasi!</strong> Kamu punya otak politikus ulung 🦊📜 
  realistis, lihai memainkan strategi, dan tahu kapan harus keras atau lembut untuk mencapai tujuan.</p>
  <p>📚 <strong>Rekomendasi Bacaan:</strong> <em>The 48 Laws of Power</em> — panduan modern tentang seni memimpin dan memengaruhi.</p>
</div>`,
    rarity: "Rare",
  },
  "sendiri-inovasi-detail-memimpin-umum-pria": {
    nomor: 18,
    nama: "Albert Einstein",
    biografi:
      "Fisikawan teoretis asal Jerman, terkenal dengan teori relativitas. Ia memenangkan Hadiah Nobel Fisika 1921 dan mengubah pemahaman kita tentang ruang, waktu, dan gravitasi. Einstein juga aktif dalam politik dan filantropi, mendukung perdamaian dan HAM.",
    url: "./image/18.jpeg",
    jodoh: "Boros - Humoris - Teliti",
    film: "The Theory of Everything - Oppenheimer",
    caption: `<div>
  <p><strong>Jenius nyeleneh!</strong> Kamu punya imajinasi liar yang bikin ide-ide cemerlang 🌌🧠 
  kadang terlihat santai atau aneh, tapi justru dari situ lahir pemikiran yang mengubah dunia.</p>
  <p>🎶 <strong>Rekomendasi Musik:</strong> Klasik karya Mozart atau Bach — cocok buat merangsang kreativitasmu yang tanpa batas.</p>
</div>`,
    rarity: "Legendary",
  },
  "sendiri-inovasi-detail-arahan-kelompok-pria": {
    nomor: 19,
    nama: "Charles Darwin",
    biografi:
      "Ilmuwan Inggris yang mengembangkan teori evolusi melalui seleksi alam. Karyanya, On the Origin of Species (1859), mengubah pemahaman tentang kehidupan dan spesies. Darwin dianggap sebagai salah satu tokoh paling berpengaruh dalam ilmu pengetahuan.",
    url: "./image/19.jpeg",
    jodoh: "Penyabar - Terbuka - Penyayang",
    film: "Dune: Part Two - Pefect Days",
    caption: `<div>
  <p><strong>Pengamat ulung!</strong> Kamu punya rasa ingin tahu besar tentang alam 🌿🦎 
  sabar memperhatikan detail kecil, suka menganalisis, dan percaya kalau perubahan adalah kunci kehidupan.</p>
  <p>📚 <strong>Rekomendasi Bacaan:</strong> <em>The Origin of Species</em> — karya legendaris tentang evolusi yang bisa membuka cara pandang baru terhadap dunia.</p>
</div>`,
    rarity: "Rare",
  },
  "sendiri-inovasi-detail-arahan-umum-pria": {
    nomor: 20,
    nama: "Nikolaus Copernicus",
    biografi:
      "Astronom asal Polandia yang mengemukakan teori heliosentris, yang menyatakan bahwa Bumi mengelilingi Matahari, bukan sebaliknya. Teori ini mengubah pemahaman tentang tata surya dan memulai revolusi ilmiah.",
    url: "./image/20.jpeg",
    jodoh: "Pemikir - Bijaksana - Kreatif",
    film: "Arcadian - The Aeronauts",
    caption: `<div>
  <p><strong>Pemikir revolusioner!</strong> Kamu punya keberanian buat melawan arus 🔭🌍 
  lebih percaya pada logika dan bukti nyata, meski pandanganmu sering dianggap aneh oleh orang lain.</p>
  <p>🎬 <strong>Rekomendasi Film:</strong> <em>Carl Sagan’s Cosmos</em> — dokumenter sains klasik yang membuka wawasan tentang semesta dan keberanian berpikir beda.</p>
</div>`,
    rarity: "Common",
  },
  "sendiri-inovasi-spontan-memimpin-kelompok-pria": {
    nomor: 21,
    nama: "Julius Caesar",
    biografi:
      "Jenderal dan politisi Romawi yang memperluas Kekaisaran Romawi melalui penaklukan besar, termasuk Galia. Ia menjadi diktator seumur hidup, Keberhasilannya mengubah sejarah Romawi dan memicu transisi menuju Kekaisaran.",
    url: "./image/21.jpeg",
    jodoh: "Intelek - Mandiri - Penasaran",
    film: "The Making of a Dictator - Gladiator II",
    caption: `<div>
  <p><strong>Ambisius dan karismatik!</strong> Kamu punya aura pemimpin alami 🏛️⚔️ 
  jago menginspirasi orang lain, berani ambil risiko besar, dan selalu haus akan pencapaian.</p>
  <p>📚 <strong>Rekomendasi Bacaan:</strong> <em>Caesar: Life of a Colossus</em> — biografi mendalam tentang kehidupan penuh strategi, politik, dan ambisi.</p>
</div>`,
    rarity: "Common",
  },
  "sendiri-inovasi-spontan-memimpin-umum-pria": {
    nomor: 22,
    nama: "Edgar Allan Poe",
    biografi:
      "Penulis Amerika yang terkenal dengan cerpen horor dan misterinya. Poe dianggap sebagai salah satu pendiri genre detektif modern. Ia memiliki kehidupan yang penuh misteri dan tragis, yang terrefleksi dalam karya-karyanya.",
    url: "./image/22.jpeg",
    jodoh: "Empatik - Setia - Dermawan",
    film: "The Pale Blue Eye - Nightmare Alley",
    caption: `<div>
  <p><strong>Berjiwa melankolis tapi super kreatif!</strong> Kamu punya imajinasi liar 🌑🖋️ 
  bisa mengubah kegelapan jadi seni, suka mengeksplor emosi dalam, dan selalu meninggalkan kesan mendalam lewat kata-kata.</p>
  <p>🎬 <strong>Rekomendasi Film:</strong> <em>The Pale Blue Eye</em> — thriller misteri dengan sentuhan gotik yang cocok sama vibe imajinasimu.</p>
</div>`,
    rarity: "Common",
  },
  "sendiri-inovasi-spontan-arahan-kelompok-pria": {
    nomor: 23,
    nama: "Socrates",
    biografi:
      "Filsuf Yunani kuno yang hidup sekitar 470–399 SM. Ia dikenal sebagai salah satu tokoh utama dalam sejarah filsafat Barat, dengan metode dialognya yang terkenal, yakni bertanya dan mendiskusikan kebenaran moral dan etika.",
    url: "./image/23.jpeg",
    jodoh: "Cerdas - Terbuka - Sabar",
    film: "12 Angry Men - I'm Thinking of Ending Things",
    caption: `<div>
  <p><strong>Bijak dan penuh rasa ingin tahu!</strong> Kamu tipe yang suka bertanya 🤔📜 
  nggak gampang puas dengan jawaban sederhana, lebih senang menggali makna hidup lewat diskusi mendalam.</p>
  <p>📚 <strong>Rekomendasi Bacaan:</strong> <em>The Apology of Socrates</em> — kisah tentang keberanian mempertahankan kebenaran dan kebijaksanaan.</p>
</div>`,
    rarity: "Epic",
  },
  "sendiri-inovasi-spontan-arahan-umum-pria": {
    nomor: 24,
    nama: "Aristotle",
    biografi:
      "Filsuf dan ilmuwan Yunani kuno yang mendalami berbagai bidang seperti logika, etika, politik, ilmu alam, dan metafisika. Ia adalah murid Plato dan guru Alexander Agung, serta dikenal dengan kontribusinya yang signifikan dalam pemikiran Barat.",
    url: "./image/24.jpeg",
    jodoh: "Rasional - Penuh Pertimbangan - Kritis",
    film: "The Man Who Knew Infinity - The Creator",
    caption: `<div>
  <p><strong>Logis dan penuh wawasan!</strong> Kamu tipe pemikir yang suka nyambungin banyak hal 🔎📚 
  percaya kalau ilmu itu kunci untuk memahami dunia, dan selalu punya cara sistematis buat jelasin sesuatu.</p>
  <p>📚 <strong>Rekomendasi Bacaan:</strong> <em>Nicomachean Ethics</em> — karya klasik tentang kebahagiaan, kebajikan, dan cara hidup yang baik.</p>
</div>`,
    rarity: "Rare",
  },
  "sendiri-rutinitas-detail-memimpin-kelompok-pria": {
    nomor: 25,
    nama: "Isaac Newton",
    biografi:
      "Ilmuwan Inggris terkenal yang mengembangkan teori gravitasi dan hukum gerak. Karyanya Philosophiæ Naturalis Principia Mathematica menjadi dasar fisika modern. Ia dianggap salah satu ilmuwan terbesar dalam sejarah.",
    url: "./image/25.jpeg",
    jodoh: "Adil - Cemburu - Disiplin",
    film: "The Beast - Civil War",
    caption: `<div>
  <p><strong>Jenius penyendiri!</strong> Kamu punya otak analitis yang luar biasa 🍎✨ 
  suka mengamati hal kecil yang sering diabaikan orang lain, lalu mengubahnya jadi penemuan besar.</p>
  <p>📚 <strong>Rekomendasi Bacaan:</strong> <em>Principia Mathematica</em> — karya ilmiah monumental yang mengubah cara kita memahami alam semesta.</p>
</div>`,
    rarity: "Epic",
  },
  "sendiri-rutinitas-detail-memimpin-umum-pria": {
    nomor: 26,
    nama: "Alexander the Great",
    biografi:
      "Raja Makedonia yang menaklukkan sebagian besar dunia kuno, termasuk Persia, Mesir, dan India. Terkenal karena strategi militernya yang cemerlang, ia membentuk kerajaan terbesar di dunia pada masa itu.",
    url: "./image/26.jpeg",
    jodoh: "Tegas - Ambisius - Religius",
    film: "Alexander: The Making of a God - Reign: The Conqueror",
    caption: `<div>
  <p><strong>Ambisius dan penuh semangat juang!</strong> Kamu punya jiwa pemimpin alami 🦁⚔️ 
  nggak takut tantangan besar, selalu haus pencapaian, dan punya karisma yang bikin orang lain mau ngikutinmu.</p>
  <p>🎬 <strong>Rekomendasi Film:</strong> <em>Alexander</em> — kisah epik tentang ambisi, keberanian, dan strategi militer luar biasa.</p>
</div>`,
    rarity: "Common",
  },
  "sendiri-rutinitas-detail-arahan-kelompok-pria": {
    nomor: 27,
    nama: "Plato",
    biografi:
      "Filsuf Yunani kuno, murid Socrates, dan guru Aristoteles. Ia mendirikan Akademi di Athena, sekolah tertua di dunia Barat. Karyanya, termasuk Republik, membahas keadilan, pengetahuan, dan filosofi politik, memengaruhi pemikiran Barat selama berabad-abad.",
    url: "./image/27.jpeg",
    jodoh: "Cerdas - Tulus - Penuh Energi",
    film: "The Matrix Resurrections - The Truman Show",
    caption: `<div>
  <p><strong>Filosofis dan visioner!</strong> Kamu tipe pemikir yang suka melihat hal-hal dari sudut pandang lebih dalam 🌌📜 
  percaya bahwa ide besar bisa mengubah dunia, dan sering mencari makna di balik realitas sehari-hari.</p>
  <p>📚 <strong>Rekomendasi Bacaan:</strong> <em>The Republic</em> — karya klasik tentang keadilan, pemerintahan ideal, dan filosofi hidup.</p>
</div>`,
    rarity: "Common",
  },
  "sendiri-rutinitas-detail-arahan-umum-pria": {
    nomor: 28,
    nama: "Carl Linnaeus",
    biografi:
      'Ilmuwan Swedia yang dikenal sebagai "bapak taksonomi modern." Ia mengembangkan sistem klasifikasi biologis dengan memberi nama Latin pada spesies dan mengorganisasi makhluk hidup dalam hierarki, yang digunakan hingga saat ini.',
    url: "./image/28.jpeg",
    jodoh: "Analitis - Rasional - Sabar",
    film: "Kingdom of the Planet of the Apes - I.S.S",
    caption: `<div>
  <p><strong>Teratur dan penuh rasa ingin tahu!</strong> Kamu tipe pengamat yang suka bikin sistem 🌿🔎 
  detail banget dalam mengklasifikasi sesuatu, dan percaya kalau dunia lebih indah saat segala hal punya tempatnya masing-masing.</p>
  <p>🍵 <strong>Rekomendasi Aktivitas:</strong> Jalan santai di kebun botani atau hutan kecil — cocok buat jiwa pengamat alam sepertimu.</p>
</div>`,
    rarity: "Rare",
  },
  "sendiri-rutinitas-spontan-memimpin-kelompok-pria": {
    nomor: 29,
    nama: "Leonidas I",
    biografi:
      "Raja Sparta yang terkenal karena memimpin pasukannya dalam Pertempuran Thermopylae melawan pasukan Persia yang jauh lebih besar. Meskipun kalah, keberanian dan pengorbanannya menjadi simbol heroisme, keteguhan, dan perjuangan melawan penindasan dalam sejarah.",
    url: "./image/29.jpeg",
    jodoh: "Tangguh - Emosional - Berani",
    film: "The Woman King - The Last Samurai",
    caption: `<div>
  <p><strong>Berani dan setia!</strong> Kamu punya jiwa pejuang sejati 🛡️⚔️ 
  nggak takut menghadapi rintangan besar, rela berkorban demi orang lain, dan selalu teguh pada prinsipmu.</p>
  <p>🎬 <strong>Rekomendasi Film:</strong> <em>300</em> — kisah epik tentang keberanian, pengorbanan, dan kepemimpinan legendaris.</p>
</div>`,
    rarity: "Common",
  },
  "sendiri-rutinitas-spontan-memimpin-umum-pria": {
    nomor: 30,
    nama: "Marcus Aurelius",
    biografi:
      "Kaisar Romawi dan filsuf Stoik. Dikenal dengan karya Meditations, yang berisi pemikiran tentang kebajikan dan pengendalian diri. Memerintah dari 161 hingga 180 M, ia terkenal karena kepemimpinan bijaksana dan kesederhanaannya.",
    url: "./image/30.jpeg",
    jodoh: "Pemikir - Sederhana - Pemalu",
    film: "The Last Samurai - The Outpost",
    caption: `<div>
  <p><strong>Bijak dan tenang!</strong> Kamu punya jiwa pemimpin yang penuh refleksi 🌿📜 
  lebih suka mengendalikan diri, menghadapi masalah dengan ketenangan, dan selalu mencari makna dalam setiap pengalaman.</p>
  <p>🕊️ <strong>Fun Fact:</strong> Sosok ini dikenal sebagai "Filsuf Kaisar" Romawi, penulis karya terkenal <em>Meditations</em> yang masih jadi inspirasi sampai sekarang.</p>
</div>`,
    rarity: "Common",
  },
  "sendiri-rutinitas-spontan-arahan-kelompok-pria": {
    nomor: 31,
    nama: "Hannibal Barca",
    biografi:
      "Jenderal Carthage yang terkenal karena memimpin pasukan dalam Perang Punisia Kedua melawan Roma. Ia terkenal dengan penyeberangan Alpen yang epik dan strategi militer cerdik. Hannibal dianggap salah satu jenderal terbesar dalam sejarah.",
    url: "./image/31.jpeg",
    jodoh: "Tangguh - Pekerja Keras - Pemikir",
    film: "300: Rise of an Empire - Mindhunter",
    caption: `<div>
  <p><strong>Berani dan penuh strategi!</strong> Kamu punya otak taktis yang luar biasa 🐘⚔️ 
  selalu bisa nemuin cara unik buat keluar dari situasi sulit, dan pantang mundur meski lawanmu jauh lebih besar.</p>
  <p>🎮 <strong>Rekomendasi Game:</strong> <em>Total War: Rome II</em> — cocok banget buat jiwa strategimu yang suka mengatur taktik besar-besaran.</p>
</div>`,
    rarity: "Common",
  },
  "sendiri-rutinitas-spontan-arahan-umum-pria": {
    nomor: 32,
    nama: "Confucius",
    biografi:
      "Filsuf dan guru Tiongkok yang mengajarkan etika, moralitas, dan hubungan sosial. Ajarannya, yang tertulis dalam Analects, menekankan kebajikan dan harmoni dalam masyarakat. Konsep-konsepnya mempengaruhi budaya Tiongkok dan dunia.",
    url: "./image/32.jpeg",
    jodoh: "Pemikir - Adil - Idealis",
    film: "The Farewell - A Beautiful Day in the Neigborhood",
    caption: `<div>
  <p><strong>Bijak dan penuh nilai moral!</strong> Kamu tipe yang suka menjaga harmoni 🤝📜 
  menghargai keluarga, persahabatan, dan percaya kalau hidup terbaik adalah yang penuh kebajikan.</p>
  <p>🌸 <strong>Fun Fact:</strong> Sosok ini dikenal sebagai guru besar Tiongkok yang ajarannya tentang etika, kesopanan, dan kepemimpinan masih dipelajari hingga kini.</p>
</div>`,
    rarity: "Common",
  },
  "sosial-inovasi-detail-memimpin-kelompok-wanita": {
    nomor: 33,
    nama: "Marie Curie",
    biografi:
      "Ilmuwan Polandia-Prancis yang dikenal karena penemuan unsur radioaktif radium dan polonium. Ia adalah wanita pertama yang memenangkan Nobel, meraih Nobel Fisika dan Kimia, dan berkontribusi besar dalam pengembangan radiologi.",
    url: "./image/33.jpeg",
    jodoh: "Penyabar - Pengertian - Peduli",
    film: "Radioactive - Picture a Scientist",
    caption: `<div>
  <p><strong>Pintar dan penuh dedikasi!</strong> Kamu tipe yang nggak gampang menyerah 🔬✨ 
  selalu haus pengetahuan, berani menembus batas, dan rela berkorban demi hal yang bermanfaat buat orang banyak.</p>
  <p>🎬 <strong>Rekomendasi Film:</strong> <em>Radioactive</em> — kisah inspiratif tentang perjuangan, cinta, dan penemuan besar yang mengubah dunia.</p>
</div>`,
    rarity: "Rare",
  },
  "sosial-inovasi-detail-memimpin-umum-wanita": {
    nomor: 34,
    nama: "Cleopatra VII",
    biografi:
      "Ratu Mesir terakhir dinasti Ptolemaic. Dikenal karena kecerdasan politik dan daya tariknya, ia menjalin hubungan dengan Julius Caesar dan Mark Antony. Setelah kalah di Perang Actium, Cleopatra bunuh diri, menandai akhir kerajaan Mesir kuno.",
    url: "./image/34.jpeg",
    jodoh: "Bijaksana - Loyal - Religius",
    film: "The Favourite - The Trial of the Chicago 7",
    rarity: "Epic",
  },
  "sosial-inovasi-detail-arahan-kelompok-wanita": {
    nomor: 35,
    nama: "Queen Elizabeth I",
    biografi:
      'Ratu Inggris yang memerintah dari 1558 hingga 1603. Terkenal karena memperkuat Inggris dalam menanggulangi ancaman Spanyol, dan mendukung kebangkitan seni, termasuk karya William Shakespeare."',
    url: "./image/35.jpeg",
    jodoh: "Bijaksana - Teguh - Loyal",
    film: "The Favourite - The Trial of the Chicago 7",
    rarity: "Rare",
  },
  "sosial-inovasi-detail-arahan-umum-wanita": {
    nomor: 36,
    nama: "Hypatia dari Alexandria",
    biografi:
      "Filsuf, matematikawan, dan astronom terkenal di Mesir Kuno. Ia mengajar di Alexandria dan dikenal karena pengetahuan mendalamnya tentang ilmu pengetahuan. Hypatia menjadi simbol kecerdasan wanita.",
    url: "./image/36.jpeg",
    jodoh: "Bijaksana - Tenang - Adaptif",
    film: "The Two Popes - Mary Queen of Scots",
    rarity: "Common",
  },
  "sosial-inovasi-spontan-memimpin-kelompok-wanita": {
    nomor: 37,
    nama: "Joan of Arc",
    biografi:
      "Pahlawan nasional Prancis yang memimpin pasukan dalam Perang Seratus Tahun. Diyakini mendengar suara ilahi, ia membantu Raja Charles VII merebut takhta. Diakui sebagai santo oleh Gereja Katolik pada 1920.",
    url: "./image/37.jpeg",
    jodoh: "Setia - Tulus - Tangguh",
    film: "Mulan - Wonder Woman",
    rarity: "Common",
  },
  "sosial-inovasi-spontan-memimpin-umum-wanita": {
    nomor: 38,
    nama: "Catherine the Great",
    biografi:
      "Kaisar Rusia yang memerintah dari 1762 hingga kematiannya. Lahir sebagai Putri Sophie dari Jerman, ia menikah dengan Tsar Peter III, lalu merebut tahta. Catherine dikenal karena reformasi dan dukungannya terhadap seni serta pendidikan di Rusia.",
    url: "./image/38.jpeg",
    jodoh: "Tegas - Loyal - Kreatif",
    film: "The Iron Lady - Victoria",
    rarity: "Common",
  },
  "sosial-inovasi-spontan-arahan-kelompok-wanita": {
    nomor: 39,
    nama: "Queen Victoria",
    biografi:
      "Ratu Inggris dari 1837 hingga 1901, memerintah selama era Victoria yang menyaksikan kemajuan industri dan kolonialisasi. Ia menikah dengan Pangeran Albert dan dikenal karena ketegasan serta pengaruhnya dalam membentuk monarki modern Inggris.",
    url: "./image/39.jpeg",
    jodoh: "Setia - Tangguh - Sabar",
    film: "Finding Your Feet - The Leisure Seeker",
    rarity: "Common",
  },
  "sosial-inovasi-spontan-arahan-umum-wanita": {
    nomor: 40,
    nama: "Florence Nightingale",
    biografi:
      'Pelopor keperawatan modern asal Inggris. Dikenal karena upayanya selama Perang Krimea, ia mendirikan sekolah keperawatan pertama yang menyelamatkan banyak nyawa. Nightingale dihormati sebagai "Ibu Keperawatan".',
    url: "./image/40.jpeg",
    jodoh: "Ramah - Sabar - Setia",
    film: "The Pursuit of Happyness - The Martian",
    rarity: "Rare",
  },
  "sosial-rutinitas-detail-memimpin-kelompok-wanita": {
    nomor: 41,
    nama: "Rosalind Franklin",
    biografi:
      "Ahli kimia dan kristalografi Inggris yang berperan penting dalam penemuan struktur DNA. Foto X-ray yang dihasilkannya memberikan bukti kunci bagi pemahaman heliks ganda DNA.",
    url: "./image/41.jpeg",
    jodoh: "Ramah - Adil - Loyal",
    film: "Ex Machina  - The Imitation Game",
    rarity: "Common",
  },
  "sosial-rutinitas-detail-memimpin-umum-wanita": {
    nomor: 42,
    nama: "Jane Austen",
    biografi:
      "Novelis Inggris yang terkenal dengan karya seperti Pride and Prejudice dan Sense and Sensibility. Lahir di Hampshire, ia menulis tentang cinta dan kehidupan sosial dengan humor dan kritik tajam. Karya-karyanya kini dianggap klasik sastra dunia.",
    url: "./image/42.jpeg",
    jodoh: "Cerdas - Empati - Kreatif",
    film: "Little Women - Brooklyn",
    rarity: "Common",
  },
  "sosial-rutinitas-detail-arahan-kelompok-wanita": {
    nomor: 43,
    nama: "Lise Meitner",
    biografi:
      "Fisikawan Austria-Swedia yang berkontribusi pada penemuan fisi nuklir. Ia bekerja sama dengan Otto Hahn, tetapi tidak menerima Nobel bersamanya. Meitner dihormati dengan elemen meitnerium yang dinamai untuknya.",
    url: "./image/43.jpeg",
    jodoh: "Kritis - Sederhana - Disiplin",
    film: "Gravity - The Social Network",
    rarity: "Common",
  },
  "sosial-rutinitas-detail-arahan-umum-wanita": {
    nomor: 44,
    nama: "Raden Adjeng Kartini",
    biografi:
      "Tokoh emansipasi perempuan Indonesia. Lahir di Jepara, ia memperjuangkan hak pendidikan dan kesetaraan bagi perempuan melalui surat-suratnya yang kemudian dibukukan sebagai Habis Gelap Terbitlah Terang.",
    url: "./image/44.jpeg",
    jodoh: "Mandiri - Disiplin - Lembut",
    film: "The Iron Lady - Suffragette",
    rarity: "Legendary",
  },
  "sosial-rutinitas-spontan-memimpin-kelompok-wanita": {
    nomor: 45,
    nama: "Boudica",
    biografi:
      "Ratu suku Iceni di Inggris kuno yang memimpin pemberontakan besar melawan Kekaisaran Romawi. Dikenal karena keberaniannya. Boudica menjadi simbol perlawanan dan kebebasan di Britania Raya.",
    url: "./image/45.jpeg",
    jodoh: "Tegas - Mandiri - Berani",
    film: "Alita: Battle Angel - Brave",
    rarity: "Common",
  },
  "sosial-rutinitas-spontan-memimpin-umum-wanita": {
    nomor: 46,
    nama: "Wu Zetian",
    biografi:
      "Satu-satunya kaisar perempuan dalam sejarah Tiongkok, memerintah Dinasti Tang. Cerdas dan ambisius, ia memperluas kekuasaan kerajaan, memperkuat birokrasi, dan mendukung budaya serta inovasi.",
    url: "./image/46.jpeg",
    jodoh: "Kreatif - Disiplin - Teguh",
    film: "Lady Macbeth - Zero Dark Thirty",
    rarity: "Epic",
  },
  "sosial-rutinitas-spontan-arahan-kelompok-wanita": {
    nomor: 47,
    nama: "Hildegard von Bingen",
    biografi:
      "Seorang biarawati Jerman, teolog dan ilmuwan. Ia dikenal sebagai penulis teks medis, dan mistikus. Hildegard memimpin Biara Rupertsberg dam menjadi tokoh perempuan paling berpengaruh di Abad Pertengahan.",
    url: "./image/47.jpeg",
    jodoh: "Peduli - Religius - Sabar",
    film: "The Book Thief - Arrival",
    rarity: "Rare",
  },
  "sosial-rutinitas-spontan-arahan-umum-wanita": {
    nomor: 48,
    nama: "Ada Lovelace",
    biografi:
      "Matematikawan Inggris yang dikenal sebagai programmer komputer pertama di dunia. Ia bekerja dengan Charles Babbage pada mesin analitik dan menciptakan algoritma untuk mesin tersebut. Ia menjadi salah satu tokoh pengembangan komputasi modern.",
    url: "./image/48.jpeg",
    jodoh: "Tangguh - Logis - Inovatif",
    film: "Her - A Beautiful Mind",
    rarity: "Epic",
  },
  "sendiri-inovasi-detail-memimpin-kelompok-wanita": {
    nomor: 49,
    nama: "Cecilia Payne-Gaposchkin",
    biografi:
      "Astronom asal Inggris yang dikenal karena penemuannya mengenai komposisi bintang. Ia menunjukkan bahwa bintang sebagian besar terdiri dari hidrogen dan helium, sebuah teori yang sangat penting dalam astronomi modern.",
    url: "./image/49.jpeg",
    jodoh: "Tegas - Inovatif - Analitis",
    film: "The Space Between Us - Ad Astra",
    rarity: "Common",
  },
  "sendiri-inovasi-detail-memimpin-umum-wanita": {
    nomor: 50,
    nama: "Sappho",
    biografi:
      "penyair Yunani kuno asal Lesbos, terkenal dengan puisi-puisi liris yang menggambarkan cinta, kecantikan, dan emosi manusia. Berkat karyanya menjadikannya salah satu tokoh besar dalam sastra dunia klasik.",
    url: "./image/50.jpeg",
    jodoh: "Sabar - Tegas - Pemaaf",
    film: "Ammonite - Lady Bird",
    rarity: "Common",
  },
  "sendiri-inovasi-detail-arahan-kelompok-wanita": {
    nomor: 51,
    nama: "Aspasia",
    biografi:
      "Seorang intelektual dan orator dari Miletos, Yunani Kuno. Ia dikenal karena kecerdasannya, pengaruh politiknya, dan kontribusinya dalam budaya Athena, meski menghadapi kritik karena perannya sebagai wanita dalam ranah publik.",
    url: "./image/51.jpeg",
    jodoh: "Sederhana - Tulus - Sabar",
    film: "Les Miserables - The Post",
    rarity: "Common",
  },
  "sendiri-inovasi-detail-arahan-umum-wanita": {
    nomor: 52,
    nama: "Mary Cassatt",
    biografi:
      "Seorang pelukis dan pembuat grafis asal Amerika yang dikenal karena karyanya tentang kehidupan wanita, terutama hubungan ibu dan anak. Sebagai anggota kelompok impresionis di Prancis, ia menjadi salah satu seniman wanita terkemuka abad ke-19.",
    url: "./image/52.jpeg",
    jodoh: "Empati - Lembut - Tulus",
    film: "Potrait of a Lady on Fire - The Danish Girl",
    rarity: "Rare",
  },
  "sendiri-inovasi-spontan-memimpin-kelompok-wanita": {
    nomor: 53,
    nama: "Rabi'ah al-Adawiyah",
    biografi:
      "Sufi wanita terkenal dari Basra, Irak. Ia dikenal karena ajarannya tentang cinta tulus kepada Allah, menekankan ibadah berdasarkan cinta, bukan takut. Hidupnya penuh kesederhanaan dan spiritualitas, menjadikannya ikon tasawuf dalam Islam.",
    url: "./image/53.jpeg",
    jodoh: "Teguh - Peduli - Penyabar",
    film: "The Secret Life of Walter Mitty - The Intouchables",
    rarity: "Legendary",
  },
  "sendiri-inovasi-spontan-memimpin-umum-wanita": {
    nomor: 54,
    nama: "Frida Kahlo",
    biografi:
      "Pelukis Meksiko terkenal karena potret dirinya yang menggambarkan rasa sakit dan identitasnya. Mengalami kecelakaan parah pada usia 18 tahun, ia menyalurkan emosinya melalui seni. Kahlo menjadi ikon feminisme dan budaya Meksiko.",
    url: "./image/54.jpeg",
    jodoh: "Sensitif - Tulus - Sederhana",
    film: "An Education - The Broken Circle Breakdown",
    rarity: "Common",
  },
  "sendiri-inovasi-spontan-arahan-kelompok-wanita": {
    nomor: 55,
    nama: "Virginia Woolf",
    biografi:
      "Penulis dan feminis Inggris terkenal, pelopor aliran stream of consciousness. Karya utamanya meliputi Mrs. Dalloway dan To the Lighthouse. Woolf juga mendirikan Hogarth Press. Ia memperjuangkan hak perempuan dalam esainya A Room of One’s Own.",
    url: "./image/55.jpeg",
    jodoh: "Lugas - Cerdas - Sensitif",
    film: "A Ghost Story - Eternal Sunshine of the Spotless Mind",
    rarity: "Common",
  },
  "sendiri-inovasi-spontan-arahan-umum-wanita": {
    nomor: 56,
    nama: "Agatha Christie",
    biografi:
      'Penulis Inggris terkenal sebagai "Ratu Kejahatan" Ia menciptakan detektif ikonik seperti Hercule Poirot dan Miss Marple, dengan karya terkenal seperti Murder on the Orient Express. Christie adalah salah satu penulis terlaris sepanjang masa.',
    url: "./image/56.jpeg",
    jodoh: "Percaya - Lugas - Kritis",
    film: "Knives Out - Sherlock Holmes",
    rarity: "Common",
  },
  "sendiri-rutinitas-detail-memimpin-kelompok-wanita": {
    nomor: 57,
    nama: "Clara Schumann",
    biografi:
      "Pianis, komposer, dan guru musik Jerman terkenal. Ia memengaruhi musik romantik lewat karya dan penampilannya. Sebagai salah satu pianis terbaik zamannya, sambil menciptakan komposisi yang dihargai hingga kini.",
    url: "./image/57.jpeg",
    jodoh: "Setia - Sabar - Empati",
    film: "La La Land - Whiplash",
    rarity: "Rare",
  },
  "sendiri-rutinitas-detail-memimpin-umum-wanita": {
    nomor: 58,
    nama: "Artemisia Gentileschi",
    biografi:
      "Pelukis Barok Italia terkenal, dikenal karena karyanya yang dramatis dan penuh emosi, sering menggambarkan tokoh perempuan kuat. Sebagai salah satu pelukis wanita pertama yang diakui di era itu yang kebanyakan didominasi pria.",
    url: "./image/58.jpeg",
    jodoh: "Sensitif - Lugas - Berani",
    film: "Promising Young Woman - The White Tiger",
    rarity: "Common",
  },
  "sendiri-rutinitas-detail-arahan-kelompok-wanita": {
    nomor: 59,
    nama: "Manuela Sáenz",
    biografi:
      "Seorang pejuang kemerdekaan Amerika Selatan. Lahir di Ekuador, ia mendukung perjuangan melawan penjajahan Spanyol, menjadi tokoh penting dalam revolusi. Ia berperan dalam penyelamatkan Bolívar dari upaya pembunuhan.",
    url: "./image/59.jpeg",
    jodoh: "Ambisius - Sabar - Percaya",
    film: "The Hunger Games - Kill Bill: Vol. 1",
    rarity: "Rare",
  },
  "sendiri-rutinitas-detail-arahan-umum-wanita": {
    nomor: 60,
    nama: "Ratu Nefertiti",
    biografi:
      "Dikenal karena kecantikannya, Nefertiti berperan penting dalam agama dan politik Mesir kuno, mendukung perubahan agama monoteistik yang dipimpin Akhenaten. Ia mungkin pernah memerintah sebagai firaun setelah kematian suaminya.",
    url: "./image/60.jpeg",
    jodoh: "Sabar - Sensitif - Empati",
    film: "Queen of Katwe - Coco",
    rarity: "Common",
  },
  "sendiri-rutinitas-spontan-memimpin-kelompok-wanita": {
    nomor: 61,
    nama: "Nellie Bly",
    biografi:
      "Jurnalis investigatif Amerika yang terkenal karena menyamar untuk mengungkap kondisi rumah sakit jiwa dalam Ten Days in a Mad-House. Ia menjadi pelopor jurnalisme investigatif dan hak-hak perempuan dalam bidang media.",
    url: "./image/61.jpeg",
    jodoh: "Optimis - Mandiri - Tanggap",
    film: "12 Years a Slave - Dark Waters",
    rarity: "Common",
  },
  "sendiri-rutinitas-spontan-memimpin-umum-wanita": {
    nomor: 62,
    nama: "Murasaki Shikibu",
    biografi:
      "Penulis dan pujangga Jepang abad ke-11, terkenal sebagai penulis The Tale of Genji, novel pertama yang dianggap sebagai karya sastra panjang terbesar. Ia adalah seorang wanita istana di Heian dan berperan dalam perkembangan sastra Jepang klasik.",
    url: "./image/62.jpeg",
    jodoh: "Sopan - Empati - Inovatif",
    film: "The Queen's Gambit - Potrait of a Lady",
    rarity: "Common",
  },
  "sendiri-rutinitas-spontan-arahan-kelompok-wanita": {
    nomor: 63,
    nama: "Tomoe Gozen",
    biografi:
      "adalah seorang samurai wanita Jepang terkenal pada abad ke-12, yang berjuang dalam Perang Genpei. Dikenal karena keahlian dalam bertempur, keberanian, dan kecantikan, ia menjadi simbol kekuatan wanita dalam sejarah Jepang.",
    url: "./image/63.jpeg",
    jodoh: "Percaya - Serius - Pintar",
    film: "Pacific Rim - A Quiet Place",
    rarity: "Rare",
  },
  "sendiri-rutinitas-spontan-arahan-umum-wanita": {
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
  card.style.backgroundImage = "url('./image/main.jpg')";
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
    // deskripsi.innerHTML = dataHasil[score].biografi;
    deskripsi.innerHTML = dataHasil[score].caption;
    // jodoh.innerHTML = dataHasil[score].jodoh;
    // film.innerHTML = dataHasil[score].film;
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
    // deskripsi.innerHTML = dataHasil[score].biografi;
    deskripsi.innerHTML = dataHasil[score].caption;
    // jodoh.innerHTML = dataHasil[score].jodoh;
    // film.innerHTML = dataHasil[score].film;
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

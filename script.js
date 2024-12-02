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
const hasil = document.getElementById("hasil");
const deskripsi = document.getElementById("deskripsi");
const bar = document.getElementById("bar");
const loading = document.getElementById("loading");

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
    choice2: "Menerima arahan",
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
      "Leonardo da Vinci (1452–1519) adalah seorang seniman, ilmuwan, dan penemu Italia, terkenal dengan karya seperti Mona Lisa dan The Last Supper. Dikenal karena kecerdasan dan penemuan-penemuannya di berbagai bidang, da Vinci dianggap salah satu jenius terbesar dalam sejarah manusia.",
    url: "./image/1.jpeg",
  },
  "pria-sosial-inovasi-detail-memimpin-umum": {
    nomor: 2,
    nama: "Thomas Jefferson",
    biografi:
      "adalah Presiden ketiga Amerika Serikat dan penulis utama Deklarasi Kemerdekaan. Ia memperluas wilayah AS melalui Pembelian Louisiana dan mendukung pemerintahan yang terbatas, hak individu, dan pendidikan. Jefferson meninggalkan warisan penting dalam pembentukan negara Amerika.",
    url: "./image/2.jpeg",
  },
  "pria-sosial-inovasi-detail-arahan-kelompok": {
    nomor: 3,
    nama: "Nikola Tesla",
    biografi:
      "adalah seorang ilmuwan, insinyur listrik, fisikawan, dan penemu yang lahir di Smiljan, Kroasia (saat itu bagian dari Kekaisaran Austria). Ia terkenal karena kontribusinya pada pengembangan teknologi arus bolak-balik (AC) dan inovasinya yang menjadi dasar banyak teknologi modern.",
    url: "./image/3.jpeg",
  },
  "pria-sosial-inovasi-detail-arahan-umum": {
    nomor: 4,
    nama: "Martin Luther King Jr",
    biografi:
      'adalah seorang pendeta dan aktivis hak sipil dari Amerika Serikat yang memimpin perjuangan melawan diskriminasi rasial melalui aksi tanpa kekerasan. Ia terkenal dengan pidato "I Have a Dream" yang menyerukan kesetaraan dan keadilan.',
    url: "./image/4.jpeg",
  },
  "pria-sosial-inovasi-spontan-memimpin-kelompok": {
    nomor: 5,
    nama: "Napoleon Bonaparte",
    biografi:
      "adalah Kaisar Prancis dan jenderal militer terkenal karena inovasinya dalam strategi perang. Ia memiliki jiwa pemimpin yang kuat, sering membuat keputusan spontan, dan mementingkan kepentingan Prancis serta pasukannya dalam memperluas kekaisaran dan mempertahankan kekuasaan.",
    url: "./image/5.jpeg",
  },
  "pria-sosial-inovasi-spontan-memimpin-umum": {
    nomor: 6,
    nama: "Genghis Khan",
    biografi:
      "adalah pemimpin Mongol yang dikenal karena inovasi dalam taktik militer dan organisasi pasukan. Ia memiliki jiwa pemimpin yang kuat, sering membuat keputusan spontan, dan memimpin untuk memperluas kekaisarannya serta mendukung perdagangan dan pemerintahan efisien di wilayah yang dikuasainya.",
    url: "./image/6.jpeg",
  },
  "pria-sosial-inovasi-spontan-arahan-kelompok": {
    nomor: 7,
    nama: "Benedict Arnold",
    biografi:
      "adalah jenderal Amerika yang awalnya terkenal karena inovasinya dalam strategi militer dan kepemimpinan selama Perang Kemerdekaan. Ia sering bersosialisasi dengan pemimpin militer, membuat keputusan spontan di medan perang, dan mementingkan kepentingan perjuangan kemerdekaan Amerika. Namun, karena merasa diabaikan dan kecewa, ia akhirnya berkhianat dan bergabung dengan Inggris, memperjuangkan kepentingan mereka selama perang.",
    url: "./image/7.jpeg",
  },
  "pria-sosial-inovasi-spontan-arahan-umum": {
    nomor: 8,
    nama: "Galileo Galilei",
    biografi:
      "adalah ilmuwan dan astronom yang terkenal karena inovasinya, seperti penemuan teleskop. Ia sering bersosialisasi dengan ilmuwan lain, membuat keputusan spontan dalam penelitiannya, dan memimpin dalam memperkenalkan teori heliosentris. Galileo berfokus pada kepentingan umum dengan menyebarkan pengetahuan ilmiah yang mendasari revolusi ilmiah.",
    url: "./image/8.jpeg",
  },
  "pria-sosial-rutinitas-detail-memimpin-kelompok": {
    nomor: 9,
    nama: "King David",
    biografi:
      "adalah Raja Israel yang terkenal karena kepemimpinan dan keberaniannya dalam memimpin pasukan Israel. Ia memperluas wilayah kerajaannya dan dianggap sebagai pemimpin yang bijaksana, berani, dan perhatian terhadap rakyatnya. David juga dikenal karena menulis banyak puisi dalam kitab Mazmur, dan ia memimpin dengan memprioritaskan kepentingan bangsa Israel.",
    url: "./image/9.jpeg",
  },
  "pria-sosial-rutinitas-detail-memimpin-umum": {
    nomor: 10,
    nama: "Homer",
    biografi:
      "adalah penyair epik Yunani yang menulis Iliad dan Odyssey. Karya-karyanya, yang penuh detail, menggambarkan nilai-nilai kepahlawanan dan kebijaksanaan. Meskipun sedikit yang diketahui tentang hidupnya, Homer memengaruhi budaya Yunani dan memberikan kontribusi besar pada sastra dan pemikiran umum.",
    url: "./image/10.jpeg",
  },
  "pria-sosial-rutinitas-detail-arahan-kelompok": {
    nomor: 11,
    nama: "Marcus Vipsanius Agrippa",
    biografi:
      "adalah jenderal Romawi yang setia kepada Kaisar Augustus. Ia merencanakan strategi militer dan pembangunan secara detail, membantu kemenangan besar seperti Pertempuran Actium, serta mementingkan kepentingan Kekaisaran Romawi.",
    url: "./image/11.jpeg",
  },
  "pria-sosial-rutinitas-detail-arahan-umum": {
    nomor: 12,
    nama: "Imhotep",
    biografi:
      "adalah tokoh Mesir kuno yang sesuai dengan deskripsi tersebut. Sebagai arsitek, dokter, dan penasihat Raja Djoser, Imhotep dikenal karena rutinitasnya dalam merancang proyek besar seperti Piramida Bertingkat di Saqqara dengan perhatian detail. Ia bekerja di bawah arahan Djoser dan mementingkan kepentingan umum melalui inovasi di bidang arsitektur, kedokteran, dan administrasi yang mendukung kemakmuran Mesir.",
    url: "./image/12.jpeg",
  },
  "pria-sosial-rutinitas-spontan-memimpin-kelompok": {
    nomor: 13,
    nama: "Attila the Hun",
    biografi:
      "adalah pemimpin suku Hun yang terkenal karena kemampuannya bersosialisasi dengan sekutu dan pasukannya. Ia dikenal spontan dalam mengambil keputusan militer, memiliki jiwa pemimpin yang kuat, dan sangat mementingkan kepentingan kelompoknya, yaitu bangsa Hun. Attila memperluas wilayahnya dengan menaklukkan banyak bagian Eropa dan menanamkan pengaruh besar dalam sejarah Eropa kuno.",
    url: "./image/13.jpeg",
  },
  "pria-sosial-rutinitas-spontan-memimpin-umum": {
    nomor: 14,
    nama: "Pericles",
    biografi:
      "adalah pemimpin Athena kuno yang terkenal. Ia dikenal suka bersosialisasi, menjalankan rutinitas pemerintahan, dan bertindak spontan dalam situasi krisis. Sebagai pemimpin yang visioner, Pericles memprioritaskan kepentingan umum dengan memperluas demokrasi dan mendukung seni, budaya, serta pembangunan seperti Parthenon, menjadikan Athena pusat peradaban Yunani.",
    url: "./image/14.jpeg",
  },
  "pria-sosial-rutinitas-spontan-arahan-kelompok": {
    nomor: 15,
    nama: "Zhuge Liang",
    biografi:
      "seorang ahli strategi militer dan negarawan dari Tiongkok kuno, adalah tokoh yang cocok. Ia bersosialisasi dengan para pejabat dan rakyat, menjalankan rutinitas perencanaan dengan cermat, tetapi juga mampu bertindak spontan dalam situasi krisis. Sebagai penasihat utama Liu Bei dari negara Shu Han, Zhuge Liang mementingkan kepentingan kelompok dengan memberikan kontribusi besar dalam memperkuat kekuasaan Shu selama era Tiga Kerajaan.",
    url: "./image/15.jpeg",
  },
  "pria-sosial-rutinitas-spontan-arahan-umum": {
    nomor: 16,
    nama: "William Wallace",
    biografi:
      "adalah tokoh Skotlandia terkenal yang memimpin perlawanan melawan Inggris. Ia bersosialisasi dengan rakyat dan para pejuang, menjalankan rutinitas perang gerilya, dan bertindak spontan dalam strategi melawan pasukan yang lebih besar. Wallace mengikuti arahan pemimpin Skotlandia untuk membebaskan tanah airnya dan mementingkan kepentingan umum dengan memperjuangkan kemerdekaan Skotlandia hingga akhir hayatnya.",
    url: "./image/16.jpeg",
  },
  "pria-sendiri-inovasi-detail-memimpin-kelompok": {
    nomor: 17,
    nama: "Niccolò Machiavelli",
    biografi:
      "adalah filsuf, penulis, dan negarawan Italia yang sesuai dengan deskripsi ini. Ia sering bekerja secara mandiri, menciptakan inovasi dalam teori politik dengan pendekatan pragmatis. Machiavelli memperhatikan detail dalam karyanya, seperti The Prince, yang membahas strategi kepemimpinan. Sebagai pejabat Republik Florence, ia berjiwa pemimpin dan mementingkan kepentingan negara serta stabilitas kelompok penguasanya.",
    url: "./image/17.jpeg",
  },
  "pria-sendiri-inovasi-detail-memimpin-umum": {
    nomor: 18,
    nama: "Albert Einstein",
    biografi:
      "adalah seorang ilmuwan terkemuka, Einstein dikenal sebagai pribadi yang lebih suka menyendiri untuk berpikir dan mengembangkan ide-ide inovatif. Ia sangat berfokus pada inovasi dalam bidang fisika, menghasilkan teori relativitas yang mengubah cara kita memahami alam semesta.",
    url: "./image/18.jpeg",
  },
  "pria-sendiri-inovasi-detail-arahan-kelompok": {
    nomor: 19,
    nama: "Charles Darwin",
    biografi:
      "adalah ilmuwan asal Inggris yang mengembangkan teori evolusi melalui seleksi alam. Ia bekerja secara mandiri, mengumpulkan data secara detail, dan menulis karya On the Origin of Species. Darwin berfokus pada kemajuan ilmiah untuk kepentingan pemahaman manusia tentang kehidupan dan alam.",
    url: "./image/19.jpeg",
  },
  "pria-sendiri-inovasi-detail-arahan-umum": {
    nomor: 20,
    nama: "Nikolaus Copernicus",
    biografi:
      "adalah astronom asal Polandia yang mengemukakan teori heliosentris, yang menyatakan bahwa matahari adalah pusat tata surya. Ia sering bekerja sendirian dan melakukan analisis mendalam tentang gerakan planet. Copernicus menentang pandangan geosentris yang sudah diterima luas dan memberikan kontribusi besar bagi perkembangan ilmu astronomi demi kepentingan umum.",
    url: "./image/20.jpeg",
  },
  "pria-sendiri-inovasi-spontan-memimpin-kelompok": {
    nomor: 21,
    nama: "Julius Caesar",
    biografi:
      "adalah pemimpin militer dan politik Romawi yang membawa perubahan besar dalam sejarah Roma. Ia terkenal karena menaklukkan Galia, mengakhiri Republik Romawi, dan memulai era Kekaisaran. Sebagai diktator, ia memperkenalkan reformasi besar, tetapi pemerintahannya berakhir dengan pembunuhan oleh para senator yang merasa terancam oleh kekuasaannya.",
    url: "./image/21.jpeg",
  },
  "pria-sendiri-inovasi-spontan-memimpin-umum": {
    nomor: 22,
    nama: "Edgar Allan Poe",
    biografi:
      "adalah Penulis Amerika yang terkenal dengan cerpen horor dan misterinya. Poe dianggap sebagai salah satu pendiri genre detektif modern. Ia memiliki kehidupan yang penuh misteri dan tragis, yang terrefleksi dalam karya-karyanya.",
    url: "./image/22.jpeg",
  },
  "pria-sendiri-inovasi-spontan-arahan-kelompok": {
    nomor: 23,
    nama: "Socrates",
    biografi:
      "adalah seorang filsuf Yunani yang terkenal dengan kebiasaan menyendiri, berinovasi dalam pemikiran, dan melakukan diskusi secara spontan. Ia mengikuti prinsip-prinsip kebijaksanaan dan mencari kebenaran, sambil mementingkan kepentingan masyarakat melalui pengajaran dan pemikiran kritis.",
    url: "./image/23.jpeg",
  },
  "pria-sendiri-inovasi-spontan-arahan-umum": {
    nomor: 24,
    nama: "Aristotle",
    biografi:
      "adalah filsuf Yunani yang suka menyendiri, berinovasi dalam pemikiran, dan mengambil keputusan spontan. Ia mengikuti ajaran Plato dan mementingkan kepentingan umum melalui kontribusinya dalam ilmu pengetahuan dan etika.",
    url: "./image/24.jpeg",
  },
  "pria-sendiri-rutinitas-detail-memimpin-kelompok": {
    nomor: 25,
    nama: "Isaac Newton",
    biografi:
      "adalah seorang ilmuwan yang lebih memilih kesendirian, sangat disiplin dalam menjalani rutinitas, dan sangat memperhatikan detail dalam penelitiannya. Sebagai pemimpin dalam dunia sains, penemuannya yang monumental memengaruhi generasi mendatang dan memajukan ilmu pengetahuan untuk kepentingan umat manusia.",
    url: "./image/25.jpeg",
  },
  "pria-sendiri-rutinitas-detail-memimpin-umum": {
    nomor: 26,
    nama: "Alexander the Great",
    biografi:
      "adalah tokoh yang sesuai dengan deskripsi tersebut. Ia dikenal sebagai pemimpin militer yang cerdas dan berjiwa pemimpin, sering menjalani rutinitas ketat dan memimpin pasukannya dengan detail. Meskipun sering berada di medan perang, ia juga dikenal dengan kemampuannya untuk memperluas dan menyatukan kerajaan demi kepentingan umum, termasuk penyebaran kebudayaan dan pengetahuan ke wilayah yang ia taklukkan.",
    url: "./image/26.jpeg",
  },
  "pria-sendiri-rutinitas-detail-arahan-kelompok": {
    nomor: 27,
    nama: "Plato",
    biografi:
      "adalah filsuf Yunani, Ia sering menyendiri untuk berpikir mendalam dan menjalankan rutinitas filosofis. Plato sangat memperhatikan detail dalam karyanya, seperti dalam dialog-dialognya yang mendalam. Ia mengikuti ajaran gurunya, Socrates, dan mementingkan kepentingan kelompok tertentu, terutama dalam membangun masyarakat ideal berdasarkan filosofi keadilan.",
    url: "./image/27.jpeg",
  },
  "pria-sendiri-rutinitas-detail-arahan-umum": {
    nomor: 28,
    nama: "Carl Linnaeus",
    biografi:
      "adalah Seorang ahli botani Swedia yang mengembangkan sistem klasifikasi makhluk hidup yang masih digunakan hingga kini. Linnaeus dikenal dengan ketelitiannya dalam mengidentifikasi dan mengklasifikasikan tanaman. Kehidupannya yang dihabiskan untuk mempelajari alam menunjukkan dedikasinya pada ilmu pengetahuan.",
    url: "./image/28.jpeg",
  },
  "pria-sendiri-rutinitas-spontan-memimpin-kelompok": {
    nomor: 29,
    nama: "Leonidas I",
    biografi:
      "adalah Raja Sparta yang terkenal karena kepemimpinannya dalam Pertempuran Thermopylae, di mana ia memimpin pasukannya dengan keberanian luar biasa. Ia menjalani rutinitas ketat dan selalu fokus pada strategi detail, meskipun terkadang harus membuat keputusan spontan. Leonidas berjiwa pemimpin yang kuat dan mementingkan kepentingan Sparta, bahkan mengorbankan nyawanya untuk mempertahankan kebebasan dan kehormatan negaranya.",
    url: "./image/29.jpeg",
  },
  "pria-sendiri-rutinitas-spontan-memimpin-umum": {
    nomor: 30,
    nama: "Marcus Aurelius",
    biografi:
      "adalah Kaisar Romawi yang juga seorang filsuf Stoik. Ia terkenal dengan kebiasaan menyendiri untuk bermeditasi, menjalani rutinitas yang disiplin, dan membuat keputusan spontan yang bijaksana. Sebagai pemimpin, ia mementingkan kepentingan umum, berfokus pada stabilitas dan kesejahteraan Romawi, serta menulis 'Meditations' untuk membagikan pemikirannya tentang kebajikan dan tanggung jawab.",
    url: "./image/30.jpeg",
  },
  "pria-sendiri-rutinitas-spontan-arahan-kelompok": {
    nomor: 31,
    nama: "Hannibal Barca",
    biografi:
      "adalah jenderal Carthage yang terkenal karena strategi militernya yang cemerlang dalam Perang Punic Kedua. Ia sering menyendiri untuk merencanakan taktik, menjalani rutinitas ketat, dan membuat keputusan spontan di medan perang. Hannibal mementingkan kepentingan Carthage dan pasukannya dalam melawan Roma, serta mengikuti arahan untuk mempertahankan negara dan menghancurkan musuh.",
    url: "./image/31.jpeg",
  },
  "pria-sendiri-rutinitas-spontan-arahan-umum": {
    nomor: 32,
    nama: "Confucius",
    biografi:
      "adalah filsuf Tiongkok yang menekankan pentingnya etika, hubungan sosial, dan pemerintahan yang adil. Ia dikenal menyendiri untuk merenung, menjalankan rutinitas dalam mengajarkan nilai-nilai moral, dan sering membuat keputusan spontan dalam situasi tertentu. Confucius mementingkan kepentingan umum dengan mengajarkan prinsip-prinsip kebajikan untuk menciptakan masyarakat yang harmonis.",
    url: "./image/32.jpeg",
  },
  "wanita-sosial-inovasi-detail-memimpin-kelompok": {
    nomor: 33,
    nama: "Marie Curie",
    biografi:
      "adalah seorang ilmuwan inovatif yang tidak hanya berfokus pada penemuan, tetapi juga mementingkan kepentingan umum, terutama dalam bidang medis dan ilmiah. Kepemimpinannya dalam penelitian dan kolaborasi ilmiah menjadikannya salah satu tokoh wanita paling berpengaruh di dunia.",
    url: "./image/33.jpeg",
  },
  "wanita-sosial-inovasi-detail-memimpin-umum": {
    nomor: 34,
    nama: "Cleopatra VII",
    biografi:
      "adalah Ratu Mesir yang terkenal karena kemampuannya dalam membina hubungan diplomatik dan berinovasi dalam pemerintahan. Sebagai pemimpin, ia menjalankan strategi dengan cermat dan berjiwa pemimpin, selalu memprioritaskan kesejahteraan Mesir dan kepentingan rakyatnya dalam menghadapi tantangan politik dan militer.",
    url: "./image/34.jpeg",
  },
  "wanita-sosial-inovasi-detail-arahan-kelompok": {
    nomor: 35,
    nama: "Queen Elizabeth I",
    biografi:
      "adalah Ratu Inggris yang ahli bersosialisasi dan berinovasi dalam pemerintahan. Ia memperhatikan detail kebijakan, mengikuti nasihat penasihatnya, dan selalu memprioritaskan kepentingan Inggris serta stabilitas negaranya.",
    url: "./image/35.jpeg",
  },
  "wanita-sosial-inovasi-detail-arahan-umum": {
    nomor: 36,
    nama: "Hypatia dari Alexandria",
    biografi:
      "adalah ilmuwan dan filsuf yang terkenal karena inovasinya dalam matematika dan astronomi. Ia mengajarkan ilmu pengetahuan secara terbuka, memimpin sekolah filsafat, dan selalu mementingkan kepentingan umum dengan berbagi pengetahuan kepada masyarakat.",
    url: "./image/36.jpeg",
  },
  "wanita-sosial-inovasi-spontan-memimpin-kelompok": {
    nomor: 37,
    nama: "Joan of Arc",
    biografi:
      "adalah pahlawan Perancis, ia dikenal karena keberaniannya dalam memimpin pasukan untuk melawan Inggris selama Perang Seratus Tahun. Joan berjiwa pemimpin, membuat keputusan spontan di medan perang, dan berinovasi dalam taktik militer. Ia juga aktif bersosialisasi dengan para pemimpin dan mementingkan kepentingan Perancis serta rakyatnya.",
    url: "./image/37.jpeg",
  },
  "wanita-sosial-inovasi-spontan-memimpin-umum": {
    nomor: 38,
    nama: "Catherine the Great",
    biografi:
      "adalah Ratu Rusia yang terkenal karena inovasi dalam pemerintahan, kepemimpinan yang kuat, dan memperkenalkan reformasi. Ia juga aktif bersosialisasi dengan pemimpin Eropa dan mementingkan kepentingan umum melalui pendidikan dan modernisasi Rusia.",
    url: "./image/38.jpeg",
  },
  "wanita-sosial-inovasi-spontan-arahan-kelompok": {
    nomor: 39,
    nama: "Queen Victoria",
    biografi:
      "adalah Ratu Inggris, ia terkenal karena bersosialisasi dengan banyak pemimpin dunia, serta memimpin dengan bijaksana dan inovatif. Queen Victoria mengikuti arahan dari penasihatnya dan berfokus pada kepentingan Inggris, terutama dalam memperkuat Kekaisaran Inggris dan kesejahteraan rakyatnya selama era Victoria.",
    url: "./image/39.jpeg",
  },
  "wanita-sosial-inovasi-spontan-arahan-umum": {
    nomor: 40,
    nama: "Florence Nightingale",
    biografi:
      "adalah pelopor keperawatan modern yang dikenal karena inovasinya dalam sistem perawatan kesehatan. Ia berjiwa pemimpin, mengambil tindakan spontan untuk memperbaiki kondisi rumah sakit, dan selalu mementingkan kepentingan umum dengan meningkatkan standar perawatan dan menyelamatkan nyawa.",
    url: "./image/40.jpeg",
  },
  "wanita-sosial-rutinitas-detail-memimpin-kelompok": {
    nomor: 41,
    nama: "Rosalind Franklin",
    biografi:
      "adalah seorang ilmuwan Inggris yang berkontribusi besar dalam penemuan struktur DNA. Ia lahir di London dan menunjukkan minat pada sains sejak kecil. Setelah menyelesaikan pendidikan di bidang kimia fisik, Franklin bekerja di berbagai laboratorium, termasuk di Paris, di mana ia mengembangkan keahlian dalam kristalografi sinar-X.",
    url: "./image/41.jpeg",
  },
  "wanita-sosial-rutinitas-detail-memimpin-umum": {
    nomor: 42,
    nama: "Jane Austen",
    biografi:
      "adalah novelis Inggris yang terkenal dengan karya seperti Pride and Prejudice dan Sense and Sensibility. Lahir di Hampshire, ia menulis tentang cinta, pernikahan, dan kehidupan sosial dengan humor halus dan kritik tajam. Karya-karyanya kini dianggap klasik sastra dunia.",
    url: "./image/42.jpeg",
  },
  "wanita-sosial-rutinitas-detail-arahan-kelompok": {
    nomor: 43,
    nama: "Lise Meitner",
    biografi:
      "adalah fisikawan Austria-Swedia yang berkontribusi pada penemuan fisi nuklir. Ia bekerja sama dengan Otto Hahn, tetapi tidak menerima Nobel bersamanya. Sebagai wanita Yahudi, ia melarikan diri dari Nazi Jerman. Meitner dihormati dengan elemen meitnerium yang dinamai untuknya.",
    url: "./image/43.jpeg",
  },
  "wanita-sosial-rutinitas-detail-arahan-umum": {
    nomor: 44,
    nama: "Raden Adjeng Kartini",
    biografi:
      "adalah tokoh emansipasi perempuan Indonesia. Lahir di Jepara, ia memperjuangkan hak pendidikan dan kesetaraan bagi perempuan melalui surat-suratnya yang kemudian dibukukan sebagai Habis Gelap Terbitlah Terang. Kartini menjadi simbol perjuangan perempuan Indonesia dan diperingati setiap 21 April.",
    url: "./image/44.jpeg",
  },
  "wanita-sosial-rutinitas-spontan-memimpin-kelompok": {
    nomor: 45,
    nama: "Boudica",
    biografi:
      "adalah ratu suku Iceni di Inggris kuno yang memimpin pemberontakan besar melawan Kekaisaran Romawi. Dikenal karena keberaniannya, ia hampir berhasil menggulingkan kekuasaan Romawi sebelum akhirnya dikalahkan. Boudica menjadi simbol perlawanan dan kebebasan di Britania Raya.",
    url: "./image/45.jpeg",
  },
  "wanita-sosial-rutinitas-spontan-memimpin-umum": {
    nomor: 46,
    nama: "Wu Zetian",
    biografi:
      "adalah satu-satunya kaisar perempuan dalam sejarah Tiongkok, memerintah Dinasti Tang. Cerdas dan ambisius, ia memperluas kekuasaan kerajaan, memperkuat birokrasi, dan mendukung budaya serta inovasi. Pemerintahannya kontroversial tetapi membawa stabilitas dan kemajuan signifikan sebelum berakhir pada 705 M.",
    url: "./image/46.jpeg",
  },
  "wanita-sosial-rutinitas-spontan-arahan-kelompok": {
    nomor: 47,
    nama: "Hildegard von Bingen",
    biografi:
      "adalah seorang biarawati Jerman, teolog, komponis, dan ilmuwan. Ia dikenal sebagai pelopor musik sakral, penulis teks medis, dan mistikus. Hildegard memimpin Biara Rupertsberg dan meninggalkan warisan intelektual serta spiritual yang luar biasa, menjadikannya salah satu tokoh perempuan paling berpengaruh di Abad Pertengahan.",
    url: "./image/47.jpeg",
  },
  "wanita-sosial-rutinitas-spontan-arahan-umum": {
    nomor: 48,
    nama: "Ada Lovelace",
    biografi:
      "adalah matematikawan Inggris yang dikenal sebagai programmer komputer pertama di dunia. Ia bekerja dengan Charles Babbage pada mesin analitik dan menciptakan algoritma untuk mesin tersebut. Putri penyair Lord Byron, Lovelace menggabungkan matematika dan imajinasi, meletakkan dasar bagi pengembangan komputasi modern.",
    url: "./image/48.jpeg",
  },
  "wanita-sendiri-inovasi-detail-memimpin-kelompok": {
    nomor: 49,
    nama: "Ada Lovelace",
    biografi:
      'adalah pelopor komputer asal Amerika, pencipta compiler pertama, dan pengembang bahasa pemrograman COBOL. Sebagai laksamana di Angkatan Laut AS, ia memimpin inovasi teknologi komputer. Dijuluki "Queen of Code," Hopper berperan besar dalam membangun fondasi ilmu komputer modern.',
    url: "./image/49.jpeg",
  },
  "wanita-sendiri-inovasi-detail-memimpin-umum": {
    nomor: 50,
    nama: "Sappho",
    biografi:
      "adalah penyair Yunani kuno asal Lesbos, terkenal dengan puisi-puisi liris yang menggambarkan cinta, kecantikan, dan emosi manusia. Karya-karyanya, yang sebagian besar hilang, memengaruhi sastra dan budaya, menjadikannya salah satu tokoh besar dalam sastra dunia klasik.",
    url: "./image/50.jpeg",
  },
  "wanita-sendiri-inovasi-detail-arahan-kelompok": {
    nomor: 51,
    nama: "Aspasia",
    biografi:
      "adalah seorang intelektual dan orator dari Miletos, Yunani Kuno, yang terkenal di Athena sebagai pasangan Perikles. Ia dikenal karena kecerdasannya, pengaruh politiknya, dan kontribusinya dalam budaya Athena, meski menghadapi kritik karena perannya sebagai wanita dalam ranah publik.",
    url: "./image/51.jpeg",
  },
  "wanita-sendiri-inovasi-detail-arahan-umum": {
    nomor: 52,
    nama: "Mary Cassatt",
    biografi:
      "adalah seorang pelukis dan pembuat grafis asal Amerika yang dikenal karena karyanya tentang kehidupan wanita, terutama hubungan ibu dan anak. Sebagai anggota kelompok impresionis di Prancis, ia menggunakan warna cerah dan teknik inovatif yang menjadikannya salah satu seniman wanita terkemuka abad ke-19.",
    url: "./image/52.jpeg",
  },
  "wanita-sendiri-inovasi-spontan-memimpin-kelompok": {
    nomor: 53,
    nama: "Rabi'ah al-Adawiyah",
    biografi:
      "adalah sufi wanita terkenal dari Basra, Irak. Ia dikenal karena ajarannya tentang cinta tulus kepada Allah tanpa pamrih, menekankan ibadah berdasarkan cinta, bukan takut atau harapan pahala. Hidupnya penuh kesederhanaan dan spiritualitas, menjadikannya ikon tasawuf dalam Islam.",
    url: "./image/53.jpeg",
  },
  "wanita-sendiri-inovasi-spontan-memimpin-umum": {
    nomor: 54,
    nama: "Frida Kahlo",
    biografi:
      "adalah pelukis Meksiko terkenal yang dikenal karena potret dirinya yang menggambarkan rasa sakit dan identitasnya. Mengalami kecelakaan parah pada usia 18 tahun, ia menyalurkan emosinya melalui seni. Kahlo menjadi ikon feminisme dan budaya Meksiko.",
    url: "./image/54.jpeg",
  },
  "wanita-sendiri-inovasi-spontan-arahan-kelompok": {
    nomor: 55,
    nama: "Virginia Woolf",
    biografi:
      "adalah penulis dan feminis Inggris terkenal, pelopor aliran stream of consciousness. Karya utamanya meliputi Mrs. Dalloway dan To the Lighthouse. Woolf juga mendirikan Hogarth Press. Ia memperjuangkan hak perempuan dalam esainya A Room of One’s Own.",
    url: "./image/55.jpeg",
  },
  "wanita-sendiri-inovasi-spontan-arahan-umum": {
    nomor: 56,
    nama: "Agatha Christie",
    biografi:
      'adalah penulis Inggris terkenal sebagai "Ratu Kejahatan" Ia menciptakan detektif ikonik seperti Hercule Poirot dan Miss Marple, dengan karya terkenal seperti Murder on the Orient Express. Dengan lebih dari 2 miliar buku terjual, Christie adalah salah satu penulis terlaris sepanjang masa.',
    url: "./image/56.jpeg",
  },
  "wanita-sendiri-rutinitas-detail-memimpin-kelompok": {
    nomor: 57,
    nama: "Clara Schumann",
    biografi:
      "adalah pianis, komposer, dan guru musik Jerman terkenal. Istri komposer Robert Schumann, Clara memengaruhi musik romantik lewat karya dan penampilannya. Sebagai salah satu pianis terbaik zamannya, ia mempopulerkan musik suaminya dan komposer lain, sambil menciptakan komposisi yang dihargai hingga kini.",
    url: "./image/57.jpeg",
  },
  "wanita-sendiri-rutinitas-detail-memimpin-umum": {
    nomor: 58,
    nama: "Artemisia Gentileschi",
    biografi:
      "adalah pelukis Barok Italia terkenal, dikenal karena karyanya yang dramatis dan penuh emosi, sering menggambarkan tokoh perempuan kuat. Sebagai salah satu pelukis wanita pertama yang diakui di era itu, ia menghadapi tantangan besar dalam dunia seni yang didominasi pria.",
    url: "./image/58.jpeg",
  },
  "wanita-sendiri-rutinitas-detail-arahan-kelompok": {
    nomor: 59,
    nama: "Manuela Sáenz",
    biografi:
      'adalah seorang pejuang kemerdekaan Amerika Selatan dan pasangan Simon Bolívar. Lahir di Ekuador, ia mendukung perjuangan melawan penjajahan Spanyol, menjadi tokoh penting dalam revolusi. Dikenal sebagai "Pembebas Perempuan," ia memainkan peran strategis dan berani, termasuk menyelamatkan Bolívar dari upaya pembunuhan.',
    url: "./image/59.jpeg",
  },
  "wanita-sendiri-rutinitas-detail-arahan-umum": {
    nomor: 60,
    nama: "Ratu Nefertiti",
    biografi:
      "adalah istri Firaun Akhenaten dan ibu tiri Tutankhamun. Dikenal karena kecantikannya, Nefertiti berperan penting dalam agama dan politik Mesir kuno, mendukung perubahan agama monoteistik yang dipimpin Akhenaten. Ia mungkin pernah memerintah sebagai firaun setelah kematian suaminya.",
    url: "./image/60.jpeg",
  },
  "wanita-sendiri-rutinitas-spontan-memimpin-kelompok": {
    nomor: 61,
    nama: "Nellie Bly",
    biografi:
      "adalah jurnalis investigatif Amerika yang terkenal karena menyamar untuk mengungkap kondisi rumah sakit jiwa dalam Ten Days in a Mad-House dan perjalanan keliling dunia dalam waktu 72 hari. Ia menjadi pelopor jurnalisme investigatif dan hak-hak perempuan dalam bidang media.",
    url: "./image/61.jpeg",
  },
  "wanita-sendiri-rutinitas-spontan-memimpin-umum": {
    nomor: 62,
    nama: "Murasaki Shikibu",
    biografi:
      "adalah penulis dan pujangga Jepang abad ke-11, terkenal sebagai penulis The Tale of Genji, novel pertama yang dianggap sebagai karya sastra panjang terbesar. Ia adalah seorang wanita istana di Heian dan berperan penting dalam perkembangan sastra Jepang klasik.",
    url: "./image/62.jpeg",
  },
  "wanita-sendiri-rutinitas-spontan-arahan-kelompok": {
    nomor: 63,
    nama: "Tomoe Gozen",
    biografi:
      "adalah seorang samurai wanita Jepang terkenal pada abad ke-12, yang berjuang dalam Perang Genpei. Dikenal karena keahlian dalam bertempur, keberanian, dan kecantikan, ia menjadi simbol kekuatan wanita dalam sejarah Jepang. Perannya dalam perang membuatnya legendaris hingga saat ini.",
    url: "./image/63.jpeg",
  },
  "wanita-sendiri-rutinitas-spontan-arahan-umum": {
    nomor: 64,
    nama: "Rumi",
    biografi:
      "adalah penyair dan mistikus Persia terkenal. Karyanya, terutama Masnavi, mengeksplorasi cinta, spiritualitas, dan koneksi dengan Tuhan. Sebagai pendiri aliran Mevlevi (Sufi Whirling Dervishes), Rumi menginspirasi banyak orang dengan ajaran cinta universal dan kedalaman spiritualnya.",
    url: "./image/64.jpeg",
  },
};

let score = "";
let nomor = 0;

question.innerHTML = questions[nomor].question;
btn1.innerHTML = questions[nomor].choice1;
btn2.innerHTML = questions[nomor].choice2;

card.style.backgroundImage = "url('./image/home.jpg')";

btnMulai.addEventListener("click", () => {
  title.innerHTML = "Pilih yang sesuai dengan diri kamu";
  containerSoal.style.display = "flex";
  containerHome.style.display = "none";
  card.style.backgroundImage = "url('./image/whiteboard6.jpeg')";
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
    setTimeout(() => {
      loading.style.width = `100%`;
      setTimeout(() => {
        title.innerHTML = "Kamu mirip dengan";
        containerLoading.style.display = "none";
        containerHasil.style.display = "flex";
        card.style.backgroundImage = `url(${dataHasil[score].url})`;
        containerEndButton.style.display = "flex";
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
    setTimeout(() => {
      loading.style.width = `100%`;
      setTimeout(() => {
        title.innerHTML = "Kamu mirip dengan";
        containerLoading.style.display = "none";
        containerHasil.style.display = "flex";
        card.style.backgroundImage = `url(${dataHasil[score].url})`;
        containerEndButton.style.display = "flex";
      }, 3000);
    }, 100);
  }
});

// Rotasi kartu ==========================

card.addEventListener("mousemove", (e) => {
  const x = e.pageX - card.offsetLeft - card.offsetWidth / 2;
  const y = e.pageY - card.offsetTop - card.offsetHeight / 2;
  card.style.transform = `perspective(1000px) rotateX(${
    (y / 10) * -1 * 2
  }deg) rotateY(${(x / 10) * 3}deg)`;
});

card.addEventListener("mouseleave", () => {
  card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});

card.addEventListener("touchmove", (e) => {
  const touch = e.touches[0];
  const x = touch.pageX - card.offsetLeft - card.offsetWidth / 2;
  const y = touch.pageY - card.offsetTop - card.offsetHeight / 2;
  card.style.transform = `perspective(1000px) rotateX(${
    (y / 10) * -1 * 2
  }deg) rotateY(${(x / 10) * 3}deg)`;
});

card.addEventListener("touchend", () => {
  card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
});

card.addEventListener("click", () => {
  setTimeout(() => {
    card.style.transform = `perspective(1000px) rotateX(0deg) rotateY(0deg)`;
  }, 1000);
});

// Button download restart kartu =========================

document.getElementById("button-download").addEventListener("click", () => {
  html2canvas(document.getElementById("card")).then((canvas) => {
    const link = document.createElement("a");
    link.download = "card.png"; // Nama file
    link.href = canvas.toDataURL("image/png"); // Konversi ke gambar
    link.click(); // Simpan file lokal
    alert("Sekarang unggah file ini secara manual ke Instagram!");
  });
});

document.getElementById("button-restart").addEventListener("click", () => {
  location.reload();
});

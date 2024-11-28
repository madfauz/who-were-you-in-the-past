const title = document.getElementById("title");
const card = document.getElementById("card");
const containerHome = document.getElementById("container-home");
const containerSoal = document.getElementById("container-soal");
const containerLoading = document.getElementById("container-loading");
const containerHasil = document.getElementById("container-hasil");
const question = document.getElementById("soal");
const btnMulai = document.getElementById("button-mulai");
const btn1 = document.getElementById("button-1");
const btn2 = document.getElementById("button-2");
const btnDownload = document.getElementById("button-download");
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
      "adalah seorang seniman, ilmuwan, dan polymath Italia yang terkenal karena karya-karya seperti Mona Lisa dan The Last Supper. Selain seni, ia melakukan inovasi dalam bidang anatomi, teknik, dan aerodinamika. Da Vinci menggabungkan seni dan sains, menggambar berbagai penemuan dan alat yang belum terwujud pada masanya. Kejeniusan dan pencapaiannya menjadikannya salah satu tokoh terbesar dalam sejarah Renaisans.",
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
};

let score = "";
let nomor = 0;

question.innerHTML = questions[nomor].question;
btn1.innerHTML = questions[nomor].choice1;
btn2.innerHTML = questions[nomor].choice2;

card.style.backgroundImage = "url('./image/home.jpg')";

// card.style.backgroundImage = "url('./image/whiteboard5.jpeg')";

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
        btnDownload.style.display = "block";
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
        btnDownload.style.display = "block";
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

// Download kartu =========================

document.getElementById("button-download").addEventListener("click", () => {
  html2canvas(document.getElementById("card")).then((canvas) => {
    const link = document.createElement("a");
    link.download = "card.png"; // Nama file
    link.href = canvas.toDataURL("image/png"); // Konversi ke gambar
    link.click(); // Simpan file lokal
    alert("Sekarang unggah file ini secara manual ke Instagram!");
  });
});

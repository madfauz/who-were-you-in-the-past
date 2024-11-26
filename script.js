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
      "adalah seorang inovator multi-talenta yang dikenal karena jiwa sosialnya, perhatian pada detail, dan kemampuan memimpin melalui karya-karya yang melampaui zamannya. Ia memprioritaskan inovasi untuk kepentingan masyarakat, menjadikannya simbol kreativitas dan kepemimpinan kolaboratif.",
    url: "./image/1.jpeg",
  },
  "pria-sosial-inovasi-detail-memimpin-umum": {
    nomor: 2,
    nama: "Thomas Jefferson",
    biografi:
      "adalah pemimpin visioner yang inovatif, bersosialisasi dengan luas, dan berfokus pada detail untuk menciptakan kebijakan yang mementingkan kepentingan masyarakat.",
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
    nama: "Elon Musk",
    biografi:
      "adalah tokoh visioner dunia, CEO Tesla dan SpaceX, yang dikenal suka bersosialisasi, berinovasi, bertindak spontan, memiliki jiwa kepemimpinan kuat, dan fokus pada proyek-proyek besar seperti energi terbarukan dan eksplorasi luar angkasa untuk kepentingan umat manusia.",
    url: "./image/5.jpeg",
  },
  "wanita-sosial-inovasi-detail-memimpin-kelompok": {
    nomor: 33,
    nama: "Marie Curie",
    biografi:
      "adalah seorang ilmuwan inovatif yang tidak hanya berfokus pada penemuan, tetapi juga mementingkan kepentingan umum, terutama dalam bidang medis dan ilmiah. Kepemimpinannya dalam penelitian dan kolaborasi ilmiah menjadikannya salah satu tokoh wanita paling berpengaruh di dunia.",
    url: "./image/33.jpeg",
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
      card.style.backgroundImage = `url(${dataHasil[score].url})`;
      setTimeout(() => {
        title.innerHTML = "Kamu mirip dengan";
        containerLoading.style.display = "none";
        containerHasil.style.display = "flex";
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
      card.style.backgroundImage = `url(${dataHasil[score].url})`;
      setTimeout(() => {
        title.innerHTML = "Kamu mirip dengan";
        containerLoading.style.display = "none";
        containerHasil.style.display = "flex";
      }, 3000);
    }, 100);
  }
});

// ==============================

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

// ==============================

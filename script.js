const containerSoal = document.getElementById("container-soal");
const containerHasil = document.getElementById("container-hasil");
const question = document.getElementById("soal");
const btn1 = document.getElementById("button-1");
const btn2 = document.getElementById("button-2");
const hasil = document.getElementById("hasil");

const questions = [
  {
    question: "Gender saya?",
    choice1: "Pria",
    choice2: "Wanita",
    code1: "pria",
    code2: "wanita",
  },
  {
    question: "Saya lebih suka menghabiskan waktu dengan?",
    choice1: "Interaksi sosial",
    choice2: "Menikmati waktu sendiri",
    code1: "sosial",
    code2: "sendiri",
  },
  {
    question: "Saya itu orangnya?",
    choice1: "Suka Berinovasi",
    choice2: "Suka Menjalankan Rutinitas",
    code1: "inovasi",
    code2: "rutinitas",
  },
  {
    question: "Ketika menjalankan sesuatu saya biasa?",
    choice1: "Perhatikan detail",
    choice2: "Lebih spotan",
    code1: "detail",
    code2: "spotan",
  },
  {
    question: "Di dalam suatu kegiatan saya cenderung?",
    choice1: "Senang memimpin",
    choice2: "Menerima arahan",
    code1: "memimpin",
    code2: "arahan",
  },
  {
    question: "Saya lebih memperjuangkan kepentingan?",
    choice1: "kelompok",
    choice2: "umum",
    code1: "kelompok",
    code2: "umum",
  },
];

let score = "";
let nomor = 0;

question.innerHTML = questions[nomor].question;
btn1.innerHTML = questions[nomor].choice1;
btn2.innerHTML = questions[nomor].choice2;

btn1.addEventListener("click", () => {
  score += `-${questions[nomor].code1}`;
  if (nomor < questions.length - 1) {
    nomor++;
    question.innerHTML = questions[nomor].question;
    btn1.innerHTML = questions[nomor].choice1;
    btn2.innerHTML = questions[nomor].choice2;
  } else {
    containerSoal.style.display = "none";
    containerHasil.style.display = "block";
    hasil.innerHTML = "Kode kamu adalah " + score;
  }
});

btn2.addEventListener("click", () => {
  score += `-${questions[nomor].code2}`;
  if (nomor < questions.length - 1) {
    nomor++;
    question.innerHTML = questions[nomor].question;
    btn1.innerHTML = questions[nomor].choice1;
    btn2.innerHTML = questions[nomor].choice2;
  } else {
    containerSoal.style.display = "none";
    containerHasil.style.display = "block";
    hasil.innerHTML = "Kode kamu adalah " + score;
  }
});

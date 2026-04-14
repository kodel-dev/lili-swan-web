// src/lib/stories.ts

export interface TimelineEvent {
  id: string;
  date: Date;
  title: string;
  description: string;
  isHighlight?: boolean;
  isClimax?: boolean;
}

export const timelineEvents: TimelineEvent[] = [
  {
    id: 'crisis',
    date: new Date('2026-03-28'),
    title: 'Momen Chaos',
    description: 'Lili mengalami mental health crisis — panic attack, anxiety, dan memblokir semua orang termasuk saya karena takut melampiaskan perasaannya ke orang-orang dekatnya. Hari yang paling berat, tapi juga awal dari segalanya.',
    isHighlight: true,
  },
  {
    id: 'unblock',
    date: new Date('2026-03-29'),
    title: 'Membuka Hati',
    description: 'Lili akhirnya membuka blokir dan bercerita jujur tentang dirinya. Dia takut terlihat bodoh, takut merepotkan. Tapi saya meyakinkan dia bahwa dia tidak sendirian. Dari sini, pertemanan kami mulai berubah menjadi sesuatu yang lebih dalam.',
  },
  {
    id: 'drama',
    date: new Date('2026-03-29'),
    title: 'Salah Kirim Chat',
    description: 'Malam itu ada salah kirim chat yang bikin drama kecil. Tapi kami menyelesaikannya dengan jujur dan terbuka. Justru dari situ kami belajar bahwa komunikasi adalah kunci.',
  },
  {
    id: 'getting-closer',
    date: new Date('2026-04-01'),
    title: 'Makin Dekat',
    description: '1-2 April, kami mulai makin dekat. Ngobrol santai, lebih nyaman satu sama lain. Setiap hari ada saja yang diceritain, dari hal kecil sampai mimpi-mimpi besar.',
  },
  {
    id: 'official',
    date: new Date('2026-04-08'),
    title: 'Hari Jadian Kami 🎉',
    description: '08 April 2026 — hari di mana kami resmi bersama. Dari pertemanan yang lahir dari keterbukaan dan saling pengertian, kami memutuskan untuk menjalani ini bersama. Hari terindah yang akan selalu diingat.',
    isClimax: true,
  },
];

export const liliProfile = {
  fullName: 'Kaelen Neriah Zephyr',
  nickname: 'Lili',
  username: 'angsaputiihh',
  birthday: new Date('2003-06-21'),
  zodiac: 'Cancer',
  zodiacSymbol: '♋',
  age: 22,
};

export const usernameStory = {
  title: 'Kisah Angsaputiihh',
  origin: 'ML Username',
  story: [
    {
      phase: 'Dulu',
      title: 'Angsaburukrupa',
      description: 'Lili dulu tidak boleh main HP, jadi hiburannya hanya buku. Dia baca buku dongeng tentang Mr. Bebek Kwek Kwek yang cerewet — dan dia merasa relate karena dia sendiri cerewet. Lalu ada buku tentang angsa cantik tapi kotor karena debu. Dari situ lahir username "angsaburukrupa" — simbol insecurity-nya.',
    },
    {
      phase: 'Sekarang',
      title: 'Angsaputiihh',
      description: 'Setelah perlahan belajar percaya diri, username berubah jadi "angsaputiihh" — angsa putih bersih yang akhirnya menerima dirinya sendiri. Dari insecurity menjadi self-love. Dari angsa kotor menjadi angsa putih yang indah.',
    },
  ],
};

export const liliQuotes = [
  {
    text: 'Gua mungkin pantes di panggil cakep2 tp stress sih ini haha',
    context: 'Curhatan Lili tentang hidupnya',
  },
  {
    text: 'Aku takut kalau aku marah, aku bakal nyakitin orang yang aku sayang.',
    context: 'Alasan Lili memblokir semua orang saat crisis',
  },
  {
    text: 'Makasih udah nggak nyerah nungguin aku.',
    context: 'Setelah Lili membuka hati',
  },
];

export const funFacts = [
  { icon: '📚', fact: 'Hobi utama: baca buku (karena dulu nggak boleh main HP)' },
  { icon: '🎮', fact: 'Pernah jago main Mobile Legends dengan username legendaris' },
  { icon: '🦆', fact: 'Identik dengan angsa — dari angsaburukrupa jadi angsaputiihh' },
  { icon: '💬', fact: 'Cerewet tapi baik hati — seperti Mr. Bebek Kwek Kwek' },
  { icon: '🌙', fact: 'Cancer zodiac — sensitif, peduli, dan sangat setia' },
  { icon: '✨', fact: 'Sudah belajar menerima diri sendiri dan tumbuh lebih kuat' },
];

export const moments = [
  {
    id: 'first-day',
    title: 'Hari Jadian',
    date: '08.04.26',
    description: 'Hari di mana semuanya berubah. Dari teman menjadi lebih.',
    icon: '💕',
  },
  {
    id: 'birthday',
    title: 'Ulang Tahun Lili',
    date: '21.06',
    description: 'Hari spesial untuk orang spesial. Cancer yang paling aku kenal.',
    icon: '🎂',
  },
  {
    id: 'first-chat',
    title: 'Hari Pertama Ngobrol',
    date: 'Maret 2026',
    description: 'Awal dari segalanya. Siapa sangka obrolan biasa jadi cerita indah.',
    icon: '💬',
  },
  {
    id: 'unblock-moment',
    title: 'Momen Terbuka',
    date: '29.03.26',
    description: 'Saat Lili akhirnya percaya dan bercerita tentang semuanya.',
    icon: '🦢',
  },
];

export const wishes = [
  'Semoga Lili selalu bahagia dan bisa terus menerima dirinya sendiri.',
  'Semoga angsa putih kita bisa terbang tinggi tanpa rasa takut.',
  'Semoga setiap hari bersama selalu penuh tawa dan kehangatan.',
  'Semoga Lili selalu ingat bahwa dia tidak sendirian.',
  'Semoga mental illness tidak pernah membuat Lili merasa kurang berharga.',
  'Semoga kita bisa terus tumbuh bersama, saling mendukung, dan saling mencintai.',
  'Semoga setiap buku yang Lili baca membawa kebahagiaan baru.',
  'Semoga Mr. Bebek Kwek Kwek selalu ada di hati Lili — cerewet tapi penuh cinta.',
];
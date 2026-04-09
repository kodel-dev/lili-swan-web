'use client';

import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

// Data chat dipertahankan sesuai aslinya
const chatHistory = [
  { time: "28/3 00.18", sender: "lili", text: "oiya besk amin brng sadam inter" },
  { time: "28/3 00.29", sender: "lili", text: "hop" },
  { time: "28/3 00.50", sender: "lili", text: "lngsung di tinggal gtu aja jir pdhl baru berapa menit ditinggal\nbesok ngakunya udh tdr\nboong pasti" },
  { time: "28/3 05.34", sender: "kodel", text: "aku baru bangun lilii\nyaa kann ngntukkk liliiii 😭\ntrust issue banget kamuuu 😭😭😭😭" },
  { time: "28/3 07.51", sender: "kodel", text: "liii\nmasih di block kah\nliliii\nliliiii" },
  { time: "28/3 16.50", sender: "lili", text: "hi" },
  { time: "28/3 16.53", sender: "kodel", text: "ihhh\nbntr bntr aku di jlan\nsumpahhh lii aku tadinya takuutt banget kamuuu tb tb" },
  { time: "28/3 17.52", sender: "lili", text: "tb2 meninggal?" },
  { time: "28/3 17.55", sender: "kodel", text: "bukannn 😭\nihh sumpah lii motor ku tidak amann co\nmogok mogokan" },
  { time: "28/3 18.41", sender: "kodel", text: "dingin banget dinginn\nkaya beda orang\nparah ihhh kamuuu\ncombo maut sinyal ilang ilangan, motor mogok batre sekarat 😭🗿" },
  { time: "28/3 19.36", sender: "lili", text: "lagian segala pergi ke ancol" },
  { time: "28/3 19.46", sender: "kodel", text: "tambah kamu menghilang tadi pagi\niyaa lagi tauu gitu mending main sama kamu 🗿 ga espek bakal kaya gini lii membagongkan" },
  { time: "28/3 20.15", sender: "lili", text: "hv fun deh" },
  { time: "28/3 20.17", sender: "kodel", text: "ga ada ni have fun have fun nya\nserius mau meninggal aku" },
  { time: "28/3 21.35", sender: "lili", text: "masih di ancol ?" },
  { time: "28/3 21.42", sender: "kodel", text: "ni lagi jalan pulang aku\nga lagi lagi keknya 😭" },
  { time: "28/3 21.55", sender: "lili", text: "masi jauh bgt kocak" },
  { time: "28/3 21.56", sender: "kodel", text: "sensi banget sama aku kayanya 🗿" },
  { time: "28/3 21.56", sender: "lili", text: "gtau masi bt mampus" },
  { time: "28/3 23.30", sender: "kodel", text: "yaa maap lii\naku baru sampaaai" },
  { time: "28/3 23.30", sender: "lili", text: "sorry kmu jd kena imbas nya" },
  { time: "28/3 23.30", sender: "kodel", text: "lagi istirahat di warung akuu\niyaaa gapapaa aku kaget ajaaa" },
  { time: "28/3 23.30", sender: "lili", text: "shit lah\nwkwk\nsorry bad word" },
  { time: "28/3 23.30", sender: "kodel", text: "masihh friendd kan kitaaa\namannn lii keluarkan saja uneg uneg mu" },
  { time: "28/3 23.31", sender: "lili", text: "ky nya g usah lg ga sih" },
  { time: "28/3 23.31", sender: "kodel", text: "kenawhy?" },
  { time: "28/3 23.31", sender: "lili", text: "Sedi sih klo g temenan lg, tp ky nya mnding bgtu\nhaha" },
  { time: "28/3 23.31", sender: "kodel", text: "kamu merasa ngeganggu lagi?\nga ada mending mendingnyaaa\nmksdnya kamu merasa kamu tu mengganggu aku gitu?" },
  { time: "28/3 23.32", sender: "lili", text: "g bgtu" },
  { time: "28/3 23.32", sender: "kodel", text: "aku pass di jalanpun sambil cek cek chatt tauuu\ndah di bukaaa atau belum akhirnya ceklis dua kamu balas 'hi'" },
  { time: "28/3 23.33", sender: "lili", text: "gini, kmu minta aku ngomong kan yaaa" },
  { time: "28/3 23.33", sender: "kodel", text: "heem" },
  { time: "28/3 23.33", sender: "lili", text: "aku jelasin dari awal bgt." },
  { time: "28/3 23.33", sender: "kodel", text: "bolehh" },
  { time: "28/3 23.41", sender: "lili", text: "sumpah\ngua gatau mau bilang apa wkwk\ngua minta maaf sm sikap gua semalem\nchildish bgt ya?" },
  { time: "28/3 23.42", sender: "kodel", text: "kenapa? 😭\ngaa liii akuu ngerti mungkin kamu masa lalu mu ada hall yg mungkin buat kamu trauma atau apaa aku ga tauu, cumaaa emang karna aku panikk aja 😭" },
  { time: "28/3 23.43", sender: "lili", text: "mental gua tb2 down aja, down bangeetttt. asli itu tb2 aja. gua gatau kalian paham ato engga sm situasi gua. tp yup, itu yg dinamakan mental illness wkwk\ngua g brmaksud mencari pembenaran dari sifat gua. cuma mungkin karna kalian udah cukup dalam kenal gua, jadi skrg kalian bisa liat kekurangan gua apa wkwk" },
  { time: "28/3 23.45", sender: "kodel", text: "iyaa ngertii maknya ku coba kasih space dulu sebentar tapi yaa namanya aku manusia kan yaa mungkin aku jugaa kaya ngerasaa gimana gitu 😭 jadi aku jugaa mintaa maaf kalau pas kamu lagi gitu aku malah spam gitu :V" },
  { time: "28/3 23.46", sender: "lili", text: "aku g ada masalah sm sekali sumpah sama kmu kk\naku kumat ky gini krn ada yg ngedistract aku aja" },
  { time: "28/3 23.46", sender: "kodel", text: "okee gapapa aku cuma ga enak aja pas spam tuu\nwalaeeee" },
  { time: "28/3 23.48", sender: "lili", text: "hati gua sensitif bgt kk, makanya gua sekali nya ke distract bisa nangis ampe berhari-hari" },
  { time: "28/3 23.49", sender: "kodel", text: "iyaa iyaa mungkin emang aku takutnyaa ada beberapa sifatku yang buat kamu ke distract atau apaa aku mintaa maaf\nsantai ajaa lii kamu ceplas ceploss ke akuu pun akuu ga masalah" },
  { time: "28/3 23.59", sender: "lili", text: "yup, semenjak gua di unfriend sm pacar tmn gua tanpa alasan. perasaan gua ga karuan, bertanya2 kenapa, gua salah apa... gua jadi panic attack, anxiety, dan down bgt.\n...jadi sebelum gua melampiaskan kegilaan gua ke org terdekat gua, gua langsung buru2 ngeblok lu juga.\n\ngua menghindari hal ky skrg ini terjadi. gua takut bgt keliatan bodoh dg ngejelasin gua kenapa ke org baru. gua udh cukup malu punya mental illness ky gini, jadi gua lebih baik g punya tmn." },
  { time: "29/3 00.02", sender: "lili", text: "gua blm sepenuhnya pulih dari hal semalam. gua buka blok nya karna gua mungkin bisa bunuh diri lagi krn perasaan yg g bisa gua selesaikan. gua udh kepalang malu, jdi nyebur aja sekalian.\ngua balesin chat kalian lagi, walaupun gua gatau pikiran kalian apa ttg gua.\ngua mmng pantes di panggil cakep2 tp stress sih ini hahaa" },
  { time: "29/3 00.02", sender: "kodel", text: "Makasih udah jelasin ya, Lii. Aku hargai banget keterbukaan kamu. Kamu nggak perlu takut kelihatan 'bodoh' atau ngerasa bersalah ke aku. Aku di sini karena aku emang pengen temenan sama kamu. Kalau kamu butuh waktu buat sendiri, bilang aja, aku bakal ngerti kok. Yang penting jangan tiba-tiba hilang ya, biar aku nggak ovt hehe. Semangat ya Lii, kamu nggak sendirian kok" },
  { time: "29/3 00.04", sender: "kodel", text: "Makasih ya Lii udah mau bales chat aku lagi Jujur, pikiran aku tentang kamu nggak berubah kok, aku tetep nganggep kamu orang yang asik diajak ngobrol Jangan ngerasa 'nyebur' atau malu ya, semua orang punya masa sulitnya masing-masing Aku di sini bukan buat nilai kamu, tapi buat temenin kamu Santai aja ya, nggak usah dipaksain buat langsung pulih" },
  { time: "29/3 00.05", sender: "lili", text: "sial... makin ngerasa bersalah anj. bener2 gabisa bgt gua ketemu tmn sefrekuensi tp beda gender... ngapain bela2in mau temenan ama org gila ky gua. gua aja gamau temenan sm diri gua sndiri. zuzur bangett. wkkw\nhahaa basa basi bgt ya. canggung bgt asli." },
  { time: "29/3 00.06", sender: "kodel", text: "wjitu kata lili dan dinda itu cowo temen aku\ngapapa lii aman aja" },
  { time: "29/3 00.07", sender: "lili", text: "mksd?\nmksd yg ini?" },
  { time: "29/3 00.07", sender: "kodel", text: "gausah canggung lagi\nakuu aman ajaa kamu mau gimana jugaaa\nohh itu ke temen kuu 😭 salaah kirim" },
  { time: "29/3 00.09", sender: "lili", text: "kmu ngomongin aku?\nke cewe mu?\norg2 sick bgt anj" },
  { time: "29/3 00.09", sender: "kodel", text: "ga ngomongin aku cuma sedang curhat saja ke temn ku\nmana ada bukan cewe kuu lili" },
  { time: "29/3 00.10", sender: "lili", text: "benci bgt gua ama lu hop\nanj bgt anj" },
  { time: "29/3 15.07", sender: "kodel", text: "Lii, lagi apa? Sibuk nggak? Aku cuma mau tanya kabar kamu semoga kamu sudah baikan" },
  { time: "29/3 15.08", sender: "lili", text: "?" },
  { time: "29/3 15.10", sender: "kodel", text: "hehe, maaf ya kalau keganggu aku cuma mau mastiin aja kamu udah lebih tenang atau belum. btw lagi sibuk kah?" },
  { time: "29/3 15.10", sender: "lili", text: "aneh sih org2" },
  { time: "29/3 15.13", sender: "kodel", text: "Iya emang aneh lii... maaf yahh tentang semalem nanti kalau kamu dahh baikan aku bisa jelasin lagi supaya kamu ga salah paham" },
  { time: "29/3 15.17", sender: "lili", text: "apa coba" },
  { time: "29/3 15.25", sender: "kodel", text: "wkwk asli Lii jadi itu murni salah paham gara gara aku salah kirim... aku pengen banget belajar biar bisa jaga perasaan kamu terus Maaf ya udah bikin kacau semalem, beneran nggak ada niat apa apa kok hehe. udah jelas kan sekarang?" },
  { time: "29/3 15.38", sender: "lili", text: "wkwk" },
  { time: "29/3 15.42", sender: "kodel", text: "wkwk aman ya berarti?" },
  { time: "29/3 15.51", sender: "lili", text: "ok" },
  { time: "29/3 15.52", sender: "kodel", text: "okee, makasih ya Lii sudah mau dengerin penjelasan aku... Kabarin ya kalau nanti mau ngobrol santai lagi, aku standby kok" },
  { time: "29/3 16.43", sender: "lili", text: "sarcasm doang elah itu\ntlfon “sepupu” mu anjir\nngapain ngadu ksini" },
  { time: "29/3 16.45", sender: "kodel", text: "gaa gituu lii 😭\njadi gini lii sebenernya aku bukan ngadu apa apaa ke sepupuku ituu, aku cumaa bingung + emang mungkun aku panik ajaa kali yaa kaget gituu..." },
  { time: "29/3 17.15", sender: "lili", text: "emng kmu pikir aku bego?\nu can’t trick me, young boy\nudh lah kmu g prlu pura2 supaya terlihat jujur. aku g peduli lg kok" },
  { time: "29/3 17.18", sender: "kodel", text: "kamu mau nanya ke orangnya langsung?\ngaa gitu liii yaa aku cumaa mau kitaaa tuu kayaa kemarin kemarinn gaa ada masalah apaaa apa" },
  { time: "29/3 17.19", sender: "lili", text: "dikabulkan\ntp kek nya klo sm persis gbisa wkwk\nchatan yg dikirim ke aku pake “aku kamu “ bahasanya\nyg di ss, pake lo gua. wkwk\njd keinget orang yang mau deketin org lain jalur curhat, trs ngomongin aku😭" },
  { time: "29/3 17.22", sender: "kodel", text: "ohhhh masalah ituu yaa aku tergantungg li kadang make bahasa aku kamu kadang lu gw ke sepupuku... fix kamu sudah trust issue banget sama akuu kayanyaa" },
  { time: "29/3 17.50", sender: "kodel", text: "menerutkuu ksmuu asikk abiss, di ajak ngobrol pun enak... jadii kamu cukup jadi diri kamu sendiri aja kamu jangan ngerasa sendiri kalau mau curhat sok curhat ke aku, aku bakal dengerin kamu tanpa nge judge kamu sedikit pun intinyaa semangat kalau di codinganmah Don't Worry, I'll Debug Your Problems" },
  { time: "1/4 16.33", sender: "lili", text: "biasanya sih, yang sahabatan itu pasti ada rasa sayang buat salah satu nya... kalo boleh atau engga nya, tentu boleh, tp harus ada batasan.\nkalo salah satu nya udh punya pasangan, persahabatan lawan jenis itu punya batasan yg lebih ketat" },
  { time: "1/4 16.38", sender: "kodel", text: "iyaa itu dia aku liat di komentar juga gitu" },
  { time: "2/4 02.31", sender: "kodel", text: "sumpah demi tuhan putus putus\nkenapa kamu tidak ngomong" },
  { time: "2/4 02.31", sender: "lili", text: "mls\nkan putus2\ngausa\nmls ngomong 2x\nyauda ya" },
  { time: "2/4 02.32", sender: "kodel", text: "kalau baca chat aku ga fokus ke subtitle lili" },
  { time: "2/4 02.32", sender: "lili", text: "iya ih\ngausa nnton\nturu aja\naku ngntuk" },
  { time: "2/4 02.35", sender: "lili", text: "aku alergi sm org judo\njudol" },
  { time: "2/4 02.35", sender: "kodel", text: "aku ga main lili aku mah ngikutin amanat kan" },
  { time: "2/4 02.35", sender: "lili", text: "hidup udh ribet malah makin susah yg ada\ngausa diterima\nngapain diterima kocak\nngeles lu\nlagian jg ga peduli sumpah\ntp jgn suatu hari nnti tb2 jual ini itu trs ujung2 nya nyari belas ksihan dari tmn buat minjem duit\ngua g punya tmn judol" },
  { time: "2/4 02.37", sender: "kodel", text: "iyaa ini aku paham" },
  { time: "2/4 02.37", sender: "lili", text: "udah dlu ya\naku mau tdr" },
  { time: "2/4 02.40", sender: "kodel", text: "marah kahh liilii\niyaaa udahh aku ga mainn lagi lilii next ku tolakk" },
  { time: "2/4 02.41", sender: "lili", text: "gamau terlalu dket sm tmn yg judol\njd kalo terlalu intens, jd too much" },
  { time: "2/4 02.42", sender: "kodel", text: "kan aku dah bilang gaa main lagi lili\nnext akutolak\njanji sumpah demi tuhan\naku bawa bawa tuhan tuu\nyaaa biar ga main lagi laaa" },
  { time: "2/4 02.42", sender: "lili", text: "santai aja kak\nbkn urusan aku jg toh\nemng siapa kah lili ini\nhanya seekor angsa" },
  { time: "2/4 02.43", sender: "kodel", text: "iya jadi urusan laa jadinya kan kamu tidak mau berteman\nyaa kan kitaa teman" },
  { time: "2/4 02.44", sender: "kodel", text: "kann aku maunya berteman yaa kalau kamuu tidakk suka, aku jauhin laaa, kalau ga gitu nanti kann tidaa berteman lagi" },
  { time: "2/4 02.45", sender: "lili", text: "husttt\ntidak usah bbnyk bicara\nmakin kesini makin kesana\nok deh" },
  { time: "2/4 02.46", sender: "kodel", text: "yaudahhh janji kann kamu saksi" },
  { time: "2/4 02.49", sender: "kodel", text: "ayoolaaa liliii maafin akuuu pelissssss 👉👈🥺\nkata mamah kalau bikin orang marah harus minta maaf" },
  { time: "2/4 02.50", sender: "lili", text: "ih gausa minta maaf ka\nsantai aja\nyauda ok\nnoted.\nku catet semuanya yg kmu blg ke aku tadi\nsemuanya\nevery single words" },
  { time: "2/4 02.51", sender: "kodel", text: "notedd yaaa next kamu terserah mauu gimana kalau akuu sampe gitu lagi\njanjii kitaa 🤞\n🤙 iniii janjii\nnoted kann noted" }
];

export default function OurStoryPage() {
  const endOfChatRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Memberikan jeda sedikit agar halaman selesai dirender sebelum scroll
    setTimeout(() => {
      endOfChatRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  }, []);

  return (
    <div className="min-h-screen bg-[#fdfbf7] relative overflow-hidden pt-28 pb-20 px-6 sm:px-12 md:px-20 lg:px-40">
      
      {/* Latar Belakang Hangat */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-rose-100/40 rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto">
        
        {/* Header Kisah */}
        <div className="text-center mb-16">
          <motion.p 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-rose-400 font-bold tracking-widest text-xs uppercase mb-3"
          >
            Riwayat Perjalanan
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-rose-900 mb-4"
          >
            The Chaos Before The Calm
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-zinc-500 font-serif italic text-lg"
          >
            Bagaimana kesalahpahaman dan kekacauan kecil membawa kita pada satu titik temu.
          </motion.p>
        </div>

        {/* Linimasa Cerita (Bukan Bubble Chat) */}
        <div className="relative border-l border-rose-200/60 ml-3 md:ml-6 space-y-10 pb-10">
          {chatHistory.map((chat, index) => {
            const isLili = chat.sender === "lili";
            
            return (
              <motion.div 
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="relative pl-8 md:pl-10"
              >
                {/* Dot Indikator Linimasa */}
                <div className={`absolute w-2.5 h-2.5 rounded-full left-[-5.5px] top-1.5 shadow-sm ${
                  isLili ? 'bg-rose-400 ring-4 ring-rose-50' : 'bg-zinc-400 ring-4 ring-zinc-50'
                }`} />

                {/* Nama & Waktu */}
                <div className="flex items-baseline gap-3 mb-1.5">
                  <span className={`font-serif text-lg ${isLili ? 'text-rose-700 font-medium' : 'text-zinc-800 font-semibold'}`}>
                    {isLili ? 'Lili' : 'Kodel'}
                  </span>
                  <span className="text-zinc-400 text-xs font-medium tracking-wide">
                    {chat.time}
                  </span>
                </div>

                {/* Teks Pesan */}
                <p className="text-zinc-600 leading-relaxed whitespace-pre-wrap font-sans text-sm md:text-base">
                  {chat.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Kesimpulan Penutup */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 p-8 md:p-12 bg-white/60 backdrop-blur-sm border border-rose-100 rounded-2xl shadow-sm text-center relative overflow-hidden"
        >
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-rose-300 to-transparent opacity-50" />
          
          <svg className="w-8 h-8 mx-auto text-rose-300 mb-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M4.583 17.321C3.553 16.227 3 15 3 13.011c0-3.5 4.02-6.59 8.125-10.09.418-.358.96-.358 1.375 0 4.105 3.5 8.125 6.59 8.125 10.09 0 1.989-.553 3.216-1.583 4.31-1.121 1.188-2.766 1.849-4.417 1.849-2.203 0-3.565-1.135-4.812-2.181-1.248 1.046-2.61 2.181-4.813 2.181-1.651 0-3.296-.661-4.417-1.849z"/>
          </svg>

          <p className="text-rose-800 font-serif italic text-xl md:text-2xl leading-relaxed mb-6">
            "Noted yaaa, next kamu terserah mau gimana kalau aku sampe gitu lagi... janjii kitaa 🤞"
          </p>
          <p className="text-zinc-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-sans">
            Dari rentetan kesalahpahaman, overthinking, dan keras kepala, akhirnya kita belajar untuk saling mendengarkan. Terima kasih sudah mencatat janjinya. Hari ini adalah awal dari kelanjutan cerita kita.
          </p>
        </motion.div>

        {/* Ref untuk auto-scroll */}
        <div ref={endOfChatRef} className="h-20" />
      </div>
    </div>
  );
}
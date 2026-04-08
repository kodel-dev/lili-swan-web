"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useRef } from "react";

// Mengubah data mentah menjadi format array agar mudah di-render
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

  // Auto-scroll ke bawah saat halaman dimuat (opsional)
  useEffect(() => {
    endOfChatRef.current?.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div style={{ 
      width: "100vw", 
      height: "100vh", 
      backgroundColor: "#050508", 
      color: "white", 
      position: "relative", 
      overflow: "hidden",
      fontFamily: "'Inter', sans-serif"
    }}>
      {/* Background Effect */}
      <div style={{
        position: "absolute", top: "-50%", left: "-50%", width: "200%", height: "200%",
        background: "radial-gradient(circle at 50% 50%, rgba(255, 179, 198, 0.05) 0%, transparent 60%)",
        pointerEvents: "none"
      }} />

      {/* Header */}
      <header style={{
        position: "absolute", top: 0, left: 0, width: "100%", height: "80px",
        background: "rgba(10, 10, 15, 0.8)", backdropFilter: "blur(10px)",
        borderBottom: "1px solid rgba(255, 179, 198, 0.1)", zIndex: 10,
        display: "flex", alignItems: "center", padding: "0 2rem", justifyContent: "space-between"
      }}>
        <Link href="/" style={{ 
          color: "#ffb3c6", textDecoration: "none", fontSize: "1rem", 
          display: "flex", alignItems: "center", gap: "10px", fontWeight: "bold" 
        }}>
          &larr; Kembali ke Angsa Putih
        </Link>
        <div style={{ textAlign: "right" }}>
          <h1 style={{ margin: 0, fontSize: "1.2rem", color: "#fff" }}>The Chaos Before The Calm</h1>
          <p style={{ margin: 0, fontSize: "0.8rem", color: "#888" }}>Lili & Kodel - 2026</p>
        </div>
      </header>

      {/* Chat Container */}
      <div style={{
        position: "absolute", top: "80px", left: "50%", transform: "translateX(-50%)",
        width: "100%", maxWidth: "800px", height: "calc(100vh - 80px)",
        overflowY: "auto", padding: "2rem", display: "flex", flexDirection: "column", gap: "1.5rem"
      }}>
        
        {/* Pesan Pembuka */}
        <div style={{ textAlign: "center", marginBottom: "2rem" }}>
          <span style={{ 
            background: "rgba(255, 179, 198, 0.1)", color: "#ffb3c6", 
            padding: "5px 15px", borderRadius: "20px", fontSize: "0.8rem", letterSpacing: "1px" 
          }}>
            RIWAYAT PERJALANAN KITA
          </span>
        </div>

        {/* Looping Chat History */}
        {chatHistory.map((chat, index) => {
          const isLili = chat.sender === "lili";
          
          return (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5 }}
              style={{
                alignSelf: isLili ? "flex-start" : "flex-end",
                maxWidth: "75%",
                display: "flex",
                flexDirection: "column",
                alignItems: isLili ? "flex-start" : "flex-end"
              }}
            >
              <span style={{ fontSize: "0.75rem", color: "#666", marginBottom: "5px", marginLeft: "5px", marginRight: "5px" }}>
                {isLili ? "Lili" : "Kodel"} • {chat.time}
              </span>
              <div style={{
                background: isLili 
                  ? "linear-gradient(135deg, rgba(255, 179, 198, 0.15), rgba(255, 179, 198, 0.05))" 
                  : "linear-gradient(135deg, rgba(74, 78, 105, 0.4), rgba(34, 34, 59, 0.4))",
                border: isLili ? "1px solid rgba(255, 179, 198, 0.3)" : "1px solid rgba(154, 140, 152, 0.2)",
                padding: "1rem 1.2rem",
                borderRadius: isLili ? "2px 20px 20px 20px" : "20px 2px 20px 20px",
                color: "#e0e0e0",
                fontSize: "0.95rem",
                lineHeight: "1.6",
                whiteSpace: "pre-wrap", // Mempertahankan enter/baris baru dari teks asli
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
              }}>
                {chat.text}
              </div>
            </motion.div>
          );
        })}

        {/* Pesan Penutup / Kesimpulan */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          style={{
            marginTop: "4rem", marginBottom: "4rem", padding: "2rem",
            background: "rgba(255, 179, 198, 0.05)", border: "1px dashed rgba(255, 179, 198, 0.3)",
            borderRadius: "20px", textAlign: "center"
          }}
        >
          <p style={{ color: "#ffb3c6", fontStyle: "italic", fontSize: "1.1rem", marginBottom: "1rem" }}>
            "noted yaaa next kamu terserah mau gimana kalau aku sampe gitu lagi... janjii kitaa 🤞"
          </p>
          <p style={{ color: "#888", fontSize: "0.9rem" }}>
            Dari rentetan kesalahpahaman, overthinking, dan keras kepala, akhirnya kita belajar untuk saling mendengarkan dan mengerti. Terima kasih sudah mencatat janjinya, Lili.
          </p>
        </motion.div>

        <div ref={endOfChatRef} />
      </div>
    </div>
  );
}
//const tombol =
//document.getElementById("btninstagram"); // Mengambil elemen HTML yang id-nya btnInstagram
//let jumlahKlik = 0; //tempat menyimpan angka

//tombol.addEventListener("click", function() { // addEventListener("click", function(){...}) kalau tomol ini di klik , lakukan sesuatu
   // alert("Terimakasih sudah mengunjungi instagram Defri 💚"); // alert("...") tampilkan pesan pop up
//jumlahKlik = jumlahKlik + 1; //nambah 1 setiap di kilk
//tombol.innerText = "Sudah diklik " + // ganti teks yang ada di dalam tombol
//jumlahKlik + "kali";

//if(jumlahKlik===1){ // maksimal tombol di klik 1 kali
//tombol.style.pointerEvents = "none";
//tombol.style.opacity = "0.7";
//}

//});

const tombol =                                           // Variabel tidak bolehd ganti isinya
document.getElementById("btninstagram");                 // Seluruh halaman html
let sudahKlik = false;                                   // Let=>Variabel yang boleberuah,sudak kilik=>status blag, Fals=. Kondisi awal ( belum diklik)

tombol.addEventListener("click",function(){              // addEvtistenr=> pasang "pendengar", clik=> even kilk mouse, function=> kod yang dijelankan saat klik 

   if(sudahKlik === false) {                             // kondisi, ====> perbandinga ketat (nilai + tipe data, Falese=> cek apak belum di klik)
      tombol.innerText = "sudahKlik ✅";                // Innertext=> teks di dalam elemen
      tombol.style.backgroundColor = "#9e9e9e";        // Style=> ubah css langsung dari jsackgrund > warna latar
      sudahKlik = true;                                  // update state, sekarang tombol di anggap sudah klik 
   } else {                                              // kalua kondisi iftidak terpenuhi
      tombol.innerText = "Kunjungi instagram";           //Tombol kembali ke kondisi awal,  ini yang bikin kondisi toggle hidup mati 
      tombol.style.backgroundColor = "#43a047";
      sudahKlik = false;                                 //Tombol kembali ke kondisi awal,  ini yang bikin kondisi toggle hidup mati 
                                                         //Logika ini bisa dibaca seperti manusia:
                                                         //“kalau belum diklik → ubah teks & warna → tandai sudah diklik
                                                         //Kalau sudah diklik → balikin ke awal → tandai belum diklik”
   }
});

   const inputNama=document.getElementById("inputNama"); // Ambil <iinput id="inputNama"
   const btnSubmit =document.getElementById("btnSubmit"); // Ambil tombol kirim
   const hasil =document.getElementById("hasil");         // Ambil <p id = " hasil"> Tempat nampilin hasil

   btnSubmit.addEventListener("click", function (){
      const nama = inputNama.value.trim ();                  // .Value => isi teks yang diketik user, disimpan ke variabel nama 📌 Ini cara JS membaca input user
      // Trim bersihin input user
      if(nama===""){                                     // Kalau user tidak mengeik apa-apa
         hasil.innerText = "Nama tidak boleh kosong 😅"; // Tampilan eror ke user
         hasil.style.color = "red";
      }else{
         hasil.innerText = "Halo," + nama + "! Senang kenal denganmu 👋"; // Gabungkan teks + nama usr 📌ini namanya tring concatenation
         hasil.style.color = "green";
         inputNama.value = ""; 
      }
   });

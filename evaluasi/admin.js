const firebaseConfig = {
    apiKey: "AIzaSyB9BZ9FyfJ3ICQcz99ck540q1gJwzdUiy8",

    authDomain: "hasil-evaluasi.firebaseapp.com",

    databaseURL: "https://hasil-evaluasi-default-rtdb.asia-southeast1.firebasedatabase.app",

    projectId: "hasil-evaluasi",

    storageBucket: "hasil-evaluasi.appspot.com",
    
    messagingSenderId: "317397860964",
    
    appId: "1:317397860964:web:af4af3dd61e22a0893d571"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);



let selanjutnya = document.querySelector('.lanjut');
let datadiri = document.querySelector('.data_diri');
namanya = document.getElementById('nama');
kelasnya = document.getElementById('kelas');
sekolah = document.getElementById('sekolah');
let sekolahfix = '';
let kelasfix = '';

selanjutnya.addEventListener('click', function () {

    let cek = 0;
    if (namanya.value == "") {
        if (namanya.className.indexOf('tt_salah') == -1) {
            namanya.className += ' tt_salah';
        }
    } else {
        namanya.className = namanya.className.replace('tt_salah', '');
        cek += 1;

    }

    if (kelasnya.value == "0") {
        if (kelasnya.className.indexOf('tt_salah') == -1) {
            kelasnya.className += ' tt_salah';
        }
    } else {
        kelasnya.className = kelasnya.className.replace('tt_salah', '');
        if (kelasnya.value == "1") {
            kelasfix = "X A TKJ";
        } else if (kelasnya.value == "2") {
            kelasfix = "X B TKJ";
        }
        cek += 1;
    }

    if (sekolah.value == "0") {
        if (sekolah.className.indexOf('tt_salah') == -1) {
            sekolah.className += ' tt_salah';
        }
    } else {
        sekolah.className = sekolah.className.replace('tt_salah', '');
        if (sekolah.value == "1") {
            sekolahfix = "SMK Muhammadiyah 1 Banjarmasin";
        }
        cek += 1;
    }

    // console.log(sekolahfix);

    if (cek != 3) {
        alert("lengkapi dulu data dari anda");
    } else if (cek == 3) {
        document.getElementById('dafis').className += ' hilang';
        document.getElementById('data').className += ' hilang';
        datadiri.className += ' hilang';
        document.getElementById('kiri').className = document.getElementById('kiri').className.replace('hilang', '');
        document.getElementById('kanan').className = document.getElementById('kanan').className.replace('hilang', '');
    }
});

// function readlah() {
//     var task = firebase.database().ref("kontrolkuis1/");
//     let tmp = document.querySelector('body');

//     task.on("child_added", function (data) {
//         var taskvalue = data.val();

//         if ((taskvalue.id == "12093499") && (taskvalue.nilai == 0)) {
//             tmp.innerHTML += '<div class = "full" > <p>HALAMAN TIDAK DAPAT DIAKSES</p> </div>'
//             // console.log('0');
//         } else {
//             // console.log('1');
//         }



//     });
// }

window.onload = function () {
    namanya.value = "";
    kelasnya.value = value = "0";
    sekolah.value = value = "0";


    document.getElementById('kiri').className += ' hilang';
    document.getElementById('kanan').className += ' hilang';

    readlah();

}

// -----------------------------------------------------------------------------------------
// mengambil data dan menampilkanya

let dat = new XMLHttpRequest();
dat.onreadystatechange = function () {
    
    cek = [];
    jwbs = [];
    hasilakhir = 0;
    benarr = 0;
    salahh = 0;

    if (dat.readyState == 4 && dat.status == 200) {
        // tankap apapun responsnya tangkap,lalu diubah ke objeck
        let data = JSON.parse(this.responseText);
        // melihat data 
        // console.log(data);

        // ---------------------------------
        // acak urutan soal
        //random urutan
        for (let x = 0; x < 100; x++) {
            // acak angka dengan batas length.data dan minimum 0
            let angka = Math.floor(Math.random() * data.length) + 0;
            cek.push(angka);
        }
        // membuang angka yang sama
        cek = Array.from(new Set(cek));
        console.log(cek);
        // ---------------------------------
        // ambil data tertentu

        for (let i = 0; i < cek.length; i++) {
            let nilai = cek[i];

            let soaldata = data[nilai]["soal" + nilai]["soal"];
            let jwb0 = data[nilai]["soal" + nilai]["a"];
            let jwb1 = data[nilai]["soal" + nilai]["b"];
            let jwb2 = data[nilai]["soal" + nilai]["c"];
            let jwb3 = data[nilai]["soal" + nilai]["d"];
            let jwb4 = data[nilai]["soal" + nilai]["e"];
            let nih = data[nilai]["soal" + nilai]["nih"];
            let bnr = data[nilai]["soal" + nilai]["benar"];

            let jwb = [jwb0, jwb1, jwb2, jwb3,jwb4, nih];

            jwbs.push(bnr);

            // ---------------------------------
            // // rangkai konten soal;
            // let bg_pertanyaan = document.getElementById('bg_pertanyaan');
            // if (i != 0) {
            //     bg_pertanyaan.className += " hilang";
            // }

            //nomor ke-
            let nomor = document.querySelectorAll(".soal #nomornya");
            nomor[i].innerHTML = i+1;

            //soal
            let soal = document.querySelectorAll(".bg_pertanyaan #soalnya");
            soal[i].innerHTML = soaldata;
            
            //pilihan a
            let piliha = document.querySelectorAll(".textnya #pilihannya0");
            piliha[i].innerHTML = jwb0;

            //pilihan b
            let pilihb = document.querySelectorAll(".textnya #pilihannya1");
            pilihb[i].innerHTML = jwb1;
            
            //pilihan c
            let pilihc = document.querySelectorAll(".textnya #pilihannya2");
            pilihc[i].innerHTML = jwb2;

            //pilihan d
            let pilihd = document.querySelectorAll(".textnya #pilihannya3");
            pilihd[i].innerHTML = jwb3;

            //pilihan e
            let pilihe = document.querySelectorAll(".textnya #pilihannya4");
            pilihe[i].innerHTML = jwb4;
            
            let bg_pertanyaan = document.getElementsByClassName("bg_pertanyaan");
            
            for(let u=0; u<bg_pertanyaan.length; u++){
                if(u!=0){
                    if(bg_pertanyaan[u].className.indexOf('hilang') == -1){
                        bg_pertanyaan[u].className += " hilang";
                            
                        }
                }
            }
            // //nomor ke
            // document.getElementById('nomornya').innerHTML = i+1;

            // // ---------------------------------

            // //soal
            // document.getElementById("soalnya").innerHTML = soaldata;

            // // ---------------------------------

            

            // // ---------------------------------

            

            // // ---------------------------------

            // //tombol selanjutnya
            // let nav_selanjut = document.getElementById("nav_selanjut");
            // if (i == (cek.length - 1)) {
            //     nav_selanjut.className += " disable";
            // }

            // ---------------------------------

            // ---------------------------------


        }

        let bg_pertanyaan = document.getElementsByClassName("bg_pertanyaan");
        
        //fungsi tombol lanjut
        let lanjut = document.querySelectorAll(".nav_selanjut");
        for(let y=0; y<lanjut.length; y++){
            lanjut[y].addEventListener('click', function(){
                if(lanjut[y].className.indexOf('disable') == -1){
                    if(bg_pertanyaan[y].className.indexOf('hilang') == -1){
                        bg_pertanyaan[y+1].className = bg_pertanyaan[y+1].className.replace("hilang","");
                        bg_pertanyaan[y].className += " hilang";
                    }
                    console.log(bg_pertanyaan[y+1]);       
                }
            })
        }

        //fungsi tombol sebelumnya
        let sebelum = document.querySelectorAll(".nav_sebelum");
        for(let y=0; y<sebelum.length; y++){
            sebelum[y].addEventListener('click', function(){
                if(sebelum[y].className.indexOf('disable') == -1){
                    if(bg_pertanyaan[y].className.indexOf('hilang') == -1){
                        bg_pertanyaan[y-1].className = bg_pertanyaan[y-1].className.replace("hilang","");
                        bg_pertanyaan[y].className += " hilang";
                    }
                }
            })
        }

        //navigasi soal
        let soal_nav = document.querySelectorAll(".soal_nav");
        for(let y=0; y<soal_nav.length; y++){
            soal_nav[y].addEventListener('click', function(){
                for(let u=0; u<bg_pertanyaan.length; u++){
                    if(bg_pertanyaan[u].className.indexOf('hilang') == -1){
                        bg_pertanyaan[u].className += " hilang";
                    }
                }
                bg_pertanyaan[y].className = bg_pertanyaan[y].className.replace("hilang","");
            })
        }
        
        //mewarnai soal yang sdh dijawab
        let soall = document.querySelectorAll(".soall");
        for(let y=0; y<soall.length; y++){
            soall[y].addEventListener('click',function(){
                let pilih = document.querySelectorAll(".bg_pilihan input");
                for(let j=0; j<pilih.length; j++){
                    pilih[j].addEventListener('click',function(){
                        soal_nav[y].className = soal_nav[y].className.replace("belum","sudah");
                    })
                }
            })
        }

        //cek jawaban
        let selesai = document.querySelector(".selesai");
        let pil_user = [];
        new_jwb_urut = [];
        new_jwb_urut_no = [];

        selesai.addEventListener("click", function(){
            let sarat = 0;
            
            for (let t = 0; t < jwbs.length; t++) {
                if ((soal_nav[t].className.indexOf('belum') == -1)) {
                    sarat = sarat + 1;
                    
                }
            }
            console.log(sarat);

            if (sarat == jwbs.length) {
                // array kunci
                // console.log(jwbs);
                hasilakhir = 0;
                benarr = 0;
                salahh = jwbs.length;

                for (let i = 0; i < jwbs.length; i++) {
                    let a = i+1;
                    let namaradio = document.getElementsByName("radio"+a);
                    let checked = false;
                    for (let j = 0; j < namaradio.length; j++) {
                        if(namaradio[j].checked){
                            checked = true;
                            pil_user.push(namaradio[j].value);
                            if(namaradio[j].value == jwbs[i]){
                                hasilakhir = hasilakhir + 10;
                                benarr = benarr + 1;
                            } else {
                                hasilakhir = hasilakhir;
                            }
                        }
                    }
                }


                for (let i = 0; i < cek.length; i++) {
                    for (let j = 0; j < cek.length; j++) {
                        if (i == cek[j]) {
                            new_jwb_urut.push(pil_user[j]);
                            new_jwb_urut_no.push(cek[j]);
                        }
                    }
                }
                console.log("jwb_user_urut_no :" + new_jwb_urut_no);
                console.log("jwb_user_urut :" + new_jwb_urut);

                
                // simpan kedatabase----------
                console.log(namanya.value);
                console.log(sekolahfix);
                console.log(kelasfix);
                console.log(hasilakhir);
                let waktunya = waktu();
                let harinya = hari();

                if (hasilakhir>=70){
                    localStorage.setItem('bab2',1)
                }
                createTask(sekolahfix, namanya.value.toUpperCase(), kelasfix, hasilakhir, waktunya, harinya, new_jwb_urut);

                let namainput = document.querySelector('.nama');
                namainput.innerText = namanya.value;

                let sekolahinput = document.querySelector('.sekolah');
                sekolahinput.innerText = sekolahfix;

                let kelasinput = document.querySelector('.kelas');
                kelasinput.innerText = kelasfix;

                let hariinput = document.querySelector('.hari');
                hariinput.innerText = harinya;

                let waktuinput = document.querySelector('.waktu');
                waktuinput.innerText = waktunya;

                let hasillinput = document.querySelector('.hasill');
                hasillinput.innerText = hasilakhir;

                let kirihilang = document.querySelector('.kiri');
                kirihilang.className += ' hilang';

                let kananhilang = document.querySelector('.kanan');
                kananhilang.className += ' hilang';

                let datanya = document.querySelector('.dataaa');
                datanya.className = datanya.className.replace('hilang', '');

                if(hasilakhir<70){
                    let ulang = document.getElementById("ulang");
                    ulang.className = ulang.className.replace("hilang","");
                } else{
                    let materi = document.getElementById("materi");
                    materi.className = materi.className.replace("hilang","");
                }
            } else {
                alert('Masih Ada Soal Yang Belum Dijawab, Periksa Kembali . . . !');
            }

            //nilai disimpan ke local storage
            localStorage.setItem("skkuis1",hasilakhir);
            console.log(localStorage);
            
        })
        
    }
    
}
dat.open('GET', 'dataa_kuis1.json', true);
dat.send();


//FUNGSI WAKTU DAN HARI
var d = new Date();
var t = d.getTime();
var counter = t;

// ambil jamnya
window.setTimeout("waktu()", 1000);

function waktu() {
    var tanggal = new Date();
    setTimeout("waktu()", 1000);
    return (tanggal.getHours() + ":" + tanggal.getMinutes() + ":" + tanggal.getSeconds());
}

// harinya
function hari() {
    tanggallengkap = new String();
    namahari = ("Minggu Senin Selasa Rabu Kamis Jumat Sabtu");
    namahari = namahari.split(" ");
    namabulan = ("Januari Februari Maret April Mei Juni Juli Agustus September Oktober November Desember");
    namabulan = namabulan.split(" ");
    tgl = new Date();
    hari = tgl.getDay();
    tanggal = tgl.getDate();
    bulan = tgl.getMonth();
    tahun = tgl.getFullYear();
    tanggallengkap = namahari[hari] + ", " + tanggal + " " + namabulan[bulan] + " " + tahun;
    return (tanggallengkap);
}

// //tomboll ulang
// let ulangin = document.querySelector('.tmblUlang');

// ulangin.addEventListener('click', function () {
//     document.getElementById("halskor").className += " hilang";
//     document.getElementById("data").className = document.getElementById("data").className.replace("hilang","");
//     datadiri.className = datadiri.className.replace("hilang","");
//     document.getElementById('nama').value="";
//     document.getElementById('kelas').value="0";
//     document.getElementById('sekolah').value="0";

//     for(let i=1; i<=10; i++){
//         let radio = document.getElementById("radio"+i);
//         radio.checked = false;
//     }
    
// })

function createTask(sekolah, nama, kelas, nilai, waktunya, hari, jwb) {
    counter += 1;
    var task = {
        id: counter,
        sekolah: sekolah,
        nama: nama,
        kelas: kelas,
        nilai: nilai,
        waktu: waktunya,
        hari: hari,
        jawabannya: jwb
    }

    let db = firebase.database().ref("kuiss1/" + counter);
    db.set(task);

}
          // waktu
              countDownDate = new Date().getTime();
            //waktu 15 menit
              countDownDate += 900500;
            //waktu 30 menit
            //   countDownDate += 1801000;
              //waktu 45 menit
              // countDownDate += 2700000;
              // countDownDate += 12000;
              //15 detik
            //   countDownDate += 17000;
              var x = setInterval(function() {
              var now = new Date().getTime();
              var distance = countDownDate - now;
                  
              // Perhitungan waktu untuk menit dan detik
              var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
              var seconds = Math.floor((distance % (1000 * 60)) / 1000);
                  
              document.getElementById("time").innerHTML = minutes + ":" + seconds;
                  
              if (distance < 0) {
                  clearInterval(x);
                  document.getElementById("time").innerHTML = "Waktu Selesai";
                  nilaiwktu=1;
              }
              }, 1000);
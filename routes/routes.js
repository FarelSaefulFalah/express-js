// import express
import express from "express";
 
// init express router
const router = express.Router();

router.get ('/biodata/:nama/:tempat_lahir/:tanggal_lahir/:Jenis_kelamin/:Agama/:Alamat/:Telepon/:Email/:Hobi/:cita_cita', function(req, res){
    var nama = req.params.nama;
    var tempat_lahir = req.params.tempat_lahir;
    var tanggal_lahir = req.params.tanggal_lahir;
    var Jenis_kelamin = req.params.Jenis_kelamin;
    var Agama = req.params.Agama;
    var Alamat = req.params.Alamat;
    var Telepon = req.params.Telepon;
    var Email = req.params.Email;
    var Hobi = req.params.Hobi;
    var cita_cita = req.params.cita_cita;
res.send('Nama :' +nama+ '<br>' +
    'Tampat Lahir :'+ tempat_lahir+'<br>'+
    'tanggal lahir : '+tanggal_lahir+'<br>'+
    'Jenis Kelamin : '+Jenis_kelamin+'<br>'+
    'Agama :'+Agama+'<br>' +
    'Alamat :'+Alamat+' <br>' +
    'Telepon :'+Telepon+' <br>' +
    'Email : '+Email+'<br>' +
    'Hobi : '+Hobi+'<br>' +
    'Cita-Cita : '+cita_cita+'<br>')
})

router.get ('/Aritmatika', function(req,res){
    //penjumlahan
    var bilangan1 = 10;
    var bilangan2 = 5;
    //pengurangan
    var bilangan3 = 890;
    var bilangan4 = 443;
    //pembagian
    var bilangan5 = 10;
    var bilangan6 = 5;
    //Perkalian
    var bilangan7 = 10;
    var bilangan8 = 63;
    //jumlah
    var tambah = bilangan1 + bilangan2
    var pengurangan = bilangan3 - bilangan4  
    var pembagian = bilangan5 / bilangan6
    var Perkalian = bilangan7 * bilangan8 
    var jumlahan = bilangan7 * bilangan8 / bilangan6
    res.send('<h3> Penjumlahan </h3>'+
    'Bilangan Ke 1 :'+bilangan1+'<br>'+
    'Bilangan ke 2 :'+bilangan2+'<br>'+
    'Hasil :' +tambah+'<hr>'+

    '<h3> Pengurangan </h3>'+
    'Bilangan Ke 1 :'+bilangan3+'<br>'+
    'Bilangan ke 2 :'+bilangan4+'<br>'+
    'Hasil :'+pengurangan+'<hr>'+

    '<h3> Pembagian</h3>'+
    'Bilangan Ke 1 :'+bilangan5+'<br>'+
    'Bilangan ke 2 :'+bilangan6+'<br>'+
    'Hasil :'+pembagian+'<hr>'+

    '<h3>Perkalian</h3>'+
    'Bilangan Ke 1 :'+bilangan7+'<br>'+
    'Bilangan ke 2 :'+bilangan8+'<br>'+
    'Hasil :'+Perkalian+'<hr>'+

    '<h3> Simatimatika</h3>'+
    'Bilangan Ke 1 :'+bilangan7+'<br>'+
    'Bilangan ke 2 :'+bilangan8+'<br>'+
    'Bilangan ke 3 :'+bilangan6+'<br>'+
    'Hasil :'+jumlahan+'<hr>');
})
//Bangung Datar
router.get ('/Bangun_Datar',function(req,res){
//var persegi
var sisi_persegi = 10;
//var persegi panjang
var panjang_persegi = 20;
var lebar_persegi = 10;
//var segitiga
var alasSegitiga = 10;
var tinggiSegitiga = 10;
//var lingkarang
var jari_jari_lingkaran = 10;
//rumus luas
var luas_persegi= sisi_persegi * sisi_persegi
var luas_persegi_panjang = panjang_persegi * lebar_persegi
var luas_segitiga = alasSegitiga * tinggiSegitiga / 2
var luas_lingkaran = jari_jari_lingkaran * jari_jari_lingkaran * 3.14

    res.send('<h3>Persegi</h3>'+
    'Sisi :'+sisi_persegi+'<br>'+
    'Sisi:'+sisi_persegi+'<br>'+
    'luas :'+luas_persegi+'<hr>'+
    
    '<h3>Persegi Panjang</h3>'+
    'Panjang :'+panjang_persegi+'<br>'+
    'Lebar :'+lebar_persegi+'<br>'+
    'Luas :'+luas_persegi_panjang+'<hr>'+
    
    '<h3>Segitiga</h3>'+
    'Alas :'+alasSegitiga+'<br>'+
    'Tinggi :'+tinggiSegitiga+'<br>'+
    'Dibagi : 2 <br>'+
    'Luas :'+luas_segitiga+'<hr>'+
    
    '<h3>Lingkaran</h3>'+
    'Jari Jari :'+jari_jari_lingkaran+'<br>'+
    'Konstanta : 3.14<br>'+
    'Luas :'+luas_lingkaran+'<hr>');
})
//tes 
router.get ('/Test/:nama/:kelas/:pts/:pas', function(req,res){
    var nama = req.params.nama;
    var kelas = req.params.kelas;
    var pts = parseInt(req.params.pts);
    var pas = parseInt(req.params.pas);

    var rapot = (pts + pas)/ 2;
//nilai pts
    if(rapot > 90 && rapot <100){
    var grade = "Grade A"
    }else if (rapot> 80 && rapot<89){
    var grade ='Grade B'
    }else if (rapot > 70 && rapot < 79){
    var grade ='Grade C'
    }else if( rapot> 60 && rapot < 69){
    var grade ='Grade D'
    }else if ( rapot > 50 && rapot <59){
    var grade ='Grade E'
    }else if( rapot > 0 && rapot < 49){
    var grade = "Belajar lagi"
    }else{
        var grade = 'nilai takde'
    }

    res.send(
        'nama : ' + nama + '<br>'+
        'kelas :' +kelas+ '<br>' +
        'nilai pts :' +pts+'<br>'+
        'nilai pas :'+pas+'<br>'+
        'nilai rapot :' + rapot +'<br>'+
        'keterangan : '+grade
    );
    
})

router.get('/Nest/:nama/:jurusan/:kelas', function (req, res) {

    var nama = req.params.nama;
    var jurusan = req.params.jurusan;
    var kelas = req.params.kelas;


    if (jurusan == 'RPL') {
        if (kelas == '10') {
           var ket = 'Anda Kelas 10 RPL';
        } else if (kelas == '11') {
           var ket = 'Anda kelas 11 RPL';
        } else if (kelas == '12') {
           var ket = 'Anda Kelas 12 RPL';
        } else {
           var ket = 'Anda Sudah lulus';
        }
    } else if (jurusan == 'TKRO') {
        if (kelas == '10') {
           var ket = 'Anda Kelas 10 TKRO';
        } else if (kelas == '11') {
           var ket = 'Anda kelas 11 TKRO';
        } else if (kelas == '12') {
           var ket = 'Anda Kelas 12 TKRO';
        } else {
           var ket = 'Anda Sudah lulus';
        }
    } else if (jurusan == 'TBSM') {
        if (kelas == '10') {
           var ket = 'Anda Kelas 10 TBSM';
        } else if (kelas == '11') {
           var ket = 'Anda kelas 11 TBSM';
        } else if (kelas == '12') {
           var ket = 'Anda Kelas 12 TBSM';
        } else {
           var ket = 'Anda Sudah lulus';
        }
    } else {
       var ket = 'Anda Sudah lulus';
    }

    res.send(
        'Nama: ' + nama + '<br>' +
        'Jurusan: ' + ket
    );
});
//LATIHAN IN HELL
router.get('/Shop/:nama/:tanggal/:jenis/:pesanan/:jumlah/',function(req,res){
    var nama = req.params.nama;
    var tanggal = req.params.tanggal;
    var jenis =  req.params.jenis;
    var pesanan =  req.params.pesanan;
    var jumlah =  parseInt(req.params.jumlah)
    //
      if (jenis == 'makanan') {
        if (pesanan == 'nasigoreng') {
           var ket = 20000;
        } else if (pesanan == 'miegoreng') {
           var ket = 30000;
        } else if (pesanan == 'ayamgoreng') {
           var ket = 40000;
        } else {
           var ket = '-';
        }
    }  else if (jenis == 'minuman') {
        if (pesanan == 'airmineral') {
           var ket = 10000;
        } else if (pesanan == 'jus') {
           var ket  = 20000;
        } else if (pesanan == 'kopi') {
           var ket  = 30000;
        } else {
           var ket = '-';
        }
    }
    var diskon;
    var total = jumlah * ket;
        if (total > 100000) {
            diskon = total - (total * 0.5);
        } else {
            diskon = 0;
        }
        var pembayaran = total - diskon;
    res.send(
        'Nama Pembeli :'+nama+'<br>'+
        'Tanggal : '+tanggal+'<br>'+
        'Jenis :'+jenis+'<br>'+
        'Pesanan :'+pesanan+'<br>'+
        'Harga :'+ket+'<br>'+
        'Jumlah :'+jumlah+'<br>'+
        '---------------------------------'+'<br>'+
        'Total :'+total+'<br>'+
        'diskon 50% :'+diskon+'<br>'+
        'Total Pembayan :'+pembayaran+'<br>'+
        '>>>>>>>Terimakasih Banj<<<<<<<<<'
    )
    
})
router.get('/sampel',function(req,res){
   res.send ('<h3>Selamat Datang</h3>')
})
export default router;
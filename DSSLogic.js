/*
Nama 		: Faiq Muhammad, Nanda Raihan Sukma,
              Ahmad Yahya Salim, Johanes Bagus Prasetyo
NPM			: 140810200011, 140810200015, 140810200031, 140810200043
Kelas		: A
Deskripsi	: Logic perhitungan sistem DSS
*/

function kalkulasiDSS() {
    var C1 = []; // variabel perbandingan penerima KIP dengan jumlah Partisipasi sekolah
    var C2 = []; // variabel perbandingan penerima KIP dengan jumlah Peserta Didik
    var C3 = []; // variabel perbandingan penerima KIS dengan jumlah Penderita Penyakit
    var C4 = []; // variabel perbandingan penerima KKS dengan jumlah Penyandang Cacat
    var R = [[],[],[],[]];          // matriks normalisasi
    var V = [0, 0, 0, 0];           // nilai perankingan
    var VMin = 100;                 // nilai ranking terkecil desa
    var VAv = 0                     // rank rata-rata
    var VMaks = 0                   // rank maks
    var iMin = 0;                   // indeks desa rank terkecil (i - 1)
    let W = [0.25, 0.2, 0.4, 0.15]; // bobot
    let n = 4;                      // jumlah desa yang dinilai

    for (i = 0; i < n; i++){
      j = 1 + i;

      C1[i] = document.getElementById("kip" + j).value / document.getElementById("partisipasiSekolah" + j).value;
      C2[i] = document.getElementById("kip" + j).value / document.getElementById("pesertaDidik" + j).value;
      C3[i] = document.getElementById("kis" + j).value / document.getElementById("penderitaPenyakit" + j).value;
      C4[i] = document.getElementById("kks" + j).value / document.getElementById("penyandangCacat" + j).value;
    }

    // normalisasi matriks
    for (i = 0; i < n; i++){
      R[i][0] = C1[i] / Math.max.apply(Math, C1);
      R[i][1] = C2[i] / Math.max.apply(Math, C2);
      R[i][2] = C3[i] / Math.max.apply(Math, C3);
      R[i][3] = C4[i] / Math.max.apply(Math, C4);
    }
    
    // perhitungan perankingan
    for (i = 0; i < n; i++){
      for (j = 0; j < n; j++){
        V[i] += R[i][j] * W[j];
      }
      VAv += V[i];
      if (VMin > V[i]){
        VMin = V[i];
        iMin = i;
      }
      if (VMaks < V[i]) VMaks = V[i];
    } 
    iMin += 1;
    VAv /= n;

    document.getElementById('output').style.display = "block";
    document.getElementById("desaMin").value = document.getElementById("desa" + iMin).value;
    document.getElementById("minRank").value = VMin;
    document.getElementById("maksRank").value = VMaks;
    document.getElementById("avRank").value = VAv;
  }
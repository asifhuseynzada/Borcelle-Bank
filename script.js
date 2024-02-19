// Kredi miktarı
let anaPara = 10000;

// Yıllık faiz oranı (yüzde cinsinden)
let yillikFaizOrani = 5;

// Kredi vadesi (aylar cinsinden)
let vadeAy = 36;

// Aylık faiz oranını hesapla
let aylikFaizOrani = (yillikFaizOrani / 100) / 12;

// Aylık taksit hesaplaması
let aylikTaksit = (anaPara * aylikFaizOrani) / (1 - Math.pow(1 + aylikFaizOrani, -vadeAy));

// Toplam geri ödeme miktarını hesapla
let toplamGeriOdeme = aylikTaksit * vadeAy;

console.log("Aylık Taksit: " + aylikTaksit.toFixed(2) + " TL");
console.log("Toplam Geri Ödeme: " + toplamGeriOdeme.toFixed(2) + " TL");


const slider = document.getElementById("slider");
      let x = 1;
      let h1 = document.getElementById("h1")
      let timer = setInterval(change, 0 , 0)
      show();
      function change(side) {
        clearInterval(timer)
        x += side;
        if (x > 4) x = 1;
        else if (x < 1) x = 4;
        
        show();
        timer = setInterval(change, 3000, 1)
      }

      function ntc(deyer){
        clearInterval(timer)
        x = deyer
        show()
        
        timer = setInterval(change, 3000, 1) 
      }
      function show() {
        slider.style.background = `url('img/img${x}.jpg') center/cover`;
      }

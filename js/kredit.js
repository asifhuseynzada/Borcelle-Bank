const göndərDüyməsi = document.getElementById("müraciətGöndər");
const təsdiqMesajı = document.getElementById("təsdiqMesajı");

göndərDüyməsi.addEventListener("click", function () {
    const ad = document.getElementById("ad").value.trim();
    const soyad = document.getElementById("soyad").value.trim();
    const işYeri = document.getElementById("işYeri").value.trim();
    const yaşadığıYer = document.getElementById("yaşadığıYer").value.trim();
    const finKodu = document.getElementById("finKodu").value.trim();
    const kreditMiqdarı = parseFloat(
        document.getElementById("kreditMiqdarı").value
    );

    
    if (
        !ad ||
        !soyad ||
        !işYeri ||
        !yaşadığıYer ||
        !finKodu ||
        isNaN(kreditMiqdarı) ||
        kreditMiqdarı <= 0
    ) {
        alert(
            "Zəhmət olmasa bütün sahələri doldurun və doğru bir kredit miqdarı daxil edin."
        );
        return;
    }

   
    const müraciətCədvəli = document.getElementById("müraciətCədvəli");
    const yeniSıra = müraciətCədvəli.insertRow(-1);
    const hücre1 = yeniSıra.insertCell(0);
    const hücre2 = yeniSıra.insertCell(1);
    const hücre3 = yeniSıra.insertCell(2);
    const hücre4 = yeniSıra.insertCell(3);
    const hücre5 = yeniSıra.insertCell(4);
    const hücre6 = yeniSıra.insertCell(5);
    const hücre7 = yeniSıra.insertCell(6); 
    hücre1.textContent = ad;
    hücre2.textContent = soyad;
    hücre3.textContent = işYeri;
    hücre4.textContent = yaşadığıYer;
    hücre5.textContent = finKodu;
    hücre6.textContent = kreditMiqdarı + " ₼";

   
    const ləğvEtDüyməsi = document.createElement("button");
    ləğvEtDüyməsi.textContent = "Krediti Ləğv Et";
    ləğvEtDüyməsi.className = "ləğvEtDüyməsi";
    ləğvEtDüyməsi.addEventListener("click", function () {
        const sıra = this.parentElement.parentElement; 
        const sıraIndeksi = sıra.rowIndex;
        if (sıraIndeksi > 0) {
           
            müraciətCədvəli.deleteRow(sıraIndeksi - 1);
            setTimeout(() => alert("Kredit ləğv edildi."), 0);
            təsdiqMesajı.style.display = "none"; 
        }
    });
    hücre7.appendChild(ləğvEtDüyməsi);

   
    document.getElementById("ad").value = "";
    document.getElementById("soyad").value = "";
    document.getElementById("işYeri").value = "";
    document.getElementById("yaşadığıYer").value = "";
    document.getElementById("finKodu").value = "";
    document.getElementById("kreditMiqdarı").value = "";

   
    təsdiqMesajı.style.display = "block";
});
const searchInput = document.getElementById("search-input");
const name = document.getElementById("name");
const surname = document.getElementById("surname");
const address = document.getElementById("address");
const date = document.getElementById("date");
const tel = document.getElementById("tel");
const image = document.getElementById("image");
const gender = document.getElementById("gender");
const users = document.getElementById("users");
const pasport = document.getElementById("pasport");
const registration = document.getElementById("registration");
const tebrikMesaji = document.getElementById("tebrikMesaji");

function yaz() {
 
  if (
    name.value === "" ||
    surname.value === "" ||
    address.value === "" ||
    date.value === "" ||
    tel.value === "" ||
    pasport.value === "" ||
    registration.value === "" ||
    image.files.length === 0
  ) {
    alert("Zehmet olmnasa butun melumatlari daxil edin");
    return;
  }

  const selectedFile = image.files[0];
  const selectedGender = gender.value;

  if (selectedFile) {
    const reader = new FileReader();

    reader.onload = function (e) {
      const imageDataUrl = e.target.result;
      users.innerHTML += `<div class="card">
        <img src="${imageDataUrl}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">Ad: ${name.value}</h5>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">Soyad: ${surname.value}</li>
          <li class="list-group-item">Cinsi: ${selectedGender}</li>
          <li class="list-group-item">Fin Kod: ${pasport.value}</li>
          <li class="list-group-item">Doğum tarixi: ${date.value}</li>
          <li class="list-group-item">Telefon: ${tel.value}</li>
          <li class="list-group-item">Ünvan: ${address.value}</li>
          <li class="list-group-item">Qeydiyyat olduğu ünvan: ${registration.value}</li>
        </ul>
      </div>`;
      tebrikMesaji.style.display = "block"; 
      setTimeout(function () {
        tebrikMesaji.style.display = "none"; 
      }, 10000);
    };

    reader.readAsDataURL(selectedFile);
  }
}

function searchUsers() {
  const searchText = searchInput.value.toLowerCase();
  const cards = document.querySelectorAll(".card");

  cards.forEach((card) => {
    const cardText = card.textContent.toLowerCase();
    card.style.display = cardText.includes(searchText) ? "block" : "none";
  });
}
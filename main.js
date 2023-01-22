const mobileMenu = document.querySelector(".nav-mobile");
const mobileMenuTriger = document.getElementById("mobile-menu");
const nav = document.getElementById("menu-item");
const imagesLocation = "../assets/vacation/";

const englandImages ={
  countryName: "England",
  countryImagesArr: 
[ "e3.JPG", "e4.JPG", "e7.JPG"]
}

const franceImages = {
  countryName: "France",
  countryImagesArr: [
    "f1.JPG",
    "f2.JPG",
    "f5.JPG",
  ]
};

const greeceImages = {
  countryName: "Greece",
  countryImagesArr: [
  "g2.JPG",
  "g4.JPG",
  "g6.JPG",
  "g7.JPG",
]};

const italyImages = {countryName: "Italy",
countryImagesArr:[ "i2.JPG", "i3.JPG", "i6.JPG"]
};

const mexicoImages = {
  countryName: "Mexico",
countryImagesArr:[
  "m4.JPG",
  "m3.JPG",
  "m9.JPG",
]};

mobileMenuTriger.addEventListener("click", () => {
  mobileMenu.classList.toggle("active");
  document.getElementById('tamplate').innerHTML = "";
});

nav.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
});

function generatePhotosCollection(title, imagesArr) {
  let gallery="";
  gallery +=  '<div class="country-card"><h1>' + title + '</h1><div class=images-container>';
  imagesArr.map((picture) => {
    gallery +=
      '<div style="padding: 4px"> <img src="' +
      imagesLocation +
      picture +
      '" alt="' +
      picture +
      '" width="400" "></div>';
  });
  gallery += '</div></div>'
  return gallery;
}

function loadHtml(id, filename) {
  fetch(filename)
    .then((response) => response.text())
    .then((text) => {
      if (filename === "vacation.html") {      
        let galleryPage = "";
        const countries = [englandImages,franceImages,greeceImages,italyImages,mexicoImages];

        countries.forEach((country)=>{
          galleryPage+=generatePhotosCollection(country.countryName, country.countryImagesArr);
        })

        document.getElementById(id).innerHTML = galleryPage;
    
      } else {
        document.getElementById(id).innerHTML = text;
      }
    });
}

function refreshValue() {
  setTimeout(() => {
    document.getElementById("email-subject").value = "";
    document.getElementById("email-body").value = "";
  }, 500);
}

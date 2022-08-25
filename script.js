
// გვერდი რომ ჩაიტვირთება გაეშვას
window.onload = (event) => {

var html = `
<div class="anime-extention floating">
    <div class="banner">
          <h1>რენდომ ანიმე</h1>
          <div class="animes">

          </div>
    </div>
</div>`

// html ჩასმა ბოდიში
document.querySelector("body").innerHTML+= html




// რენდომ sample. სიიდან რენდომად 3 ელემენტის ამოღება
function getRandom(arr, n) {
  var result = new Array(n),
    len = arr.length,
    taken = new Array(len);
  if (n > len)
    throw new RangeError("getRandom: more elements taken than available");
  while (n--) {
    var x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

// ანიმეების სია
var anime_list = [
  {
    name: "მაგიური ბრძოლა",
    url: "file.ge",
    pic: "https://geomovie.ge/uploads/posts/2022-02/1643675879_1637230665_magiuri-brdzola-qartulad-anime-qartulad.webp",
  },
  {
    name: "ვან პისი (ქართულად) / One Piece (qartulad)",
    url: "file.ge",
    pic: "https://mykadri.com/uploads/posts/2022-06/1654721759_one-piece-geo-poster.jpg",
  },
  {
    name: "ბორუტო ქართულად / Boruto qartulad   ",
    url: "file.ge",
    pic: "https://mykadri.com/uploads/posts/2022-03/1648206877_boruto-poster.webp",
  }
];

// ანიმეების ამოღება
var anime_list = getRandom(anime_list, 3);

// html ში ჩასმა ანიმეების
var animes = document.querySelector(".animes");
anime_list.forEach(function (anime) {
  animes.innerHTML += `<div class="anime"><div class="popup"><p>${anime["name"]}</p></div><a href="${anime["url"]}"><img src='${anime["pic"]}' ></a> </div>`;
});

// activate img 
$(function () {
  $(".anime ").mouseover(function (el) {
    this.classList.add("active");
    check();
  });
  $(".anime ").mouseleave(function (el) {
    this.classList.remove("active");
    this.querySelector(".popup");
    check();
  });
});

// თუ ანიმე აქტივია პოპაპიც აქტივზე იყოს
function check() {
  var animes = document.querySelectorAll(".anime");
  animes.forEach(function (el) {
    try {
      el.querySelector(".active .popup").classList.add("active");
    } catch {
        el.querySelector(".popup").classList.remove("active");
    }

  });
}


} // onload
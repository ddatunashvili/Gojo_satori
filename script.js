// გვერდი რომ ჩაიტვირთება გაეშვას
window.onload = () => {
  var html = `
<div class="anime-extention floating">
    <div class="banner">
          <h1>რენდომ ანიმე</h1>
          <div class="animes">

          </div>
    </div>
</div>`;

  //აგენერერიებს რანდომ რიცხვს გადმოცემული მასივის სიგრძის მიხედვით
  const randomNumber = (array) => {
    const randomNumber = Math.floor(Math.random() * array.length);

    return randomNumber;
  };

  //რისფონსად აბრუნებს სამ რანდომ ანიმეს API-დან
  const fetchRandomAnimes = async () => {
    const apis = [
      "https://api.jikan.moe/v4/random/anime",
      "https://api.jikan.moe/v4/random/anime",
      "https://api.jikan.moe/v4/random/anime",
    ];

    const animes = await Promise.all(
      apis.map(async (url) => {
        const resp = await fetch(url);
        return resp.json();
      })
    )

    return animes
  };

  // html ჩასმა ბოდიში
  document.querySelector("body").innerHTML += html;

  const addFetchedAnimesInDOM = async () => {
    const anime_list = await fetchRandomAnimes();

    anime_list.forEach((anime) => {
      animes.innerHTML += `<div class="anime"><div class="popup"><p>${anime.data.title}</p></div><a href="${anime.data.url}" target="_blank"><img src='${anime.data.images.webp.image_url}' ></a> </div>`;
    });
  };

  addFetchedAnimesInDOM();

  // html ში ჩასმა ანიმეების
  var animes = document.querySelector(".animes");
}; // onload

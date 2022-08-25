
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
    
    fetchRandomAnimes().then(anime_list => {
      anime_list.forEach((anime) => {
        document.querySelector(".gojo-loader").style.display = "none"
        animes.innerHTML += `<div class="anime"><div class="popup"><p>${anime.data.title}</p></div><a href="${anime.data.url}" target="_blank"><img src='${anime.data.images.webp.image_url}' ></a> </div>`;
      });
    })
    
    var animes = document.querySelector(".animes");
    animes.innerHTML = `<span class="gojo-loader"></span>`
  }; // onload
  
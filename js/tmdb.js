const key = 'e892173cffef2b34b327f5bdac2e4acb'; //sesuai API Key Anda
const endpoint_url = 'https://api.themoviedb.org/3';

//Blok kode untuk melakukan request API

function getListMovie(services, sectiontitle){
  fetch(endpoint_url + services + "?api_key=" + key + "&language=en-US&page=1")
  .then(status)
  .then(json)
  .then(function(data){
    //Objek/array JavaScript dari response.json() masuk lewat data.
    //Menyusun komponen card movie secara movie secara dinamis
    var moviesHTML = "";
    data.results.forEach(function (movie){
      moviesHTML += `
      <div class="col m3 s6">
        <div class="card">
          <a href="./movie.html?id=${movie.id}">
            <div class="card-image waves-effect waves-block waves-light">
              <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}"/>
            </div>
          </a>
              <div class="card-content text-center">
              <strong>${movie.title}</strong>
              </div>
            </div>
          </div>
      `;

    });
    document.getElementById("movie_list").innerHTML = moviesHTML;
    document.getElementById("section_title").innerHTML = sectiontitle;

  })
  .catch(error);
}

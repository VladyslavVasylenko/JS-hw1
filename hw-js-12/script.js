"use strict";

const API = 'https://www.omdbapi.com/?apikey=49f3373f';

const FORM = document.getElementById("formSearch");

const favorite__class = 'favorite';

const key = 'favorite';

let movieName = '';

let movieType = '';

let currentPage = 1;

let storage = window.localStorage;

let  favoritesList = storage.getItem(key) ? storage.getItem(key).split('.') : [];

function sendRequest() {
  let request = new XMLHttpRequest();
  request.responseType = 'json';
  request.open('GET', `${API}&s=${movieName}&type=${movieType}&page=${currentPage}`, true);
  request.onload = function () {
    if (this.status == 200) {
      printResponse(this.response);
      printPages(this.response['totalResults']);
    } else alert('ERROR! YOU BROKE INTERNET!');
  };
  request.send(null);
}

function printDetails(id) {
  let request = new XMLHttpRequest();
  request.open('GET', `${API}&i=${id}`, true);
  request.responseType = 'json';
  request.onload = function () {
    if (this.status == 200) {
      let movie = this.response;
      $(".details").empty();
      $(".result").append(`
        <div class="details">
          <h2 class="details__title">${movie['Title']}</h2>
          <p class="details__subtitle">${movie['Country']}</p>
          <p class="details__text">${movie['Awards']}</p>
          <p class="details__text">${movie['Plot']}</p>
        </div> 
        `);
    } else alert('ERROR! YOU BROKE INTERNET!');
  };
  request.send(null);
}

function printResponse(response) {
  if (response['Response'] === 'False') {
    $(".result").append(`<p class='error'>${response['Error']}</p>`);
    return;
  }

  $(".result").append(`<ol class='result-list' start='${(currentPage - 1) * 10 + 1}'></ol>`);

  response['Search'].forEach(element => {
    let poster = (element['Poster'] != 'N/A') ? `<img src="${element['Poster']}" alt="${element['Title']} poster" class="results__poster">` : '';
    let imdbId = element['imdbID'];
    let isFavorite = (favoritesList.indexOf(imdbId) < 0) ? '' : favorite__class;


    $(".result-list").append(`<li>      
      <aticle class="results">
        <div>
          <header class="results__header">${element['Title']}</header>
          <p class="results__year">${element['Year']}</p>
          <div class="result-btn-conteiner">
            <button class="btn btn-details" onclick=printDetails('${imdbId}')>Details</button>
            <button class="btn btn-favorite ${isFavorite}" onclick='savedFavorite(this, "${imdbId}")'>Add favorite</button>
          </div>

        </div>
        ${poster}
      </aticle>
    </li>`);
  });
}

function printPages(totalResults) {
  if (!totalResults) return;

  $(".result").append(`<ul class='result-pages'></ul `);
  for (let i = 1; i <= Math.ceil(totalResults / 10); i++) {
    $(".result-pages").append(`<li class="result-pages__page">${i}</li>`);
  }
  $(".result-pages__page")[currentPage - 1].classList.add('result-pages__page--current');

  let pages = document.getElementsByClassName("result-pages");
  pages[0].addEventListener('click', function (event) {
    $(".result").empty();
    currentPage = event.target.innerText;
    sendRequest();
  })
}

function savedFavorite(button, id) {
  button.classList.toggle(favorite__class);
  favoritesList.indexOf(id) < 0 ? favoritesList.push(id) : favoritesList.splice(favoritesList.indexOf(id), 1);
  storage.setItem(key, favoritesList);
}

window.addEventListener("load", function () {
  FORM.addEventListener("submit", function (event) {
    $(".result").empty();
    currentPage = 1;
    event.preventDefault();

    const fd = new FormData(FORM);
    movieName = fd.get('name');
    movieType = fd.get('type');

    sendRequest();
  });
});

console.log(localStorage);
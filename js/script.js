document.addEventListener("DOMContentLoaded", () => {
  const movieDB = {
    movies: [
      "Логан",
      "Лига справедливости",
      "Ла-ла лэнд",
      "Одержимость",
      "Скотт Пилигрим против...",
      "Джон Уик",
    ],
  };

  const adv = document.querySelectorAll(".promo__adv img"),
    poster = document.querySelector(".promo__bg"),
    genre = poster.querySelector(".promo__genre"),
    movieList = document.querySelector(".promo__interactive-list"),
    addForm = document.querySelector("form.add"),
    addInput = addForm.querySelector(".adding__input"),
    checkBox = addForm.querySelector('[type="checkbox"]');

  addForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let newFilm = addInput.value.trim();
    const favorite = checkBox.checked;
    // console.log(newFilm, favorite);
    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = newFilm.substring(0, 21) + '...';
      }
      movieDB.movies.push(newFilm);
      sortArr(movieDB.movies);
      createMovieList(movieDB.movies, movieList);
    }
    e.target.reset();
  });

  const deleteAdv = (arr) => {
    arr.forEach((img) => {
      img.remove();
    });
  };

  const makeChanges = () => {
    genre.textContent = "драма";
    poster.style.backgroundImage = "url('./img/bg.jpg')";
  };

  const sortArr = (arr) => {
    arr.sort();
  };

  function createMovieList(films, parent) {
    parent.innerHTML = "";

    films.forEach((film, i) => {
      parent.innerHTML += `
      <li class="promo__interactive-item">${i + 1}. ${film}
      <div class="delete"></div>
      </li>
      `;
    });
  }

  deleteAdv(adv);
  makeChanges();
  sortArr(movieDB.movies);
  createMovieList(movieDB.movies, movieList);
});

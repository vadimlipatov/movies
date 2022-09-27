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
    if (newFilm) {
      if (newFilm.length > 21) {
        newFilm = newFilm.substring(0, 21) + "...";
      }

      if (favorite) {
        console.log('Добавляем любимый фильм');
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
    sortArr(films);

    films.forEach((film, i) => {
      parent.innerHTML += `
      <li class="promo__interactive-item">${i + 1}. ${film}
      <div class="delete"></div>
      </li>
      `;
    });

    document
      .querySelectorAll(".promo__interactive-item .delete")
      .forEach((btn, i) => {
        btn.addEventListener(
          "click",
          () => {
            btn.parentElement.remove();
            movieDB.movies.splice(i, 1);
            createMovieList(films, parent);
          },
          { once: true }
        );
      });
  }

  deleteAdv(adv);
  makeChanges();
  createMovieList(movieDB.movies, movieList);
});

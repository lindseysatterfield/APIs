import jokeTitle from '../../../assets/jokeTitle.png';

const showJoke = () => {
  document.querySelector('#main-container').innerHTML = `<div class="card" style="width: 30rem; background-color: #686868; height: 35em;">
  <img class="card-img-top mt-3" src="${jokeTitle}" alt="joke generator logo">
  <div class="card-body d-flex flex-column justify-content-center">
    <a href="#" id="get-btn" class="btn bg-dark text-light" style="background-color: black; width: 15em; margin: 0 auto;">GET A JOKE</a>
  </div>
</div>`;
};

export default showJoke;

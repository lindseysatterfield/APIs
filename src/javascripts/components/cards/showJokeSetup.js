import jokeTitle from '../../../assets/jokeTitle.png';

const showJokeSetup = (joke) => {
  document.querySelector('#main-container').innerHTML = `<div class="card" style="width: 30rem; background-color: #686868; height: 35em;">
  <img class="card-img-top mt-3" src="${jokeTitle}" alt="joke generator logo">
  <div class="card-body d-flex flex-column justify-content-center">
    <div style="padding-bottom: 4em">
      <h5 class="card-title text-light" id="joke-setup">${joke.setup}</h5>
      <h5 class="card-title text-light" id="joke-punchline" style="display: none;">${joke.punchline}</h5>
    </div>
    <a href="#" id="get-punchline-btn" class="btn bg-dark text-light" style="background-color: black; width: 15em; margin: 0 auto;">GET PUNCHLINE</a>
    <a href="#" id="get-new-joke-btn" class="btn bg-dark text-light" style="background-color: black; width: 15em; margin: 0 auto; display: none;">GET NEW JOKE</a>
  </div>
</div>`;
};

export default showJokeSetup;

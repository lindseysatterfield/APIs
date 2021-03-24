import showJokeSetup from '../../components/cards/showJokeSetup';
import getJoke from '../data/jokes';

const domEvents = () => {
  document.querySelector('body').addEventListener('click', (e) => {
    if (e.target.id.includes('get-btn')) {
      getJoke().then((joke) => showJokeSetup(joke));
    }

    if (e.target.id.includes('get-punchline-btn')) {
      document.querySelector('#joke-punchline').style.display = 'inline';
      document.querySelector('#get-punchline-btn').style.display = 'none';
      document.querySelector('#get-new-joke-btn').style.display = 'inline';
    }

    if (e.target.id.includes('get-new-joke-btn')) {
      getJoke().then((joke) => showJokeSetup(joke));
    }
  });
};

export default domEvents;

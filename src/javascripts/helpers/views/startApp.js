import showJoke from '../../components/cards/showJoke';
import domBuilder from '../../components/domBuilder';
import domEvents from '../events/domEvents';

const startApp = () => {
  domBuilder();
  showJoke();
  domEvents();
};

export default startApp;

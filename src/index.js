import './main.scss';

const pads = document.querySelectorAll('.pad');
const visual = document.querySelector('.visual');

export const KEY_MAP = {
  kick: 'a',
  cymbal: 's',
  snare: 'd',
  openhat: 'f',
  longCrash: 'g',
  hihat: 'h',
};

export const SOUNDS = [
  '../assets/sounds/kick.wav',
  '../assets/sounds/cymbal.wav',
  '../assets/sounds/snare.wav',
  '../assets/sounds/openhat.wav',
  '../assets/sounds/long-crash.wav',
  '../assets/sounds/hihat.wav',
];

const playSound = (index) => {
  const sound = SOUNDS[index];
  const audio = new Audio(sound);
  audio.load();
  audio.play();
};

// Деструктуризация события, вытаскиваем key
const onKeyPress = ({ key }) => {
  switch (key) {
    case 'a':
      playSound(0);
      break;
    case 's':
      playSound(1);
      break;
    case 'd':
      playSound(2);
      break;
    case 'f':
      playSound(3);
      break;
    case 'g':
      playSound(4);
      break;
    case 'h':
      playSound(5);
      break;
    default:
      console.error('Такой клавиши нет!');
      break;
  }
};

window.addEventListener('keypress', onKeyPress);

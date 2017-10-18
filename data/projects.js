import calculatorImg from '/static/images/calculator-s1-16x9.jpg';
import greedyNavImg from '/static/images/greedy-nav-s3-16x9.png';
import pomodoroClockImg from '/static/images/pomodoro-clock-s1-16x9.png';
import quoteMachineImg from '/static/images/quote-machine-s1-16x9.png';
import simonImg from '/static/images/simon-s1-16x9.png';
import sliderImg from '/static/images/slider-s1-16x9.png';
import ticTacToeImg from '/static/images/ttt-s2-16x9.png';
import twitchApiImg from '/static/images/twitch-api-client-s1-16x9.png';
import wikipediaWiewerImg from '/static/images/wikipedia-viewer-s1-16x9.png';
import showLocalWeatherImg from '/static/images/local-weather-s1-16x9.png';

const projects = [
  {
    'thumbnailUrl': simonImg,
    'title': 'A Simon Game',
    'details': {
      'title': '\'Build a Simon Game\'',
      'subTitle': 'freeCodeCamp challenge',
      'bodyText': 'freeCodeCamp challenge.',
      'features': []
    },
    'links': [
      {
        'faIcon': 'github',
        'name': 'github',
        'url': 'https://github.com/Mensae/simon',
      },
      {
        'faIcon': 'codepen',
        'name': 'codepen',
        'url': 'https://codepen.io/jmeester/full/xrgwKR',
      }
    ],
    'timestamp': ''
  },
  {
    'thumbnailUrl': ticTacToeImg,
    'title': 'Tic Tac Toe',
    'details': {
      'title': '\'Build a Tic Tac Toe Game\'',
      'subTitle': 'freeCodeCamp challenge',
      'bodyText': 'freeCodeCamp challenge.',
      'features': []
    },
    'links': [
      {
        'faIcon': 'github',
        'name': 'github',
        'url': 'https://github.com/Mensae/tic-tac-toe-game',
      },
      {
        'faIcon': 'codepen',
        'name': 'codepen',
        'url': 'https://codepen.io/jmeester/full/vmrGzb',
      }
    ],
    'timestamp': ''
  },
  {
    'thumbnailUrl': pomodoroClockImg,
    'title': 'Pomodoro Clock',
    'details': {
      'title': '\'Build a Pomodoro Clock\'',
      'subTitle': 'freeCodeCamp challenge',
      'bodyText': 'freeCodeCamp challenge.',
      'features': []
    },
    'links': [
      {
        'faIcon': 'github',
        'name': 'github',
        'url': 'https://github.com/Mensae/pomodoro-clock',
      },
      {
        'faIcon': 'codepen',
        'name': 'codepen',
        'url': 'https://codepen.io/jmeester/full/ryorPP',
      }
    ],
    'timestamp': ''
  },
  {
    'thumbnailUrl': calculatorImg,
    'title': 'JavaScript Calculator',
    'details': {
      'title': '\'Build a JavaScript Calculator\'',
      'subTitle': 'freeCodeCamp challenge',
      'bodyText': 'freeCodeCamp challenge.',
      'features': []
    },
    'links': [
      {
        'faIcon': 'codepen',
        'name': 'codepen',
        'url': 'https://codepen.io/jmeester/full/qrMOBb',
      }
    ],
    'timestamp': ''
  },
  {
    'thumbnailUrl': twitchApiImg,
    'title': 'Use the Twitchtv JSON API',
    'details': {
      'title': '\'Use the Twitchtv JSON API\'',
      'subTitle': 'freeCodeCamp challenge',
      'bodyText': 'freeCodeCamp challenge.',
      'features': []
    },
    'links': [
      {
        'faIcon': 'codepen',
        'name': 'codepen',
        'url': 'https://codepen.io/jmeester/full/VprKYW',
      }
    ],
    'timestamp': ''
  },
  {
    'thumbnailUrl': wikipediaWiewerImg,
    'title': 'Build a Wikipedia Viewer',
    'details': {
      'title': '\'Build a Wikipedia Viewer\'',
      'subTitle': 'freeCodeCamp challenge',
      'bodyText': 'freeCodeCamp challenge.',
      'features': []
    },
    'links': [
      {
        'faIcon': 'codepen',
        'name': 'codepen',
        'url': 'https://codepen.io/jmeester/full/JWygRy',
      }
    ],
    'timestamp': ''
  },
  {
    'thumbnailUrl': showLocalWeatherImg,
    'title': 'Show the Local Weather',
    'details': {
      'title': '\'Show the Local Weather\'',
      'subTitle': 'freeCodeCamp challenge',
      'bodyText': 'freeCodeCamp challenge.',
      'features': []
    },
    'links': [
      {
        'faIcon': 'codepen',
        'name': 'codepen',
        'url': 'https://codepen.io/jmeester/full/OpjXpZ',
      }
    ],
    'timestamp': ''
  },
  {
    'thumbnailUrl': quoteMachineImg,
    'title': 'Random Quote Machine',
    'details': {
      'title': '\'Build a Random Quote Machine\'',
      'subTitle': 'freeCodeCamp challenge',
      'bodyText': 'freeCodeCamp challenge.',
      'features': []
    },
    'links': [
      {
        'faIcon': 'codepen',
        'name': 'codepen',
        'url': 'https://codepen.io/jmeester/full/dvverY',
      }
    ],
    'timestamp': ''
  },
  {
    'thumbnailUrl': sliderImg,
    'title': 'Slider.js',
    'details': {
      'title': 'A basic slider with no dependencies',
      'subTitle': 'Turns a basic unordered list into a content slider.',
      'bodyText': 'Turns a basic unordered list into a content slider.',
      'features': [
        'Vanilla JavaScript (ES6)',
        'Including SASS stylesheet',
        'Auto play option',
        'Controls can be omitted'
      ]
    },
    'links': [
      {
        'faIcon': 'github',
        'name': 'github',
        'url': 'https://github.com/Mensae/slider.js',
      },
      {
        'faIcon': 'codepen',
        'name': 'codepen',
        'url': 'https://codepen.io/jmeester/full/pNXBXx',
      }
    ],
    'timestamp': ''
  },
  {
    'thumbnailUrl': greedyNavImg,
    'title': 'Greedy Navigation',
    'details': {
      'title': 'A responsive navigation menu',
      'subTitle': 'Stacks items into a dropdown menu when they overflow.',
      'bodyText': 'Stacks items into a dropdown menu when they overflow.',
      'features': [
        'Vanilla JavaScript (ES6)',
        'Including SASS stylesheet',
        'Responsive'
      ]
    },
    'links': [
      {
        'faIcon': 'github',
        'name': 'github',
        'url': 'https://github.com/Mensae/jm-validateForm-addon.js',
      },
      {
        'faIcon': 'codepen',
        'name': 'codepen',
        'url': 'https://codepen.io/jmeester/full/yVpYqm',
      }
    ],
    'timestamp': ''
  },
  {
    'thumbnailUrl': '',
    'title': 'jm-validateForm-addon',
    'details': {
      'title': 'A HTML5 form validation add on',
      'subTitle': 'Enhances the HTML5 Constraint Validation API',
      'bodyText': 'This add-on enhances the HTML5 Constraint Validation API by giving you the freedom of styling the tooltip to your liking and use your own feedback messages in any language you provide without any dependencies.',
      'features': [
        'Vanilla JavaScript (ES6)',
        'No dependencies',
        'Style the tooltip to your liking',
        'Use your own feedback messages in any language you provide'
      ]
    },
    'links': [
      {
        'faIcon': 'github',
        'name': 'github',
        'url': 'https://github.com/Mensae/jm-validate-addon.js',
      }
    ],
    'timestamp': ''
  },
  {
    'thumbnailUrl': '',
    'title': 'In progress...',
    'details': {
      'title': 'More to come!',
      'subTitle': 'Busy creating some new awesomeness.',
      'bodyText': 'Busy creating some new awesomeness.'
    },
    'links': [],
    'timestamp': ''
  },
];

export {projects};

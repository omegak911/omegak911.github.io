const {
  css3,
  github, 
  html5, 
  javascript,
  jest, 
  jQuery,
  mongoDB,
  mySQL,
  nodeJS,
  postgreSQL,
  react,
  redux,
  socketIO,
  webpack
} = require('./iconLinks');

const techDraggables = [
  "CSS3",
  "Git",
  "HTML5",
  "JavaScript",
  "Jest",
  "jQuery",
  "MongoDB",
  "MySQL",
  "Node.js",
  "PostgreSQL",
  "React",
  "Redux",
  "Socket.IO",
  "Webpack",
]

const techDroppables = [
  {
    image: css3,
    correct: false,
    text: 'CSS3'
  },
  {
    image: github,
    correct: false,
    text: 'Git'
  },
  {
    image: html5,
    correct: false,
    text: 'HTML5'
  },
  {
    image: javascript,
    correct: false,
    text: 'JavaScript'
  },
  {
    image: jest,
    correct: false,
    text: 'Jest'
  },
  {
    image: jQuery,
    correct: false,
    text: 'jQuery'
  },
  {
    image: mongoDB,
    correct: false,
    text: 'MongoDB'
  },
  {
    image: mySQL,
    correct: false,
    text: 'MySQL'
  },
  {
    image: nodeJS,
    correct: false,
    text: 'Node.js'
  },
  {
    image: postgreSQL,
    correct: false,
    text: 'PostgreSQL'
  },
  {
    image: react,
    correct: false,
    text: 'React'
  },
  {
    image: redux,
    correct: false,
    text: 'Redux'
  },
  {
    image: socketIO,
    correct: false,
    text: 'Socket.IO'
  },
  {
    image: webpack,
    correct: false,
    text: 'Webpack'
  },
]

module.exports = {
  techDraggables,
  techDroppables
}
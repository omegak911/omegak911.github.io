const applications = [
  {
    code: 'https://github.com/Trello-chan',
    description: 'Trello clone',
    image: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=YZ1CcnNBRDs9n6zVSZ1T9a%2FMI50%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi4LJHdfbOnp0AULH9QjQAyLbq1ETPlR46_eYnvKdojjMGzdZL5agYUbhl4lWdI',
    title: 'Trello-chan',
    techStack: 'AWS EC2/S3/RDS | Express | Jest | Microservices | PostgreSQL | React | react-beautiful-dnd | styled-components',
  },
  {
    code: 'https://github.com/Notorious-NPM/Rhyme-Doctor-Mobile',
    description: 'Rhyme visualization tool',
    image: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=IPlKHIIm9lFrnbt8npUC243t14s%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjhfsCLerbzrUBHcS8HjQAxKum1SGG3E464KojnKN0j2Ze3JMT5agYUbhl4lWdI',
    title: 'Rhyme Doctor',
    special: [
      ['Android Codebase', 'https://github.com/Notorious-NPM/Rhyme-Doctor-Mobile']
    ],
    techStack: 'Cloudinary API | Expo | Express | MySQL | Passport | React | Redux | Socket.IO | Words API',
  },
  {
    code: 'https://github.com/aask4/redidit',
    description: 'Clone of Reddit',
    image: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=7%2Ft8PyKhFJmmc360e9k3D7AlwGs%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjucZTZeeCl9UARcH0DjQAwKr61ETPnQY6-KIO7etkkgpPndZH5agYUbhl4lWdI',
    title: 'Redidit',
    url: 'https://aask4-redidit.herokuapp.com',
    techStack: 'Express | Firebase | PostgreSQL | React | Redux',
  },
  {
    code: 'https://github.com/omegak911/TrackYoScore',
    description: 'TrackYoScore',
    image: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=qx92U8a%2B1Jf0HHV0LzE%2ByWOdCD8%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi4KpaMfrqjo0BALnoGjQBheOi1ETfhRI69LILrKdly2MPjJsL5agYUbhl4lWdI',
    title: 'TrackYoScore',
    techStack: 'Cloudinary API | Express | Passport | PostgreSQL | React | Redux',
  },
  {
    code: 'https://github.com/omegak911/omegak911.github.io/tree/portfolio',
    description: 'Personal Portfolio v2',
    image: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=k9tS0%2FpGWit6YI7LG%2FsrdzsNO08%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjrfs_eKLel8UAVLnhXjQAzfO61STXhE460eIjre9V2iJHjd5P5agYUbhl4lWdI',
    title: 'Portfolio',
    url: 'https://omegak911.github.io/',
    special: [
      ['Heroku Website', 'https://personalportfolio-v2.herokuapp.com/'],
      ['Next.js Codebase', 'https://github.com/omegak911/portfolio-v2/tree/deployment']
    ],
    techStack: 'CSS | HTML | React',
  },
  {
    code: 'https://github.com/omegak911/Gotta_Vue_em_All/tree/deployment',
    description: 'View/Catch/Create Pokemon',
    image: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=w0RtPCnAA3V1E5uy7imL2ZdDTT8%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjvL87afran8kBCcH8CjQBhLOq1STblRI65KonofI5x2p_tdZD5agYUbhl4lWdI',
    title: 'Gotta Vue Em All',
    url: 'https://gotta-vue-em-all.herokuapp.com/',
    techStack: 'MongoDB | Nuxt | Vue | Vuex',
  },
  {
    code: 'https://github.com/omegak911/Unconventional-ABCs',
    description: 'ABC learning game',
    image: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=AnN2gu9FfhsEorqPxF0Q5nSq4uQ%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi9f5TbfLL390BEeHpSjQAyee21EWOwQI68Kd7uedtwgsLsLJT5agYUbhl4lWdI',
    title: 'Unconventional ABCs',
    url: 'https://unconventional-abcs.herokuapp.com/',
    techStack: 'AngularJS | CSS | Express | HTML | Web Speech API',
  }
];

module.exports = applications;
import React, { Component } from 'react';
import styled from 'styled-components';

import { StandardComponentStyles } from './CoreStyles';

class Applications extends Component {
  constructor(props) {
    super(props)
    this.state = {
      applications: [
        {
          code: 'https://github.com/Trello-chan',
          description: 'Trello clone',
          image: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=YZ1CcnNBRDs9n6zVSZ1T9a%2FMI50%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi4LJHdfbOnp0AULH9QjQAyLbq1ETPlR46_eYnvKdojjMGzdZL5agYUbhl4lWdI',
          title: 'Trello-chan',
          url: 'http://ec2-54-67-46-109.us-west-1.compute.amazonaws.com:4000',
          techStack: 'AWS EC2/S3/RDS | Express | Jest | Microservices | PostgreSQL | React | react-beautiful-dnd | styled-components',
        },
        {
          code: 'https://github.com/Notorious-NPM/Rhyme-Doctor-Mobile',
          description: 'Rhyme visualization tool',
          image: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=IPlKHIIm9lFrnbt8npUC243t14s%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjhfsCLerbzrUBHcS8HjQAxKum1SGG3E464KojnKN0j2Ze3JMT5agYUbhl4lWdI',
          title: 'Rhyme Doctor',
          special: [
            ['Android Link', 'https://play.google.com/store/apps/details?id=com.notoriousnpm.rhymedoctor'],
            ['Android Codebase', 'https://github.com/Notorious-NPM/Rhyme-Doctor-Mobile']
          ],
          techStack: 'React | Redux | MySQL | Socket.io | Express | Passport | Cloudinary API | Words API | Expo',
        },
        {
          code: 'https://github.com/aask4/redidit',
          description: 'Clone of Reddit',
          image: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=7%2Ft8PyKhFJmmc360e9k3D7AlwGs%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjucZTZeeCl9UARcH0DjQAwKr61ETPnQY6-KIO7etkkgpPndZH5agYUbhl4lWdI',
          title: 'Redidit',
          url: 'https://aask4-redidit.herokuapp.com',
          techStack: 'React | Redux | Express | Firebase | PostgreSQL',
        },
        {
          code: 'https://github.com/omegak911/TrackYoScore',
          description: 'TrackYoScore',
          image: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=qx92U8a%2B1Jf0HHV0LzE%2ByWOdCD8%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi4KpaMfrqjo0BALnoGjQBheOi1ETfhRI69LILrKdly2MPjJsL5agYUbhl4lWdI',
          title: 'TrackYoScore',
          techStack: 'React | Redux | PostgreSQL | Express | Passport | Cloudinary API',
        },
        {
          code: 'https://github.com/omegak911/omegak911.github.io/tree/portfolio',
          description: 'Personal Portfolio',
          image: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=k9tS0%2FpGWit6YI7LG%2FsrdzsNO08%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjrfs_eKLel8UAVLnhXjQAzfO61STXhE460eIjre9V2iJHjd5P5agYUbhl4lWdI',
          title: 'Portfolio',
          url: 'https://omegak911.github.io/',
          special: [
            ['Heroku Website', 'https://personalportfolio-v2.herokuapp.com/'],
            ['Next.js Codebase', 'https://github.com/omegak911/portfolio-v2/tree/deployment']
          ],
          techStack: 'React | HTML | CSS',
        },
        {
          code: 'https://github.com/omegak911/Gotta_Vue_em_All/tree/deployment',
          description: 'View/Catch/Create Pokemon',
          image: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=w0RtPCnAA3V1E5uy7imL2ZdDTT8%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWjvL87afran8kBCcH8CjQBhLOq1STblRI65KonofI5x2p_tdZD5agYUbhl4lWdI',
          title: 'Gotta Vue Em All',
          url: 'https://gotta-vue-em-all.herokuapp.com/',
          techStack: 'Vue | Nuxt | Vuex | MongoDB',
        },
        {
          code: 'https://github.com/omegak911/Unconventional-ABCs',
          description: 'ABC learning game',
          image: 'https://media.licdn.com/media-proxy/ext?w=800&h=800&f=n&hash=AnN2gu9FfhsEorqPxF0Q5nSq4uQ%3D&ora=1%2CaFBCTXdkRmpGL2lvQUFBPQ%2CxAVta5g-0R6jnhodx1Ey9KGTqAGj6E5DQJHUA3L0CHH05IbfPWi9f5TbfLL390BEeHpSjQAyee21EWOwQI68Kd7uedtwgsLsLJT5agYUbhl4lWdI',
          title: 'Unconventional ABCs',
          url: 'https://unconventional-abcs.herokuapp.com/',
          techStack: 'AngularJS | Web Speech API | HTML | CSS | Express',
        }
      ],
      showModal: null,
    }
  }

  displayModal = (index) => {
    this.setState({ showModal: index})
  }

  removeModal = () => {
    this.setState({ showModal: null})
  }

  render() {
    const { applications, showModal } = this.state;

    return (
      <AppContainer id="applications">
        <MidAppContainer>
          <div>
            <h2>MVP Applications</h2>
            <MVPApplications>
              {applications.map((app, index) =>
                <EachApp key={index}>
                  <InnerAppContainer
                    onMouseEnter={() => this.displayModal(index)} 
                    onMouseLeave={this.removeModal}
                    >
                    {showModal === index && 
                      <Modal>
                        <ModalInfo>
                          <TeckStack>{app.techStack}</TeckStack>
                          <div><h3>{app.title}</h3></div>
                          {app.url && <div><a href={app.url} target="_blank">Website</a></div>}
                          <div><a href={app.code} target="_blank">Codebase</a></div>
                          {app.special &&
                            <div>
                              <br/>
                              <div><a href={app.special[0][1]} target="_blank">{app.special[0][0]}</a></div>
                              <div><a href={app.special[1][1]} target="_blank">{app.special[1][0]}</a></div>
                            </div>
                          }
                        </ModalInfo>
                      </Modal>
                    }
                    <img src={app.image} alt="app preview"/>
                  </InnerAppContainer>
                </EachApp>
              )}
            </MVPApplications>
          </div>
        </MidAppContainer>
      </AppContainer>
    )
  }
}

const AppContainer = styled.div`
  ${StandardComponentStyles}
`;

const MidAppContainer = styled.div`
  background: linear-gradient(135deg, rgba(238,238,238,1) 0%,rgba(204,204,204,1) 100%);
  border-radius: 30px;
  box-shadow: 10px 10px 10px rgb(185, 186, 186);
  display: flex;
  flex-direction: column;
  justify-items: center;
  width: 95%;
`;

const MVPApplications = styled.div`
  background-color: white;
  border: 5px solid black;
  display: flex;
  height: 50vh;
  margin-bottom: 50px;
  margin-left: auto;
  margin-right: auto;
  overflow: scroll;
  text-align: center;
  width: 80%;
`;

const EachApp = styled.div`
  display: flex;
  height: 100%;
`;

const InnerAppContainer = styled.div`
  height: 90%;
  border: 1px solid black;
  margin-left: 10px;
  margin-top: auto;
  margin-bottom: auto;
  position: relative;
  > img {
    border-bottom: 2px solid black;
    height: 100%;
  }
`;

const Modal = styled.div`
  align-items: center;
  background-color: rgba(181, 181, 181, 0.5);
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 400;
`

const ModalInfo = styled.div`
  background-color: rgba(0, 0, 0, 0.9);
  color: white;
  display: flex;
  flex-direction: column;
  height: 80%;
  justify-content: center;
  width: 80%;
  > a { 
    color: rgb(66, 158, 250);
  }
`;

const TeckStack = styled.div`
  color: gray;
`;

export default Applications;
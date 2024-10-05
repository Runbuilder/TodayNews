import styled from 'styled-components';
import Card from '../components/Card';

const Container = styled.div`
  padding: 20px;
  text-align: center;
  background-color: #f0f8ff; /* 파스텔 배경색 */
`;

const HeroSection = styled.div`
  background: url('https://cdn.pixabay.com/photo/2023/06/17/05/55/return-8069270_1280.jpg') no-repeat center center; /* 히어로 섹션 배경 이미지 */
  background-size: cover; /* 배경 이미지가 섹션을 가득 채우도록 설정 */
  padding: 50px 20px;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const Header = styled.h1`
  font-size: 2.5em;
  margin: 0;
`;

const SubHeader = styled.p`
  font-size: 1.2em;
  margin: 10px 0;
`;

const Button = styled.button`
  background-color: #ff7f50; /* 버튼 색상 */
  color: white;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 1em;
`;

const FeaturedPosts = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
`;

const MostRecent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const App = () => {
  const featuredPosts = [
    {
      title: 'The Road Ahead',
      date: 'September 25, 2015',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'From Top Down',
      date: 'September 25, 2015',
      image: 'https://via.placeholder.com/300',
    },
  ];

  const recentPosts = [
    {
      title: 'Still Standing Tall',
      date: '9/25/2015',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Sunny Side Up',
      date: '9/25/2015',
      image: 'https://via.placeholder.com/300',
    },
    {
      title: 'Water Falls',
      date: '9/25/2015',
      image: 'https://via.placeholder.com/300',
    },
  ];

  return (
    <Container>
      <HeroSection>
        <Header>Card News</Header>
        <SubHeader>Explore the Globe with Us</SubHeader>
        <Button>View Latest Posts</Button>
      </HeroSection>
      <h2>Featured Posts</h2>
      <FeaturedPosts>
        {featuredPosts.map((post, index) => (
          <Card key={index} {...post} />
        ))}
      </FeaturedPosts>
      <h2>Most Recent</h2>
      <MostRecent>
        {recentPosts.map((post, index) => (
          <Card key={index} {...post} />
        ))}
      </MostRecent>
    </Container>
  );
};

export default App;

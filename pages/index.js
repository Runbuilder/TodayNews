import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Card from '../components/Card';
import Swal from 'sweetalert2';

const Container = styled.div`
  text-align: center;
  background-color: #f0f8ff;
`;

const HeroSection = styled.div`
  position: relative;
  padding: 50px 20px;
  margin-bottom: 20px;
  color: white;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  min-width: 100%;
  min-height: 100%;
  width: auto;
  height: auto;
  transform: translateX(-50%) translateY(-50%);
  object-fit: cover;
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  padding: 20px;
  color: white;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;
 
 

const getRandomColor = () => {
  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F67280', '#C06C84'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const App = () => {
  const [posts, setPosts] = useState([]);
  const videoRef = useRef(null);

  useEffect(() => {
    fetch('https://script.google.com/macros/s/AKfycbzReVLSaBmj_JTP1q6o85G0ANtNjSkIDn1JD4BlqbL0ZPYxiSDHYvWPcgb0WYInDUnCZA/exec')
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(error => {
        console.error("비디오 자동 재생 실패:", error);
      });
    }
  }, []);

  const handleCardClick = (content,source) => {
    Swal.fire({
      html: `
        <div style="font-size: 1.2em; max-width: 90vw; overflow: auto; text-align: left; white-space: pre-wrap;  "> ${content}</div>
      `,
      showCancelButton: true,
      cancelButtonText: "닫기",
      confirmButtonText: "뉴스기사",
      width: 'auto',
      maxWidth: '90%', 
      grow: 'row',
    }).then((result) => {
      if (result.isConfirmed) {
        window.open(source, '_blank');
      }  
    });
  };

  return (
    <Container>
      <HeroSection>
        <VideoBackground ref={videoRef} autoPlay loop muted playsInline>
          <source src="/video.mp4" type="video/mp4" />
          동영상을 지원하지 않는 브라우저입니다.
        </VideoBackground>
        <HeroContent>
          <Header>Rich News</Header>
          <SubHeader>AI-Selected Latest Economic News</SubHeader>
          <Button>View Latest Posts</Button>
        </HeroContent>
      </HeroSection>
      <CardGrid>
        {posts.map((post, index) => (
          <Card 
            key={index} 
            title={post.제목}
            date={new Date(post.날짜).toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }).replace(/\. /g, '.').replace('.', '')}
            emoji={post.이모지}
            category={post.카테고리}
            source={post.출처}
            onClick={() => handleCardClick(post.내용,post.출처)}
            backgroundColor={getRandomColor()}
          />
        ))}
      </CardGrid>
      
    </Container>
  );
};

export default App;

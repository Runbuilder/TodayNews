import styled from 'styled-components';

const CardWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 2;
  border-radius: 15px;
  overflow: hidden;
  background-color: ${props => props.backgroundColor};
  color: white;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-10px);
    box-shadow: 0 20px 30px rgba(0,0,0,0.2);
  }
`;

const CardContent = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardCategory = styled.span`
  position: absolute;
  top: 10px;
  left: 10px;
  background-color: rgba(255,255,255,0.2);
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 0.8em;
`;

const CardDate = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 0.8em;
`;

const CardEmoji = styled.div`
  font-size: 4em;
  text-align: center;
  margin-bottom: 5px;
`;

const CardTitle = styled.h3`
  margin: 0;
  font-size: 1em;
  text-align: center;
`;

const Card = ({ title, date, emoji, category, onClick, backgroundColor }) => (
  <CardWrapper onClick={onClick} backgroundColor={backgroundColor}>
    <CardContent>
      <CardCategory>{category}</CardCategory>
      <CardDate>{date}</CardDate>
      <CardEmoji>{emoji}</CardEmoji>
      <CardTitle>{title}</CardTitle>
    </CardContent>
  </CardWrapper>
);

export default Card;

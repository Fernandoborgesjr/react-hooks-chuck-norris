import styled from 'styled-components';
import { string, func } from 'prop-types';
import Button from '../Button';

export default function Quotes({quote, imageUrl, onUpdate = () => {}}) {
  return (
    <Wrapper>
      <Quote>{quote}</Quote>
      <Button onClick={onUpdate}>
        <img src={imageUrl} alt="Icone do Chuck Norris" />
        Próxima
      </Button>
    </Wrapper>
  );
}

Quotes.protoTypes = {
  quote: string,
  imageUrl: string,
  onUpdate: func
}

const Quote = styled.p`
  font-size: 2em;
  margin: 0;
`;

const Wrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
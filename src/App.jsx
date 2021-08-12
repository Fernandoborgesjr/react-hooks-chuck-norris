import React, { useEffect, useRef, useState } from "react";
import img from "./assets/images/bg.png";
import styled from "styled-components";
import Quotes from "./components/Quotes";
import { getQuote } from "./services/quoteService";

export default function App() {
  let isMounted = useRef(true);

  const [quote, setQuote] = useState({value: "", icon_url: ""});

  const onUpdate = async () => {
    const quote = await getQuote();
    if (isMounted.current) {
      setQuote(quote);
    }
  };

  useEffect(() => {
    onUpdate();
    return () => {
      isMounted.current = false;
    };
  }, []);

  return (
    <Content>
      <Quotes
        quote={quote.value}
        imageUrl={quote.icon_url}
        onUpdate={onUpdate}
      />
      <Image src={img} alt="Imagem do ChuckNorris" />
    </Content>
  );
}

const Content = styled.div`
  height: 100vh;
  padding: 0 50px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Image = styled.img`
  max-width: 50vh;
  align-self: flex-end;
`;

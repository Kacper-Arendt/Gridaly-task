import styled, {createGlobalStyle} from "styled-components";
import {useEffect, useState} from "react";

const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  html {
    box-sizing: border-box;
    width: 100%;
    height: 100%;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

const Square = styled.div`
  width: 40vw;
  height: 40vw;

  background-color: ${props => props.color && props.color};

  :hover {
    filter: brightness(85%);
  }
`;

function App() {
    const [color, setColor] = useState();
    const [timesClicked, setTimesClicked] = useState(0);

    useEffect(() => {
        !timesClicked && setColor('#ccc');
        timesClicked === 1 && setColor('#00ff00');
        timesClicked === 3 && setColor('#ff0000');

        if (timesClicked) {
            const timer = setTimeout(() => {
                setTimesClicked(0);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [timesClicked]);

    return (
        <>
            <GlobalStyle/>
            <Wrapper>
                <Square color={color} onClick={() => setTimesClicked(timesClicked + 1)}/>
            </Wrapper>
        </>

    );
}

export default App;

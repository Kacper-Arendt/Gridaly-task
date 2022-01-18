import styled, {ThemeProvider} from "styled-components";
import theme from "./styles/theme";
import {Square} from "./components/square/Square";
import GlobalStyle from "./styles/global";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
`;

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle/>
            <Wrapper>
                <Square/>
            </Wrapper>
        </ThemeProvider>
    );
}

export default App;

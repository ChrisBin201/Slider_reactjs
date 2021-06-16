/** @jsxRuntime classic */
/**@jsx jsx */  
import { css,jsx} from "@emotion/react"; 
import Main from "./Main";
import Header from "./Components/Header/Header";
import Body from "./Components/Body/Body";

function App() {
  return (
    <div css={styles}>
      <Main>
        <Header/>
        <Body/>
      </Main>
    </div>
  );
}

const styles = css`
  display: flex;
  background-color: #fed4be;
`;
export default App;

import './App.css';
import styled, {ThemeProvider} from 'styled-components';
import { darkTheme } from './utils/Theme';

const Body = styled.div`  
background: ${({ Theme }) => Theme.bg}
`

function App() {
  return (
    <ThemeProvider Theme={darkTheme}>
      <Body> Protofolio</Body>
    </ThemeProvider>
  );
}

export default App;

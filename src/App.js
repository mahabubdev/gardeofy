// import logo from './logo.svg';
import './App.css';
import AppRoutes from './routes/';
// import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { bgColors } from './components/GlobalStyledVars';
import { AuthContextProvider } from './context/auth';


const RootStyled = styled.div`
  background-color: ${bgColors.normal};
`;

function App() {
  return (
    <AuthContextProvider>  
      <RootStyled>
        <AppRoutes />
      </RootStyled>
    </AuthContextProvider>
  );
}

export default App;

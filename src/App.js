// import logo from './logo.svg';
import './App.css';
import AppRoutes from './routes/';
import { Helmet } from 'react-helmet';
import styled from 'styled-components';
import { bgColors } from './components/GlobalStyledVars';


const RootStyled = styled.div`
  background-color: ${bgColors.normal};
`;

function App() {
  return (
    <RootStyled>
      <Helmet
        title={'Gardeofy - Garden Planting Agency'}
          meta={[
              {name: 'author', content: 'mahabubdev'},
              {name: 'author-url', content: 'https://github.com/mahabubdev/'},
              {name: 'description', content: 'Gardeofy is a agency company for garden planting services.'},
              {name: 'project-type', content: 'Portfolio purpose website only'}
            ]}
            />
      <AppRoutes />
    </RootStyled>
  );
}

export default App;

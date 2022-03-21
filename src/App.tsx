import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import { Footer } from './components/footer/Footer';
import Header from './components/header/Header';
import RoutesA from './config/RoutesA';

function App() {
  return (

    <HashRouter>
      <Routes>
        <Route path="/*" element={(
          <> 
          <Header />
            <RoutesA />
            <Footer />  </>)} />
      </Routes>
    </HashRouter>


  );
}

export default App;

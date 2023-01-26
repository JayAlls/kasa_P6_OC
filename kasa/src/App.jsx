import { BrowserRouter } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Router from './components/Router/Router';
import Footer from './components/Layout/Footer/Footer';
import "./styles/App.scss";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
        <Router />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;

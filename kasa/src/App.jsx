import { BrowserRouter } from 'react-router-dom';
import Header from './components/Layout/Header/Header';
import Router from './components/Router/Router';
import "./styles/App.scss";


function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
        <Router />
      </div>
    </BrowserRouter>
  );
}

export default App;

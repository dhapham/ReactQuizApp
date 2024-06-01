import './App.scss';
import Header from './components/Header/Header';
import { Outlet, Link } from "react-router-dom";

const App = () => {

  return (
    <div className="app-container">
      <div className='header-container'>
        <Header />

      </div>
      <div className='main-contaner'>
        <div className='sidenav-contaner'>

        </div>
      </div>
      <div className='app-content'>
        <Outlet />
      </div>
    </div>
  );
}

export default App;

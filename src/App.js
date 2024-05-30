import './App.css';
import Header from './components/Header/Header';
import { Link } from "react-router-dom";

const App = () => {

  return (
    <div className="app-container">
      <Header />
      <div>
        Test Link
        <div>
          <button>
            <Link to="/user">go to user page</Link>
          </button>
          <button>
            <Link to="/admin">go to admin page</Link>
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;

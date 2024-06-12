import videoHomepage from "../../assets/homepage_video.mp4";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
const HomePage = (props) => {
  const isAuthenticated = useSelector(state => state.user.isAuthenticated)
  const navigate = useNavigate();
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomepage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div>
          {isAuthenticated === false ?
            <button className="btn-start" onClick={() => navigate('/login')}> Let's start</button>
            : 
            <button className="btn-start" onClick={() => navigate('/user')}> Doing Quiz Now</button>
            }
        </div>
      </div>
    </div>
  );
};

export default HomePage;

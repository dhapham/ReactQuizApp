import videoHomepage from '../../assets/homepage_video.mp4'
const HomePage = (props) => {
    return (
        <div className='homepage-container'>
            <video autoPlay muted loop>
                <source src={videoHomepage} type="video/mp4" />
            </video>
            <div className='homepage-content'>
                <div>
                <button className='btn-start'>
                    Let's start
                </button>
                </div>
            </div>
        </div>
    )
}

export default HomePage;
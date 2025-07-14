import profilePic from './assets/Profile.png';

function Card() {
    return (
        <div className="card">
            <img className="card-image" src={profilePic} alt="profile picture"></img>
            <h2 className="card-title">Electrohyun</h2>
            <p className="card-text">I make Github codes and play video games</p>
        </div>
    );
}

export default Card;
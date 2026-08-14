import "./App.css";
import ProfileImg from "./assets/profile.jpg"

function App() {
  const name = "Okeke Divine Gift";
  const role = "Software Engineer";
  const description =
    "Passionate about building modern and responsive web applications using React and clean code.";

  return (
    <div className="page">
      <div className="profile-card">

        <img
          className="profile-image"
          src={ProfileImg}
          alt="Profile"
        />

        <h1>{name}</h1>

        <h2>{role}</h2>

        <div className="line"></div>

        <p>{description}</p>

        <div className="skills">

          <div className="skill">
            <span>&lt;/&gt;</span>
            <p>Clean Code</p>
          </div>

          <div className="skill">
            <span></span>
            <p>React</p>
          </div>

          <div className="skill">
            <span></span>
            <p>Front-End</p>
          </div>

          <div className="skill">
            <span></span>
            <p>Back-End</p>
          </div>

          <div className="skill">
            <span></span>
            <p>Softwares</p>
          </div>

        </div>

        <button>Contact Me</button>

      </div>
    </div>
  );
}

export default App;
import CeoImg from "../assets/profile.jpg";
import team1 from "../assets/images (3).jpeg";
import team2 from "../assets/images (4).jpeg";
import team3 from "../assets/images (5).jpeg";
import Button from "./Button";

function UserCard() {
  const teams = [
    {
      id: 1,
      name: "Divine",
      role: "Software Engineer",
      location: "Lagos, Nigeria",
      available: "Available",
      image: CeoImg
    },
    {
      id: 2,
      name: "Sarah",
      role: "Ui Designer",
      location: "Abuja, Nigeria",
      available: "Available",
      image: team1
    },
    {
      id: 3,
      name: "Daniel",
      role: "Frontend Developer",
      location: "Port Harcourt, Nigeria",
      available: "Available",
      image: team3
    },
    {
      id: 4,
      name: "Esther",
      role: "Backend Developer",
      location: "Ibadan, Nigeria",
      available: "Available",
      image: team2
    },
  ];

  return (
    <div className="card">
      {teams.map((team) => (
        <div key={team.id} className="card1">
          <img src={team.image} alt={team.name} />
          <h2>{team.name}</h2>
          <p>{team.role}</p>
          <p><i className="fa-solid fa-location-dot"></i>{team.location}</p>
              <p><i className="fa-solid fa-circle"></i>{team.available}</p>
         <Button/>
        </div>
      ))}
    </div>
  );
}

export default UserCard;
import React from "react";
import "./Home.css";
import giticon  from "../../../assets/icons/4202085_linkedin_logo_social_social media_icon.png"
import linkedin  from "../../../assets/icons/317712_code repository_github_repository_resource_icon.png"

function Home() {
  return (
    <div>
      <div className="landingpage">
      <div className="text">
        <h1>Full Stack Developer </h1>
        <span>HI, iam Ewi Mbong Josepha.Apassionate and Commited Full Stack Developer base in Cameroon</span>
        <div className="gitIcon">
          <img src={giticon} alt="Linked Icon" />
          <img src={linkedin} alt="Git Icon" />
        </div>
        <div className="myAvatar">
          <img src="" alt="Josey"/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default Home;

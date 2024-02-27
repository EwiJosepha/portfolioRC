import React from "react";
import "./Home.css";
import giticon from "../../../assets/icons/4202085_linkedin_logo_social_social media_icon.png";
import typescript from "../../../assets/icons/9074220_typescript_icon.png";
import tailwind from "../../../assets/icons/9073628_tailwind_icon.png";
import logoreact from "../../../assets/icons/7423887_react_react native_icon.png";
import express from "../../../assets/icons/11244080_x_twitter_elon musk_twitter new logo_icon.png";
import js from "../../../assets/icons/4373213_js_logo_logos_icon.png";
import html from "../../../assets/icons/65687_html_logo_html5_5_five_icon.png";
import css from "../../../assets/icons/317756_badge_css_css3_achievement_award_icon.png";
import node from "../../../assets/icons/1269842_development_install_javascript_js_node_icon.png";
import firebase from "../../../assets/icons/1175532_developer_firebase_google_coding_programming_icon (1).png";
import gitHub from "../../../assets/icons/317712_code repository_github_repository_resource_icon.png";
import linkedin from "../../../assets/icons/317712_code repository_github_repository_resource_icon.png";
import avatar from "../../../assets/icons/1175532_developer_firebase_google_coding_programming_icon (1).png";

function Home() {
  return (
    <div className="back">
      <div className="landingpage">
        <div className="text">
          <h1>Full Stack Developer </h1>
          <span>
            HI, iam Ewi Mbong Josepha.Apassionate
            <br />
            and Commited Full Stack Developer base in Cameroon
          </span>
          <div className="gitIcon">
            <img src={giticon} id="git" alt="Linked Icon" />
            <img src={linkedin} id="linked" alt="Git Icon" />
          </div>
          <br />
          <br />
          <div className="stackTech">
            <img src={typescript} id="linked" alt="TypeScript" />
            <img src={tailwind} id="linked" alt="Tailwind" />
            <img src={logoreact} id="linked" alt="React" />
            <img src={express} id="linked" alt="Express" />
            <img src={js} id="linked" alt="Js" />
            <img src={html} id="linked" alt="HTML" />
            <img src={css} id="linked" alt="CSS" />
            <img src={node} id="linked" alt="NODE" />
            <img src={firebase} id="linked" alt="FIREBASE" />
            <img src={gitHub} id="linked" alt="GITHUB" />
          </div>
        </div>
        <div className="myAvatar">
          <img src={avatar} alt="Josey"  id="avatar"/>
        </div>
      </div>
    </div>
  );
}

export default Home;

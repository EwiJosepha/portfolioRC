import React from "react";
import { Link } from "react-router-dom";
import gitHub from "../../../assets/icons/317712_code repository_github_repository_resource_icon.png";

import "./Portfolio.css";

function Portfolio() {
  return (
    <div>
      <div className="headers">
        <h1 id="portfolio">PORTFOLIO</h1>
        <h1 style={{color: "orangered"}}>
          Buy from Home<i class="ri-shopping-cart-2-line"></i>
        </h1>
      </div>

      <div className="description">
        <div className="containerthumb">
          <div className="top">
            <div className="subcard" id="subcards">
              <img
                src="https://media.istockphoto.com/id/1404894296/photo/woman-with-stylish-bag-on-grey-background-closeup.webp?b=1&s=170667a&w=0&k=20&c=2RyBB26QUkQTvJ3Vm2v9tH3ONzNCnwGomu0Wl5abN1U="
                id="details-page"
              />

              <i className="fa-regular fa-heart"></i>
            </div>

            <div className="snikersprice">
              <span id="snykers">Versace</span>
              <span id="snykers-price">$1200</span>
            </div>

            <div className="shoes-available">
              <p id="shoes"> 5 types of shoes available</p>
            </div>
            <div className="stars">
              <span id="star" className="fa-star"></span>
              <p id="number">(121)</p>
            </div>
            <div className="date">
              <button id="addtocard" className="addtocard">
                Add to Card
              </button>
              <button id="shortlist">Short List</button>
            </div>
          </div>
        </div>
        <div className="centered-wrapper">
          <div className="centered-content">
            <h2>E-COMMERCE WEB SITE</h2>
            <div className="definition">
              <span id="centered">
                An e-commerce website allows users to browse and purchase
                products online.<br></br> Users can add items to their shopping
                cart and remove them before completing the purchase.
              </span>
            </div>

            <div className="flex-buttons">
              <div className="code">
                <p style={{ color: "orange" }}>
                  code <img src={gitHub} id="codeimg" />
                </p>
              </div>
              <div className="code">
                <p style={{ color: "orange" }}>
                  Demo <img src={gitHub} />
                </p>
              </div>
              {/* <button>Button 2</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;

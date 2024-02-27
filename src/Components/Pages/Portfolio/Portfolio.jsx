import React from 'react'
import { Link } from "react-router-dom";
import "./Portfolio.css"


function Portfolio() {
  return (
    <div>
        <div className="container1">
          {/* <div className="titleportfolio">
          <h1>Portfolio</h1>
          </div><br/> */}
        <div className="title">
          <Link to="/" id="atag">
            <h1 id="fashionhub">
              <i>FashionHub</i>
            </h1>
          </Link>
          <div className="navlinks">
            {/* <Categories /> */}

            <span id="brand">Brand</span>
            <Link to="./Contact" id="contactdisplay">
              <span className="contactt">Contact</span>
            </Link>
            <span id="faq">FAQ's</span>
          </div>
        </div>

        <div className="basket">
          <button id="basketimg">
            <span id="items-selected"></span>
            <a href="http:${base_url}viewcards/cards.html">
              <i className="fa-solid fa-bag-shopping" id="navto-nextp"></i>
            </a>
          </button>
          <button id="bell">
            <span id="bells"></span>
            <i className="fa-regular fa-bell"></i>
          </button>
          <div className="title-image">
            <img src="https://media.istockphoto.com/id/1253920275/fr/photo/femme-avec-le-b%C3%A9b%C3%A9-nouveau-n%C3%A9.webp?b=1&s=170667a&w=0&k=20&c=zIRObcgZ_XtXXZqWlRk_VptXdvd00YiX_vHEH7lwkqg=" />
            <div className="name">
              <span id="gmorning">Good morning</span>
              <span id="johnson">Scarlet Johnson</span>
            </div>
          </div>
        </div>
      </div>
      <div className="containerthumb">
      <div className="top">
              <div className="subcard" id="subcards">
                  <img src="https://media.istockphoto.com/id/1440767383/photo/fashion-show-a-catwalk-event-runway-show-models-walking-the-catwalk.webp?b=1&s=170667a&w=0&k=20&c=LefAqgc41oCGBTBLEbX-OcPT4foEaNaGr5QPQSshb4A=" id="details-page" />

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
                <span id="star" className="fa-star">
                </span>
                <p id="number">(121)</p>
              </div>
              <div className="date">
                <button id="addtocard" className="addtocard">
                  Add to Card
                </button>
                <button id="shortlist">Short List</button>
              </div>
            </div>
      <div className="top">
              <div className="subcard" id="subcards">
                  <img src="https://media.istockphoto.com/id/1404894296/photo/woman-with-stylish-bag-on-grey-background-closeup.webp?b=1&s=170667a&w=0&k=20&c=2RyBB26QUkQTvJ3Vm2v9tH3ONzNCnwGomu0Wl5abN1U=" id="details-page" />

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
                <span id="star" className="fa-star">
                </span>
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
     
    </div>
  )
}

export default Portfolio

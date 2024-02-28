import React from 'react'
import "./Projects.css"

function Project() {
  return (
    <div>
          <div className="containerthumb2">
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
    </div>
  )
}

export default Project

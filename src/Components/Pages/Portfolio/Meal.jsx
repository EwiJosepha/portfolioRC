import React from 'react'

function Meal() {
  return (
    <div>
        <div className="landingimage">
       
          <img
        src="https://images.unsplash.com/photo-1508736793122-f516e3ba5569?dpr=1&h=294&w=294&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxjb2xsZWN0aW9uLXRodW1ibmFpbHx8MzQ0OTcwOXx8ZW58MHx8fHx8"
        alt="Shawarma" />        
   

      <div className="centered-wrapper">
          <div className="centered-content">
            <h2>Meal Recipe</h2>
            <div className="definition">
              <span id="centered">
              A recipe website allowing users to create, share, and discover recipes. Users can create their own recipes with ingredients and instructions.<br></br> They can also explore a wide range of recipes shared by others, offering a platform for culinary inspiration and creativity
              </span>
            </div>

            <div className="flex-buttons">
              <div className="code">
                <p style={{ color: "orange" }}>
                  code <img src="" id="codeimg" />
                </p>
              </div>
              <div className="code">
                <p style={{ color: "orange" }}>
                  Demo <img src="" />
                </p>
              </div>
              {/* <button>Button 2</button> */}
            </div>
          </div>
        </div>
    </div>
    </div>
  )
}

export default Meal

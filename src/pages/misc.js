import React from 'react'

const misc = () => {
  return (
    <div className="hobbiesDiv container">
      <div className="mt-5 text-center pb-5">
          <h4> <span style={{fontSize: "150%"}} className="wave mx-1">🏗️</span> Kinda Useful Projects</h4>
      </div>

      <div class="border border-3 p-4 flex" style={{borderRadius: "10px"}}>
        <div class="text-left mb-3">
          <span className="h4">DeskGenius </span>
          <span className="h5">
            <a href="https://deskgenius.vercel.app/" className="hover-underline-animation" style={{textDecoration:"none", color:"#4d94ff"}}>deskgenius.vercel.app<i className='bi bi-box-arrow-up-right ms-1'></i>
            </a>
          </span>
        </div>
        <div>
          DeskGenius is a software that utilizes 3D rendering technology to help you visualize table arrangements before making a purchase. 
          Whether you're setting up a home office, workspace, or gaming station, DeskGenius allows you to explore different desk configurations in a virtual environment. 
          By combining the power of Next.js and Three Fiber (Three.js), DeskGenius offers an interactive and immersive experience that saves you time, money, and energy in creating your dream setup.
        </div>
        <div className="mt-3 d-flex flex-wrap">
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#ffe0b3", borderRadius: "20px", border: "2px solid #ff9900" }}>
            <span style={{ color: "#ff9900" }}>&#x2022;</span> Next.js
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#e6fff2", borderRadius: "20px", border: "2px solid #00994d" }}>
            <span style={{ color: "#00994d" }}>&#x2022;</span> React.js
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#ccebff", borderRadius: "20px", border: "2px solid #006bb3" }}>
            <span style={{ color: "#006bb3" }}>&#x2022;</span> Three Fiber
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#ffffb3", borderRadius: "20px", border: "2px solid #cccc00" }}>
            <span style={{ color: "#cccc00" }}>&#x2022;</span> JavaScript
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#ccffff", borderRadius: "20px", border: "2px solid #00b3b3" }}>
            <span style={{ color: "#00b3b3" }}>&#x2022;</span> Vercel
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#e6ccff", borderRadius: "20px", border: "2px solid #6600cc" }}>
            <span style={{ color: "#6600cc" }}>&#x2022;</span> Tailwind CSS
          </div>
        </div>
      </div>
    </div>
  )
}

export default misc

import React from 'react'

const misc = () => {
  return (
    <div className="hobbiesDiv container">
      <div className="mt-5 text-center pb-5">
          <h4>Some stuff from my free time</h4>
      </div>

      <div className="border border-3 p-4 flex" style={{borderRadius: "10px"}}>
        <div className="text-left mb-3">
          <div className="h4">DeskGenius </div>
          <div className="h5">
            <a href="https://deskgenius.vercel.app/" className="hover-underline-animation" style={{textDecoration:"none", color:"#4d94ff", fontSize: "15.5px"}} target='__blank'>deskgenius.vercel.app <i class="bi bi-link-45deg"></i></a>
          </div>
        </div>
        <div className='projectDescriptionFontSize'>
          Front-end 3D rendering engine, using Next.js and Three-Fiber, for visualizing desktop setups before purchasing. Utilizes graphic ray tracing, texture mapping and advanced algorithms to optimize rendering performance and reducing
          computational overhead, resulting in a highly responsive UI and immersive user experience.
        </div>
        <div className="mt-3 d-flex flex-wrap projectDescriptionFontSize">
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#ffe0b3", borderRadius: "20px", border: "2px solid #ff9900" }}>
            <span style={{ color: "#ff9900" }}>&#x2022;</span> Next.js
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#e6fff2", borderRadius: "20px", border: "2px solid #00994d" }}>
            <span style={{ color: "#00994d" }}>&#x2022;</span> React.js
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#ccebff", borderRadius: "20px", border: "2px solid #006bb3" }}>
            <span style={{ color: "#006bb3" }}>&#x2022;</span> Three.js
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

      <div className="border border-3 p-4 flex" style={{borderRadius: "10px", marginTop: "2.5rem"}}>
        <div className="text-left mb-3">
          <div className="h4">ContinueDev Sagemaker Endpoint</div>
          <div className="h5">
            <a href="https://github.com/thisisadityapatel/continueSageEndpoint" className="hover-underline-animation" style={{textDecoration:"none", color:"#4d94ff", fontSize: "15.5px"}} target='__blank'>thisisadityapatel/continueSageEndpoint<i class="bi bi-link-45deg"></i></a>
          </div>
        </div>
        <div className='projectDescriptionFontSize'>
          ContinueDev Sagamaker Endpoint API using LangChain for continue.dev extension to support LLM models hosted via AWS Sagemaker. Enables streaming llm response from sagemaker using SSE connection of Ollama mocking.
        </div>
        <div className="mt-3 d-flex flex-wrap projectDescriptionFontSize">
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#ffccff", borderRadius: "20px", border: "2px solid #800080" }}>
            <span style={{ color: "#800080" }}>&#x2022;</span> Python
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#cadbb4", borderRadius: "20px", border: "2px solid #494f40" }}>
            <span style={{ color: "#494f40" }}>&#x2022;</span> LangChain
          </div>
        </div>
      </div>
      
      <div className="border border-3 p-4 flex" style={{borderRadius: "10px", marginTop: "2.5rem"}}>
        <div className="text-left mb-3">
          <div className="h4">PetroForecast </div>
          <div className="h5">
            <a href="https://github.com/thisisadityapatel/petroforecast" className="hover-underline-animation" style={{textDecoration:"none", color:"#4d94ff", fontSize: "15.5px"}} target='__blank'>thisisadityapatel/petroforecast <i class="bi bi-link-45deg"></i>
            </a>
          </div>
        </div>
        <div className='projectDescriptionFontSize'>
          Eduardo Saverin (context: Facebook co-founder) made 300k during his summer at harvard betting on heating oil futures, crazy! Built this Full Stack Machine Learning project to visualize and predict the data and to understand his bet from a prespect of smart analytics and machine learning.
        </div>
        <div className="mt-3 d-flex flex-wrap projectDescriptionFontSize">
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#ffccff", borderRadius: "20px", border: "2px solid #800080" }}>
            <span style={{ color: "#800080" }}>&#x2022;</span> Python
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#99ddff", borderRadius: "20px", border: "2px solid #0099e6" }}>
            <span style={{ color: "#0099e6" }}>&#x2022;</span> Jupyter
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#e6fff2", borderRadius: "20px", border: "2px solid #00994d" }}>
            <span style={{ color: "#00994d" }}>&#x2022;</span> React.js
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#ffffb3", borderRadius: "20px", border: "2px solid #cccc00" }}>
            <span style={{ color: "#cccc00" }}>&#x2022;</span> JavaScript
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#d1e0e0", borderRadius: "20px", border: "2px solid #476b6b" }}>
            <span style={{ color: "#476b6b" }}>&#x2022;</span> SQLite3
          </div>
        </div>
      </div>

      <div className="border border-3 p-4 flex" style={{borderRadius: "10px", marginTop: "2.5rem"}}>
        <div className="text-left mb-3">
          <div className="h4">SchedulingSignals</div>
          <div className="h5">
            <a href="https://github.com/thisisadityapatel/schedulingSignals_OperatingSystem" className="hover-underline-animation" style={{textDecoration:"none", color:"#4d94ff", fontSize: "15.5px"}} target='__blank'>thisisadityapatel/schedulingSignals<i class="bi bi-link-45deg"></i>
            </a>
          </div>
        </div>
        <div className='projectDescriptionFontSize'>
          Project focused on multiprocessing with Round Robin (RR) and Lucky 7 (L7) algorithms for inter-process communication via. signals in C and Bash Scripts, having master-worker cluster architecture. Minimized latency and optimized data synchronization through algorithms, facilitating seamless inter-process coordination.
        </div>
        <div className="mt-3 d-flex flex-wrap projectDescriptionFontSize">
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#cfcccc", borderRadius: "20px", border: "2px solid #4d4d4d" }}>
            <span style={{ color: "#4d4d4d" }}>&#x2022;</span> C Programming
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#8adcf2", borderRadius: "20px", border: "2px solid #118cad" }}>
            <span style={{ color: "#118cad" }}>&#x2022;</span> Bash Scripting
          </div>
        </div>
      </div>

      <div className="border border-3 p-4 flex" style={{borderRadius: "10px", marginTop: "2.5rem", marginBottom: "5em"}}>
        <div className="text-left mb-3">
          <div className="h4">SecureCash</div>
          <div className="h5">
            <a href="https://github.com/thisisadityapatel/SecureCash" className="hover-underline-animation" style={{textDecoration:"none", color:"#4d94ff", fontSize: "15.5px"}} target='__blank'>thisisadityapatel/SecureCash<i class="bi bi-link-45deg"></i>
            </a>
          </div>
        </div>
        <div className='projectDescriptionFontSize'>
          Java-based graphical user interface (GUI Java Swing) ATM system that enables secure and easier transactions. Object orientated structure to its core alongside a live database to store and collect transaction data.
        </div>
        <div className="mt-3 d-flex flex-wrap projectDescriptionFontSize">
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#ccffff", borderRadius: "20px", border: "2px solid #00b3b3" }}>
            <span style={{ color: "#00b3b3" }}>&#x2022;</span> Java
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#c2939e", borderRadius: "20px", border: "2px solid #4f0919" }}>
            <span style={{ color: "#4f0919" }}>&#x2022;</span> Java Swing
          </div>
          <div className="rounded-pill me-1 my-1 px-1" style={{ backgroundColor: "#d1e0e0", borderRadius: "20px", border: "2px solid #476b6b" }}>
            <span style={{ color: "#476b6b" }}>&#x2022;</span> SQLite3
          </div>
        </div>
      </div>
    </div>
  )
}

export default misc

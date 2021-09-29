
/* I Got this sample code from sandbox.io */

import React from "react";
import Particle from "react-particles-js";
import particlesConfig from "../assets/particlesConfig.json";

function App() {
  return (
    <>
      <Particle params={particlesConfig} className="App-particles__container" />
      <div className="App">
        <div className="App-text">
          <h1 className="App-text__title">[ Ruslan Rozykulyyev ]</h1>
          <h2 className="App-text__body">
            Cloud Architect | DevOps Eng = ( AWS - Kubernetes - Helm - Docker - Terraform - Ansible - CI/CD )
          </h2>
        </div>
      </div>
    </>
  );
}

export default App;

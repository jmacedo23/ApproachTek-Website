import React from "react";
import "./Home.css";
import Customers from "../pages/Customers";

const Home: React.FC = () => {
  return (
    <div>
      <h1 className="welcome-message" style={{ marginBottom: "100px" }}>
        ApproachTek - Innovation in Data and Information Architecture
      </h1>
      <div className="w3-container.font" >
        
        <h2 style={{ marginLeft: "50px"}}>    OnBase® Certifications</h2>

        <div className="accordion" id="accordionExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                <strong> Certified Advanced Workflow Administrator</strong>
              </button>
            </h2>
            <div
              id="collapseOne"
              className="accordion-collapse collapse show"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                An OnBase® Certified Advanced Workflow Administrator designs,
                configures, and maintains complex automated workflows in the
                OnBase® platform to optimize business processes, integrate
                systems, and improve organizational efficiency.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseTwo"
                aria-expanded="false"
                aria-controls="collapseTwo"
              >
                <strong>Certified WorkView Developer (OCWV)</strong>
              </button>
            </h2>
            <div
              id="collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                A Certified WorkView Developer (OCWV) designs and configures
                custom applications within the OnBase® platform using WorkView
                to manage data-driven processes, optimize workflows, and create
                tailored solutions for business needs.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseThree"
                aria-expanded="false"
                aria-controls="collapseThree"
              >
                <strong>Certified Advanced System Administrator</strong>
              </button>
            </h2>
            <div
              id="collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                A Certified Advanced System Administrator manages, configures,
                and optimizes the OnBase® platform at an advanced level,
                handling system integrations, troubleshooting, and ensuring
                reliable, efficient system performance.
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseFour"
                aria-expanded="false"
                aria-controls="collapseFour"
              >
                <strong>Certified API Developer (OCAPI)</strong>
              </button>
            </h2>
            <div
              id="collapseFour"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionExample"
            >
              <div className="accordion-body">
                A Certified API Developer (OCAPI) creates, customizes, and
                integrates applications with the OnBase® platform using APIs to
                extend functionality, automate processes, and connect external
                systems.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <Customers /> {/* Include the Customers component */}
      </div>
    </div>
  );
};

export default Home;

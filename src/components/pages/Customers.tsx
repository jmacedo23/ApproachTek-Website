import React, { useEffect, useRef, useState } from "react";
import "./Customers.css";
import RoadImage from "./Road.jpeg"; // Adjust the path as necessary
import MedStarImage from "./MedStar.png"; // Adjust the path as necessary

const Customers: React.FC = () => {
  const roadCardRef = useRef<HTMLDivElement>(null);
  const medStarCardRef = useRef<HTMLDivElement>(null);
  const [isRoadInView, setIsRoadInView] = useState(false);
  const [isMedStarInView, setIsMedStarInView] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (roadCardRef.current) {
        const rect = roadCardRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsRoadInView(true);
        } else {
          setIsRoadInView(false);
        }
      }
      if (medStarCardRef.current) {
        const rect = medStarCardRef.current.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
          setIsMedStarInView(true);
        } else {
          setIsMedStarInView(false);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="customers-container">
      <h2>Our Customers</h2>
      <div
        className={`customer-card ${isRoadInView ? "in-view" : ""}`}
        ref={roadCardRef}
      >
        <h3>Colorado Department of Transportation</h3>
        <img src={RoadImage} alt="Road" className="customer-image" />
      </div>
      <div
        className={`customer-card ${isMedStarInView ? "in-view-right" : ""}`}
        ref={medStarCardRef}
      >
        <h3>MedStar Health Research Institute</h3>
        <img src={MedStarImage} alt="MedStar" className="customer-image-right" />
      </div>
    </div>
  );
};

export default Customers;

import React from "react";
import person1 from "/src/assets/images/person 1.jpg"
import person2  from "/src/assets/images/person 2.jpg"


export default function Customers() {
  return (
    <>
      <section className="customers">
        <div className="container">
          <div className="images">
            <div className="revenue1">
              <div className="circle1">
              <div className="card1">
                <img src={person1} alt="" />
                <div className="card-text">
<h1>$7,654 <i class="fa-solid fa-circle-chevron-up"></i></h1>
<p>TOTAL REVENUE <span>+$232</span></p>
                </div>
            

                </div>
                <svg width="400" height="150" xmlns="http://www.w3.org/2000/svg">
  <path d="
    M0 100
    C50 120, 100 80, 150 100
    C200 120, 250 60, 300 80
    C350 100, 400 40, 450 20
    "
    stroke="#00bcd4"
    stroke-width="3"
    fill="none" />
</svg>
              </div>
              
            </div>
            <div className="revenue2">
              <div className="circle2">
              <div className="card2">
              <div className="card-text">
                <h1>$9,978 <i class="fa-solid fa-circle-chevron-up"></i></h1>
<p>TOTAL REVENUE <span>+$349</span></p>
                </div>
                 <img src={person2} alt="" />
                
                </div>
                <svg width="300" height="150" xmlns="http://www.w3.org/2000/svg">
  <path d="
    M0 100
    C50 120, 100 80, 150 100
    C200 120, 250 60, 300 80
    C350 100, 400 40, 450 20
    "
    stroke="#55CB85"
    stroke-width="3"
    fill="none" />
</svg>
              </div>
            </div>
          </div>
          <div className="customers-text">
            <h4>WHAT WE DO</h4>
            <h1>Increase our Customers Sales</h1>
            <p>
              Our customers are using big data analysis to find their insights.
            </p>
            <div className="more-details">
              <h5>More Details</h5>
              <div className="arrow-icon">
                <i class="fa-solid fa-angle-right"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

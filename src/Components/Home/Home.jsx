import React, { useState } from "react";
import Navbar from "../Navbar/Navbar";
import man from "/src/assets/images/man.png"
export default function Home() {
  const [search, setSearch] = useState('');
function searching(){
  setSearch('')
}
  return (
    <>
      <Navbar />
      <section>
        <div className="hero">
          <div className="container">
            <div className="hero-image">
              <img
                src={man}
                alt=""
              />
            </div>

            <div className="title">
              <h1>we help you build & grow online businss</h1>
              <div className="input">
              <input type="text" placeholder="tell us what you need to build" id="input-search" onChange={(e)=>setSearch(e.target.value)} value={search}/>
              <div className="search-icon" onClick={searching}>
              <i class="fa-solid fa-magnifying-glass"></i>
              </div>
              </div>
            </div>
            <div className="hero-about">
              <div className="about-image">
                <img
                  src={man}
                  alt=""
                />
              </div>
              <h3>James Bruno</h3>
              <p>Digital Marketing</p>
            </div>
          </div>
        </div>
        <div className="campanies">
          <div className="container">
            <p>Campanies we've helped build</p>
            <div className="campanies-names">
              <h3>media 24</h3>
              <h3>ONLINE</h3>
              <h3>WESTIN'S GUEST OFFICE</h3>
              <h3>Smart</h3>
              <h3>Icon</h3>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

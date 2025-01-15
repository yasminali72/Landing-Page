import React from 'react'
import chair from "/src/assets/images/chair.png"
import headphone from "/src/assets/images/headphone.png"

export default function About() {
  return (
    <>
    <section className='about'>
<div className="container">
    <div className="about-text">
    <h4>WE HELP YOU</h4>
    <h1>Sell  Stunning Products</h1>
    <p>We'll guide you through our unique 5-step
brand-building framework</p>
<div className="more-details">
    <h5>More Details</h5>
    <div className="arrow-icon">
    <i class="fa-solid fa-angle-right"></i>
    </div>
</div>
    </div>
    <div className="about-images">
        <div className="image1">
            <div className="detail">
<div className="detail-image">
<img src={chair} alt="" />
</div>               <div className="detail-price">
<p>Minimal Chair</p>
                <div className="price">
                <p>$204.00</p>
                <i class="fa-solid fa-cart-shopping"></i>
                </div>
</div>
            </div>
        </div>
        <div className="image2">
        <div className="detail" id='detail2'>
<div className="detail-image">
<img src={headphone} alt="" />
</div>               <div className="detail-price">
<p>Beats Headphone</p>
                <div className="price">
                <p>$74.00</p>
                <i class="fa-solid fa-cart-shopping"></i>
                </div>
</div>
            </div>
        </div>
    </div>
</div>
    </section>
    </>
  )
}

import React from 'react'
import fashion from "/src/assets/images/fashion.jpg"
import living from "/src/assets/images/living.jpg"
import woman from "/src/assets/images/woman.jpg"

export default function Features() {
  return (
    <>
    <section className='features'>
<div className="container">
    <div className="card">
        <img src={fashion} alt="" />
        <h3>fashion store</h3>
        <p>Shop ladies tehron at Mangoded.
USA With handreds of new style
htting our shelves every week</p>
    </div>
    <div className="card">
        <img src={living} alt="" />
        <h3>HOME FURNITURE
</h3>
        <p>Provides superior quality furniture and
mattresses at a price that customers
can easily afford</p>
    </div>
    <div className="card">
        <img src={woman} alt="" />
        <h3>SUPER GADGET STORE</h3>
        <p>
Specialize in selling unique gifts
cool gadgets, outdoor gear and fun
toys</p>
    </div>
</div>
    </section>
    </>
  )
}

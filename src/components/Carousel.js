import React from 'react'

export default function Carousel() {
  return (
    <div>
      <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel" style={{objectFit:"contain !important"}}>
  <div className="carousel-inner" id='carousel'>
    <div className='carousel-caption' style={{zIndex:"10"}}>
    <form className="d-flex">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-danger" type="submit">Search</button>
    </form>
    </div>
    <div className="carousel-item active">
      <img src="https://www.allrecipes.com/thmb/0xH8n2D4cC97t7mcC7eT2SDZ0aE=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/6776_Pizza-Dough_ddmfs_2x1_1725-fdaa76496da045b3bdaadcec6d4c5398.jpg" className="d-block w-100" style={{ filter:"brightness{30%}" }} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.thespruceeats.com/thmb/vf61j0CDD-RYdis4LVqmBV5NDzU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/all-american-burgers-480989-hero-05-6d4542f5661c4fd6889c16a445478e0c.jpg" className="d-block w-100" style={{ filter:"brightness{30%}" }} alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://www.thechunkychef.com/wp-content/uploads/2017/08/One-Pot-Chicken-Parmesan-Pasta-feat.jpg" className="d-block w-100" style={{ filter:"brightness{30%}" }} alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

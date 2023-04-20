import React from 'react'
import Navbar from '../components/Navbar'

export default function MyOrders() {
  return (
    <div>
        <div>
        <Navbar/>
      </div>
      <div className=" container row mb-3">
      <div className=" card mt-3 " style={{ width: "20rem", maxHeight: "400px" }}>
        <img src="https://www.dominos.co.in//files/items/_1346164951.jpg" style={{ height: "200px", objectFit: "fill" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Pizaa</h5>
          <p className="card-title"> Cheese Burst</p>
            <div className="d-inline h-100 fs-5">Rs/-199</div>
        </div>
      </div>

      <div className=" card mt-3 " style={{ width: "20rem", maxHeight: "400px", marginLeft:"20px" }}>
        <img src="https://www.realsimple.com/thmb/z3cQCYXTyDQS9ddsqqlTVE8fnpc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/real-simple-mushroom-black-bean-burgers-recipe-0c365277d4294e6db2daa3353d6ff605.jpg" style={{ height: "200px", objectFit: "fill" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Burger</h5>
          <p className="card-title">Veggie</p>
            <div className="d-inline h-100 fs-5">Rs/-69</div>
        </div>
      </div>

      </div>
    </div>
  )
}

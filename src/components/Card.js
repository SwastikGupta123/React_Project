import React from "react";
import { Link } from "react-router-dom";

export default function Card() {
  return (
    <div className="row mb-3">
      <div className=" card mt-3 " style={{ width: "20rem", maxHeight: "400px" }}>
        <img src="https://www.dominos.co.in//files/items/_1346164951.jpg" style={{ height: "200px", objectFit: "fill" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Pizaa</h5>
          <p className="card-title"> Cheese Burst</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value="half">Small</option>
              <option value="half">Medium</option>
            </select>

            <div className="d-inline h-100 fs-5">Rs/-199</div>
            <hr></hr>
            <button className={`btn btn-danger justify-center ms-5`} >Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="card mt-3" style={{ width: "20rem", maxHeight: "400px", marginLeft:"20px"}}>
        <img src="https://static.toiimg.com/thumb/56868564.cms?imgsize=1948751&width=800&height=800" style={{ height: "200px", objectFit: "fill" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Pizza</h5>
          <p className="card-title"> Magherita</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value="half">Small</option>
              <option value="half">Medium</option>
            </select>
             <div className="d-inline h-100 fs-5">
              <br></br>
              Rs/-99</div>
             <hr></hr>
             <button className={`btn btn-danger justify-center ms-5`} >Add to Cart</button>
          </div>
        </div>
      </div>
   
      <div className="card mt-3" style={{ width: "20rem", maxHeight: "400px", marginLeft:"20px"}}>
        <img src="https://www.brotherskitchen.in/wp-content/uploads/2021/03/farmhouse-pizza-vegetarian-pizza-with-mouth-watering-toppings_1024-768-600x450.jpg" style={{ height: "200px", objectFit: "fill" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Pizza</h5>
          <p className="card-title"> Farm House</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value="half">Small</option>
              <option value="half">Medium</option>
            </select>
             <div className="d-inline h-100 fs-5">
              <br></br>
              Rs/- 99</div>
             <hr></hr>
             <button className={`btn btn-danger justify-center ms-5`} >Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="card mt-3" style={{ width: "20rem", maxHeight: "400px", marginLeft:"20px"}}>
        <img src="https://slice-menu-assets-prod.imgix.net/50475/1608946097_69c82366cc?fit=crop&w=480&h=480" style={{ height: "200px", objectFit: "fill" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Pizza</h5>
          <p className="card-title">Garden Delight</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value="half">Small</option>
              <option value="half">Medium</option>
            </select>
             <div className="d-inline h-100 fs-5">Rs/-299</div>
             <hr></hr>
             <button className={`btn btn-danger justify-center ms-5`} >Add to Cart</button>
          </div>
        </div>
      </div>

      {/* NEXT ROW */}

      <div className="card mt-5" style={{ width: "20rem", maxHeight: "400px"}}>
        <img src="https://www.realsimple.com/thmb/z3cQCYXTyDQS9ddsqqlTVE8fnpc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/real-simple-mushroom-black-bean-burgers-recipe-0c365277d4294e6db2daa3353d6ff605.jpg" style={{ height: "200px", objectFit: "fill" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Burger</h5>
          <p className="card-title"> Veggie</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value="half">Small</option>
              <option value="half">Medium</option>
            </select>
             <div className="d-inline h-100 fs-5">
             <br></br>
              Rs/-69</div>
             <hr></hr>
             <button className={`btn btn-danger justify-center ms-5`}>Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="card mt-5" style={{ width: "20rem", maxHeight: "400px", marginLeft:"20px"}}>
        <img src="https://bestbeefrecipes.com/wp-content/uploads/2021/06/egg-burger-featured.jpg" style={{ height: "195px", objectFit: "fill" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Burger</h5>
          <p className="card-title"> Egg </p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value="half">Small</option>
              <option value="half">Medium</option>
            </select>
             <div className="d-inline h-100 fs-5">
             <br></br>
              Rs/-89</div>
             <hr></hr>
             <button className={`btn btn-danger justify-center ms-5`} >Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="card mt-5" style={{ width: "20rem", maxHeight: "400px", marginLeft:"20px"}}>
        <img src="https://www.acouplecooks.com/wp-content/uploads/2023/01/Red-Sauce-Pasta-008.jpg" style={{ height: "195px", objectFit: "fill" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Pasta</h5>
          <p className="card-title"> Red Sauce</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value="half">Half</option>
              <option value="half">full</option>
            </select>
             <div className="d-inline h-100 fs-5">
             <br></br>
              Rs/-199</div>
             <hr></hr>
             <button className={`btn btn-danger justify-center ms-5`} >Add to Cart</button>
          </div>
        </div>
      </div>

      <div className="card mt-5" style={{ width: "20rem", maxHeight: "400px", marginLeft:"20px"}}>
        <img src="https://www.sharmispassions.com/wp-content/uploads/2020/03/WhiteSaucePasta6-500x375.jpg" style={{ height: "195px", objectFit: "fill" }} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">Pasta</h5>
          <p className="card-title"> White Sauce</p>
          <div className="container w-100">
            <select className="m-2 h-100 bg-success">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <select className="m-2 h-100 bg-success rounded">
              <option value="half">Half</option>
              <option value="half">full</option>
            </select>
             <div className="d-inline h-100 fs-5">
              <br></br>
              Rs/-199</div>
             <hr></hr>
             <button className={`btn btn-danger justify-center ms-5`} >Add to Cart</button>
          </div>
        </div>
      </div>

    </div>
  );
}

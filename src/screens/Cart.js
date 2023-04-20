import React from 'react'
import { Link } from 'react-router-dom'

export default function Cart() {
  return (
    <div>
       <div className='container m-auto mt-5 table-responsive  table-responsive-sm table-responsive-md' >
        <table className='table table-hover '>
          <thead className=' text-success fs-4'>
            <tr>
              <th scope='col' >#</th>
              <th scope='col' >Name</th>
              <th scope='col' >Quantity</th>
              <th scope='col' >Option</th>
              <th scope='col' >Amount</th>
              <th scope='col' ></th>
            </tr>
          </thead>
          <tbody className='text-white'>
          <tr>
              <th scope='col' >1</th>
              <th scope='col' >Cheese Burst Pizza</th>
              <th scope='col' >1</th>
              <th scope='col' >Small</th>
              <th scope='col' >199</th>
              <th scope='col' ></th>
            </tr>

            <tr>
              <th scope='col' >2</th>
              <th scope='col' >Veggie Burger</th>
              <th scope='col' >1</th>
              <th scope='col' >Small</th>
              <th scope='col' >69</th>
              <th scope='col' ></th>
            </tr>

          </tbody>
        </table>
        <div><h1 className='fs-2 text-white'>Total Price: 268</h1></div>
        <div>
          <Link to='/order' className='btn bg-success mt-5 ' > Check Out </Link>
        </div>
        </div>
    </div>
  )
}

import YourCart from "../yourCart"
import YourTotals from "../totalCart"
import MessengerApp from "../mesengerApp"
import { cartSlice } from "./cartSlice"
import { listCartLocal } from "../redux/selector"
import { useSelector } from "react-redux"
import { useRef } from "react"
const Cart = () => {
  let stt=useRef()
  stt = 0
  const listCarts = useSelector(listCartLocal)
 
  const elementYourCart=listCarts.map((cart, index) =>{
    // if(cart){
    //   stt++;
    // }
    
    return <YourCart index={index} key={cart.index} name={cart.name} price={cart.price} quantity={cart.quantity} />
  })
    return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
      <div className="panel panel-danger">
        <div className="panel-heading">
          <h1 className="panel-title">Your Cart</h1>
        </div>
        <div className="panel-body">
          <table className="table">
            <thead>
              <tr>
                <th width="4%">#</th>
                <th>Pokemon</th>
                <th width="15%">Price</th>
                <th width="4%">Quantity</th>
                <th width="20%">Subtotal</th>
                <th width="25%">Action</th>
              </tr>
            </thead>
            <tbody id="my-cart-body">
              {/* CART BODY */}
              {elementYourCart}
            </tbody>
            <tfoot id="my-cart-footer">
              {/* CART FOOTER */}
              <YourTotals />
            </tfoot>
          </table>
        </div>
      </div>
      <MessengerApp />
    </div>
  )
}
export default Cart
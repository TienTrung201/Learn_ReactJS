import { useDispatch, useSelector } from "react-redux"
import {  listCartLocal } from "../redux/selector"
import { cartSlice } from "../cart/cartSlice"
import { cartTotalSlice } from "../totalCart/cartTotalSlice"
import { useEffect } from "react"
const YourCart = ({ ...props }) => {
  const listCarts = useSelector(listCartLocal)
  const Dispatch = useDispatch()
  useEffect(() => {
    if (listCarts.length > 0) {
      Dispatch(cartTotalSlice.actions.updateTotal(listCarts))
    }

  }, [listCarts,Dispatch])

  // console.log(useSelector(listProduct))
  const totalCart = props.price * props.quantity
  const handleDeleteCart = () => {
    Dispatch(cartSlice.actions.deleteProduct(props.index))
  }
  const handleChangeQuantityName = (e) => {
    // Dispatch(totalSlice.actions.replaceQuantityYourCart(e.target))
    Dispatch(cartSlice.actions.changeQuantityName(e.target))
  }
  // const handleUpdateTotal = (e) => {
  //   Dispatch(cartTotalSlice.actions.updateTotal(listCarts))
  // }
  // const obActionCard = (e) => {
  //   return {
  //     quantity: e.target.value,
  //     price: props.price
  //   }
  // }
  return (
    <tr>
      <th scope="row">{props.index}</th>
      <td>{props.name}</td>
      <td>{props.price} USD</td>
      <td>
        <input
          name={props.name}
          type="number"
          value={props.quantity}
          onChange={
            handleChangeQuantityName
          }
          // onClick={handleUpdateTotal}
          min={1}
        />
      </td>
      <td>
        <strong>{totalCart} USD</strong>
      </td>
      <td>
        <a
          className="label label-info update-cart-item"
          href="/"
          data-product=""
        >
          Update
        </a>
        <a
          className="label label-danger delete-cart-item"
          href="/"
          data-product=""
          onClick={handleDeleteCart}
        >
          Delete
        </a>
      </td>
    </tr>
  )
}
export default YourCart
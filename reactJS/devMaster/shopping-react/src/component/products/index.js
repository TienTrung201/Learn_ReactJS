import { useRef, useState } from "react"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { listProduct,listCartLocal } from "../redux/selector"
import { productsSlice } from "./productSlice"
import { cartSlice } from "../cart/cartSlice"
import { cartTotalSlice } from "../totalCart/cartTotalSlice"

const ProductsApp = ({ ...props}) => {
    const listCarts= useSelector(listCartLocal)
    const listProductsApp = useSelector(listProduct)
    let quantity=useRef()
    const Dispatch=useDispatch()
    let elementBuy = '';
    
    const handleBuyProduct=()=>{
        Dispatch(cartSlice.actions.buyProduct({
            name:props.product.productName,
            price:props.product.price,
            quantity:quantity.current.value
        }))
        // Dispatch(cartTotalSlice.actions.updateTotal(listCarts))
    }

    if (props.product.quantity > 0) {
        elementBuy = <div>
            <input
                ref={quantity}
                name={props.product.productName}
                type="number"
                defaultValue={1}
                // value={quantity}
                min={1}
                max={props.product.quantity}
                // onChange={handleChangeQuantity}
                // onChange={this.handleChange}
            />
            <a type="button" onClick={handleBuyProduct} data-product={1} className="price">
                {" "}
                {props.product.price} USD{" "}
            </a>
        </div>
    } else {
        elementBuy = <span className="price"> {props.product.price} USD</span>
    }
    const listProducts = <div key={props.product.productId} className="media product">
        <div className="media-left">
            <a href="#">
                <img
                    className="media-object"

                    src={`images/${props.product.image}`}
                    alt="charmander"
                />
            </a>
        </div>
        <div className="media-body">
            <h4 className="media-heading">{props.product.productName}</h4>
            <p>
                {props.product.description}
            </p>
            {elementBuy}
            {/* <input
                name={props.product.productName}
                type="number"
                defaultValue={1}
                // value={quantity}
                min={1}
                max={props.product.quantity}
                onChange={handleChangeQuantity}
            />
            <a data-product={1} href="#" className="price">
                {" "}
                {props.product.price}{" "}
            </a> */}
        </div>
    </div>




    return (
        <>
            {listProducts}
        </>
    )
}
export default ProductsApp
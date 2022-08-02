import { listProduct, listCartLocal } from "../redux/selector"
import { useSelector } from "react-redux"
import ProductsApp from "../products"
 const ListProducts = () => {
    const listProductsApp = useSelector(listProduct)
    const elementProducts=listProductsApp.map((product)=>{
        return <ProductsApp  key={product.productId} product={product}/>;
    })

    return (
        <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6">
            <div className="panel panel-primary">
                <div className="panel-heading">
                    <h1 className="panel-title">List Products</h1>
                </div>
                <div className="panel-body" id="list-product">
                    {/* PRODUCT : START */}
                        {elementProducts}
                    {/* PRODUCT : END */}
                </div>
            </div>
        </div>
    )
}
export default ListProducts
import logo from './logo.svg';
import './App.css';
import ListProducts from './component/listProducts';
import Cart from './component/cart';

function App() {
  return (
    <div className="container">
      {/* TITLE : START */}
      <div className="page-header">
        <h1>
          Project 02 - Shopping Cart <small>ReactJS</small>
        </h1>
      </div>
      {/* TITLE : END */}
      <div className="row">
        {/* LIST PRODUCT : START */}
        <ListProducts/>
        {/* LIST PRODUCT : END */}
        {/* CART : START */}
        <Cart/>
        {/* CART : END */}
      </div>
    </div>

  );
}

export default App;

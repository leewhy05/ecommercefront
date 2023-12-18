import React, {useState} from 'react'
import Bag from '../components/Bag'
import '../styles/bag.css'


const Cart = () => {
    const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || []
    const [cart, setCart] = useState(cartItemsFromLocalStorage);
    let handleAddToCart = (product) => {
      const productSelected = cart.find(
        (singleCart) => singleCart.id === product.id
      );
      if (productSelected) {
        setCart(
          cart.map((oneItem) =>
            oneItem.id === product.id
              ? {
                  ...productSelected,
                  quantity: productSelected.quantity + 1,
                }
              : oneItem
          )
        );
      } else {
        setCart([...cart, { ...product, quantity: 1 }]);
      }
    };
  return (
  <>
  <main className='possi'>
    <Bag/>
  </main>
  
  </>
  ) 
}

export default Cart
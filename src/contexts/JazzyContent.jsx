import React, {createContext,useState,useEffect} from 'react';

const CartContext = createContext()

const cartItemsFromLocalStorage = JSON.parse(localStorage.getItem('cart')) || []


export const JazzyProvider =({children})=>{
    const [cart, setCart] = useState(cartItemsFromLocalStorage);

} 
const [products, setProducts] = useState(data);
const [cart, setCart] = useState([]);
const [isLoading, setIsLoading] = useState(true);


const handleIncrease = (id) => {
  const newProducts = products.map((product) => {
    if (product.id === id) {
      product.count++;
    }
    return product;
  });
  setProducts(newProducts);
};

const handleReduce = (id) => {
  const newProducts = products.map((product) => {
    if (product.id === id && product.count > 1) {
      product.count--;
    }
    return product;
  });
  setProducts(newProducts);
};

const toCartButton = (id) => {
  const newProducts = products.map((product) => {
    if (product.id === id) {
      product.cart = !product.cart;
    }
    return product;
  });
  setProducts(newProducts);
};

useEffect(() => {
  const toCart = () => {
    setCart(products.filter((product) => product.cart && product));
  };
  toCart();
}, [products]);

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return () => {
    clearTimeout(timer);
  };
}, []);


return (

    <CartContext.Provider value={{
        handleIncrease,
        handleReduce,
        toCartButton
     
    }}>
      {children}

    
    </CartContext.Provider>
    )
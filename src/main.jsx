import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App.jsx'
import 'react-toastify/dist/ReactToastify.css';
import { CartProvider } from './contexts/JazzyContent.jsx';
import { PostProvider } from './contexts/postContext.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CartProvider>
    <PostProvider>
    <App />
    </PostProvider>
    </CartProvider>
  </React.StrictMode>,
)

import './App.css'
import ProductCard from './component/ProductCard.jsx'

function App() {
  return (
    <>
      <h1>Sharath</h1>
      <h2>Product List</h2>
      <div id="product-list">
        <ProductCard name="Laptop" price={49999} stock="In Stock" />
        <ProductCard name="Headphones" price={2999} stock="Out of Stock" />
        <ProductCard name="Book" price={399} stock="In Stock" />
      </div>
    </>
  )
}

export default App
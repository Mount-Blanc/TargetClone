
import './App.css'
import ProductCard from './ProductCard';
import sloth from './sloth.jpg';
function App() {

  return (
    <>
      <header>
        <div className='utility-header-wrapper'>
          <div className='utility-header-container' >
          <div className='user-info'>
            <span>nnnnn</span>
            <span>City</span>

          </div>
          <ul >
            <li >
              <a className='utility-list' href=''>Registry</a>
            </li>
            <li>
              <a className='utility-list' href=''>Weekly Ad</a>
            </li> <li>
              <a className='utility-list' href=''>RedCard</a>
            </li> <li>
              <a className='utility-list' href=''>Target Circle</a>
            </li> <li>
              <a className='utility-list' href=''>Find Stores</a>
            </li>
          </ul>
        </div>
        </div>
        <div className='header-container'>
        <div className='nav-left'>
          <p>logo</p>
          <ul>
            <li>
              <a href=''>Categories</a>
            </li>
            <li>
              <a href=''>Deals</a>
            </li> <li>
              <a href=''>What's New</a>
            </li><li>
              <a href=''>Pickup & Delivery</a>
            </li>
          </ul>
        </div>
        <form>
          <input placeholder='What can we help you find?'/>
        </form>
        <div className='nav-right'>
          <span>Sign in</span>
          <span>Cart</span>
        </div>
        </div>
      </header>
      <section>
        <div className='hero-grid'>
          <div></div>
          <div className='hero-products'>
            <div>Gift him the best</div>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>

          </div>
          <div className='image-products'>
            <div>
              <img src={sloth}></img>
            </div>
            <div>
              <img src={sloth}></img>
            </div><div>
              <img src={sloth}></img>
            </div><div>
              <img src={sloth}></img>
            </div>
          </div>
        </div>
      </section>
      <footer>footer</footer>
    </>
  )
}

export default App

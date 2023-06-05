
import './App.css'

function App() {

  return (
    <>
      <header>
        <div className='header-container'>
        <div>
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
        <div>
          <p>Sign in</p>
        </div>
        </div>
      </header>
    </>
  )
}

export default App

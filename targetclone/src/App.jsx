import "./App.css";
import ProductCard from "./ProductCard";
import sloth from "./sloth.jpg";
function App() {
  return (
    <>
      <header>
        <div className="utility-header-wrapper">
          <div className="utility-header-container">
            <div className="user-info">
              <span>nnnnn</span>
              <span>City</span>
            </div>
            <ul>
              <li>
                <a className="utility-list" href="">
                  Registry
                </a>
              </li>
              <li>
                <a className="utility-list" href="">
                  Weekly Ad
                </a>
              </li>{" "}
              <li>
                <a className="utility-list" href="">
                  RedCard
                </a>
              </li>{" "}
              <li>
                <a className="utility-list" href="">
                  Target Circle
                </a>
              </li>{" "}
              <li>
                <a className="utility-list" href="">
                  Find Stores
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="header-container">
          <div className="nav-left">
            <p>logo</p>
            <ul>
              <li>
                <a href="">Categories</a>
              </li>
              <li>
                <a href="">Deals</a>
              </li>{" "}
              <li>
                <a href="">What's New</a>
              </li>
              <li>
                <a href="">Pickup & Delivery</a>
              </li>
            </ul>
          </div>
          <form>
            <input placeholder="What can we help you find?" />
          </form>
          <div className="nav-right">
            <span>Sign in</span>
            <span>Cart</span>
          </div>
        </div>
      </header>

    <div className="main-section">

      <section>
        <div className="hero-grid">
          <div className="hero-container">
            <div className="storycard-grid">
              <div>
                <div>
                  <img src={sloth}></img>
                </div>
                <div>
                  <img src={sloth}></img>
                </div>
              </div>

              <div className="middle">
                <img src={sloth}></img>
              </div>

              <div>
                <div>
                  <img src={sloth}></img>
                </div>
                <div>
                  <img src={sloth}></img>
                </div>
              </div>
            </div>
            <div className="hero-products">
              <div>Gift him the best</div>
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
            <div className="image-products">
              <div>
                <img src={sloth}></img>
              </div>

              <div>
                <img src={sloth}></img>
              </div>
              <div>
                <img src={sloth}></img>
              </div>
              <div>
                <img src={sloth}></img>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <h2>Ready for sun</h2>
        <div className="sun-container">
          <div>
            <img src={sloth}></img>
            <h3>women's swim</h3>
          </div>
          <div>
            <img src={sloth}></img>
            <h3>women's dresses</h3>
          </div>
          <div>
            <img src={sloth}></img>
            <h3>kids' summer styles</h3>
          </div>
          <div>
            <img src={sloth}></img>
            <h3>summer accessories</h3>
          </div>
        </div>
      </section>

      <section>
        <h2>New & trending finds</h2>
        <div className="new-container">
          <div>
            <img src={sloth}></img>
            <h3>Viral hits</h3>
          </div>
          <div>
            <img src={sloth}></img>
            <h3>June must haves</h3>
          </div>
          <div>
            <img src={sloth}></img>
            <h3>Find something new</h3>
          </div>
        </div>
      </section>

      <section>
        <h2>Save on, saver</h2>

        <div className="saver-container">

        <div>
              <img src={sloth}></img>
              <h3>Deal</h3>
            </div>  
            <div>
              <img src={sloth}></img>
              <h3>Deal</h3>
            </div>  
            <div>
              <img src={sloth}></img>
              <h3>Deal</h3>
            </div>  
            <div>
              <img src={sloth}></img>
              <h3>Deal</h3>
            </div>  
            </div>
      </section>

      <section>
        <h2>Create your registry</h2>
        <div className="registry-container">
          <div>
            <img src={sloth}></img>
            <h3>Wedding registry</h3>
          </div>
          <div>
            <img src={sloth}></img>
            <h3>Baby registry</h3>
          </div>
        </div>
      </section>

      <section>
        <h2>Featured categories</h2>
      </section>
      <div>      
          <h3>Our Corporate Commitments</h3>
          <img src={sloth}></img>
           <img src={sloth}></img>
            </div>  
      
      </div>
      <footer>footer</footer>
    </>
  );
}

export default App;

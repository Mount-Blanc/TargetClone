import sloth from './sloth.jpg';
import './ProductCard.css';
function ProductCard () {
    return(
        <div className='card'>
        <img src={sloth}></img>
        <div>
            <span>$10.99</span>
            <p>blah</p>
            <button>Add to Cart</button>
        </div>
        </div>
    )
}
export default ProductCard
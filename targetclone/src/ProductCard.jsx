import sloth from './sloth.jpg';

function ProductCard () {
    return(
        <div>
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
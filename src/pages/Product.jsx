import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

function Product() {
  const { state } = useLocation()
  const [quantity, setQuantity] = useState(1)

  function updateQuantity(action) {
    if (action === 'sub' && quantity > 1) setQuantity(quantity - 1)
    else if (action === 'add') setQuantity(quantity + 1)
    else setQuantity(1)
  }

  return (
    <main className="my-2 mx-lg-5">
      <div className="container">
        <div className="row">
          {/* product image */}
          <div className="col-12 col-lg-8">
            <div className="container">
              <Link to="/preview" state={state.image}>
                <img
                  src={state.image.url}
                  alt={state.title}
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>

          {/* product info */}
          <div className="col-12 col-lg-4 d-flex flex-column justify-content-center">
            <div className="container">
              <h1>{state.title}</h1>

              <p className="lead fw-bold">
                $ {parseInt(state.price).toFixed(2)}
              </p>

              <p>Shipping calculated at checkout.</p>

              {/* size group section */}
              <p>Size</p>
              <div className="mb-4 btn-group" role="group">
                <input
                  id="one"
                  type="radio"
                  name="btnradio"
                  className="btn-check"
                />
                <label className="btn btn-outline-dark" htmlFor="one">
                  <p className="m-0">Small</p>
                </label>

                <input
                  id="two"
                  type="radio"
                  name="btnradio"
                  className="btn-check"
                />
                <label className="btn btn-outline-dark" htmlFor="two">
                  <p className="m-0">Medium</p>
                </label>

                <input
                  id="three"
                  type="radio"
                  name="btnradio"
                  className="btn-check"
                />
                <label className="btn btn-outline-dark" htmlFor="three">
                  <p className="m-0">Large</p>
                </label>
              </div>

              {/* quantity section */}
              <p>Quantity</p>
              <div className="mb-4 d-inline-block border border-dark rounded">
                <button className="btn" onClick={() => updateQuantity('sub')}>
                  <RemoveIcon color="action" />
                </button>
                <small className="mx-1">{quantity}</small>
                <button className="btn" onClick={() => updateQuantity('add')}>
                  <AddIcon color="action" />
                </button>
              </div>

              <div className="d-grid">
                <button className="btn btn-dark">
                  <p className="m-0">Add to cart</p>
                </button>
              </div>

              {/* product description */}
              <p className="mt-4">{state.description}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Product

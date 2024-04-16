import { useState } from 'react'
import { useContext } from 'react'
import { ShopContext } from '../App'
import Alert from '@mui/material/Alert'
import { Link } from 'react-router-dom'
import { ACTIONS } from '../app/reducer'
import Snackbar from '@mui/material/Snackbar'
import { useLocation } from 'react-router-dom'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'

function Product() {
  window.scrollTo(0, 0)
  const { state } = useLocation()
  const [quantity, setQuantity] = useState(1)
  const { dispatch } = useContext(ShopContext)

  function updateQuantity(action) {
    if (action === 'sub' && quantity > 1) setQuantity(quantity - 1)
    else if (action === 'add') setQuantity(quantity + 1)
    else setQuantity(1)
  }

  /* snackbar handler */
  const [open, setOpen] = useState(false)
  const handleClick = () => {
    setOpen(true)
  }
  const handleClose = (reason) => {
    if (reason === 'clickaway') return
    setOpen(false)
  }

  return (
    <main className='my-2 mx-lg-5'>
      <div className='container'>
        <div className='row'>
          {/* product image */}
          <div className='col-12 col-lg-8'>
            <div className='container'>
              <Link
                to={`/collections/${state.handle}/${state.product.title}/preview`}
                state={state.product.image}
              >
                <img
                  loading='lazy'
                  src={state.product.image.url}
                  alt={state.product.title}
                  className='img-fluid'
                />
              </Link>
            </div>
          </div>

          {/* product info */}
          <div className='col-12 col-lg-4 d-flex flex-column justify-content-center'>
            <div className='container'>
              <h1>{state.product.title}</h1>

              <p className='lead fw-bold'>
                $ {parseInt(state.product.price).toFixed(2)}
              </p>

              <p>Shipping calculated at checkout.</p>

              {/* size group section */}
              <p>Size</p>
              <div className='mb-4 btn-group' role='group'>
                <input
                  id='one'
                  type='radio'
                  name='btnradio'
                  className='btn-check'
                />
                <label className='btn btn-outline-dark' htmlFor='one'>
                  <p className='m-0'>Small</p>
                </label>

                <input
                  id='two'
                  type='radio'
                  name='btnradio'
                  className='btn-check'
                />
                <label className='btn btn-outline-dark' htmlFor='two'>
                  <p className='m-0'>Medium</p>
                </label>

                <input
                  id='three'
                  type='radio'
                  name='btnradio'
                  className='btn-check'
                />
                <label className='btn btn-outline-dark' htmlFor='three'>
                  <p className='m-0'>Large</p>
                </label>
              </div>

              {/* quantity section */}
              <p>Quantity</p>
              <div className='mb-4 d-inline-block border border-dark rounded'>
                <button className='btn' onClick={() => updateQuantity('sub')}>
                  <RemoveIcon color='action' />
                </button>
                <small className='mx-1'>{quantity}</small>
                <button className='btn' onClick={() => updateQuantity('add')}>
                  <AddIcon color='action' />
                </button>
              </div>

              {/* button Add to cart */}
              <div className='d-grid'>
                <button
                  onClick={() => {
                    dispatch({
                      type: ACTIONS.ADD,
                      product: state.product,
                      quantity: quantity,
                    })
                    handleClick()
                  }}
                  className='btn btn-dark btn-lg'
                >
                  <p className='m-0'>Add to cart</p>
                </button>

                {/* snackbar setup */}
                <Snackbar
                  open={open}
                  onClose={handleClose}
                  autoHideDuration={4000}
                  anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                  <Alert severity='success'>
                    Item added to your cart
                    <Link to='/cart' className='ms-2'>
                      View cart
                    </Link>
                  </Alert>
                </Snackbar>
              </div>

              {/* product description */}
              <p className='mt-4'>{state.product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Product

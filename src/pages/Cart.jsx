import { ShopContext } from '../App'
import { Link } from 'react-router-dom'
import { ACTIONS } from '../app/reducer'
import { useContext, useMemo } from 'react'
import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'

function Cart() {
  const { cart, dispatch } = useContext(ShopContext)
  const subtotal = useMemo(() => {
    return cart.reduce(
      (total, product) => (total += product.node.price * product.quantity),
      0
    )
  }, [cart])

  const products = cart.map((item) => {
    return (
      <div
        key={item.node.id}
        className="row pb-4 pt-md-4 mx-lg-5 border-top border-bottom"
      >
        {/* product image */}
        <div className="col-6 col-md-2">
          <img
            src={item.node.image.url}
            alt={item.node.title}
            className="img-fluid"
          />
        </div>

        {/* produce info */}
        <div className="col-6 col-md-3 d-flex flex-column justify-content-center text-center">
          <p className="lead fw-bold m-0">{item.node.title}</p>
          <p className="lead m-0">$ {parseInt(item.node.price).toFixed(2)}</p>
        </div>

        {/* actions */}
        <div className="col-6 col-md-4 d-flex align-items-center justify-content-center gap-2">
          <div className="border border-dark rounded">
            <button
              className="btn"
              onClick={() =>
                dispatch({
                  type: ACTIONS.REMOVE,
                  product: item.node,
                  quantity: item.quantity,
                })
              }
            >
              <RemoveIcon color="action" />
            </button>
            <small className="mx-1">{item.quantity}</small>
            <button
              className="btn"
              onClick={() =>
                dispatch({
                  type: ACTIONS.ADD,
                  product: item.node,
                  quantity: 1,
                })
              }
            >
              <AddIcon color="action" />
            </button>
          </div>

          <button
            className="btn btn-outline-danger"
            onClick={() =>
              dispatch({ type: ACTIONS.DELETE, product: item.node })
            }
          >
            <DeleteOutlinedIcon />
          </button>
        </div>

        {/* total price */}
        <div className="col-6 col-md-3 d-flex flex-column justify-content-center text-center">
          <p className="m-1 lead fw-bold border-bottom">Total</p>
          <p className="m-0">
            $ {parseInt(item.node.price * item.quantity).toFixed(2)}
          </p>
        </div>
      </div>
    )
  })

  return (
    <>
      {cart.length === 0 ? (
        <main className="d-flex align-items-center">
          <div className="container text-center">
            <h1 className="mb-4">Your cart is empty</h1>
            <Link to="/collections">
              <button className="btn btn-outline-dark btn-lg">
                <p className="mb-0">Continue shopping</p>
              </button>
            </Link>
          </div>
        </main>
      ) : (
        <main>
          <div className="container-fluid my-4">
            <h1 className="ms-lg-5 mt-5 mb-3">Your cart</h1>
            {products}
          </div>
          <div className="container-fluid p-3 px-lg-5 text-end">
            <h4>
              Subtotal{' '}
              <p className="d-inline lead">${parseInt(subtotal).toFixed(2)}</p>
            </h4>
            <small>Taxes and shipping calculated at checkout</small>
            <div className="d-grid mt-2 ms-auto col-12 col-md-4">
              <button className="btn btn-dark btn-lg">
                <p className="m-0">Check out</p>
              </button>
            </div>
          </div>
        </main>
      )}
    </>
  )
}

export default Cart

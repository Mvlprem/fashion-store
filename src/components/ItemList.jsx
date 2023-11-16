import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

function ItemList(props) {
  const products = props.collection[0].products

  const render = products.map((item) => {
    return (
      <div className="col-12 col-md-6 col-lg-4" key={item.node.id}>
        <div className="container">
          <Link
            to="/product"
            state={item.node}
            className="link-dark text-decoration-none"
          >
            <img
              alt={item.node.title}
              src={item.node.image.url}
              className="img-fluid rounded mb-3"
            />

            <p className="mb-1">{item.node.title}</p>
          </Link>
          <p className="lead fw-bold">
            $ {parseInt(item.node.price).toFixed(2)}
          </p>
        </div>
      </div>
    )
  })

  return (
    <>
      <div className="row mb-3">{render}</div>
    </>
  )
}

ItemList.propTypes = { collection: PropTypes.array.isRequired }

export default ItemList

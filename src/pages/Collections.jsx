import { useContext } from 'react'
import { ShopContext } from '../App'
import { Link } from 'react-router-dom'
import LoadingScreen from '../components/LoadingScreen'
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward'

function Collections() {
  const { collections } = useContext(ShopContext)
  collections.sort((a, b) => (a.handle < b.handle ? -1 : 1))

  const render = collections.map((item) => {
    return (
      <div className="col-12 col-md-6 col-lg-4" key={item.id}>
        <div className="container">
          <Link
            to="/products"
            state={item.handle}
            className="link-dark text-decoration-none"
          >
            <img
              loading="lazy"
              alt={item.title}
              src={item.image.url}
              className="img-fluid rounded mb-3"
            />

            <p className="mb-5 lead fw-bold">
              {item.title}
              <small className="ms-2">
                <ArrowOutwardIcon />
              </small>
            </p>
          </Link>
        </div>
      </div>
    )
  })

  return (
    <main className="my-2 mx-lg-5">
      <div className="container-fluid">
        <h1 className="my-4 ps-3">Collections</h1>
        {collections.length === 0 ? (
          <LoadingScreen />
        ) : (
          <div className="row mb-3">{render}</div>
        )}
      </div>
    </main>
  )
}

export default Collections

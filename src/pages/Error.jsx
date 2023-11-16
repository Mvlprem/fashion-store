import { Link } from 'react-router-dom'

function Error() {
  return (
    <>
      <div></div>
      <main className="text-center d-flex align-items-center">
        <div className="container">
          <p>404</p>
          <h1>Oops! You seem to be lost.</h1>
          <p>Here are some helpful links</p>
          <div className="container">
            <Link to="/">
              <button className="btn btn-dark">
                <p className="m-0">Home</p>
              </button>
            </Link>
          </div>
        </div>
      </main>
      <div></div>
    </>
  )
}

export default Error

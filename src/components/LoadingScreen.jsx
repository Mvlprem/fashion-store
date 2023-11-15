import loading from '../assets/loading.svg'

function LoadingScreen() {
  return (
    <img
      src={loading}
      alt="Loading"
      style={{ width: '50px' }}
      className="d-block mx-auto"
    />
  )
}

export default LoadingScreen

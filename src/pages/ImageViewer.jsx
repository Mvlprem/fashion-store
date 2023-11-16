import { useLocation } from 'react-router-dom'

function ImageViewer() {
  const { state } = useLocation()

  return (
    <>
      <div></div>
      <main className="d-flex align-items-center">
        <img src={state.url} alt="preview" className="img-fluid" />
      </main>
      <div></div>
    </>
  )
}

export default ImageViewer

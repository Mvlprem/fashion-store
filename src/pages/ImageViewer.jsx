import { useLocation } from 'react-router-dom'
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch'

function ImageViewer() {
  const { state } = useLocation()

  return (
    <>
      <main className="d-flex align-items-center">
        <TransformWrapper>
          <TransformComponent>
            <div className="row d-flex justify-content-center">
              <div className="col-12 col-md-8 col-lg-6">
                <img src={state.url} alt="preview" className="img-fluid" />
              </div>
            </div>
          </TransformComponent>
        </TransformWrapper>
      </main>
    </>
  )
}

export default ImageViewer

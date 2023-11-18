import { useContext } from 'react'
import { ShopContext } from '../App'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import model from '../assets/model.webp'
import modelSm from '../assets/modelSm.webp'
import ItemList from '../components/ItemList'
import basketball from '../assets/basketball.webp'
import basketballSm from '../assets/basketballSm.webp'
import LoadingScreen from '../components/LoadingScreen'

function Home() {
  window.scrollTo(0, 0)
  const { collections } = useContext(ShopContext)

  const collectionType = collections.filter((item) => {
    if (item.handle === 'featured') return item
    else null
  })

  return (
    <main>
      {/* Banner One */}
      <SectionOne id="banner-one">
        <DivSO className="container py-5 w-50 position-absolute bottom-0 text-white">
          <h1>
            The Peak <br /> Collection
          </h1>
          <p>Push your performance with our premium athletic wear</p>
          <Link to="collections" className="btn btn-outline-light">
            <small className="lead">Shop now</small>
          </Link>
        </DivSO>
      </SectionOne>

      {/* New Arrivals */}
      <section className="my-5 mx-3 mx-lg-5">
        <p className="text-center mb-2">New arrivals</p>
        <h1 className="mb-4 text-center">{"Spring '23"}</h1>

        {collections.length === 0 ? (
          <LoadingScreen />
        ) : (
          <ItemList collection={collectionType} />
        )}
      </section>

      {/* Banner Two */}
      <SectionTwo id="banner-two">
        <DivST className="container py-5 w-50 position-absolute bottom-0 text-dark">
          <h1>Midweight classics</h1>
          <p>Clothes that work as hard as you do.</p>
          <Link to="collections" className="btn btn-outline-dark">
            <small className="lead">Shop now</small>
          </Link>
        </DivST>
      </SectionTwo>
    </main>
  )
}

const SectionOne = styled.section`
  min-height: 70vh;
  position: relative;
  background-size: cover;
  background-image: url(${basketballSm});

  @media (width > 1024px) {
    background-image: url(${basketball});
  }
`
const DivSO = styled.div`
  @media (width > 1024px) {
    left: 20%;
  }
`

const SectionTwo = styled.section`
  min-height: 70vh;
  position: relative;
  background-size: cover;
  background-image: url(${modelSm});

  @media (width > 1024px) {
    background-image: url(${model});
  }
`
const DivST = styled.div`
  @media (width > 1024px) {
    left: 30%;
    top: 30%;
  }
`

export default Home

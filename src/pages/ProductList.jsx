import { useContext } from 'react'
import { ShopContext } from '../App'
import { useLocation } from 'react-router-dom'
import ItemList from '../components/ItemList'
import LoadingScreen from '../components/LoadingScreen'

function ProductList() {
  window.scrollTo(0, 0)
  const { state } = useLocation()
  const { collections } = useContext(ShopContext)
  const collectionType = collections.filter((item) => {
    if (item.handle === state) return item
    else null
  })

  return (
    <main className="my-2 mx-lg-5">
      <div className="container-fluid">
        <h1 className="my-4 ps-3">{collectionType[0].title}</h1>
        {collections.length === 0 ? (
          <LoadingScreen />
        ) : (
          <ItemList collection={collectionType} />
        )}
      </div>
    </main>
  )
}

export default ProductList

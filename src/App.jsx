import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import fetchCollection from './api/fetchCollection'
import { useEffect, useState, createContext } from 'react'

export const ShopContext = createContext(null)

function App() {
  const [collections, setCollections] = useState([])

  useEffect(() => {
    const controller = new AbortController()
    fetchCollection(controller).then((response) => {
      setCollections(response)
    })
    return () => {
      controller.abort()
    }
  }, [])

  return (
    <ShopContext.Provider value={{ collections }}>
      <Header />
      <Outlet />
      <Footer />
    </ShopContext.Provider>
  )
}

export default App

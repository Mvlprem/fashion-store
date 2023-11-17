import reducer from './app/reducer'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'
import fetchCollection from './api/fetchCollection'
import { useEffect, useState, createContext, useReducer } from 'react'

export const ShopContext = createContext(null)

function App() {
  const [cart, dispatch] = useReducer(reducer, [])
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
    <ShopContext.Provider value={{ collections, cart, dispatch }}>
      <Header />
      <Outlet />
      <Footer />
    </ShopContext.Provider>
  )
}

export default App

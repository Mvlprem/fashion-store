import { Badge } from '@mui/material'
import { Link } from 'react-router-dom'
import brandLogo from '../assets/logo.svg'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined'

function Header() {
  function closeCanvas() {
    const closeCanvas = document.querySelector('[data-bs-dismiss="offcanvas"]')
    closeCanvas.click()
  }

  return (
    <header className="container-fluid sticky-top shadow">
      <nav className="navbar">
        {/* Offcanvas Toggle */}
        <button
          className="btn"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvas-nav"
        >
          <MenuIcon />
        </button>

        {/* Brand Logo*/}
        <div className="d-block mx-auto">
          <Link to="/" className="navbar-brand">
            <img src={brandLogo} alt="Brand Logo" style={{ width: '150px' }} />
          </Link>
        </div>

        {/* Shopping Cart */}
        <Link to="cart" className="btn">
          <Badge
            badgeContent={0}
            sx={{
              '& .MuiBadge-badge': {
                color: 'white',
                backgroundColor: 'black',
              },
            }}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
          >
            <ShoppingBagOutlinedIcon />
          </Badge>
        </Link>
      </nav>

      {/* Offcanvas Sidebar */}
      <div className="offcanvas offcanvas-start" id="offcanvas-nav">
        <div className="mt-4">
          {/* Offcanvas Header */}
          <div className="offcanvas-header">
            <div className="container">
              <button className="btn p-0" data-bs-dismiss="offcanvas">
                <CloseIcon />
              </button>
            </div>
          </div>

          {/* Offcanvas Body */}
          <div className="offcanvas-body">
            <div className="container">
              <div className="mt-3">
                <Link
                  to="products"
                  state={'men'}
                  className="h2"
                  onClick={closeCanvas}
                >
                  Men
                </Link>
              </div>
              <div className="mt-3">
                <Link
                  to="products"
                  className="h2"
                  state={'women'}
                  onClick={closeCanvas}
                >
                  Women
                </Link>
              </div>
              <div className="mt-3">
                <Link
                  to="products"
                  className="h2"
                  state={'unisex'}
                  onClick={closeCanvas}
                >
                  Unisex
                </Link>
              </div>
              <div className="mt-3">
                <Link
                  to="products"
                  className="h2"
                  state={'featured'}
                  onClick={closeCanvas}
                >
                  Featured
                </Link>
              </div>
              <div className="mt-3">
                <Link className="h2" to="collections" onClick={closeCanvas}>
                  Collections
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header

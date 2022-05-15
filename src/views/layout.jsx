import { Button, Menu, MenuItem } from "@mui/material"
import { Fragment, useContext, useEffect, useState } from "react"
import { Link, Outlet, useNavigate } from "react-router-dom"
import profile from "../assets/img/icons/profile.svg"
import { useLogged } from "../hooks/useLogged"
import { useMe } from "../hooks/useMe"
import { CartContext } from "../utils"
import api from "../utils/api"

const Footer = () => {
  return (
    <div className="container-fluid bg-dark text-light mt-5 pb-5">
      <div className="container">
        <div className="row g-3 justify-content-around align-items-stretch">
          <div className="col-6 col-md-3">
            <div className="bg-secondary p-1 rounded h-100">
              Découvrir Casdal
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
              </p>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-8"></span>
              </p>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-9"></span>
              </p>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-5"></span>
              </p>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-6"></span>
              </p>
            </div>  
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-secondary p-1 rounded h-100">
              Mentions légales
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
              </p>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-5"></span>
              </p>
              <p className="card-text placeholder-glow">
                <span className="placeholder col-6"></span>
              </p>
            </div>  
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-secondary p-1 rounded h-100">
              Aide
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
              </p>
            </div>  
          </div>
          <div className="col-6 col-md-3">
            <div className="bg-secondary p-1 rounded h-100">
              Gardez Casdal dans votre poche
              <p className="card-text placeholder-glow">
                <span className="placeholder col-7"></span>
              </p>
            </div>  
          </div>
        </div>
      </div>
    </div>
  )
}

const Layout = (props) => {
  const [, setError] = useState(null);
  const {me, removeMe} = useMe();
  const {price, quantity, setPrice, setQuantity} = useContext(CartContext);
  const [anchorEl, setAnchorEl] = useState(null)
  const open = Boolean(anchorEl)
  const navigate = useNavigate()
  const auth = useLogged();
  const [isLogged, setLogged] = useState(auth)

  const handleClick = e => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null);
  }

  const handleLogout = () => {
    setPrice(0)
    setQuantity(0)
    handleClose()
    removeMe()
    setLogged(false)
    navigate("/")
  }
  
  useEffect(() => {

    console.log(me)
    if (me) {
      api.get('cart/items',{
        params: {
          user_id: me?.id
        }
      })
        .then(res => {
          setPrice(res.data.total.price)
          setQuantity(res.data.total.quantity)
        })
        .then(error => setError(error))
    }
  },[me, setPrice, setQuantity])

  return (
    <Fragment>
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark py-3">
          <div className="container-fluid">
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse row justify-content-md-between" id="navbarTogglerDemo01">
              <div className="col-md-2">
                <Link className="navbar-brand text-light" to='/'>Casdal</Link>
              </div>
              <div className="col-md-4">
                <form className="d-flex">
                  <input className="form-control me-2 text-center rounded-pill bg-light" type="search" placeholder="Rechercher" aria-label="Search"/>
                </form>
              </div>
              <div className="col-md-2 d-flex align-items-center justify-content-around">
                <div className="col-md-auto position-relative">
                  {isLogged && 
                    <Fragment>
                      <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                      >
                        <img src={profile} alt="Profile icon" className="d-none d-md-block" />
                        <div className="d-block d-md-none text-light">Profil</div>
                      </Button>
                      <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                          'aria-labelledby': 'basic-button',
                        }}
                      >
                        <Link to={`/profile`} className="text-decoration-none text-dark">
                          <MenuItem onClick={handleClose}>Mon compte</MenuItem>
                        </Link>
                        <Link to={`/address`} className="text-decoration-none text-dark">
                          <MenuItem onClick={handleClose} className="text-dark">Mes adresses</MenuItem>
                        </Link>
                        <Link to={`/my-orders`} className="text-decoration-none text-dark">
                          <MenuItem onClick={handleClose} className="text-dark">Mes commandes</MenuItem>
                        </Link>
                        <MenuItem onClick={handleLogout} className="text-dark">Se déconnecter</MenuItem>
                      </Menu>
                    </Fragment>
                  }
                </div>
                {!isLogged && 
                  <div className="col-md-auto text-light">
                    <Link to={`/login`}><button className="btn btn-light">Connexion</button></Link>
                  </div>
                }
                <div className="col-md-auto text-light">
                  <Link to={`/cart`} className="text-decoration-none">
                    <button className="btn btn-light d-none d-md-block position-relative"><i className="bi bi-cart2 me-1"></i>{price && (price/100).toFixed(2)} {!price && 0} €<span className="position-absolute top-0 start-0 translate-middle bg-primary rounded-pill px-2 text-white">{quantity}<span className="visually-hidden">Nombre d'articles</span></span></button>
                    <div className="d-block d-md-none text-light">{price && (price/100).toFixed(2)} {!price && 0} €</div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Outlet/>
      <Footer/>
    </Fragment>
  )
}

export { Layout }
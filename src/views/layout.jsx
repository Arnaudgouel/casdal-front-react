import { Fragment, useState } from "react"
import { Link, Outlet } from "react-router-dom"
import profile from "../img/icons/profile.svg"

const Layout = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  return (
    <Fragment>
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
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
                <div className="col-md-auto position-relative" onClick={() => setIsProfileOpen(!isProfileOpen)}>
                  <img src={profile} alt="Profile icon" className="d-none d-md-block" />
                  <div className="d-block d-md-none text-light">Profil</div>
                  { isProfileOpen && (
                    <div className={`position-absolute top-100 start-50 translate-middle-x bg-light rounded p-2`} style={{whiteSpace: "nowrap"}}>
                    <div className="my-1">Mes informations</div>
                    <div className="my-1">Mes commandes</div>
                    <div className="my-1">Se déconnecter</div>
                  </div>)
                  }
                </div>
                <div className="col-md-auto text-light">
                  <button className="btn btn-light d-none d-md-block position-relative"><i className="bi bi-cart2 me-1"></i>0,00 €<span className="position-absolute top-0 start-0 translate-middle bg-primary rounded-circle p-2"><span className="visually-hidden">Nombre d'articles</span></span></button>
                  <div className="d-block d-md-none text-light">0,00 €</div>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </div>
      <Outlet/>
    </Fragment>
  )
}

export { Layout }
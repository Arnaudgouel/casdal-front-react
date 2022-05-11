import logo from "../img/casdal_500.png"


const Menu = () => {
  return (
    <div>
      <div className="bg-info container-fluid pt-5">
        <div className="row h-100 pb-2">
          <div className="col-md-4 text-center"><img src={logo} alt="logo casdal" className="img-fluid w-25" /></div>
          <div className="col-md-8">
            <h2 className="fs-1">Nom restaurant</h2>
            <h3 className="fs-2">Catégorie</h3>
            <p className="fs-5">Adresse</p>
          </div>
        </div>
      </div>
      <div className="bg-info container-fluid py-2 px-5 border-top">
        <div className="row">
          <div className="col-auto">
            <div className="bg-light rounded-pill px-2">
              Entrées
            </div>
          </div>
          <div className="col-auto">
            <div className="bg-light rounded-pill px-2">
              Entrées
            </div>
          </div>
          <div className="col-auto">
            <div className="bg-light rounded-pill px-2">
              Entrées
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-4">
        <h4 className="fs-2">Entrées</h4>
        <div className="row align-items-stretch">
          <div className="col-md-4">
            <div className="bg-light p-2 shadow-sm">
              <div className="row">
                <div className="col-8">
                  <p className="fw-bold">Tempura de crevette</p>
                  <p className="">crevettes frites dans l'huile</p>
                  <div>7,00 €</div>
                </div>
                <div className="col-4">
                  <img className="img-fluid" src={logo} alt="produit" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Menu }
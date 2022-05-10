import { Company } from "../components";
import logo from "../img/casdal_500.png"

const Home = () => {
  const numbers = [0,1,2,3,4,5,6,7,8,9];
  return (
    <div>
      <div className="bg-info container-fluid" style={{height: "400px"}}>
        <div className="row text-center align-items-center align-content-center h-100">
          <div className="col-md-6"><h2 className="fs-1">Rendre le plaisir des papilles accessible au plus grand nombre</h2></div>
          <div className="col-md-6"><img src={logo} alt="logo casdal" className="img-fluid w-25" /></div>
        </div>
      </div>
      <div className="container mt-4">
        <h3>Catégories</h3>
        <div className="box">
          <div className="row mt-1 justify-content-between align-self-center flex-nowrap content">
            {numbers.map(e => {
              return (
                <div className="flex-grow-1" style={{flexBasis:"200px", whiteSpace:"nowrap"}}>
                  <div class="card" aria-hidden="true">
                    <div class="card-body">
                      <h5 class="card-title placeholder-glow">
                        <span class="placeholder col-6"></span>
                      </h5>
                      <p class="card-text placeholder-glow">
                        <span class="placeholder col-7"></span>
                      </p>
                      <p class="btn btn-primary disabled placeholder col-6"></p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <hr/>
        <div>
          <h3>Restaurants</h3>
        </div>
        <Company />
      </div>
      <div className="container-fluid bg-dark text-light mt-5 pb-5">
        <div className="container">
          <div className="row g-3 justify-content-around align-items-stretch">
            <div className="col-6 col-md-3">
              <div className="bg-secondary p-1 rounded h-100">
                Découvrir Casdal
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                </p>
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-8"></span>
                </p>
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-9"></span>
                </p>
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-5"></span>
                </p>
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-6"></span>
                </p>
              </div>  
            </div>
            <div className="col-6 col-md-3">
              <div className="bg-secondary p-1 rounded h-100">
                Mentions légales
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                </p>
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-5"></span>
                </p>
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-6"></span>
                </p>
              </div>  
            </div>
            <div className="col-6 col-md-3">
              <div className="bg-secondary p-1 rounded h-100">
                Aide
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                </p>
              </div>  
            </div>
            <div className="col-6 col-md-3">
              <div className="bg-secondary p-1 rounded h-100">
                Gardez Casdal dans votre poche
                <p class="card-text placeholder-glow">
                  <span class="placeholder col-7"></span>
                </p>
              </div>  
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Home }
import logo from "../img/restaurant.jpg"

const CompanyItem = ({className, item}) => {
  return (
    <div className={`${className}`}>
      <div className="h-100 bg-white">
        <img className="img-fluid" src={logo} alt="company logo" />
        <div className="">Titre restaurant</div>
        <div className="">Catégorie</div>
      </div>
    </div>
  )
}

const Company = () => {
  return (
    <div className="row gy-3 justify-content-around align-items-stretch">
      <CompanyItem className="col-6 col-lg-2">1</CompanyItem>
      <CompanyItem className="col-6 col-lg-2">2</CompanyItem>
      <CompanyItem className="col-6 col-lg-2">3</CompanyItem>
      <CompanyItem className="col-6 col-lg-2">4</CompanyItem>
      <CompanyItem className="col-6 col-lg-2">5</CompanyItem>
      <CompanyItem className="col-6 col-lg-2">6</CompanyItem>
      <CompanyItem className="col-6 col-lg-2">7</CompanyItem>
      <CompanyItem className="col-6 col-lg-2">8</CompanyItem>
      <CompanyItem className="col-6 col-lg-2">9</CompanyItem>
      <CompanyItem className="col-6 col-lg-2">10</CompanyItem>
      <CompanyItem className="col-6 col-lg-2">11</CompanyItem>
      <CompanyItem className="col-6 col-lg-2">12</CompanyItem>
    </div>
  )
}

export { Company }
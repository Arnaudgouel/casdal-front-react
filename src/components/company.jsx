import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import logo from "../img/restaurant.jpg"
import API from "../utils/api"

const CompanyItem = ({className, item}) => {

  return (
    <div className={`${className}`}>
      <Link to="/menu" className="text-decoration-none text-black">
        <div className="h-100 bg-white shadow">
          <img className="img-fluid" src={logo} alt="company logo" />
          <div>Titre restaurant</div>
          <div>Catégorie</div>
        </div>
      </Link>
    </div>
  )
}

const Company = () => {
  const [companies, setCompanies] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)


  useEffect(() => {
    API.get(`companies`)
      .then(res => {
        console.log(res)
        setCompanies(res)
        setLoading(false)
      })
      .catch(error => {
        setError(error)
        setLoading(false)
        console.log(error)
      })
  }, [])

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
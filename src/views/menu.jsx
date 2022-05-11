import { Fragment, useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import logo from "../assets/img/casdal_500.png"
import api from "../utils/api"

const ProductCategoriesHeader = ({item}) => {
  return (
    <div className="col-auto">
      <div className="bg-light rounded-pill px-2" onClick={() => window.location.replace(`#category_${item.id}`)}>
        {item.name}
      </div>
    </div>
  )
}

const ProductsCategories = ({item, products}) => {
  return (
    <Fragment>
      <h4 className="fs-2 mt-4" id={`category_${item.id}`}>{item.name}</h4>
      <div className="row align-items-stretch">
        {products.map(product => <Products key={product.id} item={product}/>)}
      </div>
    </Fragment>
  )
}

const Products = ({item}) => {
  return (
    <div className="col-md-4">
      <div className="bg-light p-2 shadow-sm">
        <div className="row">
          <div className="col-8">
            <p className="fw-bold">{item.name}</p>
            <p className="">{item.description}</p>
            <div>{(item.price/100).toFixed(2)} €</div>
          </div>
          <div className="col-4">
            <img className="img-fluid" src={logo} alt="produit" />
          </div>
        </div>
      </div>
    </div>
  )
}

const Menu = () => {

  const [address, setAddress] = useState()
  const [company, setCompany] = useState()
  const [products, setProducts] = useState([])
  const [categories, setCategories] = useState([])
  const [isLoaded, setIsLoaded] = useState(false)
  const [error, setError] = useState(null)
  let params = useParams()


  useEffect(() => {
    setIsLoaded(false)
    api.get(`companies/products`, {
      params : {
        company_id: params.id
      }
    })
      .then(res => {
        setProducts(res.data.products)
        setCategories(res.data.productsCategories)
        setAddress(res.data.address)
        setCompany(res.data.company)
        setIsLoaded(true)
      })
      .catch(error => {
        setError(error)
        setIsLoaded(true)
      })
  }, [params.id])

  if (error) {
    return <div>Erreur : {error.message}</div>
  }
  else if (!isLoaded) {
    return (
      <div className="text-center mt-5">
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    )
  }
  return (
    <div>
      <div className="bg-info container-fluid pt-5">
        <div className="row h-100 pb-2">
          <div className="col-md-4 text-center"><img src={logo} alt="logo casdal" className="img-fluid w-25" /></div>
          <div className="col-md-8">
            <h2 className="fs-1">{company.name}</h2>
            <h3 className="fs-2">{company.category}</h3>
            <p className="fs-5">{`${address.address_line1} ${address.city} ${address.postal_code}`}</p>
          </div>
        </div>
      </div>
      <div className="bg-info container-fluid py-2 px-5 border-top position-sticky top-0">
        <div className="row">
          {categories.map(category => <ProductCategoriesHeader key={category.id} item={category}/>)}
        </div>
      </div>
      <div data-bs-spy="scroll" data-bs-target="#list" data-bs-offset="0" tabIndex="0" className="container scrollspy-example">
        {categories.map(category => <ProductsCategories key={category.id} item={category} products={products.filter(product => product.product_category_id === category.id)}/>)}
      </div>
    </div>
  )
}

export { Menu }
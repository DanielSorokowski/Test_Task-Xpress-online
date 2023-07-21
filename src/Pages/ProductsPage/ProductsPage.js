import './ProductsPage.scss'
import { products } from "../../products"
import { DetailCard } from "../../Components/DetailCard/DetailCard"
import { PageHeader } from '../../Components/PageHeader/PageHeader'
export const ProductsPage = () => {
  return (
    <>
      <PageHeader title="Product" subtitle="Chose product that you want to create"/>
      <section className="container__box products-page">
        {products.map(product => <DetailCard element={product} key={product.id}/>)}
      </section>
    </>
  )
}

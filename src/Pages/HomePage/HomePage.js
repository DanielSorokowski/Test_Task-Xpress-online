import './HomePage.scss'
import { DetailCard } from "../../Components/DetailCard/DetailCard"
import { PageHeader } from '../../Components/PageHeader/PageHeader'
import { feachers } from "../../products"
import { ImageMagnifier } from '../../Components/ImageMagnifier/ImageMagnifier'

export const HomePage = () => {
  return (
    <>
      <PageHeader title="Xpress Online" subtitle="From the idea to the delivery of the special tool in next to no time" />
      <section className="container__box feachers-list">
        {feachers.map(feacher => <DetailCard element={feacher}/>)}
      </section>
    </>
  )
}

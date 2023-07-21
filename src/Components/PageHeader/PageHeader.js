import './PageHeader.scss'

export const PageHeader = ({title, subtitle}) => {
  return (
    <section className="page-header container__box">
      <h2 className="page-header__title">{title}</h2>
      <p className="page-header__subtitle">{subtitle}</p>
    </section>
  )
}

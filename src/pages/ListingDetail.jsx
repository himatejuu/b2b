import { useParams, useNavigate } from 'react-router-dom'
import './ListingDetail.css'

const MOCK_LISTING = {
  id: '1',
  title: 'CNC Milling Machine',
  type: 'Machinery',
  price: 250000,
  location: 'Mumbai',
  image: 'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=800&h=600&fit=crop',
  description: 'High precision CNC milling machine in excellent condition. Recently serviced and calibrated. Suitable for small to medium production runs. Includes tooling and documentation.',
  seller: {
    name: 'Industrial Equipment Co.',
    email: 'contact@industrial-eq.com',
    phone: '+91 98765 43210'
  },
  specs: [
    { label: 'Condition', value: 'Excellent' },
    { label: 'Year', value: '2020' },
    { label: 'Working Hours', value: '2,500 hrs' },
    { label: 'Warranty', value: '6 months' }
  ]
}

function ListingDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const listing = MOCK_LISTING

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  const handleContact = () => {
    navigate('/messages')
  }

  return (
    <div className="listing-detail">
      <button className="listing-detail__back" onClick={() => navigate(-1)}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back
      </button>

      <div className="listing-detail__image">
        <img src={listing.image} alt={listing.title} />
      </div>

      <div className="listing-detail__content">
        <div className="listing-detail__header">
          <div>
            <span className="listing-detail__badge">{listing.type}</span>
            <h1 className="listing-detail__title">{listing.title}</h1>
            <p className="listing-detail__location">{listing.location}</p>
          </div>
          <p className="listing-detail__price">{formatPrice(listing.price)}</p>
        </div>

        <div className="listing-detail__section">
          <h2 className="listing-detail__section-title">Description</h2>
          <p className="listing-detail__description">{listing.description}</p>
        </div>

        <div className="listing-detail__section">
          <h2 className="listing-detail__section-title">Specifications</h2>
          <dl className="listing-detail__specs">
            {listing.specs.map((spec, index) => (
              <div key={index} className="listing-detail__spec">
                <dt className="listing-detail__spec-label">{spec.label}</dt>
                <dd className="listing-detail__spec-value">{spec.value}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="listing-detail__section">
          <h2 className="listing-detail__section-title">Seller Information</h2>
          <div className="listing-detail__seller">
            <p className="listing-detail__seller-name">{listing.seller.name}</p>
            <p className="listing-detail__seller-contact">{listing.seller.email}</p>
            <p className="listing-detail__seller-contact">{listing.seller.phone}</p>
          </div>
        </div>

        <button className="listing-detail__cta" onClick={handleContact}>
          Contact Seller
        </button>
      </div>
    </div>
  )
}

export default ListingDetail

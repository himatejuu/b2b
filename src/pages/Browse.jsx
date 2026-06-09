import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import './Browse.css'

const CATEGORIES = ['All', 'Machinery', 'Rentals', 'Jobs', 'Services']

// Mock listings data
const MOCK_LISTINGS = [
  {
    id: '1',
    title: 'CNC Milling Machine',
    type: 'Machinery',
    price: 250000,
    location: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1565372195458-9de0b320ef04?w=400&h=300&fit=crop',
    description: 'High precision CNC milling machine, excellent condition'
  },
  {
    id: '2',
    title: 'Hydraulic Press 50T',
    type: 'Machinery',
    price: 180000,
    location: 'Delhi',
    image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&h=300&fit=crop',
    description: '50 ton hydraulic press, recently serviced'
  },
  {
    id: '3',
    title: 'Forklift Rental',
    type: 'Rentals',
    price: 5000,
    location: 'Bangalore',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300&fit=crop',
    description: 'Monthly forklift rental, includes operator'
  },
  {
    id: '4',
    title: 'Senior Mechanical Engineer',
    type: 'Jobs',
    price: 80000,
    location: 'Pune',
    image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?w=400&h=300&fit=crop',
    description: '5+ years experience in manufacturing'
  },
  {
    id: '5',
    title: 'Equipment Maintenance Service',
    type: 'Services',
    price: 12000,
    location: 'Chennai',
    image: 'https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=300&fit=crop',
    description: 'Professional equipment maintenance and repair'
  },
  {
    id: '6',
    title: 'Lathe Machine',
    type: 'Machinery',
    price: 95000,
    location: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&h=300&fit=crop',
    description: 'Heavy duty lathe machine'
  }
]

function Browse() {
  const [searchParams] = useSearchParams()
  const [activeCategory, setActiveCategory] = useState('All')
  const [listings, setListings] = useState(MOCK_LISTINGS)
  const navigate = useNavigate()

  useEffect(() => {
    const type = searchParams.get('type')
    if (type && CATEGORIES.includes(type)) {
      setActiveCategory(type)
    }
  }, [searchParams])

  const filteredListings = activeCategory === 'All'
    ? listings
    : listings.filter(listing => listing.type === activeCategory)

  const formatPrice = (price) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0
    }).format(price)
  }

  return (
    <div className="browse">
      <div className="browse__header">
        <div className="browse__categories">
          {CATEGORIES.map(category => (
            <button
              key={category}
              className={`browse__category ${activeCategory === category ? 'browse__category--active' : ''}`}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      <div className="browse__content">
        {filteredListings.length === 0 ? (
          <div className="browse__empty">
            <p>No listings found</p>
          </div>
        ) : (
          <div className="browse__grid">
            {filteredListings.map(listing => (
              <article
                key={listing.id}
                className="listing-card"
                onClick={() => navigate(`/listing/${listing.id}`)}
              >
                <div className="listing-card__image">
                  <img src={listing.image} alt={listing.title} />
                  <span className="listing-card__badge">{listing.type}</span>
                </div>
                <div className="listing-card__content">
                  <h3 className="listing-card__title">{listing.title}</h3>
                  <p className="listing-card__location">{listing.location}</p>
                  <p className="listing-card__price">{formatPrice(listing.price)}</p>
                </div>
              </article>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export default Browse

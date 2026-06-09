import { useNavigate } from 'react-router-dom'
import './Dashboard.css'

const MOCK_STATS = {
  activeListings: 12,
  inquiries: 8,
  messages: 5,
  views: 342
}

const MOCK_RECENT_LISTINGS = [
  { id: '1', title: 'CNC Milling Machine', status: 'active', views: 45, inquiries: 3 },
  { id: '2', title: 'Hydraulic Press', status: 'active', views: 32, inquiries: 2 },
  { id: '3', title: 'Forklift Rental', status: 'draft', views: 0, inquiries: 0 }
]

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div className="dashboard">
      <div className="dashboard__container">
        <h1 className="dashboard__title">Dashboard</h1>

        <div className="dashboard__stats">
          <div className="stat-card">
            <div className="stat-card__value">{MOCK_STATS.activeListings}</div>
            <div className="stat-card__label">Active Listings</div>
          </div>

          <div className="stat-card">
            <div className="stat-card__value">{MOCK_STATS.inquiries}</div>
            <div className="stat-card__label">Inquiries</div>
          </div>

          <div className="stat-card">
            <div className="stat-card__value">{MOCK_STATS.messages}</div>
            <div className="stat-card__label">Messages</div>
          </div>

          <div className="stat-card">
            <div className="stat-card__value">{MOCK_STATS.views}</div>
            <div className="stat-card__label">Total Views</div>
          </div>
        </div>

        <div className="dashboard__section">
          <div className="dashboard__section-header">
            <h2 className="dashboard__section-title">Recent Listings</h2>
            <button
              className="dashboard__view-all"
              onClick={() => navigate('/post')}
            >
              Post New
            </button>
          </div>

          <div className="dashboard__listings">
            {MOCK_RECENT_LISTINGS.map(listing => (
              <div key={listing.id} className="listing-item">
                <div className="listing-item__main">
                  <h3 className="listing-item__title">{listing.title}</h3>
                  <span className={`listing-item__status listing-item__status--${listing.status}`}>
                    {listing.status}
                  </span>
                </div>
                <div className="listing-item__stats">
                  <span className="listing-item__stat">{listing.views} views</span>
                  <span className="listing-item__stat">{listing.inquiries} inquiries</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="dashboard__section">
          <h2 className="dashboard__section-title">Quick Actions</h2>
          <div className="dashboard__actions">
            <button className="action-card" onClick={() => navigate('/post')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              <span>Post Listing</span>
            </button>

            <button className="action-card" onClick={() => navigate('/messages')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
              <span>View Messages</span>
            </button>

            <button className="action-card" onClick={() => navigate('/browse')}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <span>Browse Market</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard

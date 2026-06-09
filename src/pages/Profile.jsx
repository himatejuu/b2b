import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import './Profile.css'

function Profile() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = () => {
    logout()
    navigate('/login')
  }

  return (
    <div className="profile">
      <div className="profile__container">
        <div className="profile__header">
          <div className="profile__avatar">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <h1 className="profile__name">{user?.name}</h1>
            <p className="profile__email">{user?.email}</p>
          </div>
        </div>

        <div className="profile__section">
          <h2 className="profile__section-title">Account</h2>
          <div className="profile__menu">
            <button className="profile__menu-item">
              <span>Edit Profile</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <button className="profile__menu-item">
              <span>Notifications</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <button className="profile__menu-item">
              <span>Privacy & Security</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        {user?.role === 'admin' && (
          <div className="profile__section">
            <h2 className="profile__section-title">Admin</h2>
            <div className="profile__menu">
              <button
                className="profile__menu-item"
                onClick={() => navigate('/admin')}
              >
                <span>Admin Panel</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </button>
            </div>
          </div>
        )}

        <div className="profile__section">
          <h2 className="profile__section-title">Support</h2>
          <div className="profile__menu">
            <button className="profile__menu-item">
              <span>Help Center</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <button className="profile__menu-item">
              <span>Terms of Service</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>

            <button className="profile__menu-item">
              <span>Privacy Policy</span>
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>
        </div>

        <button className="profile__logout" onClick={handleLogout}>
          Sign Out
        </button>
      </div>
    </div>
  )
}

export default Profile

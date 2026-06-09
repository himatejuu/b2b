import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Post.css'

const TYPES = ['Machinery', 'Rentals', 'Jobs', 'Services']

function Post() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    type: 'Machinery',
    title: '',
    description: '',
    price: '',
    location: '',
    images: []
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // In production, send to API
    console.log('Posting listing:', formData)
    alert('Listing posted successfully!')
    navigate('/dashboard')
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <div className="post">
      <div className="post__container">
        <h1 className="post__title">Post a Listing</h1>

        <form onSubmit={handleSubmit} className="post__form">
          <div className="post__field">
            <label htmlFor="type" className="post__label">Type</label>
            <select
              id="type"
              name="type"
              value={formData.type}
              onChange={handleChange}
              className="post__select"
              required
            >
              {TYPES.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
          </div>

          <div className="post__field">
            <label htmlFor="title" className="post__label">Title</label>
            <input
              id="title"
              name="title"
              type="text"
              value={formData.title}
              onChange={handleChange}
              className="post__input"
              placeholder="e.g. CNC Milling Machine"
              required
            />
          </div>

          <div className="post__field">
            <label htmlFor="description" className="post__label">Description</label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="post__textarea"
              placeholder="Describe your listing in detail..."
              required
            />
          </div>

          <div className="post__field">
            <label htmlFor="price" className="post__label">
              Price {formData.type === 'Jobs' && '(per month)'}
            </label>
            <input
              id="price"
              name="price"
              type="number"
              value={formData.price}
              onChange={handleChange}
              className="post__input"
              placeholder="0"
              required
            />
          </div>

          <div className="post__field">
            <label htmlFor="location" className="post__label">Location</label>
            <input
              id="location"
              name="location"
              type="text"
              value={formData.location}
              onChange={handleChange}
              className="post__input"
              placeholder="City, State"
              required
            />
          </div>

          <div className="post__field">
            <label htmlFor="images" className="post__label">Images</label>
            <input
              id="images"
              name="images"
              type="file"
              multiple
              accept="image/*"
              className="post__file"
            />
            <p className="post__hint">Upload up to 5 images</p>
          </div>

          <div className="post__actions">
            <button type="button" className="post__cancel" onClick={() => navigate(-1)}>
              Cancel
            </button>
            <button type="submit" className="post__submit">
              Post Listing
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Post

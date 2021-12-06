import { Link } from 'react-router-dom'
import './Home.css'

function Home() {
  return (
    <div>
      <h2>Welcome to Dangalf's Library of Computer Science!</h2>
      <p>
        Check out the amazing selection of books in our{' '}
        <Link className="linkie" to="/books">
          catalog
        </Link>
      </p>
    </div>
  )
}

export default Home

import { NavLink, useLocation } from 'react-router-dom'
import './Header.css'

function Header() {
  const location = useLocation()

  let redirectLink = null

  if (location.pathname === '/books') {
    redirectLink = (
      <NavLink exact className="headerLink" activeClassName="selected" to="/">
        Back to Home
      </NavLink>
    )
  } else if (location.pathname !== '/books' && location.pathname !== '/') {
    redirectLink = (
      <NavLink exact className="headerLink" activeClassName="selected" to="/books">
        Back to Catalog
      </NavLink>
    )
  }

  return (
    <div>
      <h1> Library Catalog </h1>
      {redirectLink}
    </div>
  )
}

export default Header

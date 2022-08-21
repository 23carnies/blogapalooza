import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = ({ user, handleLogout }) => {
	return (
		<>
			{user ? (
				<nav className="navbar navbar-expand-lg bg-dark">
					<div>
						<ul className="text-light">
							<li className='nav-item'>
								Welcome, {user.name}
							</li>
							<li className='nav-item'>
                <Link to="/users" className='nav-link'>Users</Link>
              </li>
							<li className='nav-item'>
								<Link to='' onClick={handleLogout}>LOG OUT</Link>
							</li>
						</ul>
					</div>
				</nav>
			) : (
				<nav className="navbar navbar-expand-lg bg-dark">
					<div>
						<ul className="text-light">
							<li className='nav-item text-decoration-none'>
								<Link to="/login" className='nav-link'>Log In</Link>
							</li>
							<li className='nav-item'>
								<Link to="/signup" className='nav-link'>Sign Up</Link>
							</li>
						</ul>
					</div>
				</nav>
			)}
		</>
	)
}

export default NavBar

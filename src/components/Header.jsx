import { NavLink } from 'react-router-dom'
import logo from '/logo.svg'

function Header () {
    return (
        <>
        <header>
            <div className="container flex">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <nav>
                    <NavLink to='/' end>Home</NavLink>
                    <NavLink to='/About' >About</NavLink>
                </nav>
            </div>
        </header>
        </>
    )
}

export default Header
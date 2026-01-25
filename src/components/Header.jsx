import logo from '/logo.svg'

function Header () {
    return (
        <>
        <header>
            <div className="container flex">
                <div>
                    <img src={logo} alt="logo" />
                </div>
                <nav><a href="" style={{ color: "#00f"}}>Home</a><a href="">About</a></nav>
            </div>
        </header>
        </>
    )
}

export default Header
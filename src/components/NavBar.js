const NavBar =() => {
    return (
        <header id="header">
            <h1 className="header__title">Hotel.com</h1>
            <img className="header__logo" src="/logo192.png" />
            <nav className="header__items">
                <a href="">home</a>
                <a href="">Alojamiento</a>
                <a href="">Reservas</a>
                <a href="">Contacto</a>
            </nav>
        </header>
    )

}

export default NavBar
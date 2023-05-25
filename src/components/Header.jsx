function Header({ onChange }) {

    const handleChange = (e) => {
        onChange(e.target.value)
        };

    const navClick = () => {
        window.location.reload();
    }


    return (
        <nav className="navbar bg-body-tertiary fixed-top">
            <div className="container-fluid">
                <div>
                <a className="navbar-brand" onClick={navClick}>Aves de Chile</a>
                <img className="img" src="src/assets/img/pajarito.png" alt="" />
                </div>
                
                <form className="d-flex" role="search">
                    <input className="form-control me-2" type="search" placeholder="Buscar" aria-label="Search" onChange={handleChange}/>
                </form>
            </div>
        </nav>
    );
}

export default Header;
const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header full main-layout">
        <div className="header-container">
        <Link to="/">
            <h3 className="logo"><span>S</span><span>hm</span><span>oo</span>gle</h3>
        </Link>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/note">Note</NavLink>
        </nav>
        </div>
    </header>
}

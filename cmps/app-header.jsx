const { Link, NavLink } = ReactRouterDOM

export function AppHeader() {

    return <header className="app-header full main-layout">
        <Link to="/">
            <h3>Shmoogle</h3>
        </Link>
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/mail">Mail</NavLink>
            <NavLink to="/note">Note</NavLink>
        </nav>
    </header>
}

import logo from '../logo.svg';

function NavComponent() {
    return (
       
        <header className="App-header">
            <nav>
                <img src={logo} className="App-logo" alt="logo" />
                <a href="link">REACT</a>
            </nav>
        </header>

    )
}

export default NavComponent
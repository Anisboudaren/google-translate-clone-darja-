import "./NavBar.css"

export default function transWindow() {
    
    return <>
    <nav>
        <div className="navButtons">
            <button className="loginButton">Login</button>
            <button>Sign up</button>
        </div>

        <div className="navLogo">
            <h1><b>Mamak</b></h1><h3>Translate</h3>
        </div>

        <div className="navSave"><h3>Save 📘</h3></div>

    </nav>
    </>
}
const links = {
    linkedin: "https://www.linkedin.com/in/broderick-howell-43b0161a4/",
    github: "https://github.com/ZeroBitzz",
}

const Header = () => {
    return (
        <div>
            <div id="crt">
                <div className="scanline"></div>
            </div>
            <div className="scanline"></div>

            <header>
                <span>VERSION 3.0 (2002-2505)</span>
                <div className="dropdown">
                    <button className="dropbtn">CONTACT ME</button>
                    <div className="dropdown-content">
                        <a
                            href={links.linkedin}
                            target="_blank"
                            rel="noreferrer"
                        >
                            LINKEDIN
                        </a>
                        <a href={links.github} target="_blank" rel="noreferrer">
                            GITHUB
                        </a>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header

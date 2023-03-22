import "./App.css"

function App() {
    return (
        <div className="App">
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
                            href="https://www.linkedin.com/in/broderick-howell-43b0161a4/"
                            target="_blank"
                        >
                            LINKEDIN
                        </a>
                        <a href="https://github.com/ZeroBitzz" target="_blank">
                            GITHUB
                        </a>
                    </div>
                </div>
            </header>

            <section id="main-content-section">
                <section className="subsection">
                    <h2 className="subsection-h2">ABOUT ME</h2>
                    <p>
                        I am Broderick, an aspiring physicist/engineer, I have a
                        passion for understanding the universe, building
                        gadgets, and experiencing life. My love for learning and
                        coffee fuel my dedication to succeed in the fields of
                        science.
                    </p>
                </section>

                <section className="subsection">
                    <h2 className="subsection-h2">TECH SKILLS</h2>
                    <ol>
                        <li>Javascript</li>
                        <li>React</li>
                        <li>Node JS</li>
                        <li>MongoDB</li>
                        <li>EXPRESS</li>
                        <li>CSS</li>
                        <li>PYTHON</li>
                        <li>HTML</li>
                        <li>JEST</li>
                        <li>SQL</li>
                        <li>ARDUINO</li>
                    </ol>
                </section>

                <section className="subsection">
                    <h2 className="subsection-h2">PROJECT LINKS</h2>
                    <ul>
                        <li>
                            <a
                                href="https://unique-froyo-495763.netlify.app/"
                                target="_blank"
                            >
                                password-generator
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://serene-narwhal-b92afd.netlify.app/"
                                target="_blank"
                            >
                                weather-finder
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://eloquent-haupia-e71754.netlify.app/"
                                target="_blank"
                            >
                                javascript-quiz
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://precious-nougat-884d79.netlify.app/"
                                target="_blank"
                            >
                                work-scheduler
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/ZeroBitzz/read-me-generator"
                                target="_blank"
                            >
                                read-me-generator
                            </a>
                        </li>
                    </ul>
                </section>
            </section>

            <footer>
                <span id="status-span">STATUS=[CONNECTED]</span>
                <span id="time"></span>
            </footer>

            <section id="loader-wrapper">
                <div id="loading-container">
                    <span id="loading-span">LOADING...</span>
                    <span className="loader">
                        <span className="loader-inner"></span>
                    </span>
                </div>
            </section>
        </div>
    )
}

export default App

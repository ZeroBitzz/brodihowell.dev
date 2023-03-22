import Header from "./Header"

const links = {
    passwordGenerator: "https://unique-froyo-495763.netlify.app/",
    weatherFinder: "https://serene-narwhal-b92afd.netlify.app/",
    javascriptQuiz: "https://eloquent-haupia-e71754.netlify.app/",
    workScheduler: "https://precious-nougat-884d79.netlify.app/",
    readMeGenerator: "https://github.com/ZeroBitzz/read-me-generator",
}

const Main = () => {
    return (
        <div>
            <Header />
            <section id="main-content-section">
                <section className="subsection">
                    <h2 className="subsection-h2">ABOUT ME</h2>
                    <p>
                        I am Broderick, an aspiring physicist/engineer, I have a
                        passion for understanding the universe, building
                        gadgets, and experiencing life. My love for learning and
                        coffee fuel my dedication to succeed in the fields of
                        science. Currently I am attending the University of Utah
                        for software engineering to get a job in the field.
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
                                href={links.passwordGenerator}
                                target="_blank"
                                rel="noreferrer"
                            >
                                password-generator
                            </a>
                        </li>
                        <li>
                            <a
                                href={links.weatherFinder}
                                target="_blank"
                                rel="noreferrer"
                            >
                                weather-finder
                            </a>
                        </li>
                        <li>
                            <a
                                href={links.javascriptQuiz}
                                target="_blank"
                                rel="noreferrer"
                            >
                                javascript-quiz
                            </a>
                        </li>
                        <li>
                            <a
                                href={links.workScheduler}
                                target="_blank"
                                rel="noreferrer"
                            >
                                work-scheduler
                            </a>
                        </li>
                        <li>
                            <a
                                href={links.readMeGenerator}
                                target="_blank"
                                rel="noreferrer"
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
            <span className="loader"><span className="loader-inner"></span></span>
        </div>
        </section>
        </div>
    )
}

export default Main

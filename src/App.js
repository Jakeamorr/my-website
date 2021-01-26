import logo from './logo.svg';
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Home from './pages/home.js';
import About from './pages/about.js';
import Projects from './pages/projects.js';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <Router>
                    <div className="Nav-bar">
                        {/* Configure Navbar */}
                        <nav>
                            <ul>
                                <li>
                                    <Link to="/">Home</Link>
                                </li>
                                <li>
                                    <Link to="/about">About</Link>
                                </li>
                                <li>
                                    <Link to="/projects">Projects</Link>
                                </li>
                            </ul>
                        </nav>

                        {/* Connect routes to corresponding component */}
                        <Switch>
                            <Route path="/about">
                                <About />
                            </Route>
                            <Route path="/projects">
                                <Projects />
                            </Route>
                            <Route path="/">
                                <Home />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </header>
        </div>
    );
}

export default App;

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

// Pages.
import Candidate from './pages/Candidate'
import Custom from './pages/Custom'

import './App.css';

function App() {
  return (
    <Router>
      <nav className="mb-4">
        <ul className="flex">
          <li>
            <Link to="/" className="bg-blue-800 text-white block p-2 text-xl ml-2">Home</Link>
          </li>
          <li>
            <Link to="/candidate" className="bg-blue-800 text-white block p-2 text-xl ml-2">Componentes Normales</Link>
          </li>
          <li>
            <Link to="/examples" className="bg-blue-800 text-white block p-2 text-xl ml-2">Con Custom hooks</Link>
          </li>
        </ul>
      </nav>
      <div>
        <Switch>
          <Route path="/candidate">
            <Candidate />
          </Route>
          <Route path="/examples">
            <Custom />
          </Route>
          <Route path="/">
            <>
              <h1 className="text-4xl">Custom React Hooks</h1>
              <h2 className="text-2xl">Drupalcamp Costa Rica 2020</h2>
              <h3 className="text-xl">Jose Manuel Santibañez Villanueva - Senior developer at Weknow</h3>
            </>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;

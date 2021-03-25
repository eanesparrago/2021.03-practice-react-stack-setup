import { ThemeProvider } from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle>

      <Router>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/about">
            <div>About</div>
          </Route>

          <Route path="/users">
            <div>Users</div>
          </Route>

          <Route path="/">
            <div>Home</div>
          </Route>
        </Switch>
      </Router>
    </ThemeProvider>
  );
}

export default App;

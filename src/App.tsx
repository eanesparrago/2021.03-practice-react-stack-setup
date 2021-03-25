import { ThemeProvider } from "styled-components";

import theme from "styles/theme";
import GlobalStyle from "styles/GlobalStyle";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle></GlobalStyle> <div></div>
    </ThemeProvider>
  );
}

export default App;

import "./App.css";
import NavBar from "./components/NavBar";
import News from "./components/News";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const apiKey = process.env.REACT_APP_TITLE;

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
          <Route
            exact
            path="/"
            element={<News key="general" category="general" apiKey={apiKey} />}
          />
          <Route
            exact
            path="/about"
            element={<News key="sports" category="sports" apiKey={apiKey} />}
          />
          <Route
            exact
            path="/business"
            element={
              <News key="business" category="business" apiKey={apiKey} />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                key="entertainment"
                category="entertainment"
                apiKey={apiKey}
              />
            }
          />
          <Route
            exact
            path="/general"
            element={<News key="general" category="general" apiKey={apiKey} />}
          />
          <Route
            exact
            path="/health"
            element={<News key="health" category="health" apiKey={apiKey} />}
          />
          <Route
            exact
            path="/science"
            element={<News key="science" category="science" apiKey={apiKey} />}
          />
          <Route
            exact
            path="/sports"
            element={<News key="sports" category="sports" apiKey={apiKey} />}
          />
          <Route
            exact
            path="/technology"
            element={
              <News key="technology" category="technology" apiKey={apiKey} />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

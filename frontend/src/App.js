import './App.css';
// Import AppRouter
import AppRouter from './Router/AppRouter';
import LoaderContextProvider from './Contexts/LoaderContext/LoaderContextProvider'
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <>
      {/* Loader Context Provider Wrapper */}
      <LoaderContextProvider>
        {/* AppRouter Page */}
        <Router>
          <AppRouter />
        </Router>
      </LoaderContextProvider>
    </>
  );
}

export default App;
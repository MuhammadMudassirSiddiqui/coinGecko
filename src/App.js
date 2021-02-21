import "./App.css";
import CoinDetail from "./pages/CoinDetailPage";
import CoinSummeryPage from "./pages/CoinSummeryPage";
import Header from "./component/Header";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header />
        <div className="app_pages">
          <Route exact path="/">
            <CoinSummeryPage />
          </Route>
          <Route exact path="/detail/:id" component={CoinDetail} />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;

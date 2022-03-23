import { Route, Routes, HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { HomePage } from "./pages/home-page/home-page";
import { Header } from "./components/header/header";
import { store } from "./redux/index";
import { GamePage } from "./pages/game-page/game-page";
import { OrderPage } from "./pages/order-page/order-page";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/app/:title" element={<GamePage />} />
            <Route path="/order" element={<OrderPage />} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}

export default App;

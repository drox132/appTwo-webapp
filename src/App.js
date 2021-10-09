import ProductToBuyState from "./context/productToBuy/ProductToBuyState";

import IndexPage from "./pages/IndexPage"

import './App.css';

function App() {
  return (
    <div className="App">
        <ProductToBuyState>
            <IndexPage/>
        </ProductToBuyState>
    </div>
  );
}

export default App;

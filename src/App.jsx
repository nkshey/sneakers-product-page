import { useState } from "react";
import Navbar from "./navbar/Navbar";
import Product from "./product/Product";

function App() {
  const [quantity, setQuantity] = useState(0);

  return (
    <main className="md:px-12">
      <Navbar quantity={quantity} onQuantity={setQuantity} />
      <Product onQuantity={setQuantity} />
    </main>
  );
}

export default App;

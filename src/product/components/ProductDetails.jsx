import { useState } from "react";
import ProductDescription from "./ProductDescription";
import ProductPrice from "./ProductPrice";
import ProductQuantityAndCartButton from "./ProductQuantityAndCartButton";

function ProductDetails({ onQuantity }) {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount((c) => c + 1);
  }

  function handleDecrement() {
    if (count === 0) return;
    setCount((c) => c - 1);
  }

  function handleAddToCart() {
    if (count === 0) return;
    onQuantity((cur) => cur + count);
  }

  return (
    <section className="bg-white px-6 pb-10 pt-5 md:p-0">
      <ProductDescription />
      <ProductPrice />
      <ProductQuantityAndCartButton
        count={count}
        onCount={setCount}
        onDecrement={handleDecrement}
        onIncrement={handleIncrement}
        onAddToCart={handleAddToCart}
      />
    </section>
  );
}

export default ProductDetails;

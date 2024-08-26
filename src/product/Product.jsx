import ProductCarousel from "./components/ProductCarousel";
import ProductDetails from "./components/ProductDetails";

function Product({ onQuantity }) {
  return (
    <section className="md:mx-auto md:grid md:max-w-[63.4375rem] md:grid-cols-[27.8125rem_27.8125rem] md:items-center md:justify-between md:gap-3 md:py-[5.625rem]">
      <ProductCarousel />
      <ProductDetails onQuantity={onQuantity} />
    </section>
  );
}

export default Product;

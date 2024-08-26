import Button from "../../ui/Button";
import ChangeQuantityButton from "../../ui/ChangeQuantityButton";
import CartIcon from "../../icons/CartIcon";

function ProductQuantityAndCartButton({
  count,
  onCount,
  onDecrement,
  onIncrement,
  onAddToCart,
}) {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-[1.5fr_2.5fr]">
      <div className="flex w-full items-center justify-between rounded-[0.625rem] bg-light-grayish-blue px-[1.125rem] py-4">
        <ChangeQuantityButton type="decrement" onClick={onDecrement} />

        <span className="font-bold">{count}</span>

        <ChangeQuantityButton type="increment" onClick={onIncrement} />
      </div>

      <Button
        type="primary"
        count={count}
        onCount={onCount}
        onAddToCart={onAddToCart}
      >
        <CartIcon type="addToCart" />
        Add to cart
      </Button>
    </div>
  );
}

export default ProductQuantityAndCartButton;

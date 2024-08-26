import DeleteIcon from "../icons/DeleteIcon";
import Button from "../ui/Button";

function Cart({ quantity, onQuantity, cartRef }) {
  return (
    <section
      ref={cartRef}
      className="shadow-cart-mobile lg:-right-[4.75rem] md:shadow-cart-desktop absolute left-1/2 top-[4.5rem] z-30 grid w-[calc(100%-1rem)] -translate-x-1/2 grid-rows-[auto_1fr] divide-y divide-dark-grayish-blue/15 rounded-[0.625rem] bg-white md:left-auto md:right-0 md:top-[6.625rem] md:w-[22.5rem] md:translate-x-0"
    >
      <h3 className="px-[1.375rem] pb-[1.5625rem] pt-[1.125rem] font-bold">
        Cart
      </h3>

      <div className="flex flex-col items-center gap-[1.625rem] px-[1.375rem] pb-8 pt-6">
        <div className="flex w-full items-center justify-between text-dark-grayish-blue">
          <div className="flex items-center gap-4">
            <img
              src="./images/sneakers/image-product-1-thumbnail.jpg"
              alt="sneakers thumbnail image"
              className="w-[3.125rem] rounded-md"
            />

            <div>
              <p>Fall Limited Edition Sneakers</p>
              <p>
                $125.00 x {quantity}
                <span className="ml-1.5 font-bold text-very-dark-blue">
                  ${125 * quantity}.00
                </span>
              </p>
            </div>
          </div>

          <button onClick={() => onQuantity(0)} className="group">
            <DeleteIcon />
          </button>
        </div>

        <Button type="primary">Checkout</Button>
      </div>
    </section>
  );
}

export default Cart;

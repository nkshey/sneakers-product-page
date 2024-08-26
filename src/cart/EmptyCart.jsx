function EmptyCart({ cartRef }) {
  return (
    <section
      ref={cartRef}
      className="shadow-cart-mobile md:shadow-cart-desktop lg:-right-[4.75rem] absolute left-1/2 top-[4.5rem] z-30 grid w-[calc(100%-1rem)] -translate-x-1/2 grid-rows-[auto_1fr] divide-y divide-dark-grayish-blue/15 rounded-[0.625rem] bg-white font-bold md:left-auto md:right-0 md:top-[6.625rem] md:w-[22.5rem] md:translate-x-0"
    >
      <h3 className="px-[1.375rem] pb-[1.5625rem] pt-[1.125rem]">Cart</h3>

      <p className="grid h-[11.8125rem] place-items-center pb-3.5 text-dark-grayish-blue">
        Your cart is empty.
      </p>
    </section>
  );
}

export default EmptyCart;

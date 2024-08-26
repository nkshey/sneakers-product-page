function ProductPrice() {
  return (
    <div className="mb-5 flex items-center justify-between font-bold md:mb-[2.125rem] md:inline-block">
      <p className="flex items-center gap-4 text-[1.75rem] md:mb-1.5 md:text-[1.875rem]">
        $125.00
        <span className="rounded-md bg-very-dark-blue px-2.5 py-1.5 text-base leading-none text-white">
          50%
        </span>
      </p>

      <p className="text-dark-grayish-blue line-through">$250.00</p>
    </div>
  );
}

export default ProductPrice;

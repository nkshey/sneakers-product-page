import CartIcon from "../../icons/CartIcon";

function NavbarCartAndProfile({ onCartOpen, quantity, cartButtonRef }) {
  return (
    <div className="flex items-center gap-6 md:gap-11">
      <button
        ref={cartButtonRef}
        onClick={() => {
          onCartOpen((current) => (!current ? true : false));
        }}
        className="group relative"
      >
        <CartIcon />

        {quantity > 0 && (
          <span className="absolute -right-[0.375rem] -top-[0.375rem] grid h-[1.125rem] w-[1.125rem] select-none place-items-center rounded-full border-2 bg-orange text-[0.625rem] font-bold text-white">
            {quantity}
          </span>
        )}
      </button>

      <img
        src="./images/image-avatar.png"
        alt="profile image"
        className="w-6 cursor-pointer select-none rounded-full hover:border-[0.0938rem] hover:border-orange md:w-12 md:hover:border-2"
      />
    </div>
  );
}

export default NavbarCartAndProfile;

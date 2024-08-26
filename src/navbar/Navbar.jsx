import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";

import EmptyCart from "../cart/EmptyCart";
import MobileNavbar from "./components/mobile/MobileNavbar";
import DesktopNavbar from "./components/desktop/DesktopNavbar";
import NavbarCartAndProfile from "./components/NavbarCartAndProfile";
import Cart from "../cart/Cart";

function Navbar({ quantity, onQuantity }) {
  const isDesktop = useMediaQuery({ query: "(min-width: 1000px)" });
  const [isCartOpen, setIsCartOpen] = useState(false);
  const cartRef = useRef(null);
  const cartButtonRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      cartRef.current &&
      !cartRef.current.contains(event.target) &&
      cartButtonRef.current &&
      !cartButtonRef.current.contains(event.target)
    ) {
      setIsCartOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="relative flex justify-between bg-white px-6 py-5 md:mx-auto md:max-w-[69.375rem] md:border-b md:border-dark-grayish-blue/15 md:!p-0 md:pb-[2.875rem] md:pt-[2.625rem]">
      {isDesktop ? <DesktopNavbar /> : <MobileNavbar />}

      <div className="md:relative md:pb-[2.875rem] md:pt-[2.625rem]">
        <NavbarCartAndProfile
          onCartOpen={setIsCartOpen}
          quantity={quantity}
          cartButtonRef={cartButtonRef}
        />

        {isCartOpen && quantity === 0 && <EmptyCart cartRef={cartRef} />}
        {isCartOpen && quantity > 0 && (
          <Cart quantity={quantity} onQuantity={onQuantity} cartRef={cartRef} />
        )}
      </div>
    </header>
  );
}

export default Navbar;

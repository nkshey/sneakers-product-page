import { useState } from "react";
import Logo from "../../../ui/Logo";
import MobileMenu from "./MobileMenu";
import MenuIcon from "../../../icons/MenuIcon";

function MobileNavbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav>
      {isMenuOpen && <MobileMenu onOpen={setIsMenuOpen} />}

      <div className="flex gap-4">
        <button onClick={() => setIsMenuOpen(true)} className="group">
          <MenuIcon />
        </button>

        <div className="-translate-y-[0.0625rem]">
          <Logo />
        </div>
      </div>
    </nav>
  );
}

export default MobileNavbar;

import Logo from "../../../ui/Logo";
import NavbarItemsList from "../NavbarItemsList";

function DesktopNavbar() {
  return (
    <nav className="flex items-center gap-14 overflow-hidden">
      <div className="-translate-y-[0.0625rem]">
        <Logo />
      </div>

      <NavbarItemsList />
    </nav>
  );
}

export default DesktopNavbar;

import CloseMenuButton from "../../../ui/CloseMenuButton";
import NavbarItemsList from "../NavbarItemsList";

function MobileMenu({ onOpen }) {
  return (
    <>
      <div className="fixed inset-0 z-50 w-[calc(100%-7.8125rem)] bg-white px-6 py-5">
        <CloseMenuButton onOpen={onOpen} />

        <NavbarItemsList />
      </div>

      {/* Black overlay when menu is open */}
      <div
        className="fixed inset-0 z-40 bg-black/75"
        onClick={() => onOpen(false)}
      ></div>
    </>
  );
}

export default MobileMenu;

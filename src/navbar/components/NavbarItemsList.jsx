import NavbarItem from "./NavbarItem";

const navigationNames = ["Collections", "Men", "Women", "About", "Contact"];

function NavbarItemsList() {
  return (
    <ul className="flex flex-col gap-4 text-lg font-bold md:flex-row md:gap-8 md:text-base md:font-normal">
      {navigationNames.map((name, index) => (
        <NavbarItem name={name} key={index} />
      ))}
    </ul>
  );
}

export default NavbarItemsList;

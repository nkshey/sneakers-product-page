function NavbarItem({ name }) {
  return (
    <li>
      <a
        href="#"
        className="group relative bg-white transition-all duration-150 md:text-dark-grayish-blue md:hover:text-very-dark-blue"
      >
        {name}
        <span className="absolute bottom-0 left-0 -z-10 h-1 w-full bg-orange transition-all duration-150 group-hover:-bottom-1 md:-bottom-16 md:z-20 md:group-hover:-bottom-[3.625rem]"></span>
      </a>
    </li>
  );
}

export default NavbarItem;

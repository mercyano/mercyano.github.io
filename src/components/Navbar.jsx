import logo from '../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="py-6">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="w-12 h-12 border-2 hover:drop-shadow-[3px_3px_black] transition-all">
          <a href="#">
            <img src={logo} alt="" className="w-full h-full" />
          </a>
        </div>

        {/* Menu Items */}
        <div className="space-x-6 font-fredoka">
          <a href="#about" className="hover:text-primary hover:underline">
            About
          </a>
          <a href="#projects" className="hover:text-primary hover:underline">
            Projects
          </a>
          <a href="#contact" className="hover:text-primary hover:underline">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

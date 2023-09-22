import NavbarRoutes from "@/components/NavbarRoutes";
import MobileSidebar from "./MobileSidebar";

const Navbar = () => {
  return (
    <div className="p-3 border-b h-full flex items-center bg-white shadow-sm">
      <MobileSidebar />
      <NavbarRoutes />
    </div>
  );
};

export default Navbar;

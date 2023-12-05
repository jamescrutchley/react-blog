import NavigationMenuDemo from "../components/radix/Navbar";

const Layout = ({ children }) => {
    return (
      <div>
        <NavigationMenuDemo />
        <div>{children}</div>
      </div>
    );
  };

  export default Layout;
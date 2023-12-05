import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import '../../stylesheets/navbar.css'
import { Link } from 'react-router-dom';



const Navbar = () => {
  return (
    <NavigationMenu.Root className='NavigationMenuRoot'>
    <NavigationMenu.List className='NavigationMenuList'>

    <NavigationMenu.Item>
        <Link className="NavigationMenuLink" to='/'>Home</Link>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
      <Link className="NavigationMenuLink" to='/feed'>Feed</Link>
      </NavigationMenu.Item>

      <NavigationMenu.Item>
      <Link className="NavigationMenuLink" to='/profile'>Profile</Link>
      </NavigationMenu.Item>

      <NavigationMenu.Indicator />
    </NavigationMenu.List>

    <NavigationMenu.Viewport />
  </NavigationMenu.Root>
  )
}

export default Navbar;





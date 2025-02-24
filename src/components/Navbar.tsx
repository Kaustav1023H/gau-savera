
import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a href="/" className="flex items-center">
              <span className="text-xl font-semibold text-primary">GauSeva</span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>AI Services</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4">
                      <li className="row-span-3">
                        <NavigationMenuLink asChild>
                          <a href="/breeding-assistant" className="flex flex-col gap-2 p-4 hover:bg-accent/10 rounded-lg">
                            <span className="text-sm font-medium text-primary">Breeding Assistant</span>
                            <span className="text-xs text-muted-foreground">AI-powered tools for optimal breeding and health management</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink asChild>
                          <a href="/marketplace" className="flex flex-col gap-2 p-4 hover:bg-accent/10 rounded-lg">
                            <span className="text-sm font-medium text-primary">Marketplace</span>
                            <span className="text-xs text-muted-foreground">Connect with buyers and sellers</span>
                          </a>
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-3 py-2 text-sm" href="/blog">
                    Blog
                  </NavigationMenuLink>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuLink className="px-3 py-2 text-sm" href="/community">
                    Community
                  </NavigationMenuLink>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-primary hover:text-primary-dark focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-white border-t`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <a href="/breeding-assistant" className="block px-3 py-2 text-base font-medium text-primary hover:bg-accent/10 rounded-md">
            Breeding Assistant
          </a>
          <a href="/marketplace" className="block px-3 py-2 text-base font-medium text-primary hover:bg-accent/10 rounded-md">
            Marketplace
          </a>
          <a href="/blog" className="block px-3 py-2 text-base font-medium text-primary hover:bg-accent/10 rounded-md">
            Blog
          </a>
          <a href="/community" className="block px-3 py-2 text-base font-medium text-primary hover:bg-accent/10 rounded-md">
            Community
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

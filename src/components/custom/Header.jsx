import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { Film, Search } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "TV Shows",
      href: "tv-shows",
    },
    {
      label: "Movies",
      href: "movies",
    },
    {
      label: "New & Popular",
      href: "new-and-popular",
    },
    {
      label: "My List",
      href: "my-list",
    },
  ];

  return (
    // when we scroll the color should be "bg-[#141414]"
    <header className="w-full py-6 px-5 lg:px-12 flex items-center justify-between bg-gradient-to-b from-[#121212]">
      <div className="flex items-center space-x-4 lg:space-x-12">
        <Link to="/" className="flex space-x-1">
          <Film className="h-[20px] w-[20px]" />
          <span className="text-xl font-semibold font-title leading-6">
            MovieStream
          </span>
        </Link>

        <nav className="hidden md:flex space-x-4 lg:space-x-6 px-6">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className="transition-colors duration-300 text-secondary-foreground text-sm font-body"
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <Search className="w-5 h-5 text-gray-400" aria-hidden="true" />
          </div>
          <Input type="search" placeholder="Search..." className="" />
        </div>
        <Avatar>
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/124599?v=4"
            alt="User"
          />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;

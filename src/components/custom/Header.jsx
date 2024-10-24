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
    <header className="w-full px-4 lg:px-8 py-6 flex items-center justify-between">
      <div className="flex items-center space-x-4 lg:space-x-16">
        <Link to="/" className="flex space-x-1">
          <Film className="h-[24px] w-[24px]" />
          <span className="text-2xl font-semibold font-title leading-7">
            MovieStream
          </span>
        </Link>

        <nav className="hidden md:flex space-x-4 lg:space-x-6">
          {links.map((link) => (
            <NavLink
              key={link.label}
              to={link.href}
              className="transition-colors duration-300 text-secondary-foreground font-body"
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
          <Input
            type="search"
            placeholder="Search..."
            className=""
          />
        </div>
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="User" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};

export default Header;

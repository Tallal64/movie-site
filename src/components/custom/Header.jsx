import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Film, ScanSearch } from "lucide-react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const links = [
    {
      label: "Home",
      href: "/",
    },
    {
      label: "TV Shows",
      href: "tv",
    },
    {
      label: "Movies",
      href: "movies",
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
        <div>
          <NavLink to={`search`}>
            <Button className="flex items-center justify-between bg-[#18181a] w-[200px] text-input py-[18px] rounded-lg border border-white/25">
              <div className="flex gap-x-2 items-center">
                <ScanSearch className="h-4 w-4" />
                <span>Search...</span>
              </div>
              <Badge
                type="button"
                className="h-5 px-2 bg-[#27272a] space-x-1 rounded"
              >
                <span className="text-[10px]">⌘</span>
                <span className="text-xs"> K</span>
              </Badge>
            </Button>
          </NavLink>
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

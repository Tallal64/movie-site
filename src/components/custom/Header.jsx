import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { useGetSearchQuery } from "@/redux/services/movies";
import { Film, Search, Video } from "lucide-react";
import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchData, setSearchData] = useState(undefined);
  const { data, isLoading, error } = useGetSearchQuery(searchQuery);

  useEffect(() => {
    function handleCtrlKey(e) {
      if (e.key === "k" && e.ctrlKey) {
        e.preventDefault();
        setOpen(true);
      }
    }

    window.addEventListener("keydown", handleCtrlKey);
  });

  useEffect(() => {
    if (error) {
      console.log(error);
    } else if (isLoading) {
      console.log(isLoading);
    } else if (data) {
      setSearchData(data.results);
      console.log("search data : ", searchData);
    }
  }, [data, error, isLoading, searchData]);

  useEffect(() => {});

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
          <Button
            onClick={() => setOpen(true)}
            className="flex items-center justify-between bg-[#18181a] w-[200px] text-input py-[18px] rounded-lg border border-white/25"
          >
            <div className="flex gap-x-2 items-center">
              <Search className="h-4 w-4" />
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
          <CommandDialog open={open} onOpenChange={setOpen}>
            <Command className="rounded-lg border shadow-md">
              <div className="flex items-center border-b px-3">
                <CommandInput
                  type="search"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search for a movie, tv show or actor..."
                />
              </div>

              <CommandList>
                <CommandEmpty>search something</CommandEmpty>
                {searchData?.map((query) => (
                  <CommandGroup key={query?.id}>
                    {query?.name || query.title ? (
                      <CommandItem className="flex items-center gap-2 px-4 py-2">
                        <NavLink
                          to={`details/${query.media_type}/${query.id}`}
                          className={"flex items-center gap-x-3"}
                        >
                          <Video className="h-4 w-4 text-white/40" />
                          <span>{query.name || query.title}</span>
                        </NavLink>
                      </CommandItem>
                    ) : null}
                  </CommandGroup>
                ))}
              </CommandList>
            </Command>
          </CommandDialog>
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

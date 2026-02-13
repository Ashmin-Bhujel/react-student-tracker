import { UserCircle } from "lucide-react";
import { NavLink, useNavigate } from "react-router";
import { Button } from "../shadcn/ui/button";

type NavLinkType = {
  to: "/" | "/students/add";
  title: "List Students" | "Add Students";
};

export default function Header() {
  // Normal values
  const navLinks: NavLinkType[] = [
    { to: "/", title: "List Students" },
    {
      to: "/students/add",
      title: "Add Students",
    },
  ];

  // React router
  const navigate = useNavigate();

  return (
    <header>
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo and title */}
        <div
          className="flex cursor-pointer items-center gap-2"
          onClick={() => navigate("/")}
          title="Go to home"
        >
          {/* Logo */}
          <div>
            <UserCircle className="size-14" />
          </div>

          {/* Title */}
          <div className="flex flex-col max-md:hidden">
            <h1 className="text-2xl leading-tight font-bold">
              React Student Tracker
            </h1>
            <small className="text-muted-foreground max-lg:hidden">
              A simple student tracker app made using TypeScript, React,
              Tailwind CSS and shadcn/ui.
            </small>
          </div>
        </div>

        {/* Navbar */}
        <nav>
          <ul className="flex items-center gap-1">
            {navLinks.map((navLink) => (
              <li key={navLink.title}>
                <NavLink
                  to={navLink.to}
                  children={({ isActive }) => (
                    <Button variant={isActive ? "default" : "ghost"} asChild>
                      <span>{navLink.title}</span>
                    </Button>
                  )}
                ></NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

import { ModeToggle } from "@/components/ModeToggle";
import { Nav, NavLink } from "@/components/Nav";
import { HeaderProps } from "./types";

export default function MainNav({ items }: HeaderProps) {
  return (
    <div className="hidden md:flex">
      <Nav>
        {items.map((item, index) => (
          <NavLink key={index} href={item.href}>
            {item.text}
          </NavLink>
        ))}
      </Nav>
    </div>
  );
}

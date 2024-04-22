import { Nav, NavLink } from "@/components/Nav";

export default function BlogLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {/* nav */}
      <Nav>
        <NavLink href={"/"}>Home</NavLink>
      </Nav>
      <div>{children}</div>
      {/* footer */}
    </>
  );
}

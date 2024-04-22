import Header from "./_components/Header";

export default function PortfolioLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="">
        <Header />
        <div>{children}</div>
      </div>
    </>
  );
}

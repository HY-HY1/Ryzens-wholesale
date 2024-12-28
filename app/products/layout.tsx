
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <div className="lg:w-[70vw] w-[90vw] m-auto mt-10"
      >
        {children}
      </div>
  );
}

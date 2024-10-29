export default function Layout({ children }: { children: React.ReactNode }) {
  console.log("layout")
  return (
    <div className="bg-background">
      <main className="max-w-[1440px] p-5 mx-auto">
        {/* <Navbar /> */}
        {children}
      </main>
    </div>
  )
}

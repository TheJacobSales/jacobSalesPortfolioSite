import Navbar from "./Navbar"

const Layout = ( {children} ) => {
  return (
    <>
      <header className="header">
          <Navbar />
      </header>
      <main>
          {children}
      </main>
    </>
  )
}

export default Layout
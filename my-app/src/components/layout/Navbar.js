import { useScroll } from "../../hooks/useScroll";

const Navbar = () => {
  const { y, x, scrollDirection } = useScroll();

  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s"
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)"
    }
  }

  return (
    <nav className="nav-bar" style={scrollDirection === "down" ? styles.active: styles.hidden}>
        <div className="nav-description">
            <a className="name-animate" href="#landing">Jacob Sales</a>
            <span className="name-animate">Doing Big Things in Code</span>
        </div>
        <ul className="nav-links nav-link-animate">
            <li>
              <a href="#about">about</a>
            </li>
            <li>
              <a href="#projects">works</a>
            </li>
            <li>
              <a href="#contact">contact</a>
            </li>
        </ul>
    </nav>
  )
}

export default Navbar
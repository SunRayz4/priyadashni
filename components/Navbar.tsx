// "use client"

// import { useState, useEffect } from "react"
// import Link from "next/link"
// import { Menu, BookOpen } from "lucide-react"
// import styles from "@/styles/navbar.module.css"

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true)
//       } else {
//         setScrolled(false)
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   return (
//     <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
//       <div className={styles.container}>
//         <div className={styles.leftSection}>
//           <div className={styles.mobileMenuButton} onClick={() => setIsOpen(!isOpen)}>
//             <Menu size={24} />
//           </div>
//           <Link href="/" className={styles.logo}>
//             <BookOpen className={styles.logoIcon} />
//             <span className={styles.logoText}>
//             Priyadarshani<span className={styles.highlight}>School</span>
//             </span>
//           </Link>
//         </div>

//         <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
//           <li>
//             <Link href="#home" onClick={() => setIsOpen(false)}>
//               Home
//             </Link>
//           </li>
//           <li>
//             <Link href="#about" onClick={() => setIsOpen(false)}>
//               About
//             </Link>
//           </li>
//           <li>
//             <Link href="#courses" onClick={() => setIsOpen(false)}>
//               Academics
//             </Link>
//           </li>
//           <li>
//             <Link href="#testimonials" onClick={() => setIsOpen(false)}>
//               Students
//             </Link>
//           </li>
//           <li>
//             <Link href="#contact" onClick={() => setIsOpen(false)}>
//               Admissions
//             </Link>
//           </li>
//           <li>
//             <Link href="#contact" onClick={() => setIsOpen(false)}>
//               Contact
//             </Link>
//           </li>
//         </ul>

//         <div className={`${styles.actionButtons} ${isOpen ? styles.active : ""}`}>
//           <Link href="/login" className={styles.loginButton}>
//             Student Portal
//           </Link>
//           <Link href="/register" className={styles.registerButton}>
//             Apply Now
//           </Link>
//         </div>
//       </div>
//     </nav>
//   )
// }



"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, BookOpen, ChevronDown } from "lucide-react"
import styles from "@/styles/navbar.module.css"

import VisionMission from "@/app/vissionmission/page";  // Keeping the import

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [aboutDropdown, setAboutDropdown] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.leftSection}>
          <div className={styles.mobileMenuButton} onClick={() => setIsOpen(!isOpen)}>
            <Menu size={24} />
          </div>
          <Link href="/" className={styles.logo}>
            <BookOpen className={styles.logoIcon} />
            <span className={styles.logoText}>
              Priyadarshani<span className={styles.highlight}></span>
            </span>
          </Link>
        </div>

        <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
          <li>
            <Link href="#home" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li className={styles.dropdown}>
            <span onClick={() => setAboutDropdown(!aboutDropdown)} className={styles.dropdownToggle}>
              About <ChevronDown size={16} />
            </span>
            <ul className={`${styles.dropdownWrapper} ${aboutDropdown ? styles.active : ""}`}>
              <li>
                <Link href="#about" onClick={() => setAboutDropdown(false)}>
                  About Our School
                </Link>
              </li>
              <li>
                <Link href="#why-choose-us" onClick={() => setAboutDropdown(false)}>
                  Why Choose Us
                </Link>
              </li>
              <li>
                <Link href="/vissionmission" onClick={() => setAboutDropdown(false)}>
                  Vision & Mission
                </Link>
              </li>
            </ul>
          </li>
          <li>
            <Link href="#courses" onClick={() => setIsOpen(false)}>
              Academics
            </Link>
          </li>
          <li>
            <Link href="#testimonials" onClick={() => setIsOpen(false)}>
              Students
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => setIsOpen(false)}>
              Admissions
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>

        <div className={`${styles.actionButtons} ${isOpen ? styles.active : ""}`}>
          <Link href="/register" className={styles.registerButton}>
            Apply Now
          </Link>
        </div>
      </div>
    </nav>
  )
}

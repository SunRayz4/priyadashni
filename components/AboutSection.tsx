"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import styles from "@/styles/about-section.module.css"

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1 },
    )

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
    }

    return () => {
      if (section) {
        observer.unobserve(section)
      }
    }
  }, [])

  return (
    <section id="about" className={styles.aboutSection} ref={sectionRef}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.title}>About Our School</h2>
          <p className={styles.description}>
            Founded in 1995, Priyadarshani School has been at the forefront of educational innovation for over 25 years. Our
            mission is to provide a nurturing environment where students can develop their intellectual, physical, and
            creative potential.
          </p>
          <p className={styles.description}>
            With a team of dedicated educators and state-of-the-art facilities, we offer a comprehensive curriculum that
            balances academic excellence with character development and real-world skills.
          </p>
          <div className={styles.stats}>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>25+</span>
              <span className={styles.statLabel}>Years of Excellence</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>500+</span>
              <span className={styles.statLabel}>Qualified Teachers</span>
            </div>
            <div className={styles.statItem}>
              <span className={styles.statNumber}>10,000+</span>
              <span className={styles.statLabel}>Successful Graduates</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image
            src="https://img.freepik.com/free-photo/medium-shot-people-working-together_23-2149411549.jpg?t=st=1741849794~exp=1741853394~hmac=f68647ebcd6adeaf3f2e5d355a36dd04290dcbee24ac6e994b3f82b9170bdce3&w=1060"
            alt="School campus"
            width={800}
            height={600}
            className={styles.image}
          />
        </div>
      </div>
    </section>
  )
}


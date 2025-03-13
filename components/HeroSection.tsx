"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import styles from "@/styles/hero-section.module.css"

export default function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.7
    }
  }, [])

  return (
    <section id="home" className={styles.heroSection}>
      <div className={styles.videoContainer}>
        <video ref={videoRef} autoPlay muted loop playsInline className={styles.backgroundVideo}>
          <source src="/bgvideo.mp4?height=1080&width=1920" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay}></div>
      </div>

      <div className={styles.content}>
        <h1 className={styles.title}>
          Welcome to <br />
          <span className={styles.highlight}>Priyadarshani School</span>
        </h1>
        <p className={styles.subtitle}>
          Building tomorrow's leaders through quality education, innovation, and character development
        </p>
        <div className={styles.cta}>
          <Link href="#courses" className={styles.primaryButton}>
            Our Programs
          </Link>
          <Link href="#contact" className={styles.secondaryButton}>
            Apply Now
          </Link>
        </div>
      </div>
    </section>
  )
}


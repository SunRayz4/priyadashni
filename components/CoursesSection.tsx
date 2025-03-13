"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import styles from "@/styles/courses-section.module.css"

const courses = [
  {
    id: 1,
    title: "Science & Technology",
    description:
      "Explore the wonders of science and cutting-edge technology through hands-on experiments and projects.",
    icon: "🔬",
    color: "blue",
  },
  {
    id: 2,
    title: "Arts & Humanities",
    description: "Develop creative thinking and cultural awareness through literature, history, and the arts.",
    icon: "🎭",
    color: "green",
  },
  {
    id: 3,
    title: "Mathematics",
    description: "Build strong analytical skills and problem-solving abilities through our comprehensive math program.",
    icon: "📊",
    color: "amber",
  },
  {
    id: 4,
    title: "Physical Education",
    description: "Promote health, teamwork, and discipline through a variety of sports and physical activities.",
    icon: "⚽",
    color: "red",
  },
  {
    id: 5,
    title: "Languages",
    description: "Master multiple languages and develop strong communication skills for a global future.",
    icon: "🌎",
    color: "purple",
  },
  {
    id: 6,
    title: "Computer Science",
    description: "Learn programming, web development, and digital literacy for the technology-driven world.",
    icon: "💻",
    color: "teal",
  },
]

export default function CoursesSection() {
  const sectionRef = useRef<HTMLElement>(null)
  const cardsRef = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" },
    )

    const section = sectionRef.current
    if (section) {
      observer.observe(section)
    }

    cardsRef.current.forEach((card) => {
      if (card) observer.observe(card)
    })

    return () => {
      if (section) {
        observer.unobserve(section)
      }
      cardsRef.current.forEach((card) => {
        if (card) observer.unobserve(card)
      })
    }
  }, [])

  return (
    <section id="courses" className={styles.coursesSection} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title}>Our Academic Programs</h2>
        <p className={styles.subtitle}>
          Discover our diverse range of programs designed to nurture every student's unique talents and interests
        </p>

        <div className={styles.courseGrid}>
          {courses.map((course, index) => (
            <div
              key={course.id}
              className={`${styles.courseCard} ${styles[`color${course.color}`]}`}
              ref={(el) => (cardsRef.current[index] = el)}
            >
              <div className={styles.courseIcon}>{course.icon}</div>
              <h3 className={styles.courseTitle}>{course.title}</h3>
              <p className={styles.courseDescription}>{course.description}</p>
              <Link href={`/courses/${course.id}`} className={styles.courseLink}>
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}


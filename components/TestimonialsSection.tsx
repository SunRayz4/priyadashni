"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import styles from "@/styles/testimonials-section.module.css"

const testimonials = [
  {
    id: 1,
    name: "Samadhan Gawali",
    role: "Parent",
    image: "/parent.jpg?height=100&width=100",
    quote:
      "The teachers at Priyadarshani School have been incredible mentors for my children. The personalized attention and innovative teaching methods have helped them excel academically and grow personally.",
  },
  {
    id: 2,
    name: "Sachin Patil",
    role: "Alumni",
    image: "/alumni.jpg?height=100&width=100",
    quote:
      "My years at Priyadarshani School prepared me exceptionally well for university and beyond. The critical thinking skills and work ethic I developed here have been invaluable throughout my career.",
  },
  {
    id: 3,
    name: "Sambhaji Pawar",
    role: "Student",
    image: "/student.jpg?height=100&width=100",
    quote:
      "I love the diverse opportunities available at our school. From robotics competitions to drama productions, there's something for everyone to discover their passion and excel.",
  },
]

export default function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

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

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section id="testimonials" className={styles.testimonialsSection} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title}>What Our Community Says</h2>

        <div className={styles.testimonialSlider}>
          <button className={styles.navButton} onClick={prevTestimonial} aria-label="Previous testimonial">
            <ChevronLeft size={24} />
          </button>

          <div className={styles.testimonialContainer}>
            {testimonials.map((testimonial, index) => (
              <div
                key={testimonial.id}
                className={`${styles.testimonial} ${index === activeIndex ? styles.active : ""}`}
              >
                <div className={styles.quoteIcon}>"</div>
                <p className={styles.quote}>{testimonial.quote}</p>
                <div className={styles.author}>
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className={styles.authorImage}
                  />
                  <div className={styles.authorInfo}>
                    <h4 className={styles.authorName}>{testimonial.name}</h4>
                    <p className={styles.authorRole}>{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button className={styles.navButton} onClick={nextTestimonial} aria-label="Next testimonial">
            <ChevronRight size={24} />
          </button>
        </div>

        <div className={styles.indicators}>
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`${styles.indicator} ${index === activeIndex ? styles.active : ""}`}
              onClick={() => setActiveIndex(index)}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}


"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import styles from "@/styles/testimonials-section.module.css"

const testimonials = [
  {
    id: 1,
    name: "Ravi Deshmukh",
    role: "Parent",
    quote:
      "Priyadarshani School has been an amazing experience for my child. The teachers are incredibly supportive, and the school's focus on holistic development has truly helped my child grow both academically and emotionally.",
  },
  {
    id: 2,
    name: "Anita Patil",
    role: "Parent",
    quote:
      "As a parent, I am extremely happy with the quality of education my child receives at Priyadarshani School. The nurturing environment and the individual attention my child gets have played a huge role in their success.",
  },
  {
    id: 3,
    name: "Sunil Joshi",
    role: "Parent",
    quote:
      "The leadership at Priyadarshani School is outstanding. They prioritize both academics and character building, preparing students for challenges in life beyond the classroom.",
  },
  {
    id: 4,
    name: "Pooja Kulkarni",
    role: "Parent",
    quote:
      "I am proud to have my child enrolled at Priyadarshani School. The teachers go above and beyond to help students not only learn but also develop essential life skills.",
  },
  {
    id: 5,
    name: "Rajesh Pawar",
    role: "Parent",
    quote:
      "My child has flourished in the positive and encouraging atmosphere at Priyadarshani School. The commitment to providing a well-rounded education has truly made a difference in their academic journey.",
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
        <h2 className={styles.title}>Parent review</h2>

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
                  {/* <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={60}
                    height={60}
                    className={styles.authorImage}
                  /> */}
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


"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import styles from "@/styles/contact-section.module.css"

export default function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  const sectionRef = useRef<HTMLElement>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitMessage("Thank you for your message! We will get back to you soon.")
      setFormState({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      // Clear success message after 5 seconds
      setTimeout(() => {
        setSubmitMessage("")
      }, 5000)
    }, 1500)
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

  return (
    <section id="contact" className={styles.contactSection} ref={sectionRef}>
      <div className={styles.container}>
        <h2 className={styles.title}>Get In Touch</h2>
        <p className={styles.subtitle}>Have questions or want to learn more about our programs? Reach out to us!</p>

        <div className={styles.contactContent}>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <Mail className={styles.infoIcon} />
              <div>
                <h3 className={styles.infoTitle}>Email Us</h3>
              
                <p className={styles.infoText}>priyadarshanischool@gmail.com</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <Phone className={styles.infoIcon} />
              <div>
                <h3 className={styles.infoTitle}>Call Us</h3>
                <p className={styles.infoText}>+91 89567 88450 </p>
                <p className={styles.infoText}>+91 70660 64189</p>
              </div>
            </div>

            <div className={styles.infoItem}>
              <MapPin className={styles.infoIcon} />
              <div>
                <h3 className={styles.infoTitle}>Visit Us</h3>
                <p className={styles.infoText}>Priyadarshani School,Bhosari</p>
                <p className={styles.infoText}>Bhosari-413171</p>
              </div>
            </div>

            <div className={styles.hours}>
              <h3 className={styles.hoursTitle}>Office Hours</h3>
              <p className={styles.hoursText}>Monday - Friday: 8:00 AM - 5:00 PM</p>
              <p className={styles.hoursText}>Saturday: 9:00 AM - 1:00 PM</p>
              <p className={styles.hoursText}>Sunday: Closed</p>
            </div>
          </div>

          <form className={styles.contactForm} onSubmit={handleSubmit}>
            <div className={styles.formGroup}>
              <label htmlFor="name" className={styles.label}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formState.name}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="sunrayztechnology4@gmail.com" className={styles.label}>
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formState.email}
                onChange={handleChange}
                required
                className={styles.input}
              />
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="subject" className={styles.label}>
                Subject
              </label>
              <select
                id="subject"
                name="subject"
                value={formState.subject}
                onChange={handleChange}
                required
                className={styles.select}
              >
                <option value="">Select a subject</option>
                <option value="admission">Admission Inquiry</option>
                <option value="program">Program Information</option>
                <option value="visit">Schedule a Visit</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.formGroup}>
              <label htmlFor="message" className={styles.label}>
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formState.message}
                onChange={handleChange}
                required
                rows={5}
                className={styles.textarea}
              ></textarea>
            </div>

            <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
              <Send size={16} className={styles.submitIcon} />
            </button>

            {submitMessage && <div className={styles.formMessage}>{submitMessage}</div>}
          </form>
        </div>
      </div>
    </section>
  )
}


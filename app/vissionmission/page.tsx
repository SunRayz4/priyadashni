import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import { Eye, Target } from "lucide-react" // Import Lucide icons
import styles from "@/styles/visionMission.module.css" // Import the CSS file

export default function VisionMission() {
  return (
    <div>
      {/* Render the Navbar */}
      <Navbar />

      {/* Wrapper div to manage spacing */}
      <div className={styles.contentWrapper}>
        {/* Main Heading */}
        <h1 className={styles.mainHeading}>Vision & Mission</h1>

        {/* Vision & Mission Cards */}
        <div className={styles.cardsContainer}>
          {/* Vision Card */}
          <div className={`${styles.card} ${styles.visionCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <Eye size={40} color="#007bff" />
              </div>
              <h2>Vision</h2>
              <p>
                We understand a child’s perspective on the Heart, the world today is different compared to that of our parents. Children today don’t have a carefree life like their parents. They are more confined to technology, social media, video games, and television. We educate our children to express & nurture positive emotions, and to express the wonderful qualities of their hearts. We mentor them to be successful and make this world a happy place. We understand that children have a big future if their heart is used to their fullest potential. Though the heart is the size of a fist, we know that it is larger than the whole world. It’s our mission to bring global coherence by bringing coherence to the hearts & minds of our children.
              </p>
            </div>
          </div>

          {/* Mission Card */}
          <div className={`${styles.card} ${styles.missionCard}`}>
            <div className={styles.cardContent}>
              <div className={styles.cardIcon}>
                <Target size={40} color="#007bff" />
              </div>
              <h2>Mission</h2>
              <p>
                Liberating mankind from ignorance, from dependency and from the exploitation by others, which eventually will give birth to human civilization. The purpose of education is humanity itself. Education is about values, instilling and creating awareness of human values.
                We believe that “The highest education is that, which does not merely give us information but makes our life in harmony with all existence” rightly said by Rabindranath Tagore.
                The purpose of Education is not to produce beggars, begging for jobs. It is not for making a living alone, but to live a life benefiting human dignity. Education is for life, to live life fully and glorify all life.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Render the Footer */}
      <Footer />
    </div>
  );
}

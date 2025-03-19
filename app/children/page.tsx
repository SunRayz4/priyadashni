import React from "react";
import styles from "@/styles/children.module.css"; // Update to children.module.css
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Page() {
  return (
    <>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.heading}>Children</h1>

        {/* Content with images */}
        <div className={styles.contentWrapper}>
          {/* First paragraph with image on the left */}
          <div className={styles.row}>
            <div className={styles.imageWrapper}>
              <img
                src="https://images.pexels.com/photos/764681/pexels-photo-764681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" // Replace with your actual image
                alt="Image 1"
                className={styles.childImage}
              />
            </div>
            <div className={styles.content}>
              <p className={styles.paragraph}>
                We believe that Children's mind is innocent and pure. Each child is a white marble for the teacher and
                the parents to mould into an image of God, a bud to be helped to blossom in all its Divine glory so that
                it becomes a worthy offering to God.
              </p>
            </div>
          </div>

          {/* Second paragraph with image on the right */}
          <div className={styles.row}>
            <div className={styles.content}>
              <p className={styles.paragraph}>
                A sapling can be helped to grow straight, but once it becomes a tree it cannot be guided in its growth.
                Children must grow in the awareness of the brotherhood of man and the fatherhood of God.
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <img
               src="https://static.theprint.in/wp-content/uploads/2022/12/ind-1024x576.jpg"
                // Replace with your actual image
                alt="Image 2"
                className={styles.childImage}
              />
            </div>
          </div>

          {/* Third paragraph with image on the left */}
          <div className={styles.row}>
            <div className={styles.imageWrapper}>
              <img
                src="https://st2.depositphotos.com/1961409/9090/i/950/depositphotos_90903680-stock-photo-indian-school-girls.jpg" // Replace with your actual image
                alt="Image 3"
                className={styles.childImage}
              />
            </div>
            <div className={styles.content}>
              <p className={styles.paragraph}>
                Children must grow up in the atmosphere of reverence, devotion, mutual service, and co-operation.
              </p>
            </div>
          </div>

          {/* Fourth paragraph with image on the right */}
          <div className={styles.row}>
            <div className={styles.content}>
              <p className={styles.paragraph}>
                Children generally are good by nature and willing to do their duty and shine well in studies. The cause
                of the vagaries, waywardness and occasional indiscipline lies with the elders who set poor examples of
                truth and self-control.
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <img
                src="https://www.orissapost.com/wp-content/uploads/2019/03/indian-students.jpg" // Replace with your actual image
                alt="Image 4"
                className={styles.childImage}
              />
            </div>
          </div>

          {/* Fifth paragraph with image on the left */}
          <div className={styles.row}>
            <div className={styles.imageWrapper}>
              <img
                src="https://img.freepik.com/premium-photo/indian-school-students-group-sitting-classroom_130568-392.jpg?w=360"
                alt="Image 5"
                className={styles.childImage}
              />
            </div>
            <div className={styles.content}>
              <p className={styles.paragraph}>
                From the most impressionable years, the children should be taught to cultivate love for all. Love leads
                to unity. Unity promotes purity. Purity leads to Divinity.
              </p>
            </div>
          </div>

          {/* Sixth paragraph with image on the right */}
          <div className={styles.row}>
            <div className={styles.content}>
              <p className={styles.paragraph}>
                The first requisite for children is to have love and regard for parents to whom they owe everything. Let
                the children, even grown-up boys and girls, touch the feet of their father and mother, every morning
                before the daily tasks are started.
              </p>
            </div>
            <div className={styles.imageWrapper}>
              <img
                src="https://www.brookings.edu/wp-content/uploads/2021/08/CUE_ed-tech_ADB-blog.jpg" // Replace with your actual image
                alt="Image 6"
                className={styles.childImage}
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

// "use client";

// import { useState, useEffect, useRef } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import styles from "@/styles/branches.module.css";

// const branchData = [
//   {
//     id: 1,
//     location: "Branch 1",
//     image: "https://tse2.mm.bing.net/th?id=OIP.7A3vd8DScuONmyL2xTcSIQHaD_&pid=Api&P=0&h=180",
//   },
//   {
//     id: 2,
//     location: "Branch 2",
//     image: "https://tse2.mm.bing.net/th?id=OIP.oftQxCU699LhsGtkAAtYwAHaE7&pid=Api&P=0&h=180",
//   },
//   {
//     id: 3,
//     location: "Branch 3",
//     image: "https://whlc-architecture.s3.amazonaws.com/images/projects/14-048-international-school/_projectLandscape2/School-exterior-2-F-Enlarged-sign.jpg?mtime=20180906225412&focal=none&tmtime=20210702103922",
//   },
//   {
//     id: 4,
//     location: "Branch 4",
//     image: "https://tse1.mm.bing.net/th?id=OIP.7zkMh1BVdAJrjzkSV4inEQAAAA&pid=Api&P=0&h=180",
//   },
//   {
//     id: 5,
//     location: "Branch 5",
//     image: "https://tse1.mm.bing.net/th?id=OIP.9rYAw7pW3111QNP1y_n7YwHaE7&pid=Api&P=0&h=180",
//   },
//   {
//     id: 6,
//     location: "Branch 6",
//     image: "https://tse2.mm.bing.net/th?id=OIP.d5HGxFCnghItDG8_XF9dAQHaEK&pid=Api&P=0&h=180",
//   },
// ];

// export default function Branches() {
//   const [activeIndex, setActiveIndex] = useState(0); // To track the current set of images displayed.
//   const totalImages = branchData.length;
//   const sectionRef = useRef(null);

//   // Move to next set of images
//   const nextSet = () => {
//     if (activeIndex < Math.ceil(totalImages / 3) - 1) {
//       setActiveIndex((prev) => prev + 1);
//     }
//   };

//   // Move to previous set of images
//   const prevSet = () => {
//     if (activeIndex > 0) {
//       setActiveIndex((prev) => prev - 1);
//     }
//   };

//   // Get the transform value based on the active index
//   const getTransformValue = () => {
//     return `translateX(-${activeIndex * 100}%)`;
//   };

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(styles.visible);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );

//     const section = sectionRef.current;
//     if (section) {
//       observer.observe(section);
//     }

//     return () => {
//       if (section) {
//         observer.unobserve(section);
//       }
//     };
//   }, []);

//   return (
//     <section className={styles.container} ref={sectionRef}>
//       <h1 className={styles.heading}>Our School Branches</h1>

//       {/* Wrapper for the images */}
//       <div
//         className={styles.cardsWrapper}
//         style={{ transform: getTransformValue() }}
//       >
//         {branchData.map((branch, index) => {
//           // Only display images in the range for the current set
//           if (index >= activeIndex * 3 && index < (activeIndex + 1) * 3) {
//             return (
//               <div key={branch.id} className={styles.card}>
//                 <Image
//                   src={branch.image}
//                   alt={branch.location}
//                   width={400} // Adjust the width
//                   height={300} // Adjust the height
//                   className={styles.branchImage}
//                   layout="intrinsic"
//                 />
//                 <p className={styles.locationName}>{branch.location}</p>
//               </div>
//             );
//           }
//           return null; // Don't render the image if it's not in the current set
//         })}
//       </div>

//       {/* Navigation buttons */}
//       <div className={styles.navigationButtons}>
//         <button
//           className={styles.navButton}
//           onClick={prevSet}
//           disabled={activeIndex === 0}
//           aria-label="Previous set of branches"
//         >
//           <ChevronLeft size={24} />
//         </button>

//         <button
//           className={styles.navButton}
//           onClick={nextSet}
//           disabled={activeIndex === Math.ceil(totalImages / 3) - 1}
//           aria-label="Next set of branches"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>
//     </section>
//   );
// }
// "use client";

// import { useState, useEffect } from "react";
// import Image from "next/image";
// import { ChevronLeft, ChevronRight } from "lucide-react";
// import styles from "@/styles/branches.module.css";

// const branchData = [
//   {
//     id: 1,
//     location: "Branch 1",
//     image: "https://tse2.mm.bing.net/th?id=OIP.7A3vd8DScuONmyL2xTcSIQHaD_&pid=Api&P=0&h=180",
//   },
//   {
//     id: 2,
//     location: "Branch 2",
//     image: "https://tse2.mm.bing.net/th?id=OIP.oftQxCU699LhsGtkAAtYwAHaE7&pid=Api&P=0&h=180",
//   },
//   {
//     id: 3,
//     location: "Branch 3",
//     image: "https://whlc-architecture.s3.amazonaws.com/images/projects/14-048-international-school/_projectLandscape2/School-exterior-2-F-Enlarged-sign.jpg?mtime=20180906225412&focal=none&tmtime=20210702103922",
//   },
//   {
//     id: 4,
//     location: "Branch 4",
//     image: "https://tse1.mm.bing.net/th?id=OIP.7zkMh1BVdAJrjzkSV4inEQAAAA&pid=Api&P=0&h=180",
//   },
//   {
//     id: 5,
//     location: "Branch 5",
//     image: "https://tse1.mm.bing.net/th?id=OIP.9rYAw7pW3111QNP1y_n7YwHaE7&pid=Api&P=0&h=180",
//   },
//   {
//     id: 6,
//     location: "Branch 6",
//     image: "https://tse2.mm.bing.net/th?id=OIP.d5HGxFCnghItDG8_XF9dAQHaEK&pid=Api&P=0&h=180",
//   },
// ];

// export default function Branches() {
//   const [activeIndex, setActiveIndex] = useState(0); // To track the current set of images
//   const totalImages = branchData.length;
//   const imagesPerSet = 3; // Show 3 images per set

//   // Go to the next set of images
//   const nextSet = () => {
//     if (activeIndex < Math.ceil(totalImages / imagesPerSet) - 1) {
//       setActiveIndex(activeIndex + 1);
//     }
//   };

//   // Go to the previous set of images
//   const prevSet = () => {
//     if (activeIndex > 0) {
//       setActiveIndex(activeIndex - 1);
//     }
//   };

//   useEffect(() => {
//     const section = document.querySelector(".container");
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add(styles.visible);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );
//     if (section) observer.observe(section);

//     return () => {
//       if (section) observer.unobserve(section);
//     };
//   }, []);

//   return (
//     <section className={styles.container}>
//       <h1 className={styles.heading}>Our School Branches</h1>

//       {/* Wrapper for the images */}
//       <div className={styles.cardsWrapper}>
//         {branchData.map((branch, index) => {
//           // Show images based on the active index (pagination)
//           if (index >= activeIndex * imagesPerSet && index < (activeIndex + 1) * imagesPerSet) {
//             return (
//               <div key={branch.id} className={styles.card}>
//                 <Image
//                   src={branch.image}
//                   alt={branch.location}
//                   width={400}
//                   height={300}
//                   className={styles.branchImage}
//                 />
//                 <p className={styles.locationName}>{branch.location}</p>
//               </div>
//             );
//           }
//           return null; // Don't render the image if it's not in the current set
//         })}
//       </div>

//       {/* Navigation buttons */}
//       <div className={styles.navigationButtons}>
//         <button
//           className={styles.navButton}
//           onClick={prevSet}
//           disabled={activeIndex === 0}
//           aria-label="Previous set of branches"
//         >
//           <ChevronLeft size={24} />
//         </button>
//         <button
//           className={styles.navButton}
//           onClick={nextSet}
//           disabled={activeIndex === Math.ceil(totalImages / imagesPerSet) - 1}
//           aria-label="Next set of branches"
//         >
//           <ChevronRight size={24} />
//         </button>
//       </div>
//     </section>
//   );
// }
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import styles from "@/styles/branches.module.css";

const branchData = [
  {
    id: 1,
    location: "Branch 1",
    image: "https://tse2.mm.bing.net/th?id=OIP.7A3vd8DScuONmyL2xTcSIQHaD_&pid=Api&P=0&h=180",
  },
  {
    id: 2,
    location: "Branch 2",
    image: "https://tse2.mm.bing.net/th?id=OIP.oftQxCU699LhsGtkAAtYwAHaE7&pid=Api&P=0&h=180",
  },
  {
    id: 3,
    location: "Branch 3",
    image: "https://whlc-architecture.s3.amazonaws.com/images/projects/14-048-international-school/_projectLandscape2/School-exterior-2-F-Enlarged-sign.jpg?mtime=20180906225412&focal=none&tmtime=20210702103922",
  },
  {
    id: 4,
    location: "Branch 4",
    image: "https://tse1.mm.bing.net/th?id=OIP.7zkMh1BVdAJrjzkSV4inEQAAAA&pid=Api&P=0&h=180",
  },
  {
    id: 5,
    location: "Branch 5",
    image: "https://tse1.mm.bing.net/th?id=OIP.9rYAw7pW3111QNP1y_n7YwHaE7&pid=Api&P=0&h=180",
  },
  {
    id: 6,
    location: "Branch 6",
    image: "https://tse2.mm.bing.net/th?id=OIP.d5HGxFCnghItDG8_XF9dAQHaEK&pid=Api&P=0&h=180",
  },
];

export default function Branches() {
  const [activeIndex, setActiveIndex] = useState(0); // To track the current set of images
  const totalImages = branchData.length;
  const imagesPerSet = 3; // Show 3 images per set

  // Go to the next set of images
  const nextSet = () => {
    if (activeIndex < Math.ceil(totalImages / imagesPerSet) - 1) {
      setActiveIndex(activeIndex + 1);
    }
  };

  // Go to the previous set of images
  const prevSet = () => {
    if (activeIndex > 0) {
      setActiveIndex(activeIndex - 1);
    }
  };

  useEffect(() => {
    const section = document.querySelector(".container");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add(styles.visible);
          }
        });
      },
      { threshold: 0.1 }
    );
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section className={styles.container}>
      <h1 className={styles.heading}>Our Branches</h1>

      {/* Wrapper for the images */}
      <div className={styles.cardsWrapper}>
        {branchData.map((branch, index) => {
          // Show images based on the active index (pagination)
          if (index >= activeIndex * imagesPerSet && index < (activeIndex + 1) * imagesPerSet) {
            return (
              <div key={branch.id} className={`${styles.card} ${styles.visible}`}>
                <Image
                  src={branch.image}
                  alt={branch.location}
                  width={400}
                  height={300}
                  className={styles.branchImage}
                />
                <p className={styles.locationName}>{branch.location}</p>
              </div>
            );
          }
          return null; // Don't render the image if it's not in the current set
        })}
      </div>

      {/* Navigation buttons */}
      <div className={styles.navigationButtons}>
        <button
          className={styles.navButton}
          onClick={prevSet}
          disabled={activeIndex === 0}
          aria-label="Previous set of branches"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          className={styles.navButton}
          onClick={nextSet}
          disabled={activeIndex === Math.ceil(totalImages / imagesPerSet) - 1}
          aria-label="Next set of branches"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </section>
  );
}

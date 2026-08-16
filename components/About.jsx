import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import { motion } from "motion/react";

const About = ({ isDarkMode }) => {
  return (
    <motion.div
      id="about"
      className="w-full px-[12%] py-10 scroll-mt-20"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      {/* Section Heading */}
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mb-2 text-lg font-ovo"
      >
        Introduction
      </motion.h4>

      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        viewport={{ once: true }}
        className="text-center text-5xl font-ovo"
      >
        About Me
      </motion.h2>

      {/* About Content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="w-full flex justify-center my-20"
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl flex flex-col items-center text-center"
        >
          {/* Description */}
          <p className="max-w-3xl mx-auto mb-10 font-ovo text-gray-700 dark:text-white/80">
            I’m a passionate Full Stack Web Developer with a strong interest
            in building modern, responsive, and user-friendly web
            applications. I enjoy turning ideas into practical digital
            solutions and continuously improving my skills by working with new
            technologies and real-world projects.
          </p>

          {/* Information Cards */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
            className="w-full grid grid-cols-1 sm:grid-cols-3 gap-6"
          >
            {infoList.map(
              ({ icon, iconDark, title, description }, index) => (
                <motion.li
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer
                  hover:bg-lightHover hover:-translate-y-1 duration-500
                  hover:shadow-black
                  dark:border-white/50
                  dark:hover:shadow-white
                  dark:hover:bg-darkHover/50"
                >
                  <Image
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                    className="w-7 mx-auto mt-3"
                  />

                  <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
                    {title}
                  </h3>

                  <p className="text-gray-600 text-sm dark:text-white/80">
                    {description}
                  </p>
                </motion.li>
              )
            )}
          </motion.ul>

          {/* Tools Heading */}
          <motion.h4
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            viewport={{ once: true }}
            className="my-8 text-gray-700 font-ovo dark:text-white/80"
          >
            Tools I use
          </motion.h4>

          {/* Tools */}
          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center items-center gap-3 sm:gap-5"
          >
            {toolsData.map((tool, index) => (
              <motion.li
                key={index}
                whileHover={{ scale: 1.1 }}
                className="flex items-center justify-center w-12 sm:w-14 aspect-square
                border border-gray-400 rounded-lg cursor-pointer
                hover:-translate-y-1 duration-500
                dark:border-white/50"
              >
                <Image
                  src={tool}
                  alt="Tool"
                  className="w-5 sm:w-7"
                />
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default About;




































// import { assets, infoList, toolsData } from "@/assets/assets";
// import Image from "next/image";
// import React from "react";
// import { motion } from "motion/react";

// const About = ({ isDarkMode }) => {
//   return (
//     <motion.div
//       id="about"
//       className="w-full px-[12%] py-10 scroll-mt-20"
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1 }}
//     >
//       <motion.h4
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.3 }}
//         className="text-center mb-2 text-lg font-ovo"
//       >
//         Introduction
//       </motion.h4>
//       <motion.h2
//         initial={{ opacity: 0, y: -20 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5, delay: 0.5 }}
//         className="text-center text-5xl font-ovo"
//       >
//         About Me
//       </motion.h2>

//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ duration: 0.8 }}
//         className="flex w-full flex-col lg:flex-row items-center gap-20 my-20"
//       >
//         {/* <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.6 }}
//           className="w-64 sm:w-80 rounded-3xl max-w-none"
//         >
//           <Image
//             src={assets.user_image}
//             alt="user"
//             className="w-full rounded-3xl"
//           />
//         </motion.div> */}

//         <motion.div
//           initial={{ opacity: 0 }}
//           whileInView={{ opacity: 1 }}
//           transition={{ duration: 0.6, delay: 0.8 }}
//           // className="flex-1"
//           className="flex items-center"
//         >
//           <p className="mb-10 max-w-2xl font-ovo">
//             I’m a passionate Full Stack Web Developer with a strong interest in
//             building modern, responsive, and user-friendly web applications. I
//             enjoy turning ideas into practical digital solutions and
//             continuously improving my skills by working with new technologies
//             and real-world projects.
//           </p>
//           <motion.ul
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.8, delay: 1 }}
//             className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl"
//           >
//             {infoList.map(({ icon, iconDark, title, description }, index) => (
//               <motion.li
//                 whileHover={{ scale: 1.05 }}
//                 className="border-[0.5px] border-gray-400 rounded-xl p-6 cursor-pointer hover:bg-lightHover hover:-translate-y-1
//                  duration-500 hover:shadow-black dark:border-white dark:hover:shadow-white dark:hover:bg-darkHover/50"
//                 key={index}
//               >
//                 <Image
//                   src={isDarkMode ? iconDark : icon}
//                   alt={title}
//                   className="w-7 mt-3"
//                 />
//                 <h3 className="my-4 font-semibold text-gray-700 dark:text-white">
//                   {title}
//                 </h3>
//                 <p className="text-gray-600 text-sm dark:text-white/80">
//                   {description}
//                 </p>
//               </motion.li>
//             ))}
//           </motion.ul>
//           <motion.h4
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 1.3, delay: 0.5 }}
//             className="my-6 text-gray-700 font-ovo dark:text-white/80"
//           >
//             Tools I use
//           </motion.h4>

//           <motion.ul
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.6, delay: 1.5 }}
//             className="flex items-center gap-3 sm:gap-5"
//           >
//             {toolsData.map((tool, index) => (
//               <motion.li
//                 whileHover={{ scale: 1.1 }}
//                 className="flex items-center justify-center w-12 sm:w-14 aspect-square border border-gray-400 rounded-lg cursor-pointer 
//                 hover:-translate-y-1 duration-500"
//                 key={index}
//               >
//                 <Image src={tool} alt="Tool" className="w-5 sm:w-7" />
//               </motion.li>
//             ))}
//           </motion.ul>
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// };

// export default About;

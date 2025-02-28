// import React from "react";

// const About: React.FC = () => {
//   return (
//     <div className="container mx-auto p-6">
//       <h1 className="text-4xl font-bold text-gray-800">About Me</h1>
//       <p className="text-lg mt-4">
//         Hi, I'm Nzelue David, a passionate web developer with a focus on creating seamless, responsive, and user-friendly websites. With years of experience in HTML, CSS, JavaScript, and frameworks like React and Node.js, I build websites that prioritize both aesthetics and performance.
//       </p>
//       <p className="text-lg mt-2">
//         When I’m not coding, you can find me exploring the latest web design trends or honing my skills in graphic design. I'm always eager to learn new tools and techniques that enhance my work.
//       </p>
//     </div>
//   );
// };

// export default About;


import React from "react";

const About: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">About Me</h1>
      <p className="text-lg text-gray-700 font-sans max-w-3xl leading-relaxed">
        Hi, I'm <span className="font-bold">Nzelue David</span>, Hello! I’m Nzelue David, a passionate frontend web developer dedicated to crafting visually appealing, user-friendly, and high-performance websites. My expertise lies in HTML, CSS, JavaScript, React, and Node.js, and I thrive on turning creative ideas into functional digital experiences.
      </p>
      <p className="text-lg text-gray-700 font-sans max-w-3xl leading-relaxed mt-4">
      With a strong focus on clean, maintainable code and responsive design, I build websites that not only look great but also offer seamless user interactions. Whether it's developing modern UI components, optimizing website performance, or implementing engaging animations, I am committed to delivering top-notch solutions.
      </p>
      <p className="text-lg text-gray-700 font-sans max-w-3xl leading-relaxed mt-4">
      Beyond coding, I love exploring the latest web technologies, UI/UX trends, and enhancing my skills in graphic design. My goal is to stay ahead of the curve, continuously learning and improving to create impactful digital products.
      </p>
      <p className="text-lg text-gray-700 font-sans max-w-3xl leading-relaxed mt-4">
      I'm always open to collaborating on exciting projects, so feel free to connect with me! Let's build something amazing together. 🚀
      </p>
    </div>
  );
};

export default About;


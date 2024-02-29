import React from "react";
import HTML from "../../assets/html.svg";

function Skills() {
  return (
    <div className="gap-2 mt-10 ml-10 flex flex-col ">
      {/* <img src={HTML} alt="" /> */}
      <p className="font-bold dark:text-white text-black mt-2">
        <span className="text-orange-500">Languages: </span>HTML, CSS,
        JavaScript
      </p>
      <p className="font-bold dark:text-white text-black">
        <span className="text-orange-500">Frameworks/Library: </span>Reactjs,
        Tailwind CSS
      </p>
      <p className="font-bold dark:text-white text-black">
        <span className="text-orange-500">State Management:</span> Redux,
        Context API
      </p>
      <p className="font-bold dark:text-white text-black">
        <span className="text-orange-500">Version Control & IDE: </span>Git,
        GitHub, VS Code
      </p>

      <p className="font-bold dark:text-white text-black">
        <span className="text-orange-500">Cour Subjects: </span>Database and
        Management Systems, Object Oriented Programming, Operating Systems,
        Computer Networks, Data Structures, and Algorithms
      </p>
    </div>
  );
}

export default Skills;

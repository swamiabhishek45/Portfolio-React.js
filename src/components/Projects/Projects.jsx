import React from "react";
import Card from "./Card";
import P1 from '../../assets/P1.png'

function Projects() {
  return (
    <>
      <div className="dark:bg-gray-800">
        <div className="flex  justify-center items-center p-8 h-full mx-auto">
          <h1 className="text-4xl dark:text-white  font-bold">My Projects</h1>
        </div>
        <div className="flex flex-wrap gap-14 justify-center md:justify-start md:mx-auto py-6 sm:py-0 w-full max-w-screen-lg  dark:bg-gray-800 ">
          <Card
            // img={P1}
            src={
              "https://cdn.wedevs.com/uploads/2021/04/Best-project-management-software-for-web-designers.png"
            }
            name="Demo Project"
            desc="This is simple demo project"
            T1="#HTML"
            T2="#CSS"
            T3="#JavaScript"
            btn="Get Code"
          />
          <Card
            // img={P1}
            src={
              "https://www.elegantthemes.com/blog/wp-content/uploads/2020/06/best-project-management-platforms-featured-image-scaled.jpg"
            }
            name="Demo Project"
            desc="This is simple demo project"
            T1="#HTML"
            T2="#CSS"
            T3="#JavaScript"
            btn="Get Code"
          />
          <Card
            img={P1}
            src={
              "https://sm.pcmag.com/pcmag_uk/guide/t/the-best-p/the-best-project-management-software-for-2024_6nd6.jpg"
            }
            name="Demo Project"
            desc="This is simple demo project"
            T1="#HTML"
            T2="#CSS"
            T3="#JavaScript"
            btn="Get Code"
          />
          <Card
            img={P1}
            src={
              "https://cdn.technologyadvice.com/wp-content/uploads/2021/09/What-is-a-Project-Management-System-700x408-png.jpg"
            }
            name="Demo Project"
            desc="This is simple demo project"
            T1="#HTML"
            T2="#CSS"
            T3="#JavaScript"
            btn="Get Code"
          />
          <Card
            img={P1}
            src={
              "https://www.elegantthemes.com/blog/wp-content/uploads/2019/10/project-management-featured-image.jpg"
            }
            name="Demo Project"
            desc="This is simple demo project"
            T1="#HTML"
            T2="#CSS"
            T3="#JavaScript"
            btn="Get Code"
          />
        </div>
      </div>
    </>
  );
}

export default Projects;

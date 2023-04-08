import React, { useContext } from "react";
import "./StartupProjects.scss";
import { bigProjects } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

import githubSvg from "../../assets/images/github-mark.svg";
import presentationSvg from "../../assets/images/presentation.svg";
import reportSvg from "../../assets/images/report.svg";
import webSvg from "../../assets/images/website.svg";

const GetDescBullets = ({ descBullets, isDark }) => {
  return descBullets
    ? descBullets.map((item, i) => (
      <li
        key={i}
        className={isDark ? "subTitle dark-mode-text" : "subTitle"}
      >
        {item}
      </li>
    ))
    : null;
};
export default function StartupProject() {
  function openUrlInNewTab(url) {
    if (!url) {
      return;
    }
    var win = window.open(url, "_blank");
    win.focus();
  }

  const { isDark } = useContext(StyleContext);
  if (!bigProjects.display) {
    return null;
  }
  return (
    // <Fade bottom duration={1000} distance="20px">
      <div className="w-11/12 max-w-screen-2xl p-0.5 m-24" id="projects">
        <div>
          <h1 className="text-5xl my-4">{bigProjects.title}</h1>

          <div className="flex flex-wrap justify-between">
            {bigProjects.projects.map((project, i) => {
              return (
                <div
                  key={i}
                  style={{width:"49%"}}
                  className={
                    isDark
                      ? "project-card-dark dark-mode flex flex-col p-6 rounded-xl border-teal-800 justify-center h-fit my-4"
                      : "project-card-light flex flex-col p-6 rounded-xl border-teal-800 justify-center h-fit my-4"
                  }
                >
                  {project.image ? (
                    <div className="py-2 px-20 flex justify-center">
                      <img
                        src={project.image}
                        alt={project.projectName}
                        className="h-56 w-11/12 max-w-2xl"
                        // style={{width:"auto"}}
                      ></img>
                    </div>
                  ) : null}
                  <div className="project-detail">
                    <h5
                      className={isDark ? "dark-mode text-2xl my-4 font-bold" : "text-2xl my-4 font-bold"}
                    >
                      {project.projectName}
                    </h5>
                    <ul style={{ "text-align": "justify" }} className="list-disc m-6 text-base h-36">
                      <GetDescBullets descBullets={project.bullets} isDark={isDark} />
                    </ul>
                    <div className="flex justify-evenly m-2">
                      {project.report ? (
                        <a
                          href={project.report}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={reportSvg} className="w-8"></img>
                        </a>
                      ) : null}
                      {project.presentation ? (
                        <a
                          href={project.presentation}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={presentationSvg} className="w-8"></img>
                        </a>
                      ) : null}
                      {project.github ? (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={githubSvg} className="w-8"></img>
                        </a>
                      ) : null}
                      {project.website ? (
                        <a
                          href={project.website}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img src={webSvg} className="w-8"></img>
                        </a>
                      ) : null}
                    </div>
                    {
                      project.technologies ? (
                      <div className="flex flex-wrap justify-center h-24 my-6 text-base">
                        {project.technologies.map((item, i) => (
                          <span key= {i} className="bg-purple-900 p-1 px-4 rounded-xl m-2 h-8 flex items-center">{item}</span>
                        ))}
                      </div>) : null
                    }

                  
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    // </Fade>
  );
}

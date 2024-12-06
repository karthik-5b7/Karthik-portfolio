import styles from "./ProjectStyles.module.css";
import web from "../../assets/web2.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import teenTurtles from "../../assets/Teen-Turtles.jpg";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={web}
          link={"https://github.com/Karthik-Mopidevi/final-year-project"}
          h3={"Medicinal Plant Identification"}
          p="Web Application"
        />
        <ProjectCard
          src={freshBurger}
          link={"https://github.com/Karthik-Mopidevi/john-tourism"}
          h3={"Tourism Website"}
          p="Web Application"
        />
        <ProjectCard
          src={hipsster}
          link={"https://github.com/Karthik-Mopidevi/Portfolio"}
          h3={"Portfolio"}
          p="Web Application using react"
        />
        <ProjectCard
          src={teenTurtles}
          link={"https://github.com/Karthik-Mopidevi/Teen-Turtles"}
          h3={"Teen-Turtles"}
          p="Website with HTML,CSS and JavaScript"
        />
      </div>
    </section>
  );
}

export default Projects;

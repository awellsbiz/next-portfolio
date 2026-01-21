// components/Skills.js
import { FaHtml5, FaCss3Alt, FaJs, FaJava, FaNodeJs, FaGit, FaGithub, FaFigma } from 'react-icons/fa';
import { SiTypescript, SiSpring, SiPostman, SiI18Next } from 'react-icons/si';

const skills = [
  { name: 'HTML5', icon: <FaHtml5 /> },
  { name: 'CSS3', icon: <FaCss3Alt /> },
  { name: 'JavaScript', icon: <FaJs /> },
  { name: 'TypeScript', icon: <SiTypescript /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Spring', icon: <SiSpring /> },
  { name: 'NodeJS', icon: <FaNodeJs /> },
  { name: 'Postman', icon: <SiPostman /> },
  { name: 'i18n', icon: <SiI18Next /> },
  { name: 'Git', icon: <FaGit /> },
  { name: 'GitHub', icon: <FaGithub /> },
  { name: 'Figma', icon: <FaFigma /> },
];   

const Skills = () => (
    <section className="bg-neutral-800 p-4 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold mb-4">Skills</h2>
    <div className="flex flex-wrap">
      {skills.map((skill) => (
        <span
          key={skill.name}
          className="badge badge-outline badge-error m-1 flex items-center space-x-2"
        >
          {skill.icon}
          <span>{skill.name}</span>
        </span>
      ))}
    </div>
    </section>
  );
  
  export default Skills;
import React, { useEffect, useState } from 'react';
import './Skills.css';
import { getSkills } from '../queries/getSkills';

import { FaReact, FaNodeJs, FaAws, FaDocker, FaJava, FaPython } from 'react-icons/fa';
import { 
  SiRubyonrails, 
  SiTypescript, 
  SiPostgresql, 
  SiMysql, 
  SiKubernetes, 
  SiGooglecloud, 
  SiSpringboot, 
  SiPhp, 
  SiNetlify, 
  SiHeroku, 
  SiRabbitmq, 
  SiImessage,
  SiTailwindcss,
  SiC,
  SiSharp,
  SiVercel,
  SiGit,
  SiJavascript,
  SiHtml5
} from 'react-icons/si';
import { Skill } from '../types';

const iconMap: { [key: string]: JSX.Element } = {
  // Original names
  SiRubyonrails: <SiRubyonrails />,
  FaNodeJs: <FaNodeJs />,
  SiSpringboot: <SiSpringboot />,
  FaJava: <FaJava />,
  SiPhp: <SiPhp />,
  FaReact: <FaReact />,
  SiTypescript: <SiTypescript />,
  FaAws: <FaAws />,
  FaDocker: <FaDocker />,
  SiPostgresql: <SiPostgresql />,
  SiMysql: <SiMysql />,
  SiKubernetes: <SiKubernetes />,
  SiGooglecloud: <SiGooglecloud />,
  SiHeroku: <SiHeroku />,
  SiNetlify: <SiNetlify />,
  SiRabbitmq: <SiRabbitmq />,
  SiImessage: <SiImessage />,
  
  // Static data names / values
  "React": <FaReact />,
  "Node": <FaNodeJs />,
  "Python": <FaPython />,
  "Java": <FaJava />,
  "Tailwind": <SiTailwindcss />,
  "C": <SiC />,
  "C#": <SiSharp />,
  "Git": <SiGit />,
  "Vercel": <SiVercel />,
  "MySQL": <SiMysql />,
  "PostgreSQL": <SiPostgresql />,
  "HTML&CSS": <SiHtml5 />,
  "JavaScript": <SiJavascript />,
  "TypeScript": <SiTypescript />,
  "Ruby on Rails": <SiRubyonrails />,
  "PHP": <SiPhp />,
  "SpringBoot": <SiSpringboot />,
  "Node.js": <FaNodeJs />,
  "CI/CD": <SiImessage />,
  "Netlify": <SiNetlify />,
  "Heroku": <SiHeroku />,
  "Kubernetes": <SiKubernetes />,
  "GCP": <SiGooglecloud />,
  "AWS": <FaAws />,
  "Docker": <FaDocker />
};

const Skills: React.FC = () => {
  const [skillsData, setSkillsData] = useState<Skill[]>([]);

  useEffect(() => {
    async function fetchSkills() {
      const data = await getSkills();
      setSkillsData(data);
    }
    fetchSkills();
  }, []);

  if (skillsData.length === 0) return <div>Loading...</div>;

  const skillsByCategory = skillsData.reduce((acc: any, skill: any) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {});

  return (
    <div className="skills-page-wrapper">
      <div className="skills-container">
        {Object.keys(skillsByCategory).map((category, index) => (
          <div key={index} className="skill-category-section">
            <div className="category-title-container">
              <h3 className="category-title">{category}</h3>
            </div>
            <div className="skills-flex-grid">
              {skillsByCategory[category].map((skill: any, idx: number) => (
                <div key={idx} className="skill-card">
                  <div className="icon">{iconMap[skill.icon] || <FaReact />}</div>
                  <h3 className="skill-name">{skill.name}</h3>
                  <p className="skill-description">{skill.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

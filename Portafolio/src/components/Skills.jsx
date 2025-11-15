import './Skills.css';

const Skills = () => {
  const mainStack = [
    {
      name: 'MongoDB',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg'
    },
    {
      name: 'Express',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      darkIcon: true
    },
    {
      name: 'React',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'Node.js',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg'
    }
  ];

  const otherSkills = [
    {
      name: 'JavaScript',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg'
    },
    {
      name: 'Java',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg'
    },
    {
      name: 'Python',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg'
    },
    {
      name: 'MySQL',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg'
    },
    {
      name: 'React Native',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg'
    },
    {
      name: 'HTML',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
    },
    {
      name: 'CSS',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg'
    },
    {
      name: 'Git',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg'
    },
    {
      name: 'Docker',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg'
    },
    {
      name: 'Google Cloud',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg'
    },
    {
      name: 'Firebase',
      iconUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg'
    },
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Habilidades Técnicas</h2>
        <p className="skills-subtitle">
          Tecnologías y herramientas con las que trabajo
        </p>
        
        <div className="main-stack-section">
          <h3 className="stack-title">Stack Principal - MERN</h3>
          <div className="main-stack-grid">
            {mainStack.map((skill, index) => (
              <div key={index} className="skill-card main-skill">
                <img 
                  src={skill.iconUrl} 
                  alt={skill.name}
                  className={`skill-icon ${skill.darkIcon ? 'icon-invert' : ''}`}
                />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="other-skills-section">
          <h3 className="stack-title">Otras Tecnologías</h3>
          <div className="other-skills-grid">
            {otherSkills.map((skill, index) => (
              <div key={index} className="skill-card">
                <img 
                  src={skill.iconUrl} 
                  alt={skill.name}
                  className={`skill-icon ${skill.darkIcon ? 'icon-invert' : ''}`}
                />
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;

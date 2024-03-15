import React from 'react'

const Skills = () => {
  return (
    <>
      {skills.map(({title, percentage }, index ) => {
        return (
            <div className="progress__box" key={index}>
                <div className="progress__circle">
                </div>

                <h3 className="skills__ttitle">{title}</h3>
            </div>
        );
      })}
    </>
  );
};

export default Skills;

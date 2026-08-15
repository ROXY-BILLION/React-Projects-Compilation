function Skills() {
    const Skills = ["Javascript", "Css", "React", "Nodejs"]
    return (
        <>
         <div className="skills">
                {Skills.map((skill) => (
                <div key={skill} >
                    <h1>{skill}</h1>
                </div>
            ))}
         </div>
        </>
    )
}
export default Skills;